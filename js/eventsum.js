// 1 btn click text change
function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = "Fuck You";
}
// 2 btn click text change
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'text updated by add event listener button'
})
// input text push
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input')
    const inputText = inputField.value;

    const p =document.getElementById('input-text')
    p.innerText = inputText
    //clear input box
    inputField.value = '';
})