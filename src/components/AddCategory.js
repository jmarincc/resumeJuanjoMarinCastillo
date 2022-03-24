import React, {useState} from 'react'
import Proptypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');  //Hook
    const handleInputJuanjo = (e)=>{         //Se lanza cuando cambia la caja de texto
        setInputValue(e.target.value);
    }
    //en setInputValue le pone el evento que es lo que se ha cambiado en la caja
    //eso pasa a inputValue
    //en el value de la caja de texto le mete inputValue por lo tanto lo nuevo
    //que acabamos de meter
    const pulsaEnter = (e) => {  //Se lanza con el onSubmit del form al pulsar enter
        e.preventDefault();         //evita que se refresque la página
        if (inputValue.trim().length>2){
            setCategories(cats=>[inputValue, ...cats]);
            setInputValue('');
        }    
    }
    return (
    
    <form onSubmit={pulsaEnter}>  
        <input 
            type="text"
            value={inputValue} 
            onChange={handleInputJuanjo}
        />
    </form>
  )
}
AddCategory.propTypes={
    setCategories: Proptypes.func.isRequired
}

