document.getElementById('btnId').addEventListener('click', function(){
    //console.log('fdgg')
    // 2 get the comment
    const commentBox = document.getElementById('commentId');
    //console.log(commentBox)
    const newComment = commentBox.value;
    //console.log(newComment);

    // 3 set the comment insid ethe cointainer
        // get the comment cointaiter
        // create new element (p)
        //set the text of the comment as inner text
        // add the p tag useing child
    const commentContainer = document.getElementById('comment-con');
    const p = document.createElement('p')
    p.innerText = newComment;
    commentContainer.appendChild(p);

    // step 4 clear the text area
    commentBox.value = '';
})