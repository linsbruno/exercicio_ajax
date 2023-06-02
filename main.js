document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('profile-avatar');
    const name = document.getElementById('profile-name');
    const username = document.getElementById('profile-username');
    const repositorios = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('profile-link');

    fetch('https://api.github.com/users/linsbruno')
    .then(function(retorno){
        return retorno.json();
    })
    .then(function(retApi){
        console.log(retApi);
        avatar.src = retApi.avatar_url;
        name.innerText = retApi.name;
        username.innerText = `@${retApi.login}`;
        repositorios.innerText = retApi.public_repos;
        followers.innerText = retApi.followers;
        following.innerText = retApi.following;
        link.href = retApi.html_url;


        console.log(avatar)
    })
})