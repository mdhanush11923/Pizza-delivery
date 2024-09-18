import React from "react";
import MyButton from "./MyButton";
import { Input } from "@nextui-org/input";

function Entry(props) {
    const [details, setDetails] = React.useState({
        email: "",
        p1: "",
        p2: "",
        fullName: ""
    });
    //var [temp, setTemp] = React.useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        
        setDetails((prevDetails) => {
            return ({
                ...prevDetails, 
                [name]: value
            });
        })
    }

    return (
        <form>
            <h1>Hello {details.p1} {details.p2} {details.email} {details.fullName}</h1>
            <Input type="email" label="Email" />
            <input 
                name="email"
                onChange={handleChange}
                type="email" 
                placeholder="Email"
                value={details.email}
            />
            <div className="password-container">
                <input 
                    name="p1"
                    onChange={handleChange} 
                    type="password" 
                    placeholder="Password" 
                    value={details.p1} 
                />
                <input 
                    name="p2"
                    onChange={handleChange} 
                    type="password" 
                    placeholder="Confirm" 
                    value={details.p2}
                />
            </div>
            <input 
                name="fullName" 
                onChange={handleChange} 
                type="text" 
                placeholder="Full Name" 
                value={details.fullName}
            />
            <MyButton type="button" text="Submit" />
        </form>
    )
}

export default Entry;