//singleton-constructors se banta hai to ye object banta hai 
// object litrals
const JsUser={
    Name :"ayush",
    age:22,
    email:"xyz.com"

}
JsUser.greetings=function(){
    console.log(`hello, ${this.Name}`);
}
// ways to access
console.log(JsUser.Name);
console.log(JsUser["email"]);
console.log(JsUser.greetings());
// vaule ko access karnwe ka naya tarika 
const {Name}=JsUser
console.log(Name);
// property ko new name bhi de saktw hai
const {Name:Y}=JsUser
console.log(Y);