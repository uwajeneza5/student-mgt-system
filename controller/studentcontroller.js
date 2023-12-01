const {students} = require ('../database/db');
const Add = (newstudents) =>{
    newstudents.id = students.length+1;
    students.push(newstudents);
    console.log("\n newstudents in system after added\n"); 
    console.log(students);
}
const displayall =() =>{
    console.log("\n displayall");
    console.log(students);
}
const update = (id,key,value) =>{
    var exists = students.find(ele=>ele.id===id);
    if(!exists){
        console.log("not found");
    }
    else{
        exists[key]=value;
        console.log("\n updated well");
        console.log(exists);
    }
}
const updatemany = (id,obj) =>{
    var exists = students.find(ele=>ele.id===id);
    if(!exists){

        console.log("not found");
    }
    else{
        for (const key in obj) {
            exists[key] = obj[key];}
            console.log("students updated\n");
            console.log(exists);
            }
        
    }
    const remove = (id) => {
        var exists = students.find(ele=>ele.id===id);
        if(!exists){
            console.log("not found");
        }
        else{
            // var index = students.indexOf(exists);
            // students.splice(index,1);
            // console.log("\n removed well");
            // console.log(exists);


            var remaining = [];
            remaining = students.filter(ele=>ele.id!==id);
        console.log(remaining);
        };
    }



module.exports={
    Add,displayall,update,updatemany,remove
}