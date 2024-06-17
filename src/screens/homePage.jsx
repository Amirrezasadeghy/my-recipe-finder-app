import React from 'react';
import { useState } from 'react';

import SearchBar from '../components/searchbar';
import RecipeCard from '../components/recipeCard';
import Pagination from '../components/Pagination';

import { fetchRecipes } from '../utils/api';


const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async () => {
    setLoading(true);
    const data = await

    fetchRecipes(searchQuery, currentPage);
    setRecipes(data.hits.map(hit => hit.recipe));

    setTotalPages(Math.ceil(data.count / 9));

    setLoading(false);
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    handleSearch();
  };

  return (
    <div className='container mx-auto p-4'>
      <SearchBar 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      handleSearch={handleSearch}
      />

      {loading && <p className=' flex flex-col mb-12 items-center font-bold justify-center'>Loading...</p>}

      <div className='grid grid-cols-4 gap-x-4 gap-y-16'>

        {recipes.map((recipe, index) => (

          <RecipeCard 
          key={index}
          recipe={recipe}
          />

        ))}

      </div>

      <Pagination 
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      />
    </div>
  );

};

export default HomePage;
