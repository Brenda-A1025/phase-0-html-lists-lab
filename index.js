const books = {
    name: "THE ARE OF INTELLIGENCE",
    namberpages: {
        total:68,
        appendixes:6,
        writen: 75,
    },
    numberofreaders:8,
    lastreader: "Brenda Nyagah",
};
console.log(books);
//arrays
const names =["Brenda", "Njeri", "Nyagah"];
console.log(names);
let age = 5;
let show ="Brenda is "
console.log(show + age);
//even and odd 
let num =7;
if(num % 2 === 0){
    console.log(num + " is even");
}
else{
    console.log(num + " is odd")
}
//value from website
function checkEven(){
    const number = document.getElementById("numberInput").value;
    const result = document.getElementById("result");
    if (number === ""){
        result.textContent = "Please enter a number";
        return;
    }
    if (number < 0){
        result.textContent = "Please enter a number greater than 0";
        return;
    }
    if( Number(number)% 2 === 0){
        result.textContent = number + " is an even number";
    }
    else{
        result.textContent = number + " is an odd number";
    }
} 

function add(favouritenumber) {
    if (favouritenumber >=10){
        favouritenumber = favouritenumber +10;
    }
    else{
        favouritenumber = 0 ;
    }
    
    console.log(favouritenumber);
}
