const ordersSection = document.querySelector(".orders")
const ordersMaker = document.querySelector("#orders-maker")
const firstConfirm = document.querySelector("#first-confirm")
const dateEl = document.querySelector(".date")
const dateMaker = document.querySelector("#date-maker")
const chooseDate = document.querySelector(".choose-date")
ordersSection.innerHTML = ""
let totalSum = 0
shoppingList.forEach((item, index) => {
  const ordersMakerTemp = document.importNode(ordersMaker.content, true)
  const orderItemIndex = ordersMakerTemp.querySelector(".order-item-index")
  orderItemIndex.textContent = index + 1
  const orderItemColor = ordersMakerTemp.querySelector(".order-item-color")
  orderItemColor.style.background = item.color
  const orderItemSize = ordersMakerTemp.querySelector(".order-item-size")
  if (item.size) {
    orderItemSize.style.display = "flex"
    orderItemSize.textContent = item.size
  } else {
    orderItemSize.style.display = "none"
  }
  const orderItemName = ordersMakerTemp.querySelector(".order-item-name")
  orderItemName.textContent = item.name
  orderItemName.href = item.url
  const orderItemThumb = ordersMakerTemp.querySelector(".order-item-thumb")
  orderItemThumb.src = item.thumb
  const orderItemNumber = ordersMakerTemp.querySelector(".order-item-number")
  orderItemNumber.textContent = item.quentity
  const orderItemPrice = ordersMakerTemp.querySelector(".order-item-price")
  let sumPrice = parseInt(item.quentity) * parseInt(item.price)
  orderItemPrice.textContent = sumPrice.toLocaleString() + " تومان"
  totalSum += sumPrice
  const orderItemId = ordersMakerTemp.querySelector(".order-item-id")
  orderItemId.textContent = item.id
  ordersSection.appendChild(ordersMakerTemp)
})
setTotalPrice()
const deleteItemEls = document.querySelectorAll(".delete-item")
const addEls = document.querySelectorAll(".add")
const reduceEls = document.querySelectorAll(".reduce")
//delete item
deleteItemEls.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault()
    let tempOrder = e.target.closest(".order")
    let tempOrderId = tempOrder.querySelector(".order-item-id").textContent
    let orderIndex = shoppingList.findIndex(item => item.id === tempOrderId)
    if (orderIndex > -1) {
      let quentityTemp = shoppingList[orderIndex].quentity
      let priceTemp = shoppingList[orderIndex].price
      let sumTemp = parseInt(quentityTemp) * parseInt(priceTemp)
      totalSum -= sumTemp
      setTotalPrice()
      shoppingList.splice(orderIndex, 1)
      setMyLocalStorage()
      setShoppingItems()
      tempOrder.remove()
    }
  })
})
//add item
addEls.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault()
    let tempOrder = e.target.closest(".order")
    let tempOrderId = tempOrder.querySelector(".order-item-id").textContent
    let orderIndex = shoppingList.findIndex(item => item.id === tempOrderId)
    if (orderIndex > -1) {
      let quentityTemp = shoppingList[orderIndex].quentity
      let priceTemp = shoppingList[orderIndex].price
      shoppingList[orderIndex].quentity = parseInt(quentityTemp) + 1
      const orderItemPriceTemp = tempOrder.querySelector(".order-item-price")
      orderItemPriceTemp.textContent = ((parseInt(quentityTemp) + 1) * parseInt(priceTemp)).toLocaleString() + " تومان"
      const orderItemNumberTemp = tempOrder.querySelector(".order-item-number")
      orderItemNumberTemp.textContent = parseInt(quentityTemp) + 1
      totalSum += parseInt(priceTemp)
      setTotalPrice()
      setMyLocalStorage()
      setShoppingItems()
    }
  })
})
//reduce item
reduceEls.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault()
    let tempOrder = e.target.closest(".order")
    let tempOrderId = tempOrder.querySelector(".order-item-id").textContent
    let orderIndex = shoppingList.findIndex(item => item.id === tempOrderId)
    if (orderIndex > -1) {
      let quentityTemp = shoppingList[orderIndex].quentity
      let priceTemp = shoppingList[orderIndex].price
      if (parseInt(quentityTemp) - 1 > 0) {
        shoppingList[orderIndex].quentity = parseInt(quentityTemp) - 1
        const orderItemPriceTemp = tempOrder.querySelector(".order-item-price")
        orderItemPriceTemp.textContent = ((parseInt(quentityTemp) - 1) * parseInt(priceTemp)).toLocaleString() + " تومان"
        const orderItemNumberTemp = tempOrder.querySelector(".order-item-number")
        orderItemNumberTemp.textContent = parseInt(quentityTemp) - 1
        totalSum -= parseInt(priceTemp)
        setTotalPrice()
        setMyLocalStorage()
        setShoppingItems()
      }
    }
  })
})
//set total price
function setTotalPrice() {
  const totalPrice = document.querySelector("#total-price")
  totalPrice.textContent = totalSum.toLocaleString() + " تومان"
}
firstConfirm.addEventListener("click", setDate)

function setDate() {
  firstConfirm.style.display = "none"
  chooseDate.classList.add("show")
  chooseDate.scrollIntoView(true)
  dateEl.innerHTML = ""
  let currentTime = new Date()
  let day = 60 * 60 * 24 * 1000
  for (let i = 3; i < 10; i++) {
    let dateTemp = document.importNode(dateMaker.content, true)
    let endDate = currentTime.getTime() + (day * i);
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    let persianDate = new Date(endDate).toLocaleDateString('fa-IR', options)
    let dateArrays = persianDate.split(" ")
    let input = dateTemp.querySelector(".day")
    input.id = i
    input.dataset.time = endDate
    let label = dateTemp.querySelector(".day-label")
    label.htmlFor = i
    let weekday = dateTemp.querySelector(".weekday")
    weekday.textContent = dateArrays[3]
    let dayNumber = dateTemp.querySelector(".day-number")
    dayNumber.textContent = dateArrays[2].replace(/,/g, "")
    let dayMonth = dateTemp.querySelector(".day-month")
    dayMonth.textContent = dateArrays[1]
    let dayYear = dateTemp.querySelector(".day-year")
    dayYear.textContent = dateArrays[0]
    dateEl.appendChild(dateTemp)
  }
}
const lastConfirm = document.querySelector("#last-confirm")
lastConfirm.addEventListener("click", () => {
  const choosedDay = document.querySelector(".day:checked")
  if (choosedDay) {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    let persianChoosedDate = new Date(parseInt(choosedDay.dataset.time)).toLocaleDateString('fa-IR', options)
    alert(' سفارش شما با موفقیت ثبت شد و در تاریخ ' + persianChoosedDate + ' به شما تحویل داده میشود')
    shoppingList = []
    setMyLocalStorage()
    setShoppingItems()
    window.location.replace("salesMarket.html")
  } else {
    alert('لطفاً تاریخ دریافت کالا را انتخاب کنید')
  }
})