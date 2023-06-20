function random()
{
    var x = Math.random() * 6;
    ++x;
    return Math.floor(x);
}
function change(){
    var t = random();
    var r = "url(./images/" + t + ".png)";
    // alert(r);
    document.getElementById("dice-1").style.backgroundImage = r;
    var y = random();
    var r = "url(./images/" + y + ".png)"; 
    document.getElementById("dice-2").style.backgroundImage=r;
    if(t>y){
        document.getElementById("change").innerHTML="Player 1 Won"; 
    }
    else if(y>t){
        document.getElementById("change").innerHTML="Player 2 Won"; 
    }
    else if(y===t){
        document.getElementById("change").innerHTML="draw"; 
    }
    else{
        document.getElementById("change").innerHTML="Error";
    }

}
var refresh = document.getElementById("reresh");
// refresh.onclick()= change();