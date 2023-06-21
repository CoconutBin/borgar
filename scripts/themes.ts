const hellButton = document.getElementById('PizzaCSS')

let theme = 0
hellButton.addEventListener('click', () => {
  const documentBody = document.getElementById("body")
  const borgarbigText = document.getElementById("borgartext")
  const allDivs = document.getElementsByTagName("div")
  const allLabels = document.getElementsByTagName("label")

  switch(theme){
    case 0:
      editallLabels('color', 'black')
      documentBody.style.backgroundColor = '#12a112'
      borgarbigText.style.color = 'black'
      theme = 1
      break
    case 1:
      editallLabels('color', 'red')
      documentBody.style.backgroundColor = 'lime'
      borgarbigText.style.color = 'red'
      theme = 2
      break
    case 2:
      editallLabels('color', 'white')
      documentBody.style.backgroundColor = '#333333'
      borgarbigText.style.color = 'white'
      theme = 3
      break
    case 3:
      editallLabels('font-family', 'Helvetica')
      editallLabels('color', 'white')
      editAllDivs('background-color', 'rgba(140, 48, 201, 0.5)')
      documentBody.style.backgroundColor = '#405063'
      borgarbigText.style.color = 'white'
      borgarbigText.style.fontFamily = 'Helvetica'
      theme = 4
      break
    default:
      editallLabels('font-family', '')
      editallLabels('color', '')
      editAllDivs('background-color', '')
      documentBody.style.backgroundColor = ''
      borgarbigText.style.color = ''
      borgarbigText.style.fontFamily = ''
      theme = 0
      break
  }
  
  function editAllDivs(styleType, value) {
    for (let i = 0; i < allDivs.length; i++) {
      const currentMember = allDivs[i];
      currentMember.style[styleType] = value;
    }
  }
  
  function editallLabels(styleType, value){
    for(let i = 0; i < allLabels.length; i++){
      const currentMember = allLabels[i];
      currentMember.style[styleType] = value;
    }
  }
})