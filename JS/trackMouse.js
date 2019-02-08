function trackMouse(e){
    let x = e.clientX;
    let y = e.clientY;
    let coord = "Coordinates: ("+ x +"," + y +")";
    document.getElementById("clear").innerHTML = coord;
}

function clear(){
    document.getElementById("clear").innerHTML("");
}

