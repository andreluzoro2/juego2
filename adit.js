
function myFunction() {
    $( "div.flip-card-inner" ).addClass( "tra" );
    /*With jquery $( "#im1" ).addClass( "tra" );
    $( "#im2" ).addClass( "tra" );
    $( "#im3" ).addClass( "tra" );
    $( "#im4" ).addClass( "tra" );
    $( "#im5" ).addClass( "tra" );
    $( "#im6" ).addClass( "tra" );
    $( "#im7" ).addClass( "tra" );
    $( "#im8" ).addClass( "tra" );
    $( "#im9" ).addClass( "tra" );*/
}

function mFunction(x) {
    $( "#im"+x ).addClass( "tra" );
    if((1000*document.getElementById("level").value)==0){
    setTimeout(()=>{document.getElementById("im"+x).classList.remove("tra")},"1000");
    } else {
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{document.getElementById("im"+x).classList.remove("tra")},ti);}
    /*setTimeout(()=>{$( "#im"+x ).removeClass( "tra" )},"1");*/
    /*document.getElementById("im"+x).classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{document.getElementById("im"+x).classList.remove("tra")},ti);*/
  }

for (let i = 1; i < 10; i++) {
    document.getElementById("im"+i).onclick = function() {mFunction(i)};
  }


function myFunction2() {
    $( "div.flip-card-inner" ).removeClass( "tra" );
    /* with jquery one by one $( "#im1" ).removeClass( "tra" );
    $( "#im2" ).removeClass( "tra" );
    $( "#im3" ).removeClass( "tra" );
    $( "#im4" ).removeClass( "tra" );
    $( "#im5" ).removeClass( "tra" );
    $( "#im6" ).removeClass( "tra" );
    $( "#im7" ).removeClass( "tra" );
    $( "#im8" ).removeClass( "tra" );
    $( "#im9" ).removeClass( "tra" );
    with vanilla javascript document.getElementById("im1").classList.remove("tra");
    document.getElementById("im2").classList.remove("tra");
    document.getElementById("im3").classList.remove("tra");
    document.getElementById("im4").classList.remove("tra");
    document.getElementById("im5").classList.remove("tra");
    document.getElementById("im6").classList.remove("tra");
    document.getElementById("im7").classList.remove("tra");
    document.getElementById("im8").classList.remove("tra");
    document.getElementById("im9").classList.remove("tra");*/
    
}
 

/*
 function F1(){
    var leo = document.getElementById("im1");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}

function F2(){
    var leo = document.getElementById("im2");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}
function F3(){
    var leo = document.getElementById("im3");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}
function F4(){
    var leo = document.getElementById("im4");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}
function F5(){
    var leo = document.getElementById("im5");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}
function F6(){
    var leo = document.getElementById("im6");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}
function F7(){
    var leo = document.getElementById("im7");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}
function F8(){
    var leo = document.getElementById("im8");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}
function F9(){
    var leo = document.getElementById("im9");
    leo.classList.add("tra");
    var ti=1000*document.getElementById("level").value;
    setTimeout(()=>{leo.classList.remove("tra")},ti);
}
*/
function niv(){
    var nive=document.getElementById("level").value;

}