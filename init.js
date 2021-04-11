
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.date;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.querySelector('.comma').innerText = ',';
    
};

//Перезагрузить страницу

const btnOnload = document.querySelector('.btn-dark');
const btnClean = document.querySelector('.btn-danger');



btnOnload.addEventListener('click', () => {
    window.onload();
  });

  btnClean.addEventListener('click', () => {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('genderOutput').innerText ='';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.querySelector('.comma').innerText = '';
  });

