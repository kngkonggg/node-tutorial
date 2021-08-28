const os = require('os')

//Get user info
const user = os.userInfo()
console.log(user)

//System uptime
console.log(`System uptime is currently at ${os.uptime()} seconds`)
 
