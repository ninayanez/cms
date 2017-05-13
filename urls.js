import _ from 'underscore'
import Vue from 'vue'

// define skeleton here in json or yml?

var vm = new Vue({
  el: '#app',
  data: {}
})

var db = {}

window.vm = vm

export default function (opts,data) {
  _.each(data,(d) => { db[d.key] = d.value })

  return router
}

function router (path) { // assemble 
  console.log(path)
}
