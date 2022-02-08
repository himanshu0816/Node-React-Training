var fs=require('fs')

// fs.writeFile('calc.js','console.log("saved")',function(err){
//     console.log("Data is saved")
// })
fs.appendFile('calc.js','console.log("saved")',function(err){
    console.log("Data is saved")
})

//writeFile
//appendFile
//unlink
//RaedFile