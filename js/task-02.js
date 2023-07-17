const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

// for (const item of ingredients) {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.textContent = item;
//   ingredientsItem.classList.add('item');
//   // console.log(ingredientsItem.textContent);
//   ingredientsList.append(ingredientsItem);
// }

// const ingredientsItem = document.createElement('li');
// ingredientsItem.classList.add('item');


const newList = ingredients.map((item) => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = item;
  ingredientsItem.classList.add('item');

  console.log(ingredientsItem);

  return ingredientsItem;
});


ingredientsList.append(...newList);