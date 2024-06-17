import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Logo from '../assets/vectorassets/Logo';


import React from 'react'

const SearchBar = ({searchQuery, setSearchQuery, handleSearch}) => {
  return (

        <div className="flex flex-col items-center justify-center h-screen">
            <div className=' flex flex-col justify-center items-center mb-48'>
                <Logo />
                <label htmlFor="recipe" className="text-lg font-medium leading-6 text-gray-900 mt-4">
                    What would you like to eat today?
                </label>
                <div className="flex flex-row rounded-md items-center mt-10">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        name="recipe"
                        id="recipe"
                        className="w-50 h-14 rounded-full border-0 py-1.5 pl-7 pr-20 bg-blue-700 text-white shadow-inner-custom placeholder-white placeholder-opacity-50 placeholder-text-sm focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        placeholder="Search recipes"
                    />
                    <button 
                    onClick={handleSearch}
                    className="group flex ml-5 items-center justify-center w-14 h-14 bg-white text-white rounded-3xl hover:bg-blue-700 focus:outline-none shadow-xl"
                    >
                        <FontAwesomeIcon icon={faSearch} className="text-lg text-blue-700 group-hover:text-white" />
                    </button>
                </div>
            </div>
        </div>

  );
}

export default SearchBar;
