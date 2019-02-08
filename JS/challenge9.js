let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";

let request = new XMLHttpRequest();

request.open('GET', requestURL, true);

request.responseType = 'json';

request.send();

request.onload = function(){
    let kings = request.response;
    console.log(kings)
    let mlist = document.createElement('ul')
    let input = document.getElementById("text");
    let filter = input.value.toUpperCase();
    for(let i = 0; i < kings.length; i++){
        console.log(i)
        let item = document.createElement('li');
        item.textContent = kings[i];
        mlist.appendChild(item);
    }
    //loop through the 
    
}