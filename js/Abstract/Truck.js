class Truck extends Vehicle {
    constructor(name, model, color, price, Type, fuelType, status) {
        super(name, model, color, price, Type, status);
        this.fuelType = fuelType;
    }
    calculatePrice(days) {
        let totalPrice = super.calculatePrice(days);
        return totalPrice;
    }
    displayDetails() {
        return `${super.displayDetails()}, Fuel Type: ${this.fuelType}`;
    }
    salesDetails() {
        return `The vehicle ${this.name} is available for sale at a price of ${this.price}.`;
    }
    statusDetails() {
        if (this.status === "Available") {
            return `The vehicle ${this.name} is available for rent.`;
        } else if (this.status === "Rented") {
            return `The vehicle ${this.name} is currently rented.`;
        }   
    }
    fuelTypeDetails() {
        return `The vehicle ${this.name} runs on ${this.fuelType}.`;
    }
    getType() {
        return this.Type;
    }
    typeDetails() {
        return `The vehicle ${this.name} is a ${this.Type}.`;
    }
    rentDetails() {
        if (this.status === "Available") {
            return `The vehicle ${this.name} is available for rent.`;
        } else if (this.status === "Rented") {
            return `The vehicle ${this.name} is currently rented.`;
        }
    }
}