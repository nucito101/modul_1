enum PizzaSize {
  Small,
  Medium,
  Large,
  Family,
}

enum PizzaIngredients {
  Cheese,
  Tomato,
  Onion,
  Salami,
  Olives,
  Mushrooms,
  Peppers,
  Tuna,
  Ham,
  Pineapple,
}

type TPizza = {
  size: PizzaSize
  ingredients: PizzaIngredients[]
}

const pizza1: TPizza = {
  size: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Tomato],
}

const pizza2: TPizza = {
  size: PizzaSize.Medium,
  ingredients: [PizzaIngredients.Salami, PizzaIngredients.Onion, PizzaIngredients.Cheese],
}

const pizza3: TPizza = {
  size: PizzaSize.Large,
  ingredients: [PizzaIngredients.Tuna, PizzaIngredients.Onion, PizzaIngredients.Olives],
}

const pizza4: TPizza = {
  size: PizzaSize.Family,
  ingredients: [PizzaIngredients.Ham, PizzaIngredients.Pineapple, PizzaIngredients.Cheese],
}
