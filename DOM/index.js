//console.log("kya haal chal")

function run(){
    console.log("running");
}
run();

let stand = function walk(){
    console.log('walking')
};
stand();
let jump = stand;
jump ();

function sum (a,b){
    let total = 0;
    for (let value of arguments)
        total = total + value;
    return total;
}

console.log(sum(1,3,5))

let person ={
    fName : 'Sahil',
    lName : 'Hinge'
}

function fullName(){
    return `${person.fName} ${person.lName}`
}
console.log(fullName())

document.addEventListener('click',function(){
    console.log('i ahve the document')
});