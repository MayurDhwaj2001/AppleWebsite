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

const pass=document.getElementById("pass");
const confirmpass=document.getElementById("confirmpass");
let satisfied=false;    
let passworissame=false;    
function checkpass(){
    const passval=pass.value;

    const passlen=pass.value.length;

    const capital = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    const small = /[abcdefghijklmnopqrstuvwxyz]/;
    const numbers = /[0123456789]/;
    const symbols = /[!@#$%^&*()<>?:|~`]/;
    const containscap = capital.test(passval);
    const containssmall = small.test(passval);
    const containsnum = numbers.test(passval);
    const containssymbol = symbols.test(passval);

    const check01=document.getElementById("check1");
    const check02=document.getElementById("check2");
    const check03=document.getElementById("check3");
    const check04=document.getElementById("check4");
    const check05=document.getElementById("check5");


    if(passlen<8){                                         
        console.log("Should be more than 7");
        check01.style.color="red";
    }
    else{
        check01.style.color="green";
    }
        
    if(!containscap){                                      
        console.log("Contains Capital Case");
        check02.style.color="red";
    }
    else{
        check02.style.color="green";
    }
    
    if(!containssmall){
        console.log("Contains Small Case");
        check03.style.color="red";
    }
    else{
        check03.style.color="green";
    }
    
    if(!containsnum){
        console.log("Contains Numbers");
        check04.style.color="red";
    }
    else{
        check04.style.color="green";
    }
    
    if(!containssymbol){
        console.log("Contains Symbols");
        check05.style.color="red";
    }
    else{
        check5.style.color="green";
    }


    if(passlen>7 && containscap && containssmall && containsnum && containssymbol){
        console.log("satisfy");             
        pass.style.border="2px solid green" ;                  
        setTimeout(passpophidden,2000);
        satisfied=true;
    }
    else{
        pass.style.border="1px solid grey" ;                  
    }
}

pass.addEventListener("input",checkpass);




// password popup

const pop=document.getElementById("message3");

function passpop(){
    pop.style.visibility="visible";
}
function passpophidden(){
    pop.style.visibility="hidden";
}

pass.addEventListener("input",passpop);
pass.addEventListener("click",passpop);
pass.addEventListener("blur",passpophidden);


// check from confirm password
function botharesame(){

    const p1= pass.value;
    const p2= confirmpass.value;
    if(p1==p2 && satisfied==true){
        confirmpass.style.border="2px solid green";
        passworissame=true;
    }
    else if(p2.length>7){
        confirmpass.style.border="2px solid red";
    }

    else{
        confirmpass.style.border="1px solid grey";

    }
}
    
    confirmpass.addEventListener("input",botharesame);


// Continue after validation

function validate(){
    const fname=document.getElementById("fname");
    const fnameval=fname.value;
    let isfname=false;
    
    const lname=document.getElementById("lname");
    const lnameval=lname.value;
    let islname=false;
    
    const bday=document.getElementById("bday");
    const bdayval=bday.value;
    let isbday=false;
    
    const mail=document.getElementById("mail");
    const mailval=mail.value;
    let ismail=false;
    
    const ph=document.getElementById("ph");
    const phval=ph.value;
    
    
    
    const pa=document.getElementById("pass");
    const paval=ph.value;
    
    
    const cpa=document.getElementById("confirmpass");
    const cpaval=ph.value;


    const cap=document.getElementById("captchatext");
    const capval=ph.value;


    let isph=false;


    if (fnameval.trim() !== ""){
        isfname=true;
    }
    else{
        isfname=false;
        fname.style.border="2px solid red";
    }
    
    if (lnameval.trim() !== ""){
        islname=true;
    }
    else{
        islname=false;
        lname.style.border="2px solid red";
    }
    
    if (bdayval.trim() !== ""){
        isbday=true;
    }
    else{
        isbday=false;
        bday.style.border="2px solid red";
    }
    
    if (mailval.trim() !== ""){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;                            //validate mail
        ismail= emailRegex.test(mailval);
    }
    else{
        ismail=false;
        mail.style.border="2px solid red";
    }
    
    if (phval.trim() !== ""){
        isph=true;
    }
    else{
        isph=false;
        ph.style.border="2px solid red";
    }
    
    
    
    if(paval.trim()==""){
        pa.style.border="2px solid red";
    }
    else{
        pa.style.border="1px solid grey";
    }
    
    
    if(cpaval.trim()==""){
        cpa.style.border="2px solid red";
    }
    else{
        cpa.style.border="1px solid grey";
    }
    
    
    if(capval.trim()==""){
        cap.style.border="2px solid red";
    }
    else{
        cap.style.border="1px solid grey";
    }



    if(isfname==true && islname==true && isbday==true && ismail==true && isph==true && captcha==true && passworissame==true ){
        alert("saved");
    }
    
    else{
        alert("not saved");
    }

}

const savedata=document.getElementById("save");
savedata.addEventListener("click",validate);





// check empty field on submit
const gfname=document.getElementById("fname");
const glname=document.getElementById("lname");
const gbday=document.getElementById("bday");
const gmail=document.getElementById("mail");
const gph=document.getElementById("ph");
const gpa=document.getElementById("pass");
const gcpa=document.getElementById("confirmpass");
const gcap=document.getElementById("captchatext");
function greyfname(){
    gfname.style.border="1px solid grey";
}
function greylname(){
    glname.style.border="1px solid grey";
}
function greybday(){
    gbday.style.border="1px solid grey";
}
function greymail(){
    gmail.style.border="1px solid grey";
}
function greyph(){

    const noo=gph.value;
    if( !isNaN(noo) && !isNaN(parseFloat(noo))){
        gph.style.border="1px solid grey";
    }
    else{
        gph.style.border="2px solid red";
    }
}
function greypa(){
    gpa.style.border="1px solid grey";
}
function greycpa(){
    gcpa.style.border="1px solid grey";
}
function greycap(){
    gcap.style.border="1px solid grey";
}
gfname.addEventListener("input",greyfname);
glname.addEventListener("input",greylname);
gbday.addEventListener("input",greybday);
gmail.addEventListener("input",greymail);
gph.addEventListener("input",greyph);
gpa.addEventListener("input",greygpa);
gcpa.addEventListener("input",greycpa);
gcap.addEventListener("input",greycap);
