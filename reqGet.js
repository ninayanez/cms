export default function (uri, cb) {
  var req = new XMLHttpRequest()
  req.open('GET', uri, true)
  req.onerror = function (e) { cb(e) }
  req.onload = function () { 
    if (req.status === 200) cb(null, req.responseText) 
    else cb(req.status+': '+req.responseText)
  }
  req.send()
}
