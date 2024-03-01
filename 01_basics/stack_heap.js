 // stack -isme value copy krne pr original value copy hoti hai or chane copy me hota hai 
 let mySkill= 'basicJavaScript'
 let myUpdateskills= mySkill
 myUpdateskills='Javascript_advanced'
 console.log(mySkill);
 console.log(myUpdateskills);


 // heap - (reffeance )- jab value ki copy krte  hai to reffrance jata hai or jab copy me change karte hai to real value me change hota hai

 let Student={
    Name:'ayush',
    age:22,
    location:'muzaffarnagar',
    
 }

 let student2=Student

 student2.location='jaipur'
 console.log(Student.location);
 console.log(student2.location);