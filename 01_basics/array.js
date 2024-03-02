//arraymethod
const myarray=[1,2,3,4,5]
myarray.push(6)//end me add karte h
myarray.pop()//end se remove karte h 

// array part 2
const marvel_heros=["thor ", "iron man ","spiderman"]
const DC_heros=["aquaman", "flash"]
marvel_heros.push(DC_heros)
console.log("2",marvel_heros);//arrar ko hi array me dal deta hai 
const new_Array =marvel_heros.concat(DC_heros)
console.log("1",new_Array);// ye array ko add kar deta hai
console.log(typeof(new_Array));
console.log(typeof(marvel_heros));

/////// flat method
const another_array=[1,2,3,[4,5],[6,7],[8]]
const real_array=another_array.flat(Infinity)
console.log(real_array);
