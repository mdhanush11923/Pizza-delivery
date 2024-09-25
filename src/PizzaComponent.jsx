import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input } from "@nextui-org/react";

const PizzaComponent = () => {
  const [pizzas, setPizzas] = useState([]);
  const [newPizza, setNewPizza] = useState({
    name: "",
    description: "",
    prices: { small: "", medium: "", large: "" },
    base: "",
    sauce: "",
    cheese: "",
    veggies: "",
    category: "",
    image: "",
  });
  const [editPizza, setEditPizza] = useState(null);

  // Fetch pizzas on component mount
  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = async () => {
    const response = await axios.get("http://localhost:5000/pizzas");
    setPizzas(response.data);
  };

  const addPizza = async () => {
    const response = await axios.post("http://localhost:5000/pizzas", newPizza);
    setPizzas([...pizzas, response.data]);
    setNewPizza({
      name: "",
      description: "",
      prices: { small: "", medium: "", large: "" },
      base: "",
      sauce: "",
      cheese: "",
      veggies: "",
      category: "",
      image: "",
    });
  };

  const deletePizza = async (id) => {
    await axios.delete(`http://localhost:5000/pizzas/${id}`);
    setPizzas(pizzas.filter((pizza) => pizza._id !== id));
  };

  const updatePizza = async () => {
    const response = await axios.put(
      `http://localhost:5000/pizzas/${editPizza._id}`,
      editPizza
    );
    setPizzas(
      pizzas.map((pizza) =>
        pizza._id === editPizza._id ? response.data : pizza
      )
    );
    setEditPizza(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditPizza({ ...editPizza, [name]: value });
  };

  return (
    <div>
      <h1>Pizza Management App</h1>

      <h2>Add New Pizza</h2>
      <Input
        type="text"
        name="name"
        value={newPizza.name}
        onChange={handleInputChange}
        placeholder="Pizza Name"
      />
      <Input
        type="text"
        name="description"
        value={newPizza.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <Input
        type="text"
        name="base"
        value={newPizza.base}
        onChange={handleInputChange}
        placeholder="Base"
      />
      <Input
        type="text"
        name="sauce"
        value={newPizza.sauce}
        onChange={handleInputChange}
        placeholder="Sauce"
      />
      <Input
        type="text"
        name="cheese"
        value={newPizza.cheese}
        onChange={handleInputChange}
        placeholder="Cheese"
      />
      <Input
        type="text"
        name="veggies"
        value={newPizza.veggies}
        onChange={handleInputChange}
        placeholder="Veggies (optional)"
      />
      <Input
        type="text"
        name="category"
        value={newPizza.category}
        onChange={handleInputChange}
        placeholder="Category (Vegetarian/Non-Vegetarian)"
      />
      <Input
        type="text"
        name="image"
        value={newPizza.image}
        onChange={handleInputChange}
        placeholder="Image URL or Image Name"
      />
      <Input
        type="number"
        name="small"
        value={newPizza.prices.small}
        onChange={(e) =>
          setNewPizza({
            ...newPizza,
            prices: { ...newPizza.prices, small: e.target.value },
          })
        }
        placeholder="Price (Small)"
      />
      <Input
        type="number"
        name="medium"
        value={newPizza.prices.medium}
        onChange={(e) =>
          setNewPizza({
            ...newPizza,
            prices: { ...newPizza.prices, medium: e.target.value },
          })
        }
        placeholder="Price (Medium)"
      />
      <Input
        type="number"
        name="large"
        value={newPizza.prices.large}
        onChange={(e) =>
          setNewPizza({
            ...newPizza,
            prices: { ...newPizza.prices, large: e.target.value },
          })
        }
        placeholder="Price (Large)"
      />
      <Button onClick={addPizza}>Add Pizza</Button>

      <h2>Pizza List</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza._id}>
            {pizza._id === editPizza?._id ? (
              <>
                <Input
                  name="name"
                  value={editPizza.name}
                  onChange={handleEditChange}
                  placeholder="Pizza Name"
                />
                <Input
                  name="description"
                  value={editPizza.description}
                  onChange={handleEditChange}
                  placeholder="Description"
                />
                {/* Additional fields can be edited here */}
                <Button onClick={updatePizza}>Update Pizza</Button>
              </>
            ) : (
              <>
                <strong>{pizza.name}</strong> - {pizza.description}
                <Button onClick={() => deletePizza(pizza._id)}>Delete</Button>
                <Button onClick={() => setEditPizza(pizza)}>Edit</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaComponent;
