const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsRef = document.querySelector("#ingredients");

const ingridientsArr = ingredients.map(ingridient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingridient;
  listItem.classList = "item";
  return listItem;
});

ingridientsRef.append(...ingridientsArr);