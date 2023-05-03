// const question1 = document.querySelector('.question');
// const bday = document.querySelector('.bday');

// question1.addEventListener('mouseover', () => {
//       bday.style.margin= '0px 0px 0px 0px';

// });

// question1.addEventListener('mouseout', () => {
//         message1.style.display = 'none';
// });

// const question2 = document.querySelector('.question2');
// const message2 = document.querySelector('.message2');

// question2.addEventListener('mouseover', () => {
//       message2.style.display = 'block';
// });

// question2.addEventListener('mouseout', () => {
//         message2.style.display = 'none';
// });

const message1 = document.querySelector(".message1");
function active() {
    message1.style.visibility = "visible";
    setTimeout(hidden,3000);
}

function hidden(){
    message1.style.visibility = "hidden";
}
