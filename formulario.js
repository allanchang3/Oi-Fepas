var btn = document.getElementById("enter");
var input = document.getElementById("geral");
var r1 = document.getElementById("r1");
var p2 = document.getElementById("p2");
var r2 = document.getElementById("r2");
var p3 = document.getElementById("p3");
var r3 = document.getElementById("r3");
var p4 = document.getElementById("p4");
var r4 = document.getElementById("r4");
var p5 = document.getElementById("p5");
var r5 = document.getElementById("r5");

var i = 0;
var contador = 0;
var stringk = [];

btn.onclick = ()=>{
    i++;
    if(i==1){
        stringk[contador] = geral.value;
        geral.value = ""; 
        r1.innerHTML = stringk[contador];
        r1.style.display = "block";
        p2.style.display = "block";
    }else{
        if(i==2){
            stringk[contador] = geral.value;
            geral.value = "";
            r2.innerHTML = stringk[contador];
            r2.style.display = "block";
            p3.style.display = "block";
        }else{
            if(i==3){
                stringk[contador] = geral.value;
                geral.value = "";
                r3.innerHTML = stringk[contador];
                r3.style.display = "block";
                p4.style.display = "block";
            }else{
                if(i==4){
                    stringk[contador] = geral.value;
                    geral.value = "";
                    r4.innerHTML = stringk[contador];
                    r4.style.display = "block";
                    p5.style.display = "block";
                }else{
                    if(i==5){
                        stringk[contador] = geral.value;
                        geral.value = "";
                        r5.innerHTML = stringk[contador];
                        r5.style.display = "block";
                    }
                }
            }
        }
    }
    contador++;
    console.log(stringk);
}





