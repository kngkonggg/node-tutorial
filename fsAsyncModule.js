const fs = require('fs')

fs.readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    fs.readFile('./content/subfolder/test.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second  = result
        fs.writeFile('./content/report-async.txt',
        'Im a callback', {flag : 'a'}, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('Success!')
        })
    })
})