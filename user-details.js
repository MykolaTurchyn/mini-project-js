let bodyUi = document.getElementsByTagName('body')[0];
let div = document.createElement('div');
let id = document.createElement('p');
let name = document.createElement('p');
let username = document.createElement('p');
let email = document.createElement('p');
let address = document.createElement('p');
let phone = document.createElement('p');
let website = document.createElement('p');
let company = document.createElement('p');
let btn = document.createElement('button');

let user = JSON.parse(localStorage.getItem('user'));


id.innerText = `Id: ${user.id}`;
name.innerText = `Name: ${user.name}`;
username.innerText = `UserName: ${user.username}`;
email.innerText = `Email: ${user.email}`;
address.innerText = `Address: ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`;
phone.innerText = `Phone: ${user.phone}`
website.innerText = `Website: ${user.website}`;
company.innerText = `Company: ${user.company.name}`;


btn.innerText = 'post of this user';
div.append(id, name, username, email, address, phone, website, company, btn);
div.className = 'user'
bodyUi.append(div);

btn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(data => {
            for (const post of data) {
                let postDiv = document.createElement('div');
                let title = document.createElement('p');
                let btn2 = document.createElement('button');

                title.innerText = `Title${post.id}: ${post.title}`;
                btn2.innerText = 'info of this post'
                postDiv.append(title,btn2);
                bodyUi.appendChild(postDiv);
                postDiv.className = 'post'
                btn.disabled = true


                btn2.onclick = () => {
                    localStorage.setItem('post', JSON.stringify(post));
                    window.location.href = 'post-details.html';
                    btn.disabled = true

                }
            }
        });
}