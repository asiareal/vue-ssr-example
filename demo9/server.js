const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync(resolve('index.template.html'), 'utf-8')

const isProd = process.env.NODE_ENV === 'production'
const context = {
  meta: `
    <meta charset="UTF-8">
  `
}

const createRenderer = (bundle, options) => {
  return createBundleRenderer(bundle, Object.assign(options, {
    template
  }))
}

let renderer
let readyPromise

if(isProd) {
  const serverBundle = require(resolve('dist/vue-ssr-server-bundle.json'))
  const clientManifest = require(resolve('dist/vue-ssr-client-manifest.json'))

  renderer = createRenderer(serverBundle, {
    clientManifest
  })
} else {
  readyPromise = require(resolve('build/setup-dev-server.js'))(server, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}


const render = (req, res) => {
  context.url = req.url
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
}

server.use('/dist', express.static(resolve('./dist')))

server.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res))
})

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
