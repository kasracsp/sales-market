let listasli = [{
  email: "kasra@gmail.com",
  password: "k@srA001"
}, {
  email: "koosha@gmail.com",
  password: "kooshA001"
}]
const loginForm = document.querySelector(".login-form")
const errorsEl = document.querySelector(".errors")
const showPass = document.querySelector("#show-pass")
const passwordEl = document.querySelector("#password")
const emailEl = document.querySelector("#email")
let isPass = false
showPass.addEventListener("click", () => {
  if (isPass) {
    passwordEl.type = "password"
    showPass.textContent = "visibility_off"
    showPass.style.color = "var(--grey-color)"
    isPass = false
  } else {
    passwordEl.type = "text"
    showPass.textContent = "visibility"
    showPass.style.color = "var(--active-color)"
    isPass = true
  }
})
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  errorsEl.innerHTML = ""
  let emailVal = emailEl.value
  let passVal = passwordEl.value
  let indexFound = listasli.findIndex(item => item.email === emailVal)
  if (indexFound > -1) {
    let savedPass = listasli[indexFound].password
    if (savedPass === passVal) {
      alert(`welcome ${emailVal}`)
      errorsEl.style.display = "none"
      emailEl.value = ""
      passwordEl.value = ""
    } else {
      errorsEl.style.display = "flex"
      let li = document.createElement("li")
      li.classList.add("error")
      li.textContent = "ایمیل یا رمز عبور اشتباه است"
      errorsEl.appendChild(li)
    }
  } else {
    errorsEl.style.display = "flex"
    let li = document.createElement("li")
    li.classList.add("error")
    li.textContent = "ایمیل یا رمز عبور اشتباه است"
    errorsEl.appendChild(li)
  }
})