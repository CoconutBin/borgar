const hellButton = document.getElementById('PizzaCSS')

let theme = 0
hellButton.addEventListener('click', () => {
  const cssLocation = document.getElementById("setCSS")
  if(cssLocation instanceof HTMLLinkElement)
  switch(theme){
    case 0:
      cssLocation.href = './css/foodstylesnew.css'
      theme = 1
      break
    case 1:
      cssLocation.href = './css/italian.css'
      theme = 2
      break
    case 2:
      cssLocation.href = './css/dark.css'
      theme = 3
      break
    case 3:
      cssLocation.href = './css/fancy.css'
      theme = 4
      break
    case 4:
      cssLocation.href = './css/sans.css'
      theme = 5
      break
    default:
      cssLocation.href = './css/foodstyles.css'
      theme = 0
      break
  }
})