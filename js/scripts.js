//  1)
const userFirstName = prompt('Il tuo nome: '); 

console.log('User name',userFirstName, typeof userFirstName);


//  2)
const userSecondName = prompt('Il tuo cognome: '); 

console.log('User second name',userSecondName, typeof userSecondName);


// 3)
const userColor = prompt('Il tuo colore preferito: '); 

console.log('User color',userColor, typeof uuserColor);

// 4)
const pwd = userFirstName + userSecondName + userColor + '101';

console.log('pwd', pwd, typeof pwd);







const pwdContainer = document.querySelector('#pwd-container');

// const pwdContainer = document.getElementById('pwd-container')

console.log('pwdContainer', pwdContainer, typeof pwdContainer)

const previousText = pwdContainer.innerHTML;

console.log('previousText', previousText, typeof previousText);

pwdContainer.innerHTML = previousText + pwd;


// vale anche 

// pwdContainer.innerHTML =+ pwd;

// pwdContainer.innerHTML = pwdContainer.innerHTML  + pwd;