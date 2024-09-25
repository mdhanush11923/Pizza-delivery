const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/mydatabase");

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define schema and model
const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  prices: {
    small: { type: Number, required: true },
    medium: { type: Number, required: true },
    large: { type: Number, required: true },
  },
  base: { type: String, required: true },
  sauce: { type: String, required: true },
  cheese: { type: String, required: true },
  veggies: { type: String },
  category: { type: String, required: true }, // e.g., Vegetarian or Non-Vegetarian
  image: { type: String, required: true }, // Store image URL or image name for retrieval
  availableQuantity: { type: Number, default: 10 },
});

// Create a model based on the schema
const Pizza = mongoose.model("Pizza", pizzaSchema);

// Routes (CRUD)

// CREATE a new pizza
app.post("/pizzas", async (req, res) => {
  try {
    const newPizza = new Pizza(req.body);
    await newPizza.save();
    res.status(201).json(newPizza);
  } catch (error) {
    res.status(400).json({ message: "Error creating pizza", error });
  }
});

// READ (Get all pizzas)
app.get("/pizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pizzas", error });
  }
});

// READ (Get a pizza by ID)
app.get("/pizzas/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }
    res.status(200).json(pizza);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pizza", error });
  }
});

// UPDATE a pizza by ID
app.put("/pizzas/:id", async (req, res) => {
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true, // Ensures the update adheres to the schema
      }
    );
    if (!updatedPizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }
    res.status(200).json(updatedPizza);
  } catch (error) {
    res.status(400).json({ message: "Error updating pizza", error });
  }
});

// DELETE a pizza by ID
app.delete("/pizzas/:id", async (req, res) => {
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
    if (!deletedPizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }
    res.status(200).json({ message: "Pizza deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting pizza", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
