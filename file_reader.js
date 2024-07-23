const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, fName) => {
  if(err){
    console.error("error getting firstname", err)
  }
  fs.readFile("./lastname.txt", "utf-8", (err, lName)=>{
    if(err){
      console.error("error getting lastname", err)
    }
    fs.readFile("./age.txt", "utf-8", (err, age)=>{
      if(err){
        console.error("error getting age", err)
      }
      fs.readFile("./hobbies.txt", "utf-8", (err, hobbies)=>{
        if(err){
          console.error("error getting hobbies", err)
        }

        const hobbiesStr = hobbies.replace(/^\[|\]$/g, '').replace(/"/g, '');
        const hobbiesArr = hobbiesStr.split(',').map(hobby => hobby.trim());
        const arr = [...hobbiesArr];
        const hobby1 = arr[0]; 
        const hobby2= arr[1];

        console.log(`${fName} ${lName} is ${age} years old and his hobbies are ${hobby1} and ${hobby2}`)
      })
    })
  })


})
