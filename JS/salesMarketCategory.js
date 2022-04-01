const ancestor = getParameterByName('ancestor')
const parent = getParameterByName('parent')
let child = getParameterByName('child')
const ancestorPath = document.querySelector("#ancestor-path")
const parentPath = document.querySelector("#parent-path")
const childPath = document.querySelector("#child-path")
let ancestorIndex = databas.findIndex(item => item.ancestor === ancestor)
let ancestorPresianName = databas[ancestorIndex].persianName
ancestorPath.textContent = ancestorPresianName
//parent
let parentIndex = databas[ancestorIndex].parent.findIndex(item => item.name === parent)
let parentPresianName = databas[ancestorIndex].parent[parentIndex].persianName
parentPath.textContent = parentPresianName
parentPath.href = "salesMarketCategory.html?ancestor=" + ancestor + "&parent=" + parent + "&child=all"
//child
let childIndex
if (child === "all") {
  childPath.textContent = "همه ی دسته بندی ها"
  childPath.href = "salesMarketCategory.html?ancestor=" + ancestor + "&parent=" + parent + "&child=all"
} else {
  childIndex = databas[ancestorIndex].parent[parentIndex].child.findIndex(item => item.name === child)
  let childPresianName = databas[ancestorIndex].parent[parentIndex].child[childIndex].persianName
  childPath.textContent = childPresianName
  childPath.href = "salesMarketCategory.html?ancestor=" + ancestor + "&parent=" + parent + "&child=" + child
}
//set items 
const brandFilterMaker = document.querySelector("#brand-filter-maker")
const brandItems = document.querySelector(".brand-items")
const fantasticItemMaker = document.querySelector("#fantastic-item-maker")
const itemsBody = document.querySelector(".items-body")
const pagination = document.querySelector(".pagination")
let tempList = []
if (child === "all") {
  tempList = databas[ancestorIndex].parent[parentIndex].child.flatMap(items => {
    return items.models.map(item => {
      return item
    })
  })
} else {
  tempList = databas[ancestorIndex].parent[parentIndex].child[childIndex].models.map(item => {
    return item
  })
}
let brandList = databas[ancestorIndex].parent[parentIndex].child.map(item => {
  return {
    name: item.name,
    persianName: item.persianName
  }
})
brandList.forEach(item => {
  let tempBrand = document.importNode(brandFilterMaker.content, true)
  let inputTemp = tempBrand.querySelector("input")
  inputTemp.name = item.name
  inputTemp.id = item.name
  if (item.name === child) {
    inputTemp.checked = true
  } else {
    inputTemp.checked = false
  }
  let labelTemp = tempBrand.querySelector("label")
  labelTemp.htmlFor = item.name
  labelTemp.textContent = item.persianName
  brandItems.appendChild(tempBrand)
})
let lengthOfChilds = 0
let numberOfPagination = 0
let choosenPag = 1
startPage()
//filters
const filters = document.querySelector(".filters")
const openFilter = document.querySelector("#open-filter")
const backBtn = document.querySelector("#back")
//open and close filters
openFilter.addEventListener("click", () => {
  filters.classList.add("active")
})
backBtn.addEventListener("click", () => {
  filters.classList.remove("active")
})
//brand search input
const brandSearchInput = document.querySelector(".brand-search")
brandSearchInput.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase()
  const brandItemChecks = document.querySelectorAll(".brand-item")
  brandItemChecks.forEach(item => {
    let InputId = item.querySelector("input").id
    let labelName = item.querySelector("label").textContent
    let isVisible = labelName.toLowerCase().includes(value) || InputId.toLowerCase().includes(value)
    if (!isVisible) {
      item.style.display = "none"
    } else {
      item.style.display = "flex"
    }
  })
})
//range filter
const rangeEls = document.querySelectorAll(".range")
const priceProgress = document.querySelector(".price-progress")
const minPriceNum = document.querySelector("#min-price-num")
const maxPriceNum = document.querySelector("#max-price-num")
const priceConfirm = document.querySelector("#price-confirm")
let priceGap = 1000000,
  minChoosedPrice = 0,
  maxChoosedPrice = 100000000
rangeEls.forEach(range => {
  range.addEventListener("input", (e) => {
    let minVal = parseInt(rangeEls[0].value)
    let maxVal = parseInt(rangeEls[1].value)
    if (maxVal - minVal < priceGap) {
      if (e.target.id === "min-price") {
        rangeEls[0].value = maxVal - priceGap
      } else {
        rangeEls[1].value = minVal + priceGap
      }
    } else {
      priceProgress.style.right = (minVal / rangeEls[0].max) * 100 + "%"
      priceProgress.style.left = 100 - (maxVal / rangeEls[1].max) * 100 + "%"
    }
    minPriceNum.textContent = parseInt(rangeEls[0].value).toLocaleString()
    maxPriceNum.textContent = parseInt(rangeEls[1].value).toLocaleString()
    minChoosedPrice = rangeEls[0].value
    maxChoosedPrice = rangeEls[1].value
  })
})
//confirm filters
priceConfirm.addEventListener("click", () => {
  let brandCheckList = []
  const brandCheckboxes = [...document.querySelectorAll(".brand-checkbox:checked")]
  if (brandCheckboxes.length > 0) {
    brandCheckboxes.forEach(item => {
      brandCheckList.push(item.id)
    })
  }
  if (brandCheckList.length <= 0) {
    tempList = databas[ancestorIndex].parent[parentIndex].child.flatMap(items => {
      return items.models.map(item => {
        return item
      })
    })
    childPath.textContent = "همه ی دسته بندی ها"
    childPath.href = "salesMarketCategory.html?ancestor=" + ancestor + "&parent=" + parent + "&child=all"
  } else if (brandCheckList.length === 1) {
    childIndex = databas[ancestorIndex].parent[parentIndex].child.findIndex(item => item.name === brandCheckList[0])
    child = databas[ancestorIndex].parent[parentIndex].child[childIndex].name
    tempList = databas[ancestorIndex].parent[parentIndex].child[childIndex].models.map(item => {
      return item
    })
    childPresianName = databas[ancestorIndex].parent[parentIndex].child[childIndex].persianName
    childPath.textContent = childPresianName
    childPath.href = "salesMarketCategory.html?ancestor=" + ancestor + "&parent=" + parent + "&child=" + child
  } else {
    tempList = []
    brandCheckList.forEach(itemId => {
      childIndex = databas[ancestorIndex].parent[parentIndex].child.findIndex(item => item.name === itemId)
      let listOfModels = databas[ancestorIndex].parent[parentIndex].child[childIndex].models.map(item => {
        return item
      })
      tempList = tempList.concat(listOfModels)
    })
    childPath.textContent = "همه ی دسته بندی ها"
    childPath.href = "salesMarketCategory.html?ancestor=" + ancestor + "&parent=" + parent + "&child=all"
  }
  tempList = tempList.filter(item => {
    if (item.currentPrice <= maxChoosedPrice && item.currentPrice >= minChoosedPrice) {
      return item
    }
  })
  sortItems(tempList)
  startPage()
  filters.classList.remove("active")
  brandSearchInput.value = ""
  const brandItemChecks = document.querySelectorAll(".brand-item")
  brandItemChecks.forEach(item => {
    item.style.display = "flex"
  })
})
//sort
const sortEls = document.querySelectorAll(".sort")
sortEls.forEach(sortEl => {
  sortEl.addEventListener("click", (e) => {
    sortEls.forEach(sortEl => {
      sortEl.classList.remove("active")
    })
    sortEl.classList.add("active")
    sortItems(tempList)
  })
})
sortItems(tempList)
//functions
function startPage() {
  pagination.innerHTML = ""
  lengthOfChilds = tempList.length
  numberOfPagination = Math.ceil(lengthOfChilds / 6)
  choosenPag = 1
  if (numberOfPagination > 1) {
    paginationGender(numberOfPagination, choosenPag)
    renderPage(tempList)
  } else {
    renderPage(tempList)
  }
}

function renderPage(list) {
  itemsBody.innerHTML = ""
  for (let i = ((choosenPag - 1) * 6); i < (choosenPag * 6); i++) {
    if (i >= list.length) {
      return
    }
    const templateItemMaker = document.importNode(fantasticItemMaker.content, true)
    const fantasticItem = templateItemMaker.querySelector(".fantastic-item")
    fantasticItem.href = list[i].url
    const fantasticItemThumb = templateItemMaker.querySelector(".fantastic-item-thumb")
    fantasticItemThumb.src = list[i].thumbnails[0]
    const fantasticItemName = templateItemMaker.querySelector(".fantastic-item-name")
    fantasticItemName.textContent = list[i].name
    const price = templateItemMaker.querySelector(".price")
    price.textContent = list[i].previousPrice.toLocaleString()
    const currentPrice = templateItemMaker.querySelector(".current-price")
    currentPrice.textContent = list[i].currentPrice.toLocaleString() + " تومان"
    const discount = templateItemMaker.querySelector(".discount")
    let discountMath = Math.round(((list[i].previousPrice - list[i].currentPrice) * 100) / list[i].previousPrice)
    const previousPriceSection = templateItemMaker.querySelector(".previous-price")
    const previousPrice = templateItemMaker.querySelector(".price")
    if (discountMath == 0) {
      previousPriceSection.style.opacity = 0
    } else {
      previousPriceSection.style.opacity = 1
      previousPrice.textContent = list[i].previousPrice.toLocaleString()
      discount.textContent = "%" + discountMath.toLocaleString()
    }
    itemsBody.appendChild(templateItemMaker)
  }
}
//pag gender
function paginationGender(pagLength, index) {
  if (index > 1) {
    let li = document.createElement("li")
    li.classList.add("pag-index", "pag-btn")
    li.textContent = "قبلی"
    li.addEventListener("click", renderPageByPrevBtn)
    pagination.appendChild(li)
  }
  if (index > 2) {
    let li = document.createElement("li")
    li.classList.add("pag-index")
    li.textContent = "1"
    li.addEventListener("click", renderPageByPag)
    pagination.appendChild(li)
    if (index > 3) {
      let li = document.createElement("li")
      li.classList.add("pag-index", "pag-dots")
      li.textContent = "..."
      pagination.appendChild(li)
    }
  }
  for (let i = index - 1; i <= index + 1; i++) {
    if (i == 0) {
      i++
    }
    if (i <= pagLength) {
      let li = document.createElement("li")
      li.classList.add("pag-index")
      if (i === index) {
        li.classList.add("active")
      }
      li.textContent = i
      li.addEventListener("click", renderPageByPag)
      pagination.appendChild(li)
    }
  }
  if (index < pagLength - 1) {
    if (index < pagLength - 2) {
      let li = document.createElement("li")
      li.classList.add("pag-index", "pag-dots")
      li.textContent = "..."
      pagination.appendChild(li)
    }
    let li = document.createElement("li")
    li.classList.add("pag-index")
    li.textContent = pagLength
    li.addEventListener("click", renderPageByPag)
    pagination.appendChild(li)
  }
  if (index < pagLength) {
    let li = document.createElement("li")
    li.classList.add("pag-index", "pag-btn")
    li.textContent = "بعدی"
    li.addEventListener("click", renderPageByNextBtn)
    pagination.appendChild(li)
  }
}

function renderPageByPag(e) {
  choosenPag = parseInt(e.target.textContent)
  pagination.innerHTML = ""
  paginationGender(numberOfPagination, choosenPag)
  itemsBody.innerHTML = ""
  renderPage(tempList)
}

function renderPageByPrevBtn() {
  choosenPag--
  pagination.innerHTML = ""
  paginationGender(numberOfPagination, choosenPag)
  itemsBody.innerHTML = ""
  renderPage(tempList)
}

function renderPageByNextBtn() {
  choosenPag++
  pagination.innerHTML = ""
  paginationGender(numberOfPagination, choosenPag)
  itemsBody.innerHTML = ""
  renderPage(tempList)
}

function sortItems(list) {
  let targetId = ""
  sortEls.forEach(sortEl => {
    if (sortEl.classList.contains("active")) {
      targetId = sortEl.id
    }
  })
  switch (targetId) {
    case "most-expensive":
      tempList = list.sort(function(a, b) {
        return b.currentPrice - a.currentPrice;
      })
      startPage(tempList)
      break;
    case "cheapest":
      tempList = list.sort(function(a, b) {
        return a.currentPrice - b.currentPrice;
      })
      startPage(tempList)
      break;
    default:
      tempList = list.sort(function(a, b) {
        return a.id.localeCompare(b.id)
      })
      startPage(tempList)
  }
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