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