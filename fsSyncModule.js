const fs = require('fs')

const first = fs.readFileSync('./content/first.txt', 'utf-8')
const second = fs.readFileSync('./content/subfolder/test.txt', 'utf-8')
console.log(first + second)

fs.writeFileSync(
    './content/reports.txt',
    `Report generated  == ${first} and ${second}`,
    {flag: 'a'}
)