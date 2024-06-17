import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';


const RecipeCard = ({ recipe }) => {
  return (
    <div className='flex flex-col bg-gray-50 0 p-5 w-80 rounded-3xl border-solid border-x-4 border-y-4 border-amber-100'>

        <img className=' w-full h-72 rounded-2xl object-cover border-solid border-x-2 border-y-2 border-blue-600' src={recipe.image} alt={recipe.label}/>

        <div className='flex flex-col items-center'>

            <h2 className='text-xl text-blue-600 font-medium mt-5 mb-5' id=''>{recipe.label}</h2>

            <p>{recipe.source}</p>

            <button 
            onClick={() => window.open(recipe.url, '_blank')}
            className=' mt-5 text-white p-2 w-32 bg-blue-600 rounded-full shadow-lg hover:bg-blue-400'>View Recipe</button>
        </div>
    </div>
  );
}

export default RecipeCard;
