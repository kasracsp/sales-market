//carrousel database
const carrousel = ["images/carrousel/1.jpg", "images/carrousel/2.jpg", "images/carrousel/3.jpg", "images/carrousel/4.jpg", "images/carrousel/5.jpg", "images/carrousel/6.jpg", "images/carrousel/7.jpg"]
//carrosel
const fantasticItemMaker = document.querySelector("#fantastic-item-maker")
const fantasticItems = document.querySelector(".fantastic-items")
const slider = document.querySelector(".slider")
const slidesIndexUl = document.querySelector(".slides-index")
slider.innerHTML = ""
slidesIndexUl.innerHTML = ""
carrousel.forEach((item, index) => {
  let slidesDiv = document.createElement("div")
  slidesDiv.classList.add("slides")
  let slideDiv = document.createElement("div")
  slideDiv.classList.add("slide")
  let img = document.createElement("img")
  img.classList.add("slide-img")
  img.src = item
  slideDiv.appendChild(img)
  slidesDiv.appendChild(slideDiv)
  slider.appendChild(slidesDiv)
  let slideIndexLi = document.createElement("li")
  slideIndexLi.classList.add("slide-index")
  if (index === 0) {
    slideIndexLi.classList.add("active")
  }
  slideIndexLi.dataset.index = index
  slidesIndexUl.appendChild(slideIndexLi)
})
//carrosel auto running
setInterval(() => {
  if (currentIndex < slides.length - 1) {
    currentIndex += 1
  } else {
    currentIndex = 0
  }
  setPosByIndex()
  setSlideIndex()
}, 10000)
const slidesIndex = document.querySelectorAll(".slide-index")
slidesIndex.forEach(slideIndex => {
  slideIndex.addEventListener("click", (e) => {
    let slideId = e.target.dataset.index
    currentIndex = parseInt(slideId)
    setPosByIndex()
    setSlideIndex()
  })
})
const slides = [...document.querySelectorAll(".slides")]
let isDragging = false
let startPos = 0,
  currentIndex = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationId = 0
slides.forEach((slide, index) => {
  const image = slide.querySelector(".slide-img")
  image.addEventListener("dragstart", (e) => {
    e.preventDefault()
  })
  slide.addEventListener("touchstart", touchStart(index))
  slide.addEventListener("touchend", touchEnd)
  slide.addEventListener("touchmove", touchMove)
  slide.addEventListener("mousedown", touchStart(index))
  slide.addEventListener("mouseup", touchEnd)
  slide.addEventListener("mouseleave", touchEnd)
  slide.addEventListener("mousemove", touchMove)
})
//fantastic offer
let ancestorIndex = databas.findIndex(item => item.ancestor === "best-offer-goods")
databas[ancestorIndex].parent[0].child[0].models.forEach(item => {
  const templateItemMaker = document.importNode(fantasticItemMaker.content, true)
  const fantasticItem = templateItemMaker.querySelector(".fantastic-item")
  fantasticItem.href = item.url
  const fantasticItemThumb = templateItemMaker.querySelector(".fantastic-item-thumb")
  fantasticItemThumb.src = item.thumbnails[0]
  const fantasticItemName = templateItemMaker.querySelector(".fantastic-item-name")
  fantasticItemName.textContent = item.name
  const price = templateItemMaker.querySelector(".price")
  price.textContent = item.previousPrice.toLocaleString()
  const currentPrice = templateItemMaker.querySelector(".current-price")
  currentPrice.textContent = item.currentPrice.toLocaleString() + " تومان"
  const discount = templateItemMaker.querySelector(".discount")
  let discountMath = ((item.previousPrice - item.currentPrice) * 100) / item.previousPrice
  discount.textContent = "%" + parseInt(discountMath).toLocaleString()
  fantasticItems.appendChild(templateItemMaker)
})
//left & right for fantastic offer
const fantasticSuggestion = document.querySelector(".fantastic-suggestion")
const leftEl = document.querySelector(".left")
const rightEl = document.querySelector(".right")
//compatible with touch screen
const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
if (isMobile) {
  leftEl.style.display = "none"
  rightEl.style.display = "none"
  fantasticSuggestion.style.overflow = "scroll"
}
//set what should do when clicking on them
let translateChange = 0
leftEl.addEventListener("click", () => {
  rightEl.style.display = "flex"
  let fsWidth = fantasticSuggestion.offsetWidth
  let fIWidth = fantasticItems.offsetWidth
  translateChange += fsWidth
  if (translateChange + 10 > fIWidth - fsWidth) {
    translateChange = fIWidth - fsWidth
    leftEl.style.display = "none"
  }
  fantasticItems.style.transform = `translateX(${translateChange}px)`
})
rightEl.addEventListener("click", () => {
  leftEl.style.display = "flex"
  let fsWidth = fantasticSuggestion.offsetWidth
  let fIWidth = fantasticItems.offsetWidth
  translateChange -= fsWidth
  if (translateChange < 10) {
    translateChange = 0
    rightEl.style.display = "none"
  }
  fantasticItems.style.transform = `translateX(${translateChange}px)`
})

function touchStart(index) {
  return function() {
    isDragging = true
    startPos = getPosX(event)
    currentIndex = index
    animationId = requestAnimationFrame(animation)
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationId)
  const movedBy = currentTranslate - prevTranslate
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1
  setPosByIndex()
  setSlideIndex()
}

function touchMove() {
  if (isDragging) {
    let currentPos = getPosX(event)
    currentTranslate = prevTranslate + currentPos - startPos
    setCurrentTranslate()
  }
}

function getPosX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
}

function animation() {
  setCurrentTranslate()
  if (isDragging) requestAnimationFrame(animation)
}

function setCurrentTranslate() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPosByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  setCurrentTranslate()
  prevTranslate = currentTranslate
}

function setSlideIndex() {
  slidesIndex.forEach(slideIndex => {
    let slideDataId = slideIndex.dataset.index
    if (slideDataId == currentIndex) {
      slideIndex.classList.add("active")
    } else {
      slideIndex.classList.remove("active")
    }
  })
}
//observer
const childsObserve = document.querySelectorAll(".child-observe")
const headerEl = document.querySelector(".navbar")
const techOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "-200px 0px 0px 0px"
}
const techObserver = new IntersectionObserver(function(entries, techObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("active")
      techObserver.unobserve(entry.target)
    }
  })
}, techOptions)
childsObserve.forEach(child => {
  techObserver.observe(child)
})