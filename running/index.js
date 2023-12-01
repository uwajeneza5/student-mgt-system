const {displayall,Add,update,updatemany,remove}=require('../controller/studentcontroller');
const newstudents1={
    name :"tesi",
    age :20,
    gender :"male",
    location :"kimisagara"
}

displayall();
Add (newstudents1);
update(1,"location","nyamagabe");
const upd={
    age :23,
    name :"fafa",
    gender :"male",
    location :"nyamagabe"
}
updatemany(4,upd);
remove(2);

