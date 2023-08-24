let bodyFromUi = document.getElementsByTagName('body')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        for (const user of data) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let btn = document.createElement('button');
          
            p.innerText =
                `Id: ${user.id},
                Name: ${user.name}`
            btn.innerText = 'details';

            div.appendChild(p);
            div.appendChild(btn);
            bodyFromUi.appendChild(div);

            btn.onclick = () => {
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = 'user-details.html';
            }
        }

    });


