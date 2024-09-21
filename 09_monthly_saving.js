const monthlySaving = (allPayment, livingCost) => {
    if (!Array.isArray(allPayment) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalEarning = 0;

    for (let i = 0; i < allPayment.length; i++) {
        if (allPayment[i] >= 3000) {
            totalEarning += allPayment[i] - (allPayment[i] * 20) / 100;
        } else {
            totalEarning += allPayment[i];
        }
    }

    if (totalEarning - livingCost >= 0) {
        return totalEarning - livingCost;
    } else {
        return "earn more";
    }
};

let allPayment1 = [1000, 2000, 3000];
let livingCost1 = 5400;

let allPayment2 = [1000, 2000, 2500];
let livingCost2 = 5000;

let allPayment3 = [900, 2700, 3400];
let livingCost3 = 10000;

let allPayment4 = 100;
let livingCost4 = [900, 2700, 3400];

console.log(monthlySaving(allPayment1, livingCost1));
console.log(monthlySaving(allPayment2, livingCost2));
console.log(monthlySaving(allPayment3, livingCost3));
console.log(monthlySaving(allPayment4, livingCost4));
