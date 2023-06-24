import {Burger, Pizza} from './food.js'

const choosePizza = document.getElementById('choosepizza');
const chooseBorgar = document.getElementById('chooseborgar');
const pizzaDiv = document.getElementById('pizza');
const borgarDiv = document.getElementById('borgar');
const yesBunsRadio = document.getElementById('yesbuns');
const noBunsRadio = document.getElementById('nobuns');
const bunSelectionDiv = document.getElementById('bunselection');

choosePizza.addEventListener('change', () => {
    if ((choosePizza as HTMLInputElement).checked) {
        pizzaDiv.style.display = 'block';
        borgarDiv.style.display = 'none';
    }
});
chooseBorgar.addEventListener('change', () => {
    if ((chooseBorgar as HTMLInputElement).checked) {
        borgarDiv.style.display = 'block';
        pizzaDiv.style.display = 'none';
    }
});

yesBunsRadio.addEventListener('change', () => {
  if ((yesBunsRadio as HTMLInputElement).checked) {
    bunSelectionDiv.style.display = 'block';
  }
});

noBunsRadio.addEventListener('change', () => {
  if ((noBunsRadio as HTMLInputElement).checked) {
    bunSelectionDiv.style.display = 'none';
  }
});

pizzaDiv.addEventListener('submit', function(event) {
  event.preventDefault()

  let toppingsInput:string|string[] = (document.getElementById('pizzatoppings') as HTMLInputElement).value
  let sauceInput = (document.getElementById('pizzzasauce') as HTMLInputElement).value
  let doughInput = (document.getElementById('pizzadough') as HTMLInputElement).value

  
  toppingsInput = toppingsInput == ''? null:toppingsInput
  sauceInput = sauceInput == ''? null:sauceInput
  doughInput = doughInput == ''? null:doughInput

  if(toppingsInput == null||toppingsInput == '-'){
    toppingsInput = "None"
  }
  const pizzaOrder = new Pizza(toppingsInput.trim().split(','),sauceInput,doughInput)
  console.log('new pizza created')
  pizzaOrder.bake()

  if(pizzaOrder.toppings[0] == "None")
    alert(`You've ordered a pizza that has no toppings.`)
    else{
  alert(`You've ordered a pizza that has ${pizzaOrder.toppings.length} topping(s). including:`)
  pizzaOrder.toppings.forEach(topping => {
    alert(topping)
  })}
  alert(`With ${pizzaOrder.dough} dough, and ${pizzaOrder.sauce} sauce.`)
  alert(`Your order will be delivered within 1 to lim_(x->0+) 1/x business days`)
  prompt(`Please write your credit card number here: (Phutopian Credit Cards are not accepted)`)
  prompt(`Please also provide your mother's maiden name`)
  location.reload()
})


borgarDiv.addEventListener('submit', function(event) {
    event.preventDefault()


    let pattyInput = (document.getElementById('borgarpatty') as HTMLInputElement).value
    let toppingsInput = (document.getElementById('borgartoppings') as HTMLInputElement).value
    let topBunInput = (document.getElementById('topbun') as HTMLInputElement).value
    let bottomBunInput = (document.getElementById('bottombun') as HTMLInputElement).value
  
    toppingsInput = toppingsInput == ''? null:toppingsInput.trim()
    pattyInput = pattyInput == ''? null:pattyInput.trim()
    topBunInput = topBunInput == ''? null:topBunInput.trim()
    bottomBunInput = bottomBunInput == ''? null:bottomBunInput.trim()

    if(toppingsInput == null||toppingsInput == '-'){
      toppingsInput = "None"
    }
    const burgerOrder = new Burger(pattyInput,toppingsInput.trim().split(','),topBunInput,bottomBunInput)

    console.log('new burger created')
 
    if(burgerOrder.toppings[0] == "None")
    alert(`You've ordered a ${burgerOrder.burgerPatty} borgar that has no toppings.`)
    else{
    alert(`You've ordered a ${burgerOrder.burgerPatty} borgar that has ${burgerOrder.toppings.length} topping(s). including:`)
    burgerOrder.toppings.forEach(topping => {
      alert(topping)
    })}
      if ((yesBunsRadio as HTMLInputElement).checked) {
        alert(`You've decided to customize your buns, you top bun will be ${burgerOrder.topBun} and your bottom bun will be ${burgerOrder.bottomBun}.`);
      }
      else if(burgerOrder.topBun != burgerOrder.bottomBun)
      alert(`Your top bun will be ${burgerOrder.topBun} and your bottom bun will be ${burgerOrder.bottomBun}.`)
      else
      alert(`You've decided not to customize your buns, so it will be ${burgerOrder.topBun}`)

    alert(`Your order will be delivered within 1 to lim_(x->0+) 1/x business days`)
    prompt(`Please write your credit card number here: (Phutopian Credit Cards are not accepted)`)
    prompt(`Please also provide your mother's maiden name`)
    location.reload()
  })
