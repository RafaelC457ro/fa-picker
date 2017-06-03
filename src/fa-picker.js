import fa from './fa.json'
import style from './style.css'
import {buildListicons, addClickHandler, addInputHandler} from './utils'

export default function (element) {
  if (!element) {
    return
  }
  // Test if element is a input
  if (element.nodeName !== 'INPUT') {
    throw new Error('Element should be a input')
  }

  const list = document.createElement('div')
  const parent = element.parentNode
  const width = element.offsetWidth

  list.setAttribute('class', style.dropdownSearch)
  list.style.display = 'none'
  list.style.width = width + 'px'
  list.innerHTML = buildListicons(fa, style)
  addClickHandler(list, element)
  parent.appendChild(list)

  element.readOnly = true

  addInputHandler(element, list)
}
