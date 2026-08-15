class Truck extends Vehicle {
    constructor(name, model, color, price, Type, fuelType, status) {
        super(name, model, color, price, Type, status);
        this.fuelType = fuelType;
    }
    calculatePrice(days) {
        let totalPrice = super.calculatePrice(days);
        return totalPrice;
    }
}