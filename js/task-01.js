// ---1---

const cathegory = document.getElementById('categories');
console.log('Number of cathegories: ', cathegory.children.length);

// ---2---

const cathegoryList = document.querySelectorAll('#categories .item');
// const cathegoryList2 = document.querySelectorAll('ul#categories .item ul');

let cathegoriesArray = [];

cathegoryList.forEach(element => {
    cathegoriesArray.push(`Cathegory: ${element.firstElementChild.textContent}, length: ${element.lastElementChild.childElementCount}`);
});

console.log(cathegoriesArray);





