const pizzas = [
  {
    id: 0,
    name: "Margherita",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: {
      small: 199,
      medium: 299,
      large: 399,
    },
    pizzaBases: [
      { key: "Thin Crust", label: "Thin Crust" },
      { key: "Cheese Burst", label: "Cheese Burst" },
    ],
    sauces: [{ key: "Tomato Basil", label: "Tomato Basil" }],
    cheeses: [{ key: "Mozzarella", label: "Mozzarella" }],
    veggiesOptions: [
      { key: "Bell Peppers", label: "Bell Peppers" },
      { key: "Olives", label: "Olives" },
    ],
    category: "Vegetarian",
  },
  {
    id: 1,
    name: "Pepperoni",
    description:
      "A favorite with spicy pepperoni, mozzarella, and signature tomato sauce.",
    prices: {
      small: 249,
      medium: 399,
      large: 499,
    },
    pizzaBases: [
      { key: "Thin Crust", label: "Thin Crust" },
      { key: "Thick Crust", label: "Thick Crust" },
    ],
    sauces: [
      { key: "Tomato Basil", label: "Tomato Basil" },
      { key: "Barbeque", label: "Barbeque" },
    ],
    cheeses: [
      { key: "Mozzarella", label: "Mozzarella" },
      { key: "Cheddar", label: "Cheddar" },
    ],
    veggiesOptions: [
      { key: "Onions", label: "Onions" },
      { key: "Mushrooms", label: "Mushrooms" },
    ],
    category: "Non-Vegetarian",
  },
  {
    id: 2,
    name: "Veggie Delight",
    description:
      "Loaded with fresh veggies including bell peppers, onions, olives, and spinach.",
    prices: {
      small: 299,
      medium: 449,
      large: 599,
    },
    pizzaBases: [
      { key: "Gluten Free", label: "Gluten Free" },
      { key: "Whole Wheat", label: "Whole Wheat" },
    ],
    sauces: [
      { key: "White Garlic", label: "White Garlic" },
      { key: "Pesto", label: "Pesto" },
    ],
    cheeses: [
      { key: "Feta", label: "Feta" },
      { key: "Gouda", label: "Gouda" },
    ],
    veggiesOptions: [
      { key: "Bell Peppers", label: "Bell Peppers" },
      { key: "Spinach", label: "Spinach" },
      { key: "Olives", label: "Olives" },
    ],
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description:
      "Grilled chicken with BBQ sauce, onions, and melted cheddar cheese.",
    prices: {
      small: 349,
      medium: 499,
      large: 649,
    },
    pizzaBases: [
      { key: "Thin Crust", label: "Thin Crust" },
      { key: "Whole Wheat", label: "Whole Wheat" },
    ],
    sauces: [{ key: "Barbeque", label: "Barbeque" }],
    cheeses: [{ key: "Cheddar", label: "Cheddar" }],
    veggiesOptions: [
      { key: "Onions", label: "Onions" },
      { key: "Mushrooms", label: "Mushrooms" },
    ],
    category: "Non-Vegetarian",
  },
  {
    id: 4,
    name: "Four Cheese",
    description: "A blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
    prices: {
      small: 399,
      medium: 549,
      large: 699,
    },
    pizzaBases: [
      { key: "Thin Crust", label: "Thin Crust" },
      { key: "Cheese Burst", label: "Cheese Burst" },
    ],
    sauces: [
      { key: "Tomato Basil", label: "Tomato Basil" },
      { key: "White Garlic", label: "White Garlic" },
    ],
    cheeses: [
      { key: "Mozzarella", label: "Mozzarella" },
      { key: "Cheddar", label: "Cheddar" },
      { key: "Parmesan", label: "Parmesan" },
      { key: "Gouda", label: "Gouda" },
    ],
    veggiesOptions: [
      { key: "Spinach", label: "Spinach" },
      { key: "Onions", label: "Onions" },
    ],
    category: "Vegetarian",
  },
  {
    id: 5,
    name: "Hawaiian",
    description:
      "Tropical pizza with ham, pineapple, and melted mozzarella cheese.",
    prices: {
      small: 299,
      medium: 449,
      large: 599,
    },
    pizzaBases: [
      { key: "Thick Crust", label: "Thick Crust" },
      { key: "Whole Wheat", label: "Whole Wheat" },
    ],
    sauces: [{ key: "Tomato Basil", label: "Tomato Basil" }],
    cheeses: [{ key: "Mozzarella", label: "Mozzarella" }],
    veggiesOptions: [{ key: "Onions", label: "Onions" }],
    category: "Non-Vegetarian",
  },
  {
    id: 6,
    name: "Buffalo Chicken",
    description:
      "Spicy buffalo sauce, grilled chicken, and blue cheese dressing.",
    prices: {
      small: 349,
      medium: 499,
      large: 649,
    },
    pizzaBases: [
      { key: "Thin Crust", label: "Thin Crust" },
      { key: "Whole Wheat", label: "Whole Wheat" },
    ],
    sauces: [{ key: "Spicy Buffalo", label: "Spicy Buffalo" }],
    cheeses: [{ key: "Mozzarella", label: "Mozzarella" }],
    veggiesOptions: [{ key: "Onions", label: "Onions" }],
    category: "Non-Vegetarian",
  },
  {
    id: 7,
    name: "Meat Lovers",
    description:
      "Packed with pepperoni, sausage, bacon, and mozzarella cheese.",
    prices: {
      small: 399,
      medium: 599,
      large: 799,
    },
    pizzaBases: [
      { key: "Thick Crust", label: "Thick Crust" },
      { key: "Cheese Burst", label: "Cheese Burst" },
    ],
    sauces: [
      { key: "Tomato Basil", label: "Tomato Basil" },
      { key: "Barbeque", label: "Barbeque" },
    ],
    cheeses: [{ key: "Mozzarella", label: "Mozzarella" }],
    veggiesOptions: [
      { key: "Onions", label: "Onions" },
      { key: "Bell Peppers", label: "Bell Peppers" },
    ],
    category: "Non-Vegetarian",
  },
  {
    id: 8, 
    name: "Pesto Veggie",
    description:
      "A vibrant mix of fresh pesto, mozzarella, and seasonal vegetables.",
    prices: {
      small: 299,
      medium: 399,
      large: 499,
    },
    pizzaBases: [
      { key: "Thin Crust", label: "Thin Crust" },
      { key: "Cheese Burst", label: "Cheese Burst" },
    ],
    sauces: [{ key: "Pesto", label: "Pesto" }],
    cheeses: [{ key: "Mozzarella", label: "Mozzarella" }],
    veggiesOptions: [
      { key: "Cherry Tomatoes", label: "Cherry Tomatoes" },
      { key: "Zucchini", label: "Zucchini" },
      { key: "Spinach", label: "Spinach" },
    ],
    category: "Vegetarian",
  },
];



  const vegetarianPizzas = pizzas.filter(
    (pizza) => pizza.category === "Vegetarian"
  );

  const nonVegetarianPizzas = pizzas.filter(
    (pizza) => pizza.category === "Non-Vegetarian"
  );

export default pizzas;

export {vegetarianPizzas, nonVegetarianPizzas};