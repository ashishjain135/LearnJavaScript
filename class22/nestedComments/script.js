document.addEventListener('DOMContentLoaded',function(){
    const submitBtn = document.getElementById('submitComment');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');


    submitBtn.addEventListener('click',function(){
        const commentText = commentInput.value.trim();
        if(commentText){
            addComment(commentText);
            commentInput.value = ''; //clear the input field
        }
    })

    //using event delegation for reply functionality 
    commentsContainer.addEventListener('click',function(e){
        if(e.target.className.includes('replyBtn')){
            const parentComment = e.target.parentElement;
            const replyInput = parentComment.querySelector('.replyInput'); // text area
            const replytext = replyInput.value.trim();
            if(replytext){
                addReply(parentComment,replytext);
                replyInput.value = ''; //clear the input field

            }
        }
    })
    function addComment(text){
        const commentElement = document.createElement('div');
        commentElement.className = 'repliesContainer';
        commentElement.innerHTML = `<p>${text}</p>
        <button class="replyBtn">Reply</button>
        <textarea class="replyInput" placeholder="Write a reply ...."></textarea>
        `;
        commentsContainer.appendChild(commentElement);
    }
    function addReply(parentComment,text){
        // const repliesContainer = parentComment.querySelector(".repliesContainer")

        const replyElement = document.createElement("div");
        replyElement.className = "repliesContainer";
        replyElement.innerHTML = `<p>${text}</p>`;
        const btn = document.createElement("button");
        btn.className = "replyBtn";
        btn.innerText = "Reply";
        replyElement.appendChild(btn);
        const replyInput = document.createElement("textarea");
        replyInput.className = "replyInput";
        replyInput.placeholder = "Write a reply..";
        replyElement.appendChild(replyInput);
        parentComment.appendChild(replyElement);
        parentComment.classList.remove("collapsed");
    }
});