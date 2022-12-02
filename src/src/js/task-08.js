// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector(".login-form");
// const inputEl = document.querySelectorAll("input");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  const emailEl = email.value ? email.value : alert("заповніть email");
  const passwordEL = password.value
    ? password.value
    : alert("заповніть password");

  console.log(" email", emailEl);
  console.log("password", passwordEL);
}
