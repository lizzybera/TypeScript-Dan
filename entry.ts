console.log("Welcome to TypeScript 😁😁");
console.log("");

const numb: number = 30
console.log(numb);

const surname: string = "Daniel"
console.log(surname);

let check: any = "anyDatatype40"
console.log(check);

let arrayString: string[] = ["Pencil", "pen", "eraser"]

let arrayNumb: number[] = [20, 30, 60]

// tuple
let fixedLenghtArray: [string, number, boolean] = ["pen", 40, false]

enum Color {
    GREEN = "green",
    BLUE = "blue"
}

const danFavColor: Color = Color.BLUE
console.log(danFavColor);

enum door {
    OPEN = "open",
    CLOSE = "close"
}

const opendoor: door = door.OPEN
console.log(opendoor);

export const func = (a: number, b: number) => {
    return a + b
}

console.log(func(39, 40));

const danielsCar: {} = {
    name: "mercedez",
    year: "2024"
}

export interface car {
    name: string;
    year?: number
}

interface vendor {
    sellerName: string
}

// union
const lizCar: car | vendor = {
    name: "volvo",
    year: 2024,
}

// intersection
const typescriptCar: car & vendor = {
    name: "volvo",
    year: 2024,
    sellerName : "Daniel"
}