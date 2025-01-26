import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);

    const updateName= ()=>{
        setName("Rahul"); 
    }

    const incrementAge= () => {
        setAge(age + 1 )
    }

    const employedStatus= ()=> {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Employed: {isEmployed ? "yes" : "No"}</p>
            <button onClick={employedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent