import "./style.css"
import "./title.less"

import zznvImage from '../img/zznh.png'

const divEl = document.createElement("div")
divEl.innerHTML = ["HTML", "CSS", "JavaScript"].join(" ")
divEl.classList.add("content")
document.body.append(divEl)

const titleEl = document.createElement("h2")
titleEl.innerHTML = "我是标题"
titleEl.classList.add("title")
document.body.append(titleEl)

const inputEl = document.createElement("input")
document.body.append(inputEl)


// 图片img
const imgEl = document.createElement('img')
imgEl.src = zznvImage
document.body.append(imgEl)

// 背景图片
const bgDivEl = document.createElement("div")
bgDivEl.classList.add("bg-image")
document.body.append(bgDivEl)
