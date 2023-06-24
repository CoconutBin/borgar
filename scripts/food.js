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
export class iceCream {
    isMelted = false;
    scoops;
    flavors;
    toppings;
    constructor(scoops, flavors, toppings) {
        this.scoops = scoops ?? 1;
        this.toppings = toppings ?? ['None'];
        this.flavors = flavors ?? ["Vanilla"];
    }
    melt() {
        this.isMelted = true;
        return;
    }
}
export class bakedPizza extends Pizza {
    isBaked = true;
}
