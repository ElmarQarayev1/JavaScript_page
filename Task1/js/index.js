let fix =document.querySelector(".fixx");
let about =document.querySelector(".about");
let password=document.getElementById("passwordInput");
let confirmPassword=document.getElementById("CpasswordInput");
let form=document.getElementById("registerForm");
let select = document.getElementById("selection");
let code = document.querySelector(".pelement");
let code1 = document.querySelector(".h1element");
let code2=document.querySelector(".aelement");
let code3=document.querySelector(".aaelement");
let code4=document.querySelector(".btnfg");
let emailInput=document.getElementById("emailInput");
let toast=document.querySelector(".toast1");
let commonCheck = true;

function CheckValidations() {
    password.parentElement.querySelectorAll("span").forEach(e => {
        e.remove();
    });
    confirmPassword.parentElement.querySelectorAll("span").forEach(e => {
        e.remove();
    });
    emailInput.parentElement.querySelectorAll("span").forEach(e => {
        e.remove();
    });

    let check = true;

    if (password.value !== confirmPassword.value) {
        let span = SpanError("Passwords do not match ");
        confirmPassword.parentElement.appendChild(span);
        check = false;
    }

    let hasDigit = false;
    for (let i = 0; i < password.value.length; i++) {
        if (!isNaN(parseInt(password.value[i]))) {
            hasDigit = true;
            break;
        }
    }
    if (!hasDigit) {
        let span = SpanError("Password must have at least one digit ");
        password.parentElement.appendChild(span);
        check = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        let span = SpanError("Must has @ and domain ");
        emailInput.parentElement.appendChild(span);
        check = false;
    }

    return check;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    commonCheck = CheckValidations();
    if(commonCheck){
        toast.style.display="block";
        setTimeout(toastDisplay, 5000);
    }
});
function toastDisplay() {
    toast.style.display="none";
  }

password.addEventListener("input", function() {
    if (!commonCheck) {
        CheckValidations();
    }
});

confirmPassword.addEventListener("input", function() {
    if (!commonCheck) {
        CheckValidations();
    }
});

emailInput.addEventListener("input", function() {
    if (!commonCheck) {
        CheckValidations();
    }
});

function SpanError(message) {
    let span = document.createElement("span");
    span.textContent = message;
    span.style.color = "red";
    return span;
}


function changeColour() {

    let selectedIndex = select.selectedIndex;
    let selectedValue = select.options[selectedIndex].value;
    let colors = {
        "blue": "blue",
        "pink": "pink",
        "green": "green",
        "red": "red",
        "violet": "violet",
        "sea": "gray"
    };

    let colorKeys = Object.keys(colors);
    for (let i = 0; i < colorKeys.length; i++) {
        if (colorKeys[i] === selectedValue) {
            code.style.color = colors[colorKeys[i]];
            code1.style.color = colors[colorKeys[i]];
            code2.style.color = colors[colorKeys[i]];
            code3.style.color = colors[colorKeys[i]];  
            code4.style.color = colors[colorKeys[i]];  

            return; 
        }
    }
    code.style.color = "black";
    code1.style.color ="black";
    code2.style.color = "black";
    code3.style.color = "black";
    code4.style.color = "black";

}
document.getElementById("selection").addEventListener("change", changeColour);

let check=true;
fix.addEventListener("click",function(){
    if(check){
        about.style.display="block";
    }
    else{
        about.style.display="none";
    }
    check=!check;
});




