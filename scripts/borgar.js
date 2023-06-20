class Burger {
    topBun;
    toppings;
    burgerPatty;
    bottomBun;
    constructor(patty, toppings, topBun, bottomBun) {
        this.topBun = topBun ?? "Sessame";
        this.burgerPatty = patty ?? "Beef";
        this.toppings = toppings ?? ["None"];
        this.bottomBun = bottomBun ?? "Sessame";
    }
}
class Pizza {
    isBaked = false;
    dough;
    toppings;
    sauce;
    constructor(toppings, sauce, dough) {
        this.dough = dough ?? 'Standard';
        this.toppings = toppings ?? ['None'];
        this.sauce = sauce ?? "Tomato";
    }
    bake() {
        this.isBaked = true;
        return;
    }
}
const hellButton = document.getElementById('PizzaCSS');
const choosePizza = document.getElementById('choosepizza');
const chooseBorgar = document.getElementById('chooseborgar');
const pizzaDiv = document.getElementById('pizza');
const borgarDiv = document.getElementById('borgar');
const yesBunsRadio = document.getElementById('yesbuns');
const noBunsRadio = document.getElementById('nobuns');
const bunSelectionDiv = document.getElementById('bunselection');
choosePizza.addEventListener('change', () => {
    if (choosePizza.checked) {
        pizzaDiv.style.display = 'block';
    }
    if (!choosePizza.checked) {
        pizzaDiv.style.display = 'none';
    }
});
chooseBorgar.addEventListener('change', () => {
    if (chooseBorgar.checked) {
        borgarDiv.style.display = 'block';
    }
    if (!chooseBorgar.checked) {
        borgarDiv.style.display = 'none';
    }
});
yesBunsRadio.addEventListener('change', () => {
    if (yesBunsRadio.checked) {
        bunSelectionDiv.style.display = 'block';
    }
});
noBunsRadio.addEventListener('change', () => {
    if (noBunsRadio.checked) {
        bunSelectionDiv.style.display = 'none';
    }
});
pizzaDiv.addEventListener('submit', function (event) {
    event.preventDefault();
    let toppingsInput = document.getElementById('pizzatoppings').value;
    let sauceInput = document.getElementById('pizzzasauce').value;
    let doughInput = document.getElementById('pizzadough').value;
    toppingsInput = toppingsInput == '' ? null : toppingsInput;
    sauceInput = sauceInput == '' ? null : sauceInput;
    doughInput = doughInput == '' ? null : doughInput;
    const pizzaOrder = new Pizza(toppingsInput.trim().split(','), sauceInput, doughInput);
    pizzaOrder.bake();
    alert(`You've ordered a pizza that has ${pizzaOrder.toppings.length} topping(s). including:`);
    pizzaOrder.toppings.forEach(topping => {
        alert(topping);
    });
    alert(`With ${pizzaOrder.dough} dough, and ${pizzaOrder.sauce} sauce.`);
    alert(`Your order will be delivered within 1 to lim_(x->0+) 1/x business days`);
    prompt(`Please write your credit card number here: (Phutopian Credit Cards are not accepted)`);
    prompt(`Please also provide your mother's maiden name`);
    location.reload();
});
borgarDiv.addEventListener('submit', function (event) {
    event.preventDefault();
    let pattyInput = document.getElementById('borgarpatty').value;
    let toppingsInput = document.getElementById('boargartoppings').value;
    let topBunInput = document.getElementById('topbun').value;
    let bottomBunInput = document.getElementById('bottombun').value;
    toppingsInput = toppingsInput == '' ? null : toppingsInput.trim();
    pattyInput = pattyInput == '' ? null : pattyInput.trim();
    topBunInput = topBunInput == '' ? null : topBunInput.trim();
    bottomBunInput = bottomBunInput == '' ? null : bottomBunInput.trim();
    const burgerOrder = new Burger(topBunInput, toppingsInput.trim().split(','), pattyInput, bottomBunInput);
    alert(`You've ordered a ${burgerOrder.burgerPatty} borgar that has ${burgerOrder.toppings.length} topping(s). including:`);
    burgerOrder.toppings.forEach(topping => {
        alert(topping);
    });
    if (yesBunsRadio.checked) {
        alert(`You've decided to customize your buns, you top bun will be ${burgerOrder.topBun} and your bottom bun will be ${burgerOrder.bottomBun}.`);
    }
    else if (burgerOrder.topBun != burgerOrder.bottomBun)
        alert(`Your top bun will be ${burgerOrder.topBun} and your bottom bun will be ${burgerOrder.bottomBun}.`);
    else
        alert(`You've decided not to customize your buns, so it will be ${burgerOrder.topBun}`);
    alert(`Your order will be delivered within 1 to lim_(x->0+) 1/x business days`);
    prompt(`Please write your credit card number here: (Phutopian Credit Cards are not accepted)`);
    prompt(`Please also provide your mother's maiden name`);
    location.reload();
});
