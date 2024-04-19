function LDmode(){
    if (document.getElementById('switch').checked) {
            document.body.style.background = "#cccccc";
            localStorage.setItem("theme", "light");
            var bruh = document.getElementById("mode")
            bruh.style.color = "#200032fe"
            var elements  = document.getElementsByClassName("modecolor")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color ="rgb(255, 0, 85)";
            }
            var elements2  = document.getElementsByClassName("projone")
            for (var i = 0; i < elements.length; i++) {
                elements2[i].style.backgroundColor="#b7ab99";
            }
            document.body.style.color = "rgb(0,0,0)";
            var special = document.getElementById("special")
            special.style.textShadow = "0px 0px 20px rgb(255, 0, 85)"
            special.style.color = "rgb(255, 0, 85)"
            document.getElementById("profession").style.color = "rgb(255, 0, 85)"
            document.getElementById("btt").style.backgroundColor = "rgb(255, 0, 85)"
    } 
    else {
            document.body.style.background = "#1b1b1b";
            localStorage.setItem("theme", "dark");  
            var bruh = document.getElementById("mode")
            bruh.style.color = "#ffffff"
            var elements  = document.getElementsByClassName("modecolor")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color="blueviolet";
            }
            var elements2  = document.getElementsByClassName("projone")
            for (var i = 0; i < elements.length; i++) {
                elements2[i].style.backgroundColor="#1f1f1f";
            }
            document.body.style.color = "rgb(255,255,255)";
            var special = document.getElementById("special")
            special.style.textShadow = "0px 0px 20px rgb(147, 7, 235)"
            special.style.color = "blueviolet"
            document.getElementById("profession").style.color = "blueviolet"
            document.getElementById("btt").style.backgroundColor = "blueviolet"
    }
}

function getpref(){
    let mytheme = localStorage.getItem("theme");
    if (mytheme == "light"){
        document.getElementById('switch').checked = true; 
        LDmode();
    }else{
        document.getElementById('switch').checked = false;
        LDmode();
    }
}

function validateForm() {
    let x = document.forms["form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["form"]["message"].value;
    if (y == "") {
      alert("Message must be filled out");
      return false;
    }
  }

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}


document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})



