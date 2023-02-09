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
//option 4
const hotPinkBtn = document.getElementById('make-hotpink')
        hotPinkBtn.addEventListener('click',makeHotPink )

        function makeHotPink(){
            document.body.style.backgroundColor = '#F9AACF'
        }
//option 5
        const makeGreenBtn = document.getElementById('make-green');
        makeGreenBtn.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor = 'green'
        })

// option 6 this option will use important
document.getElementById('make-gray').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gray';
})