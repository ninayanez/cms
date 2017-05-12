import  _ from 'underscore'
import router from './router.js'
import reqGet from './reqGet.js'

console.log(reqGet)

var r = null
// implement cache at somepoint
// set localstorage as db or empty obj if !localstorage

window.addEventListener('popstate', (e) => { // history
  r(window.location.pathname)
})

reqGet('http://localhost:8080/data.json', (err, res) => {
  if (err) {console.log(err); return}
  var data = JSON.parse(res)
  var skeleton = _.findWhere(data, {key:'skeleton'})
  data.splice(_.indexOf(data, skeleton),1)
  r = router(data,skeleton)
  r(window.location.pathname)
})
