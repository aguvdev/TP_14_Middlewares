const fs = require('fs')
const path = require('path')

const userLogs = (req,res,next) =>{
fs.appendFileSync(path.join(__dirname,'../logs/userLogs.txt'),'El usuario ingresa a la ruta' + req.url + '\n', 'utf-8')
next()
}

module.exports = userLogs;