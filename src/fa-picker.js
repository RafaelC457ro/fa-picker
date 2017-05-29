import fa from './fa.json'
import style from './style.css'

function buildListicons(context) {
  const list = fa
    .map(
      item =>
        `<div class=${style.miniBoxIcon}><i class="fa ${item}" data=${item}></i></div>`
    )
    .join('')

  context.innerHTML = list
}

function addClickHandler(context, input) {
  if (!context) {
    return
  }

  context.addEventListener('click', event => {
    const target = event.target

    if (target.nodeName === 'I') {
      fillInput(input, target.getAttribute('data'))
      return false
    }

    const any = target.querySelector('i')
    fillInput(input, any.getAttribute('data'))
  })
}

function fillInput(input, value) {
  input.value = value
}

function addInputHandler(input, list) {
  input.addEventListener('click', () => {
    list.style.display = 'flex'
  })

  document.body.addEventListener('click', event => {
    const target = event.target

    if (!(target === input)) {
      list.style.display = 'none'
    }
  })
}

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

  list.setAttribute('class', style.dropdownSearch)
  list.style.display = 'none'
  buildListicons(list)
  addClickHandler(list, element)
  parent.appendChild(list)

  element.readOnly = true

  addInputHandler(element, list)
}
