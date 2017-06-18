export function buildListicons(icons, style) {
  return icons
    .map(
      item =>
        `<div class=${style.miniBoxIcon}><i class="fa ${item}" data=${item}></i></div>`
    )
    .join('')
}

export function addClickHandler(context, input) {
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

export function fillInput(input, value) {
  input.value = value
}

export function addInputHandler(input, list) {
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
