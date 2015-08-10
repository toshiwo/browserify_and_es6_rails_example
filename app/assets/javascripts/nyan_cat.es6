class Cat {
    constructor(name) {
        this.name = name;
    }
    sing() {
        return `${this.name}: Nyanyanyanyanyanyanya!!`;
    }
}

console.log(new Cat('Nyao Cat').sing());
