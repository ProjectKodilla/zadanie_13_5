function time (sec) {
  var hour = Math.floor(sec / 3600)
  var minute = Math.floor(sec % 3600 / 60)
  var second = (sec % 60).toFixed(0)
  return hour + 'h ' + minute + 'min ' + second + 's '
}

exports.print = time
