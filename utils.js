let getDate = function () {
    var dateObj = new Date()
    var date = dateObj.toLocaleString()
    var year = ''+dateObj.getFullYear()

    return date.substring(0,date.indexOf(year)+(''+year).length)
}

module.exports = getDate