const formEl = document.querySelector(".login-form");
// const inputEl = document.querySelectorAll("input");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("заповніть порожній рядок");
  } else {
    console.log(" email", email.value);
    console.log("password", password.value);
    formEl.reset();
  }
}
