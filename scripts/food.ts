export class Burger {
    topBun: string
    toppings: string[]
    burgerPatty: string
    bottomBun: string
    constructor(patty?: string, toppings?: string[], topBun?: string, bottomBun?: string) {
        this.topBun = topBun ?? "Sesame"
        this.burgerPatty = patty ?? "Beef"
        this.toppings = toppings ?? ["None"]
        this.bottomBun = bottomBun ?? "Sesame"
    }
}

export class Pizza {
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

export class iceCream {
    isMelted = false
    scoops: number
    flavors: string[]
    toppings: string[]
    constructor(scoops?: number, flavors?: string[], toppings?: string[]) {
        this.scoops = scoops ?? 1
        this.toppings = toppings ?? ['None']
        this.flavors = flavors ?? ["Vanilla"]
    }

    melt() {
        this.isMelted = true
        return
    }
}

export class bakedPizza extends Pizza{
    isBaked = true
}