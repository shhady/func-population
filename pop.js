function percentageOfWorld1 (country, population) {
   let percentage = ((population/7900 * 100).toFixed(2)); 
    return `${country} has ${population} million people, so it's about 
    ${percentage} of the world population.`
}

console.log(percentageOfWorld1('China',1441));
console.log(percentageOfWorld1('Greece',11));
console.log(percentageOfWorld1('Ukraine',44));

let percentageOfWorld2 = (country1, population1) => {
    let percentage1 = ((population1/7900 * 100).toFixed(2)); 
     return `${country1} has ${population1} million people, so it's about 
     ${percentage1} of the world population.`
}
console.log(percentageOfWorld2('China',1441));
console.log(percentageOfWorld2('Greece',11));
console.log(percentageOfWorld2('Ukraine',44));