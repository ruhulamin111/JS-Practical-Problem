// ana to vori
function anaToVori(anas) {
    if (typeof anas != 'number') {
        return 'Type of input is wrong, Input a number';
    }
    else if (anas < 0) {
        return 'Type of input is wrong, Input a positive number';
    }
    var vori = anas / 16;
    return vori;
}
var microUnitAnas = 128;
var macroUnitVori = anaToVori(microUnitAnas);
// console.log(macroUnitVori);

// panda order cost
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity != 'number') {
        return 'Type of input is wrong, Input a number';
    }
    else if (singaraQuantity < 0) {
        return 'Type of input is wrong, Input a positive number';
    }
    else if (typeof somuchaQuantity != 'number') {
        return 'Type of input is wrong, Input a number';
    }
    else if (somuchaQuantity < 0) {
        return 'Type of input is wrong, Input a positive number';
    }
    else if (typeof jilapiQuantity != 'number') {
        return 'Type of input is wrong, Input a number';
    }
    else if (jilapiQuantity < 0) {
        return 'Type of input is wrong, Input a positive number';
    }
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;
    const singaraTotalPrice = singaraPrice * singaraQuantity;
    const somuchaTotalPrice = somuchaPrice * somuchaQuantity;
    const jilapiTotalPrice = jilapiPrice * jilapiQuantity;
    const totalCost = singaraTotalPrice + somuchaTotalPrice + jilapiTotalPrice;
    return totalCost;
}
const payBills = pandaCost(5, 8, 3);
// console.log(payBills);

// picnic budget
function picnicBudget(person) {
    if (typeof person != 'number') {
        return 'Type of input is wrong, Input a number';
    }
    else if (person < 0) {
        return 'Type of input is wrong, Input a positive number';
    }
    const first100Rate = 5000;
    const second100Rate = 4000;
    const upTo200Rate = 3000;
    if (person <= 100) {
        const picnicCost = person * first100Rate;
        return picnicCost;
    }
    else if (person <= 200) {
        const firstStep = 100 * first100Rate;
        const restPerson = person - 100;
        const secondStep = restPerson * second100Rate;
        const picnicCost = firstStep + secondStep;
        return picnicCost;
    }
    else {
        const firstStep = 100 * first100Rate;
        const secondStep = 100 * second100Rate;
        const restPerson2 = person - 200;
        const thirdStep = restPerson2 * upTo200Rate;
        const picnicCost = firstStep + secondStep + thirdStep;
        return picnicCost;
    }
}
var totalBudget = picnicBudget(240);
// console.log(totalBudget);

// odd name friend
function oddFriend(names) {
    if (typeof names != 'object') {
        return 'Type of input is wrong, Input a object';
    }
    let oddName;
    for (let i = 0; i < names.length; i++) {
        if (names[i].length % 2 != 0) {
            oddName = names[i];
            break;
        }
    }
    return oddName;
}
const friendList = ['Soykot', 'Nokib', 'Tamjid', 'Mehedi', 'Ronju'];
const closedFriend = oddFriend(friendList);
// console.log(closedFriend);

// recursion 
function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i)
}
// console.log(factorial(5))

// search in a array 
const products = [
    { name: 'matador pen', price: 10, color: 'black' },
    { name: 'highschool pen', price: 15, color: 'green' },
    { name: 'greepar pen', price: 5, color: 'white' },
    { name: 'basundhara khata', price: 40, color: 'yellow' },
    { name: 'sonali khata', price: 50, color: 'offwet' }
]
function searchProduct(products, search) {
    let result = [];
    for (const product of products) {
        if (product.name.includes(search)) {
            result.push(product);
        }
    }
    return result;
}
const matchedProdcut = searchProduct(products, 'khata');
// console.log(matchedProdcut);


const items = [
    { name: 'matador pen', price: 100, color: 'black' },
    { name: 'highschool pen', price: 200, color: 'green' },
    { name: 'greepar pen', price: 350, color: 'white' },
    { name: 'basundhara khata', price: 400, color: 'yellow' },
    { name: 'sonali khata', price: 500, color: 'offwet' }
];
for (const item of items) {
    if (item.price < 300) {
        break;
    }
    console.log(item);
}
console.log('hello');
