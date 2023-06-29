
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (valueInEuro) => { 
    let valueInDollar = valueInEuro * oneEuroIs["USD"]; 
         return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => { 
    let valueInYen = valueInDollar * oneEuroIs["JPY"]; 
         return valueInYen;
}

const fromYenToPound = (valueInYen) => { 
    let valueInPound = valueInYen * oneEuroIs["GBP"]; 
         return valueInPound;
}

//for me :)
console.log(fromEuroToDollar(2));
console.log(fromDollarToYen(2));
console.log(fromYenToPound(2));



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };








