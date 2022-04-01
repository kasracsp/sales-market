let listasli = [{
  email: "kasra@gmail.com",
  username: "kasra",
  password: "k@srA001"
}, {
  email: "koosha@gmail.com",
  username: "koosha",
  password: "kooshA001"
}]
let weakness = []
let passWeakness = []
let emailError = false
let passError = false
let coPassError = false
const registerForm = document.querySelector(".register-form")
const errorsEl = document.querySelector(".errors")
const strengthEl = document.querySelector(".strength")
const strRange = document.querySelector(".str-range")
const strCondition = document.querySelector(".str-condition")
const showPass = document.querySelector("#show-pass")
const showCoPass = document.querySelector("#show-co-pass")
const passwordEl = document.querySelector("#password")
const coPasswordEl = document.querySelector("#co-password")
const emailEl = document.querySelector("#email")
const usernameEl = document.querySelector("#username")
let isPass = false
let isCoPass = false
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
showCoPass.addEventListener("click", () => {
  if (isCoPass) {
    coPasswordEl.type = "password"
    showCoPass.textContent = "visibility_off"
    showCoPass.style.color = "var(--grey-color)"
    isCoPass = false
  } else {
    coPasswordEl.type = "text"
    showCoPass.textContent = "visibility"
    showCoPass.style.color = "var(--active-color)"
    isCoPass = true
  }
})
emailEl.addEventListener("change", () => {
  let emailVal = emailEl.value.toLowerCase()
  let indexFound = listasli.findIndex(item => item.email === emailVal)
  if (indexFound > -1) {
    emailError = true
  } else {
    emailError = false
  }
})
passwordEl.addEventListener("focus", () => {
  const strNote = document.querySelector(".str-note")
  strNote.style.display = "block"
})
passwordEl.addEventListener("blur", () => {
  const strNote = document.querySelector(".str-note")
  strNote.style.display = "none"
})
passwordEl.addEventListener("change", () => {
  strengthEl.style.display = "flex"
  passWeakness = []
  let passVal = passwordEl.value
  if (passVal.length < 8) {
    passWeakness.push(51)
  } else if (passVal.length < 10) {
    passWeakness.push(15)
  } else {
    passWeakness.push(0)
  }
  let uppercase = passVal.match(/[^a-z0-9\s]/g) || []
  if (uppercase.length === 0) {
    passWeakness.push(29)
  } else if (uppercase.length === 1) {
    passWeakness.push(15)
  } else {
    passWeakness.push(0)
  }
  let number = passVal.match(/[0-9]/g) || []
  if (number.length === 0) {
    passWeakness.push(29)
  } else if (number.length === 1) {
    passWeakness.push(15)
  } else {
    passWeakness.push(0)
  }
  if (passWeakness.length > 0) {
    let sum = 100
    passWeakness.forEach(item => {
      sum -= parseInt(item)
    })
    strRange.style.setProperty('--range-width', sum)
    if (sum < 50) {
      strRange.style.setProperty('--range-color', 'var(--active-color)')
      strCondition.textContent = "ضعیف"
      passError = true
    } else if (sum <= 70) {
      strRange.style.setProperty('--range-color', 'var(--sun-color)')
      strCondition.textContent = "متوسط"
      passError = false
    } else {
      strRange.style.setProperty('--range-color', 'var(--nature-color)')
      strCondition.textContent = "خوب"
      passError = false
    }
  }
})
coPasswordEl.addEventListener("change", () => {
  let passVal = passwordEl.value
  let coPassVal = coPasswordEl.value
  const coPassNote = document.querySelector(".co-pass-note")
  if (coPassVal === passVal) {
    coPassError = false
    coPassNote.style.display = "none"
  } else {
    coPassError = true
    coPassNote.style.display = "block"
  }
})
registerForm.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("errors")
  if (emailError === true) {
    weakness.push("ایمیل وارد شده قبلاً در سیستم ثبت شده است!")
  }
  if (passError === true) {
    weakness.push("رمز عبور صحیح‌ نمی باشد!")
  }
  if (coPassError === true) {
    weakness.push("تکرار رمز عبور صحیح‌ نمی باشد!")
  }
  if (weakness.length > 0) {
    errorsEl.style.display = "flex"
    setErrors()
  } else {
    errorsEl.style.display = "none"
    alert(`welcome ${usernameEl.value}`)
    cleanInputs()
  }
})

function setErrors() {
  errorsEl.innerHTML = ""
  weakness.forEach(item => {
    let li = document.createElement("li")
    li.classList.add("error")
    li.textContent = item
    errorsEl.appendChild(li)
  })
  weakness = []
}

function cleanInputs() {
  usernameEl.value = ""
  emailEl.value = ""
  passwordEl.value = ""
  coPasswordEl.value = ""
  const coPassNote = document.querySelector(".co-pass-note")
  const strNote = document.querySelector(".str-note")
  strNote.style.display = "none"
  coPassNote.style.display = "none"
  strengthEl.style.display = "none"
  weakness = []
}