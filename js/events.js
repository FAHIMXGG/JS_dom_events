//console.log('test')
//option one in html
//option2
function makeRed(){
    document.body.style.backgroundColor= 'red'
}

function makePink() {
    document.body.style.backgroundColor= 'Pink'
}
//option 2
const makeDark = document.getElementById('make-dark');
//console.log(makeDark);
makeDark.onclick = makeDarks;
function makeDarks() {
document.body.style.backgroundColor= 'black';
}
//option 3
const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor= 'purple'
}