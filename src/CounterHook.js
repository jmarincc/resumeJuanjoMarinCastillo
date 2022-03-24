import react, {useState} from "react";
//No se puede llamar un hook con una clase
//hay que hacerlo con una función de flecha
const CounterHook=()=>{
    //Declara una nueva variable de estado que se llama count
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click on me</button>
        </div>
    );

}
export default CounterHook;
