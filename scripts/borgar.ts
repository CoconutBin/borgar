class Burger {
    topBun: string
    toppings: string[]
    burgerPatty: string
    bottomBun: string
    constructor(patty?: string, toppings?: string[], topBun?: string, bottomBun?: string) {
        this.topBun = topBun ?? "Sessame"
        this.burgerPatty = patty ?? "Beef"
        this.toppings = toppings ?? ["None"]
        this.bottomBun = bottomBun ?? "Sessame"
    }
}

class Pizza {
    isBaked = false
    dough: string
    toppings: string[]
    sauce: string
    constructor(toppings?: string[], sauce?: string, dough?: string) {
        this.dough = dough ?? 'Standard'
        this.toppings = toppings ?? ['None']
        this.sauce = sauce ?? "Tomato"
    }

    bake() {
        this.isBaked = true
        return
    }
}

const hellButton = document.getElementById('PizzaCSS')

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
    }
    if (!(choosePizza as HTMLInputElement).checked) {
        pizzaDiv.style.display = 'none';
    }
});
chooseBorgar.addEventListener('change', () => {
    if ((chooseBorgar as HTMLInputElement).checked) {
        borgarDiv.style.display = 'block';
    }
    if (!(chooseBorgar as HTMLInputElement).checked) {
        borgarDiv.style.display = 'none';
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

  let toppingsInput = (document.getElementById('pizzatoppings') as HTMLInputElement).value
  let sauceInput = (document.getElementById('pizzzasauce') as HTMLInputElement).value
  let doughInput = (document.getElementById('pizzadough') as HTMLInputElement).value

  
  toppingsInput = toppingsInput == ''? null:toppingsInput
  sauceInput = sauceInput == ''? null:sauceInput
  doughInput = doughInput == ''? null:doughInput

  const pizzaOrder = new Pizza(toppingsInput.trim().split(','),sauceInput,doughInput)
  pizzaOrder.bake()

  alert(`You've ordered a pizza that has ${pizzaOrder.toppings.length} topping(s). including:`)
  pizzaOrder.toppings.forEach(topping => {
    alert(topping)
  })
  alert(`With ${pizzaOrder.dough} dough, and ${pizzaOrder.sauce} sauce.`)
  alert(`Your order will be delivered within 1 to lim_(x->0+) 1/x business days`)
  prompt(`Please write your credit card number here: (Phutopian Credit Cards are not accepted)`)
  prompt(`Please also provide your mother's maiden name`)
  location.reload()
})


borgarDiv.addEventListener('submit', function(event) {
    event.preventDefault()


    let pattyInput = (document.getElementById('borgarpatty') as HTMLInputElement).value
    let toppingsInput = (document.getElementById('boargartoppings') as HTMLInputElement).value
    let topBunInput = (document.getElementById('topbun') as HTMLInputElement).value
    let bottomBunInput = (document.getElementById('bottombun') as HTMLInputElement).value
  
   
    toppingsInput = toppingsInput == ''? null:toppingsInput.trim()
    pattyInput = pattyInput == ''? null:pattyInput.trim()
    topBunInput = topBunInput == ''? null:topBunInput.trim()
    bottomBunInput = bottomBunInput == ''? null:bottomBunInput.trim()

    const burgerOrder = new Burger(topBunInput,toppingsInput.trim().split(','),pattyInput,bottomBunInput)
 
  
    alert(`You've ordered a ${burgerOrder.burgerPatty} borgar that has ${burgerOrder.toppings.length} topping(s). including:`)
    burgerOrder.toppings.forEach(topping => {
      alert(topping)
    })
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
