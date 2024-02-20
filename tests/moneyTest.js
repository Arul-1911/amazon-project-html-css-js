import { formatCurrecncy } from "../scripts/utils/money.js";

console.log('Test Suite: Format Currency');

console.log('converting dollars to cents case 1');

if(formatCurrecncy(2095)==='20.95'){
    console.log('passed')
} else {
    console.log('failed');
}

console.log('converting dollars to cents case 2');

if(formatCurrecncy(2005.5)==='20.06'){
    console.log('passed');
    
} else {
    console.log('failed');
}

console.log('working with zeros')

if(formatCurrecncy(0)== '0.00'){
    console.log('passed')
} else {
    console.log('failed');
};

console.log('rounds up to the nearest cent')
if(formatCurrecncy(2000.4)== '20.00'){
    console.log('passed')
} else {
    console.log('failed');
}