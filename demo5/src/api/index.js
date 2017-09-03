// api

export const fetchItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: id, title: 'title-' + id})
    }, 1000)
  })
}
