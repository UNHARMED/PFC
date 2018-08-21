

var equal = "égalité";
var win = "you win";
var lose = "ia win";
var user_point=0;
var ia_point=0;

document.getElementsByClassName("ingame")[0].style.display = "none";
function gamestarted(){
document.getElementsByClassName("ingame")[0].style.display = "block";
document.getElementsByClassName("starthegame")[0].style.display = "none";
}

function PFC(i) {
  var user = document.getElementById("username").value + ": ";
  var j = Math.random()*90;

  if( i != "pierre" && i != "feuille" && i != "ciseaux") {
  }

  if (j <=30) {
    j="pierre";
  } else if (j <=60 && j >30) {
    j="feuille";
  } else if (j <=90 && j >60) {
    j="ciseaux";
  }
  document.getElementById("status").innerHTML=user+i+", l'ordinateur: "+j;


  if (i===j) {
    console.log(equal);
  } else if (i=="ciseaux" && j=="pierre"){
    console.log(lose);
    ia_point++;
  } else if (i=="ciseaux" && j=="feuille"){
    console.log(win);
    user_point++;
  } else if (i=="pierre" && j=="ciseaux"){
    console.log(win);
    user_point++;
  } else if (i=="pierre" && j=="feuille"){
    console.log(lose);
    ia_point++;
  } else if (i=="feuille" && j=="ciseaux"){
    console.log(lose);
    ia_point++;
  } else if (i=="feuille" && j=="pierre"){
    console.log(win);
    user_point++;
  }
  console.log(user_point+" - "+ia_point);
  document.getElementsByTagName("p")[0].innerHTML=user_point+" - "+ia_point;

  if (user_point==2 || ia_point==2){
    user_point=0;
    ia_point=0;
    document.getElementsByClassName("ingame")[0].style.display = "none";
    document.getElementsByClassName("starthegame")[0].style.display = "block";
  }
}
