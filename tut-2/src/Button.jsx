
function Button(){

    const handleclick= (e) => e.target.textContent= "OUCH!!!!";
    return(
        <button onClick={(e)=>handleclick(e)}>Click me </button>
    );
}

export default Button