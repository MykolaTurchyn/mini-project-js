let post = JSON.parse(localStorage.getItem('post'));

let bodyUi = document.getElementsByTagName('body')[0];
let div = document.createElement('div');
let div2 = document.createElement('div');
let id = document.createElement('p');
let userId = document.createElement('p');
let postBody = document.createElement('p');
let title = document.createElement('p');
let btn = document.createElement('button');


id.innerText = `Post id: ${post.id} `
userId.innerText = `User id: ${post.userId} `
postBody.innerText = `Body: ${post.body} `
title.innerText = `Title: ${post.title} `
btn.innerText = 'show comments';
div.className = 'postDiv';

div.append(id, userId, postBody, title, btn);
bodyUi.appendChild(div2);
div2.appendChild(div)

btn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(response => response.json())
        .then(data => {
            for (let comment of data) {
                let commentDiv = document.createElement('div');
                let commentId = document.createElement('p');
                let postId = document.createElement('p');
                let commentName = document.createElement('p');
                let commentBody = document.createElement('p');
                let commentEmail = document.createElement('p');

                commentId.innerText = ` Id: ${comment.id}`;
                postId.innerText = `Post id: ${comment.postId}`;
                commentName.innerText = `Name: ${comment.name}`;
                commentBody.innerText = `Body: ${comment.body}`;
                commentEmail.innerText = `Email: ${comment.email}`;
                commentDiv.className = 'commentDiv';

                commentDiv.append(commentId, postId, commentName, commentBody, commentEmail);
                div2.appendChild(commentDiv);
                btn.disabled = true
            }
        });

}
