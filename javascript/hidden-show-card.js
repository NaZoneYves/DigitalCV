function showBtn(btnId){
  document.getElementById(btnId).style.display = 'inline';
}

function hiddenBtn(btnId){
  document.getElementById(btnId).style.display = "none";
}

function showContent(btnId, textId){
  document.getElementById(textId).style.display = 'inline';
  hiddenBtn(btnId); 
}

function hiddenContent(btnId, textId){
  document.getElementById(textId).style.display='none';
  hiddenBtn(btnId);
}

const form = document.getElementById('form');
const email = document.getElementById('email');
const cardText = document.getElementById('card-text-1');
const errorEmail = document.getElementById('errorEmail');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  checkEmail(email.value);
})

function checkEmail(email){
  if (email === 'admin@gmail.com') {
    cardText.style.display = 'inline';
    form.style.display = 'none';
  }
  else{
    errorEmail.style.display = 'inline';
  }
}
