let x=""
function put1(){
    x=x+"1";
    document.getElementById("display").innerHTML=x;
}
function put2(){
    x=x+"2";
    document.getElementById("display").innerHTML=x;
}
function put3(){
    x=x+"3";
    document.getElementById("display").innerHTML=x;
}
function put4(){
    x=x+"4";
    document.getElementById("display").innerHTML=x;
}
function put5(){
    x=x+"5";
    document.getElementById("display").innerHTML=x;
}
function put6(){
    x=x+"6";
    document.getElementById("display").innerHTML=x;
}
function put7(){
    x=x+"7";
    document.getElementById("display").innerHTML=x;
}
function put8(){
    x=x+"8";
    document.getElementById("display").innerHTML=x;
}
function put9(){
    x=x+"9";
    document.getElementById("display").innerHTML=x;
}
function put0(){
    x=x+"0";
    document.getElementById("display").innerHTML=x;
}
function Reset(){
    x="";
    document.getElementById("display").innerHTML=x;
}
function Add(){
    x=x+"+";
    document.getElementById("display").innerHTML=x;
}
function Subtract(){
    x=x+"-";
    document.getElementById("display").innerHTML=x;
}
function Multiply(){
    x=x+"*";
    document.getElementById("display").innerHTML=x;
}
function Divide(){
    x=x+"/";
    document.getElementById("display").innerHTML=x;
}
function Answer(){
    document.getElementById("display").innerHTML=eval(x);
}
