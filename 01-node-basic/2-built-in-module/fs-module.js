const fs = require('fs');

/*================================================================
                Asynchrorise
===================================================================*/

/* ---------- write file ---------------- */

fs.writeFile("details.txt", "This is first title", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfull");
    }
});

/* ---------- Add data in existing file ------------------*/

fs.appendFile("details.txt", "This is second title", (err)=>{
    if(err){
         console.log(err);
    }else{
        console.log("successfull");
    }
})

 /* ----------- Read Data from a file ------------------ */

fs.readFile('details.txt', 'utf-8', (err, data) => {
        if(err){
         console.log(err);
    }else{
        console.log(data);
    }
})

/* ----------- Rename a file ------------------ */

fs.rename('details.txt', 'demo.txt', (err) => {
    if(err){
     console.log(err);
}else{
    console.log('Successfull');
}
})

/* ----------- Delete a file ------------------ */

fs.unlink('demo.txt',(err) => {
    if(err){
     console.log(err);
}else{
    console.log('Succesfull');
}
})

/*================================================================
                synchrorise
===================================================================*/

fs.writeFileSync('demo.txt', 'Hellovworld');