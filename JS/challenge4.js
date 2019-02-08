function maker(name, age){
    
}

let person = {name: "Judah",
             age: 55};


console.log(person);

function ageFinder(){
    let a = person.age;

    return !!(a > 20 && a < 40);
    
}
console.log(ageFinder());