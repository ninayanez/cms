import  _ from 'underscore'
import urls from './urls.js'
import reqGet from './reqGet.js'

var u = null

window.addEventListener('popstate', (e) => { // catch back & forward events
  u(window.location.pathname)
})

reqGet('http://localhost:8080/data.json', (err, res) => { // load data 
  if (err) {console.log(err); return}
  const data = JSON.parse(res)
  var skeleton = _.findWhere(data, {key:'skeleton'})
  data.splice(_.indexOf(data, skeleton),1)

  // init router & load path
  u = urls(data,skeleton)
  u(window.location.pathname)
})
