import _ from 'underscore'
import cuid from 'cuid'
import reqGet from './reqGet.js
import reqPost from './reqPost.js

// save to client id? load ui for each user (using control map?)

// map data to routes - use url to load state or route

// how to use routes? setup data?
reqPost({
  uri: 'http://127.0.0.1:9000',
  key: 'cj2cwde8i0000adofr3uf0kxc',
  body: {
    type: 'put',
    key: 'skeleton',
    value: {
      filters: {
        posts: [1,2,3],
        module: '',
        template: 'post.mustache'
      }
    }
  }
}, (e)=> {
  if (e) console.error(e)
  else console.log('ok!')
})

for (var i=0; i<2; i++) {
  reqPost({
    uri: 'http://127.0.0.1:9000',
    key: 'cj2cwde8i0000adofr3uf0kxc',
    body: {
      type: 'put',
      key: cuid(),
      value: {
        title: 'The post title',
        date: new Date().getTime(),
        body: 'The post content in html?'
      }
    }
  }, (e)=> {
    if (e) console.error(e)
    else console.log('ok!')
  })
}
