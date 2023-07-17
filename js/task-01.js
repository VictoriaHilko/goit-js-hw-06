// ---1---

const cathegory = document.getElementById('categories');
console.log('Number of cathegories: ', cathegory.children.length);

// ---2---

const cathegoryList = document.querySelectorAll('#categories .item');

cathegoryList.forEach(element => {
    console.log(`Cathegory: ${element.firstElementChild.textContent}, length: ${element.lastElementChild.childElementCount}`);
});






