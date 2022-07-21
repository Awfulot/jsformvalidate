document.getElementById("body1").classList.add(bg-pink-500);


var passInput = document.getElementById("userPassword")



//insert popup function here document.getElementById("popUpText").display
passInput.onfocus = function (){
    document.getElementById("popUpText").style.display = "block";
}
passInput.onblur = function (){
    document.getElementById("popUpText").style.display = "none";
}


onkeyup.passInput = function validatePass(){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;


    if(passInput.value.match(lowerCaseLetters)){
        document.getElementById("popUpTextLC").classList.remove(red-400);
        document.getElementById("popUpTextLC").classList.add(green-400);

    }

    if(passInput.value.length >= 8){
        document.getElementById("popUpText").classList.remove(bg-red-400);
        document.getElementById("popUpText").classList.add(bg-green-400);

    }
    if(passInput.value.match(upperCaseLetters)){
        document.getElementById("popUpTextUC").classList.remove(bg-red-400);
        document.getElementById("popUpTextUC").classList.add(bg-green-400);

    }
    if(passInput.value.match(numbers)){
        document.getElementById("popUpTextNumbers").classList.remove(bg-red-400);
        document.getElementById("popUpTextNumbers").classList.add(bg-green-400);

    }





}