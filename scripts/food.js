export class Burger {
    topBun;
    toppings;
    burgerPatty;
    bottomBun;
    constructor(patty, toppings, topBun, bottomBun) {
        this.topBun = topBun ?? "Sesame";
        this.burgerPatty = patty ?? "Beef";
        this.toppings = toppings ?? ["None"];
        this.bottomBun = bottomBun ?? "Sesame";
    }
}
export class Pizza {
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
export class bakedPizza extends Pizza {
    isBaked = true;
}
