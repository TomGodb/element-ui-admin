import dashbord from './dashbord'
import network from './network'
import log from './log'
let routesArray = []

let toArray = (pages) => {
  Object.keys(pages).forEach((key) => {
    let obj = pages[key]
    Object.keys(obj).forEach((key) => {
      routesArray.push(obj[key])
    })
  })
}
toArray([dashbord,network,log])

export default routesArray
