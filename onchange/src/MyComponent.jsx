import React, {useState}from "react";

function MyComponent(){

    const [name , setName]= useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment]= useState("");
    const [payment, setPayment]= useState("");
    const [shipping, setShipping]= useState("")

    function handleNameChange(event){
        setName(event.target.value)
    }
    function handelQuantityChange(event){
        setQuantity(event.target.value)
    }
    function handleCommentChange(event){
        setComment(event.target.value)
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShipping(event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handelQuantityChange} type="number"/>
            <p>Quantity: {quantity} </p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter instructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option </option>
                <option value="DebitCard">Debit Card </option>
                <option value="UPI">UPI </option>
                <option value="CreditCard">Credit Card </option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pickup" checked={shipping==="Pickup"} onChange={handleShipping}/>
                Pickup
            </label><br/>
            <label>
            <input type="radio" value="Home Delivery" checked={shipping==="Home Delivery"} onChange={handleShipping}/>
                Home Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent