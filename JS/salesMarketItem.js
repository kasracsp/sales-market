const ancestor = getParameterByName('ancestor')
const parent = getParameterByName('parent')
const child = getParameterByName('child')
const modelId = getParameterByName('modelId')
const modal = document.querySelector(".modal")
const modalNote = document.querySelector(".modal-note")
const modalContext = document.querySelector(".modal-context")
const modalBtn = document.querySelector(".modal-btn")
if (!ancestor) {
  modal.classList.add("active")
  overlay.classList.add("show")
  setTimeout(() => {
    window.location.replace("salesMarket.html")
  }, 3000)
}
let commentList = []
const ancestorPath = document.querySelector("#ancestor-path")
const parentPath = document.querySelector("#parent-path")
const childPath = document.querySelector("#child-path")
const modelPath = document.querySelector("#model-path")
const mainPicture = document.querySelector(".main-picture")
const mainPic = document.querySelector(".main-pic")
const itemName = document.querySelector(".item-name")
const thumbs = document.querySelector(".thumbs")
const itemColors = document.querySelector(".item-colors")
const itemSizes = document.querySelector(".item-sizes")
const itemSizesHolder = document.querySelector(".item-sizes-holder")
const itemFeature = document.querySelector(".item-feature")
const itemDiscount = document.querySelector(".item-discount")
const discountPercent = document.querySelector(".discount-percent")
const previousPrice = document.querySelector(".previous-price")
const currentPrice = document.querySelector(".current-price")
const commentForm = document.querySelector(".comment-form")
const usernameEl = document.querySelector("#username")
const commentEl = document.querySelector("#comment")
const showingComment = document.querySelector(".showing-comment")
const commentIntro = document.querySelector(".comment-intro")
const commentMaker = document.querySelector("#comment-maker")
const lens = document.querySelector("#lens")
const fullSize = document.querySelector(".full-size")
const fullSizePic = document.querySelector(".full-size-pic")
//finding index and persian name of each sending data by url
//ancestor
let ancestorIndex = databas.findIndex(item => item.ancestor === ancestor)
let ancestorPresianName = databas[ancestorIndex].persianName
ancestorPath.textContent = ancestorPresianName
//parent
let parentIndex = databas[ancestorIndex].parent.findIndex(item => item.name === parent)
let parentPresianName = databas[ancestorIndex].parent[parentIndex].persianName
parentPath.textContent = parentPresianName
parentPath.href = "salesMarketCategory.html?ancestor=" + ancestor + "&parent=" + parent + "&child=all"
//child
let childIndex = databas[ancestorIndex].parent[parentIndex].child.findIndex(item => item.name === child)
let childPresianName = databas[ancestorIndex].parent[parentIndex].child[childIndex].persianName
childPath.textContent = childPresianName
childPath.href = "salesMarketCategory.html?ancestor=" + ancestor + "&parent=" + parent + "&child=" + child
//model
let modelIndex = databas[ancestorIndex].parent[parentIndex].child[childIndex].models.findIndex(item => item.id === modelId)
let modelName = databas[ancestorIndex].parent[parentIndex].child[childIndex].models[modelIndex].name
modelPath.textContent = modelName
//set starting page
let dataTemp = databas[ancestorIndex].parent[parentIndex].child[childIndex].models[modelIndex]
mainPic.src = dataTemp.thumbnails[0]
let commentListTemp = JSON.parse(localStorage.getItem("commentListSaved"))
if (commentListTemp) {
  commentList = commentListTemp
  let tempList = []
  tempList = commentList.filter(item => {
    if (item.id === dataTemp.id) {
      return item
    }
  })
  if (tempList.length > 0) {
    setCommentSection(tempList)
  } else {
    showingComment.style.display = "none"
    commentIntro.style.display = "none"
  }
}
let targetX = mainPic.offsetWidth
let targetY = mainPic.offsetHeight
lens.style.backgroundImage = `url(${dataTemp.thumbnails[0]})`
lens.style.backgroundSize = `${targetX*2}px ${targetY*2}px`
dataTemp.thumbnails.forEach((item, index) => {
  let div = document.createElement("div")
  div.classList.add("thumbnail")
  if (index === 0) {
    div.classList.add("active")
  }
  let img = document.createElement("img")
  img.classList.add("thumb-img")
  img.src = item
  div.appendChild(img)
  thumbs.appendChild(div)
})
itemName.textContent = dataTemp.name
let newColor = ""
dataTemp.color.forEach(item => {
  newColor += `
		<div class="item-color">
				<input type="radio"name="color"id="${item}"class="color"data-color="${item}"required>
				<label for="${item}"></label>
			</div>
		`
})
itemColors.innerHTML = newColor
if (ancestor === "tech" || ancestor === "kitchen") {
  itemSizesHolder.style.display = "none"
} else {
  let newSize = ""
  dataTemp.size.forEach(item => {
    newSize += `
		<div class="item-size">
				<input type="radio"name="size"id="${item}"class="size"data-size="${item}"required>
				<label for="${item}">${item}</label>
		</div>
		`
  })
  itemSizes.innerHTML = newSize
}
currentPrice.textContent = dataTemp.currentPrice.toLocaleString() + " تومان"
let discountMath = Math.round(((dataTemp.previousPrice - dataTemp.currentPrice) * 100) / dataTemp.previousPrice)
if (discountMath == 0) {
  itemDiscount.style.display = "none"
} else {
  previousPrice.textContent = dataTemp.previousPrice.toLocaleString()
  discountPercent.textContent = "%" + discountMath
}
//submitting form
itemFeature.addEventListener("submit", (e) => {
  e.preventDefault()
  let choosedColor = document.querySelector(".color:checked")
  let choosedColorName = choosedColor.dataset.color
  let choosedSize = document.querySelector(".size:checked")
  let choosedSizeName = ""
  if (choosedSize) {
    choosedSizeName = choosedSize.dataset.size
    let itemExist = shoppingList.findIndex(item => item.id === (dataTemp.id + choosedColorName + choosedSizeName))
    if (itemExist > -1) {
      let quentity = shoppingList[itemExist].quentity
      shoppingList[itemExist].quentity = parseInt(quentity) + 1
    } else {
      shoppingList.push({
        name: itemName.textContent,
        color: choosedColorName,
        thumb: mainPic.src,
        price: dataTemp.currentPrice,
        size: choosedSizeName,
        quentity: 1,
        id: dataTemp.id + choosedColorName + choosedSizeName,
        url: dataTemp.url
      })
    }
  } else {
    let itemExistByColor = shoppingList.findIndex(item => item.id === (dataTemp.id + choosedColorName))
    if (itemExistByColor > -1) {
      let quentity = shoppingList[itemExistByColor].quentity
      shoppingList[itemExistByColor].quentity = parseInt(quentity) + 1
    } else {
      shoppingList.push({
        name: itemName.textContent,
        color: choosedColorName,
        thumb: mainPic.src,
        price: dataTemp.currentPrice,
        size: choosedSizeName,
        quentity: 1,
        id: dataTemp.id + choosedColorName,
        url: dataTemp.url
      })
    }
  }
  setMyLocalStorage()
  setShoppingItems()
  modalNote.classList.add("succes")
  modalNote.textContent = "موفق"
  modalContext.classList.add("succes")
  modalContext.textContent = "کالای مورد نظر به لیست خرید شما اضافه شد، سپاس از خرید شما"
  modalBtn.classList.add("succes")
  modal.classList.add("active")
  setTimeout(() => {
    window.location.replace("salesMarketItem.html?ancestor=" + ancestor + "&parent=" + parent + "&child=" + child + "&modelId=" + modelId)
  }, 1000);
})
modalBtn.addEventListener("click", () => {
  modal.classList.remove("active")
  overlay.classList.remove("show")
})
//adding comment
commentForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let commentTemp = document.importNode(commentMaker.content, true)
  let customerName = commentTemp.querySelector(".customer-name")
  customerName.textContent = usernameEl.value
  let customerComment = commentTemp.querySelector(".customer-comment")
  customerComment.textContent = commentEl.value
  let commentTime = commentTemp.querySelector(".comment-time")
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let commentDate = new Date().toLocaleDateString('fa-IR', options)
  commentTime.textContent = commentDate
  showingComment.appendChild(commentTemp)
  commentList.push({
    id: dataTemp.id,
    name: usernameEl.value,
    comment: commentEl.value,
    time: commentDate
  })
  localStorage.setItem("commentListSaved", JSON.stringify(commentList))
  usernameEl.value = ""
  commentEl.value = ""
  showingComment.style.display = "flex"
  commentIntro.style.display = "flex"
})
const thumbnails = document.querySelectorAll(".thumbnail")
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", (e) => {
    let thumbDiv = e.target.src
    thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove("active")
    })
    thumbnail.classList.add("active")
    mainPic.src = thumbDiv
    let targetX = mainPic.offsetWidth
    let targetY = mainPic.offsetHeight
    lens.style.backgroundImage = `url(${thumbDiv})`
    lens.style.backgroundSize = `${targetX*2}px ${targetY*2}px`
  })
})
mainPic.addEventListener("click", () => {
  fullSizePic.src = mainPic.src
  fullSize.classList.add("show")
})
fullSize.addEventListener("click", () => {
  fullSize.classList.remove("show")
})
//lens
//compatible with touch screen
let lensX = lens.offsetWidth
let lensY = lens.offsetHeight
let mainPX = mainPicture.offsetWidth
let mainPY = mainPicture.offsetHeight
let ratio = 2
const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
if (!isMobile) {
  mainPic.addEventListener("touchstart", touchMove)
  mainPic.addEventListener("touchmove", touchMove)
  mainPic.addEventListener("mousemove", touchMove)
  mainPic.addEventListener("touchEnd", touchEnd)
  mainPic.addEventListener("mouseleave", touchEnd)
}

function touchMove(e) {
  lens.classList.add("active")
  let x = getPosX(e)
  let y = getPosY(e)
  let posX = (x / mainPX) * 100
  let posY = (y / mainPY) * 100
  lens.style.left = `${posX}%`
  lens.style.top = `${posY}%`
  let halfLensX = lensX / 2
  let halfLensY = lensY / 2
  lens.style.backgroundPosition = "-" + ((x * ratio) - halfLensX) + "px -" + ((y * ratio) - halfLensY) + "px"
}

function touchEnd() {
  lens.classList.remove("active")
}

function getPosX(e) {
  if (e.type.includes("mouse")) {
    return e.offsetX
  } else {
    let rect = e.target.getBoundingClientRect();
    let touchX = e.touches[0].clientX - rect.left;
    return touchX
  }
}

function getPosY(e) {
  if (e.type.includes("mouse")) {
    return e.offsetY
  } else {
    let rect = e.target.getBoundingClientRect();
    let touchY = e.touches[0].clientY - rect.top;
    return touchY
  }
}
//set comments
function setCommentSection(list) {
  showingComment.style.display = "flex"
  commentIntro.style.display = "flex"
  showingComment.innerHTML = ""
  list.forEach(item => {
    let commentTemp = document.importNode(commentMaker.content, true)
    let customerName = commentTemp.querySelector(".customer-name")
    customerName.textContent = item.name
    let customerComment = commentTemp.querySelector(".customer-comment")
    let commentTime = commentTemp.querySelector(".comment-time")
    customerComment.textContent = item.comment
    commentTime.textContent = item.time
    showingComment.appendChild(commentTemp)
  })
}
//get parameters by url
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}