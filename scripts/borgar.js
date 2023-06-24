import { Burger, Pizza, iceCream } from './food.js';
const choosePizza = document.getElementById('choosepizza');
const chooseBorgar = document.getElementById('chooseborgar');
const chooseIceCream = document.getElementById('chooseicecream');
const pizzaDiv = document.getElementById('pizza');
const borgarDiv = document.getElementById('borgar');
const icecreamDiv = document.getElementById('icecream');
const yesBunsRadio = document.getElementById('yesbuns');
const noBunsRadio = document.getElementById('nobuns');
const bunSelectionDiv = document.getElementById('bunselection');
choosePizza.addEventListener('change', () => {
    if (choosePizza.checked) {
        pizzaDiv.style.display = 'block';
        borgarDiv.style.display = 'none';
        icecreamDiv.style.display = 'none';
    }
});
chooseBorgar.addEventListener('change', () => {
    if (chooseBorgar.checked) {
        borgarDiv.style.display = 'block';
        pizzaDiv.style.display = 'none';
        icecreamDiv.style.display = 'none';
    }
});
let startTime;
chooseIceCream.addEventListener('change', () => {
    if (chooseIceCream.checked) {
        icecreamDiv.style.display = 'block';
        borgarDiv.style.display = 'none';
        pizzaDiv.style.display = 'none';
        startTime = new Date();
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
    if (toppingsInput == null || toppingsInput == '-') {
        toppingsInput = "None";
    }
    const pizzaOrder = new Pizza(toppingsInput.trim().split(','), sauceInput, doughInput);
    console.log('new pizza created');
    pizzaOrder.bake();
    if (pizzaOrder.toppings[0] == "None")
        alert(`You've ordered a pizza that has no toppings.`);
    else {
        alert(`You've ordered a pizza that has ${pizzaOrder.toppings.length} topping(s). including:`);
        pizzaOrder.toppings.forEach(topping => {
            alert(topping);
        });
    }
    alert(`With ${pizzaOrder.dough} dough, and ${pizzaOrder.sauce} sauce.`);
    alert(`Your order will be delivered within 1 to lim_(x->0+) 1/x business days`);
    prompt(`Please write your credit card number here: (Phutopian Credit Cards are not accepted)`);
    prompt(`Please also provide your mother's maiden name`);
    location.reload();
});
borgarDiv.addEventListener('submit', function (event) {
    event.preventDefault();
    let pattyInput = document.getElementById('borgarpatty').value;
    let toppingsInput = document.getElementById('borgartoppings').value;
    let topBunInput = document.getElementById('topbun').value;
    let bottomBunInput = document.getElementById('bottombun').value;
    toppingsInput = toppingsInput == '' ? null : toppingsInput.trim();
    pattyInput = pattyInput == '' ? null : pattyInput.trim();
    topBunInput = topBunInput == '' ? null : topBunInput.trim();
    bottomBunInput = bottomBunInput == '' ? null : bottomBunInput.trim();
    if (toppingsInput == null || toppingsInput == '-') {
        toppingsInput = "None";
    }
    const burgerOrder = new Burger(pattyInput, toppingsInput.trim().split(','), topBunInput, bottomBunInput);
    console.log('new burger created');
    if (burgerOrder.toppings[0] == "None")
        alert(`You've ordered a ${burgerOrder.burgerPatty} borgar that has no toppings.`);
    else {
        alert(`You've ordered a ${burgerOrder.burgerPatty} borgar that has ${burgerOrder.toppings.length} topping(s). including:`);
        burgerOrder.toppings.forEach(topping => {
            alert(topping);
        });
    }
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
icecreamDiv.addEventListener('submit', function (event) {
    event.preventDefault();
    let scoopCount = document.getElementById('scoopcount').value;
    let toppingsInput = document.getElementById('icecreamtoppings').value;
    let flavorsInput = document.getElementById('icecreamflavors').value;
    toppingsInput = toppingsInput === '' ? null : toppingsInput.trim();
    scoopCount =
        scoopCount == '' ? '0' :
            isNaN(parseInt(scoopCount)) ? '0' :
                scoopCount.trim();
    flavorsInput = flavorsInput === '' ? 'Vanilla' : flavorsInput.trim();
    if (toppingsInput == null) {
        toppingsInput = 'None';
    }
    const icecreamOrder = new iceCream(parseInt(scoopCount), flavorsInput.trim().split(','), toppingsInput.trim().split(','));
    console.log('new ice cream created');
    if (parseInt(scoopCount) < icecreamOrder.flavors.length && icecreamOrder.scoops != 0) {
        alert('There must be more scoops than flavors!');
        return;
    }
    if (icecreamOrder.scoops == 0) {
        alert('You have ordered nothing.');
        return;
    }
    else {
        if (icecreamOrder.flavors.length == 1) {
            alert(`You've ordered ${icecreamOrder.scoops} scoops of ${icecreamOrder.flavors} ice cream.`);
        }
        if (icecreamOrder.toppings[0] == 'None' && icecreamOrder.toppings.length == 1) {
            alert("You've decided not to add toppings.");
        }
        else {
            alert(`Your Ice Cream has ${icecreamOrder.toppings.length} topping(s), including:`);
            icecreamOrder.toppings.forEach(topping => {
                alert(topping);
            });
        }
        const endTime = new Date();
        const elapsedTime = endTime.getTime() - startTime.getTime();
        if (elapsedTime > 10000)
            icecreamOrder.melt();
        console.log(`Elapsed time: ${elapsedTime} milliseconds`);
        alert(`Your ice cream is ready!`);
        prompt(`Please write your credit card number here: (Phutopian Credit Cards are not accepted)`);
        prompt(`Please also provide your mother's maiden name`);
        if (!icecreamOrder.isMelted)
            alert("Here's your ice cream!");
        else {
            alert("Here's your ice cream!");
            alert("Unfortunately, It's melted 😢");
        }
    }
    location.reload();
});
