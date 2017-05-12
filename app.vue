<style lang='stylus'>
#app
  background blue
  margin 0
</style>

<template>
<div id='post'>
  <h1>{{title}}</h1>
  <h4>{{date}}</h4>
  <p>{{body}}</p>
</div>
</template>

<script>
var cuid = require('cuid')
export default {
  props: ['title','body','date'], 
  data: function () {
    return { id:cuid() }
  }
}
</script>
