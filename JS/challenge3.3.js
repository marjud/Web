let myStringArray = ["oneString", "twoString", "threeString"];
console.log(myStringArray);

function addToArray(x){
    let input = document.getElementById("inputbox");
    if(input == ""){
        alert("Please enter text");
    }
    myStringArray.push(input.value);
    console.log(myStringArray);
}

function removeFromArray(x){
    myStringArray.pop();
    console.log(myStringArray);
    alert("removed one item from the last idex of array");
    
}
function annoyingPopup(){
    alert("trololololololololoolol");
    annoyingPopup();
}