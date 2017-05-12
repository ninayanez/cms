export default function reqPost (opts, cb) {
  const req = new XMLHttpRequest()
  req.open('POST', opts.uri, true)
  req.setRequestHeader('auth','key=' + opts.key)
  req.setRequestHeader('content-type','application/json;charset=utf8')
  req.onerror = function (e) { cb(e) }
  req.onload = function () { 
    if (req.status === 200) cb(null, req.status) 
    else cb(req.status)
  }
  req.send(JSON.stringify(opts.body))
}
