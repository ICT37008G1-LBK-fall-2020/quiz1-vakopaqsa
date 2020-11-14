/* 
    1. დაწერეთ ფუნქცია რომელიც მიღებული რიცხვების მასივიდან დააბრუნებს უდიდეს ელემენტს

    function getMaxNumber(numbersArray){
}
*/

function getMaxNumber(numbersArray){
    numbersArray.sort();
    let lastOne = numbersArray.length;
    alert(numbersArray[lastOne-1]);
}

let arr = [1,6,2,17,4,23,54,47,97,98,65,47,58,99,86,75];

getMaxNumber(arr);