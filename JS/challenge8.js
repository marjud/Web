let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";

let request = new XMLHttpRequest();

request.open('GET', requestURL, true);

request.responseType = 'json';

request.send();

request.onload = function(){
    let superHeroes = request.response;
    //let hero = JSON.parse(superHeroes);
    
    //console.log(hero);
    //console.log(superHeroes);
    
    for(let item in superHeroes){
        if(superHeroes.hasOwnProperty(item)){
            //console.log(item);
            let h1 = document.createElement('h1');
            h1.setAttribute("id", item);
            h1.setAttribute("class", "theH1s")
            h1.innerHTML = item + ": " + superHeroes[item];
            document.getElementById('parent').appendChild(h1);
            
        }
    }
    
    let heros = superHeroes['members'];
    console.log("heres"+ heros);
    for(let i = 0; i < heros.length; i++){
        let mDiv = document.createElement('div');
        let h1 = document.createElement('h1');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let mlist = document.createElement('ul');
        
        h1.textContent = heros[i].name;
        console.log(h1,heros[i].name)
        p1.textContent = "Secret ID: " + heros[i].secretIdentity;
        p2.textContent = "Age: " + heros[i].age;
        p3.textContent = "Super Powers: ";
        
        let superpowers = heros[i].powers;
        for (let i = 0; i < superpowers.length; i++){
            let item = document.createElement('li');
            item.textContent = superpowers[i];
            mlist.appendChild(item);
        }
        document.getElementById('parent').appendChild(h1);
        document.getElementById('parent').appendChild(p1);
        document.getElementById('parent').appendChild(p2);
        document.getElementById('parent').appendChild(p3);
        document.getElementById('parent').appendChild(mlist);
    }m  

}

