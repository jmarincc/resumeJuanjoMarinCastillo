import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GitExpertApp = () => {

  //Hook
  const [categories, setCategories] = useState (['One punch']);
  //const handleAdd = () => {
  //    setCategories([...categories, 'mierdax']);
  //}
  return(
    <>
        <h2>CURRICULUM JUANJO MARÍN CASTILLO</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
       
        <ol>
          {
            categories.map(category=>(
               <GiftGrid 
                 key={category}
                 category={category}
                />
           ))
          }
        </ol>  
    </>
  )    

};
export default GitExpertApp;

