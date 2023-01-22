var numPlanos = document.getElementsByClassName("cpNumPlanos");
var planoA = document.getElementById("cpPlanoA");
var planoB = document.getElementById("cpPlanoB");

function test() {
    console.log(numPlanos)
    console.log(planoA)
    console.log(planoB)
}

test();
// function funcao(){
//     numPlanbos.display.style = "block";
// }

// cpPlanoA.addEventListener("click",funcao());

if(planoA.checked === true){
    numPlanos.display.style = "block";
}

// cpPlanoA.onchange = (event)=>{
//     numPlanos.display.style= "block";
// }

// cpPlanoB.onchange = (event)=>{  
//     numPlanos.style.display = "none";
// }
