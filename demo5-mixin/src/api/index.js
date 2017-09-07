// api
export const fetchItem = (id, name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: id, title: name + id})
    }, 1000)
  })
}
