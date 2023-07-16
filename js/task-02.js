const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

for (const item of ingredients) {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = item;
  ingredientsItem.classList.add('item');
  ingredientsList.append(ingredientsItem);
}

