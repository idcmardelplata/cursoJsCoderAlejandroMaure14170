const {quantityFoodFor, quantitySize, brandQuantity, quantity} = require("../script");
describe("cantidad de comida por tipo de animal", () => {
    it("calcula la cantidad de comida segun el tipo y la edad del animal", () => {
        const mascota = {
            raza: "gato",
            age: "cachorro"
        }
        expect(quantityFoodFor(mascota)).toBe(70)
    })

    it("calcula la cantidad de comida segun el tamaño", () => {
        expect(quantitySize("chico")).toBe(0.7)
        expect(quantitySize("mediano")).toBe(0.73)
        expect(quantitySize("grande")).toBe(0.75)
    })

    it("asigna la cantidad de alimento segun la marca", () => {
        expect(brandQuantity("proplan")).toBe(1.5)
    })

    it("calcula la cantidad de comida segun los valores", () => {

        const mascota = {
            raza: "gato",
            age: "cachorro",
            size: "mediano"
        }
        expect(quantity("gato", "cachorro", "mediano")).toBe(51)
    })
})
