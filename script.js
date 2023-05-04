//  help popup

const message1 = document.querySelector(".message1");
function active1() {
    message1.style.visibility = "visible";
    setTimeout(hidden1,3000);
}
function hidden1(){
    message1.style.visibility = "hidden";
    
}
    const message2 = document.querySelector(".message2");
function active2() {
    message2.style.visibility = "visible";
    setTimeout(hidden2,3000);
}
function hidden2(){
    message2.style.visibility = "hidden";
}



// get random captcha

const captchanumber=document.getElementById("captcha");
const refreshbutton=document.getElementById("refresh");
let random;
let randomString;

function ran(){
    random=Math.floor(Math.random() * 10000);
    randomString = String(random).padStart(4, "0");
    captchanumber.textContent = randomString;
}
ran();
refreshbutton.addEventListener("click", ran);



// check captcha is true or not 

const fromcheck=document.getElementById("captchatext");
const checkbtn=document.getElementById("check");
let captcha=false;
function checkcaptcha(){
    const value=fromcheck.value;
    const len=value.length;
    
    if(value==randomString && len==4){
        fromcheck.style.border="3px solid green";
        captcha=true;
        console.log(captcha);
    }
    else if(len>3){
        fromcheck.style.border="3px solid red";
    }
    else{
        fromcheck.style.border="1px solid grey";
    }
}
fromcheck.addEventListener("input",checkcaptcha);



// password validation

