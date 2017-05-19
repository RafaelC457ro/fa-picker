import fa from './fa-json'
import style from './style.css'


function buildListicons(context){

  const list = fa.map(item =>
    `<div class="mini-box-icon"><i class="fa ${item}" data=${item}></i></div>`
  ).join('')

  context.innerHTML = list
}

function addClickHandler(context,input){
  if(!context) return

  context.addEventListener('click', event => {
    let target = event.target
    if(target.nodeName != 'I'){
      let any = target.querySelector('i')
        fillInput(input,any.getAttribute('data'))
    } else {
        fillInput(input,target.getAttribute('data'))
    }
  })
}

function fillInput(input,value){
  input.value = value
}

function addInputHandler(input,list){

  input.addEventListener('click', event =>{
    list.style.display = 'flex'
  })

  document.body.addEventListener('click', event =>{
    let target = event.target

    if(!(target === input)){
      list.style.display = 'none'
    }
  })
}

export default function(element,config){
  if(!element) return
  // test if element is a input
  if(element.nodeName !== 'INPUT'){
    throw "Element should be a input"
  }

  const list = document.createElement('div')
  const parent = element.parentNode

  list.setAttribute('class','dropdown-search')
  list.style.display = 'none';
  buildListicons(list)
  addClickHandler(list,element)
  parent.appendChild(list)

  element.readOnly = true


  addInputHandler(element,list)
}
