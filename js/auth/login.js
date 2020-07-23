import { post}  from '../req/requests.js';

const $form = document.querySelector('.form');
const $signUp = document.querySelector('#signup');

console.log($signUp);
$signUp.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = '/signup.html';
});

$form.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const result = await post({email, password},null,'/login');
    const json = await result.json();
    const token = json.token;
    if(token){
        sessionStorage.setItem('token', token);
        window.location.href="/index.html";
    }
    else{
        alert(json.msg);
    }

})
