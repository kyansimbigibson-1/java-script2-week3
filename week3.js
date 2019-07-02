src="week3.js"
let myString =[ "hello,this,is,a,difficult,to,read,sentence"];
console.log(myString);
console.log(myString.unshift("no it is not hard to read"));
console.log(myString);

console.log(myString.length);
console.log(myString);
myString =[ "hello this is a difficult to read sentence"];
console.log(myString);
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.unshift("meerkat");
console.log(favoriteAnimals);
let array = ("the unshift method added a meerkat to the first place in the array");
console.log(array);
console.log(favoriteAnimals.length + "the array has the lenght oh five")
console.log(favoriteAnimals);
//2.7 Jason does not like 'giraffe', delete this animal from the array.
//console.log(favoriteAnimals.slice ("giraffe")
console.log("2.7 Jason does not like 'giraffe', delete this animal from the array.")

function catchingElements(favoriteAnimals,item){
   let myNewArray = []
   for(let i =0 ; i < favoriteAnimals.length; i++){
       if(favoriteAnimals[i] !== item){
           myNewArray.push(favoriteAnimals[i])
       }
   }
   return myNewArray
}

console.log(catchingElements(favoriteAnimals, "giraffe"))

//2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array,
// but you don't know the position or the index of the item in the array, how can you find it?
console.log(
    "2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array",
    " but you don't know the position or the index of the item in the array, how can you find it?")
{for(let i ="meekat" ; i < favoriteAnimals.length; i++){
    if(favoriteAnimals[i] !== item){
        myNewArray.shift(favoriteAnimals[i])
    }
}
}

console.log(catchingElements(favoriteAnimals, "meerkat"))
console.log('The item you are looking for is at index: ')
console.log(favoriteAnimals.indexOf("meerkat"));
//avoriteAnimals.indexOf(searchElement[index])

//Create a function that takes 3 arguments and returns the sum of the these arguments.
function add(a, b) {
    return a+b;
}
function add(a, b, c) {
     return a+b+c;
 } 
 console.log("Create a function that takes 3 arguments and returns the sum of the these arguments.")
 
 console.log(add(3,5,7))
 console.log("Create an object and a function that takes the object as a parameter and prints out all of its properties and values.")
 function Book (gibson, author) {
    this.gibson = gibson;
    this.author = author;
    this.getDetails = function () {
        return this.gibson + 20 + this.author;
    }
}
var book = new Book("gibson", " kyansimbi");
console.log(book.getDetails());; 




let vehicletype = ["toyota","bluebike","volvo","ovlvo",8,"blackbike","redbike",9, "bluebike"]

function catchingElements(array,item){
   let myNewArray = []
   for(let i =0 ; i < array.length; i++){
       if(array[i] !== item){
           myNewArray.push(array[i])
       }
   }
   return myNewArray
}

console.log(catchingElements(vehicletype, "bluebike"))


// function map(colorCars, bikes) {
//     var result = []; // Create a new Array
//     var i; // Declare variable
//     for (i = 0; i != bikes.length; i++)
//       result[i] = colorCars(bikes[i]);
//     return result;
//   }
//   var colorCars = function(x) {
//      return x * x * x; 
//   }
//   var numbers = [0, 1, 2, 5, 10];
//   var cube = map(colorCars,numbers);
//   console.log(cube);

console.log(3===3)

console.log("Create a function called vehicle, like before, but takes another parameter called age, so that vehicle(blue, 1, 5) prints 'a blue used car")
function age(a) {
    if (a < 2) {
      return "a green new car";
    } else {
      return "a blue used car";
    }
  }
  
  console.log(age(5));
  console.log("Make a list of vehicles, you can add motorbike, caravan, bike, or more.");
  let myarray=['motorbike', 'caravan', 'train',' lorry','bikes']
console.log(myarray);
console.log("How do you get the third element from that list?")
console.log(myarray[2]);
  
myarray=['motorbike', 'caravan', 'train',' lorry','bikes']
let text ="";
let x=("Amazing Joe's Garage, we service cars" )
 for(x in myarray )
 text += myarray[x] + " ";
 console.log(text);
 console.log("Create an empty object.")
 let myemptyobject={};
 console.log("Create an object that contains the teachers that you have had so far for the different modules.")
 let myteachers = {
zohir: "CLI",inigo:"python", Gibson:"javascrpt"
 };
 console.log("myteachers")
//  myteachers.nationality = "English";
//  document.getElementById("demo").innerHTML =
//  myteachers.firstname + " is " + myteachers.nationality + ".";


//     function catchingElements(myarray,item){
//     let myNewArray = []
//     for(let i =0 ; i < myarray.length; i++){
//         if(array[i] !== item){
//             myNewArray.push(myarray[i])
//         }
//     }
//     return myNewArray
//  }
 
 console.log(catchingElements(myarray, 5))
console.log("Write some code to test two arrays for equality using == and ===. Test the following:")

let q = [1,2,3];
let y = [1,2,3];
let z = y;
if (q==y)
console.log("yes") 

else if (q===z) 
console.log("bravo")
(y===z)
else 
console.log ("perfect")
console.log("What do you think will happen with x == y, x === y and z == y and z == x? Prove it!")
console.log(x == y)
console.log(x === y)
console.log(z == y)
console.log(z == x)
console.log("at z==y they all have the same element same data type and they are eqaul " )
console.log("at x == y they have same data types but diffrent element")
console.log("What does the following code return? (And why?) ")
let bar = 42;
typeof typeof bar;
console.log(bar)
console.log("its data type is a number")


