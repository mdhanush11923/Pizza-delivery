import React, { useState } from 'react';
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Button, Checkbox, CheckboxGroup } from '@nextui-org/react';

const PizzaCustomization = () => {
  const [base, setBase] = useState('');
  const [sauce, setSauce] = useState('');
  const [cheese, setCheese] = useState('');
  const [veggies, setVeggies] = useState([]);

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  const handleSauceChange = (event) => {
    setSauce(event.target.value);
  };

  const handleCheeseChange = (event) => {
    setCheese(event.target.value);
  };

  const handleVeggiesChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setVeggies([...veggies, value]);
    } else {
      setVeggies(veggies.filter((v) => v !== value));
    }
  };

  const handleSubmit = () => {
    const orderData = { base, sauce, cheese, veggies };
    // Handle submission and payment logic
  };

  return (
    <div className='flex flex-col p-20 gap-4 h-dvh'>
      <h1 className='scroll-m-20 mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl'>Customize Your Pizza</h1>

      {/* Choose Pizza Base */}
      <Select variant='faded' label="Choose Pizza Base" value={base} onChange={handleBaseChange}>
        <SelectItem value="Thin Crust">Thin Crust</SelectItem>
        <SelectItem value="Thick Crust">Thick Crust</SelectItem>
        <SelectItem value="Cheese Burst">Cheese Burst</SelectItem>
        <SelectItem value="Gluten Free">Gluten Free</SelectItem>
        <SelectItem value="Whole Wheat">Whole Wheat</SelectItem>
      </Select>

      {/* Choose Sauce */}
      <Select variant='faded' label="Choose Sauce" value={sauce} onChange={handleSauceChange}>
        <SelectItem value="Tomato Basil">Tomato Basil</SelectItem>
        <SelectItem value="Barbeque">Barbeque</SelectItem>
        <SelectItem value="Pesto">Pesto</SelectItem>
        <SelectItem value="White Garlic">White Garlic</SelectItem>
        <SelectItem value="Spicy Buffalo">Spicy Buffalo</SelectItem>
      </Select>

      {/* Choose Cheese */}
      <Select variant='faded' label="Choose Cheese" value={cheese} onChange={handleCheeseChange}>
        <SelectItem value="Mozzarella">Mozzarella</SelectItem>
        <SelectItem value="Cheddar">Cheddar</SelectItem>
        <SelectItem value="Parmesan">Parmesan</SelectItem>
        <SelectItem value="Feta">Feta</SelectItem>
        <SelectItem value="Gouda">Gouda</SelectItem>
      </Select>

      {/* Choose Veggies */}
      <CheckboxGroup color='warning' label="Choose Veggies">
        <Checkbox value="Bell Peppers" onChange={handleVeggiesChange}> Bell Peppers </Checkbox>
        <Checkbox value="Mushrooms" onChange={handleVeggiesChange}> Mushrooms </Checkbox>
        <Checkbox value="Olives" onChange={handleVeggiesChange}> Olives </Checkbox>
        <Checkbox value="Onions" onChange={handleVeggiesChange}> Onions </Checkbox>
        <Checkbox value="Spinach" onChange={handleVeggiesChange}> Spinach </Checkbox>
      </CheckboxGroup>
      

      <Button className='max-w-fit' size='lg' onClick={handleSubmit}>Submit Pizza Order</Button>
      <h1></h1>
    </div>
  );
};

export default PizzaCustomization;
