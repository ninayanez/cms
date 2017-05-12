const fs = require('fs')
const cuid = require('cuid')
const _ = require('underscore')
const http = require('http')
const level = require('level')
const db = level('./data')

const clients = require('./clients.json')
const dbJsonPath = './data.json'

function dumpJson (filePath) {
  var json = '['
  db.createReadStream({valueEncoding:'json'})
  .on('data', (d) => {
    json += JSON.stringify(d) + ','
  })
  .on('end', () => {
    json = json.slice(0,-1)+']'
    fs.writeFileSync(filePath, json)
  })
}

function onPostReq (req, res) {
  function onPutDel (err) {
    if (err) { res.statusCode = 400; res.end(err.message); return }
    res.statusCode = 200 
    res.end() 
    dumpJson(dbJsonPath)
  }
  req.on('data', (chunk) => { 
    const d = JSON.parse(chunk.toString())
    if (d.type==='del') db.del(d.key, onPutDel)
    if (d.type==='put') db.put(d.key,d.value,{valueEncoding:'json'}, onPutDel)
  })
}

const server = http.createServer((req, res) => {
  if (req.headers.auth && req.method==='POST') { 
    const authKey = req.headers.auth.split('=')[1]
    const client = _.findWhere(clients, {key:authKey})
    if (client) { onPostReq(req,res); return }
    res.statusCode = 400
    res.end()
  } else if (req.url==='/' && req.method==='GET') {
    res.statusCode = 200
    fs.createReadStream(dbJsonPath).pipe(res)
  } else {
    res.statusCode = 400
    res.end()
  }
})

server.listen(9000, '127.0.0.1')
