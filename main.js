const list = document.querySelector('.users');
const post = document.querySelector('.posts');
const comment = document.querySelector('.comments');

;(async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json()

    result.map(item => {
        users__info.textContent =`Count of Users: ${result.length}`;

        const card = document.createElement('div');
        card.setAttribute('class', "card d-flex");
        list.appendChild(card);
        
        const names = document.createElement('h5');
        names.classList.add("item")
        names.setAttribute("data-id", `${item.id}`)
        names.textContent = item.name;
        card.appendChild(names);
        
        const mail = document.createElement('span');
        mail.innerHTML = "Email:" ;
        mail.classList.add("h6");
        card.appendChild(mail);
        
        const mailLink = document.createElement('a');
        mailLink.setAttribute('href' , "#");
        mailLink.textContent = " " + item.email;
        mail.appendChild(mailLink);
        
        const country = document.createElement('h6');
        // country.innerHTML = "Country:" + item.address.city ;
        country.classList.add("h6");
        country.textContent = `Country: ${item.address.city} `
        card.appendChild(country);
        
        const corp = document.createElement('h6');
        corp.textContent = `Company: ${item.company.name}` ;
        corp.classList.add("h6");
        card.appendChild(corp);
        
        const web = document.createElement('span');
        web.setAttribute('class', 'h6');
        web.innerHTML = "Website: "
        card.appendChild(web);

        const webLink = document.createElement('a');
        webLink.setAttribute('href', '#');
        webLink.textContent = item.website;
        web.appendChild(webLink);
    });
})();


list.addEventListener('click', async(e) => {
    if (e.target.matches(".item")) {
        const id = e.target.dataset.id;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userid=${id}`);
        const result = await response.json();

        result.map(item => {

            info__post.textContent =`Count of posts: ${result.length}`;
            

            const postCard = document.createElement('div');
            postCard.setAttribute('class', 'card d-flex');
            post.appendChild(postCard);
            
            const postInfo = document.createElement('h5');
            postInfo.classList.add('post__info');
            postInfo.textContent = item.title;
            postCard.appendChild(postInfo);
            postInfo.setAttribute('data-id', `${item.id}`)
            
            const postText = document.createElement('h6');
            postText.textContent = `Post: ${item.body}`
            postCard.appendChild(postText);

            console.log(result)

        });
    }
});


post.addEventListener('click', async(e) => {
    if(e.target.matches(".post__info")){
        const comId = e.target.dataset.id;
        const responce = await fetch(`https:jsonplaceholder.typicode.com/comments?userid=${comId}`)
        const result = await responce.json();
        

        result.map(item => {
            com__info.textContent =`Count of Comments: ${result.length}`;


            const comCard = document.createElement('div');
            comCard.setAttribute('class', 'card d-flex');
            comment.appendChild(comCard);
            
            const ComTitle = document.createElement('h6');
            ComTitle.classList.add('h6');
            ComTitle.textContent = `Title: ${item.name}`;
            ComTitle.setAttribute('data-id', `${item.id}`);
            comCard.appendChild(ComTitle);
            
            
            const comMail = document.createElement('span');
            comMail.classList.add('h6');
            comCard.appendChild(comMail);

            const comLink = document.createElement('a');
            comLink.setAttribute('href', "#");
            comLink.textContent = `Email: ${item.email}`;
            comMail.appendChild(comLink);

            const comText = document.createElement('p');
            comText.textContent = `Comment: ${item.body}`;
            
            comCard.appendChild(comText)
            console.log(result);

        });
    }
});
