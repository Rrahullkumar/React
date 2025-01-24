import React,{useState, useEffect} from "react";

function MyComponent(){

    const[width, setwidth] = useState(window.innerWidth);
    const[height, setheight]= useState(window.innerHeight);

    useEffect(()=>{window.addEventListener("resize", handleResize);
    console.log("event listner added");

    return ()=>{
        window.removeEventListener("resize", handleResize);
        console.log("event listener removed")
    }
    },[]);

    useEffect(()=>{
        document.title =`size : ${width} x ${height}`;
    }, [width, height])

    function handleResize(){
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return(
        <>
            <p>Window width : {width}px</p>
            <p>Window Heignt: {height}px</p>
        </>
    )
}

export default MyComponent