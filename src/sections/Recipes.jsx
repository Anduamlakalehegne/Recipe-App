import { Search } from 'lucide-react';
import { recipes } from '../data';
import Recipe from '../components/Recipe';
import { useEffect, useState } from 'react';
import NotFound from '../assets/not-found.png';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [likedRecipes, setLikeRecipes] = useState([]);
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    const storedLikedRecipes = JSON.parse(
      localStorage.getItem('likedRecipes') || '[]'
    );

    setLikeRecipes(storedLikedRecipes);
  }, []);

  const handleLikedToggle = (recipeId) => {
    setLikeRecipes((prevLiked) => {
      let updatedLiked;

      if (prevLiked.includes(recipeId)) {
        updatedLiked = prevLiked.filter((id) => id !== recipeId);
      } else {
        updatedLiked = [...prevLiked, recipeId];
      }

      localStorage.setItem('likedRecipes', JSON.stringify(updatedLiked));

      return updatedLiked;
    });
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedRecipes = showLiked
    ? filteredRecipes.filter((recipe) => likedRecipes.includes(recipe.id))
    : filteredRecipes;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="md:flex md:justify-between md:w-full md:items-center">
        <div className="relative mb-4 w-1/2 md:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes...."
            className="w-full rounded-lg border border-gray-100 p-4 pl-12 focus:outline-none focus:ring-1 focus:ring-primary-400"
          />

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400"
          />
        </div>

        <div>
          <button
            onClick={() => setShowLiked(!showLiked)}
            className="font-500 rounded-lg bg-primary-400 px-4 py-2 text-white"
          >
            {showLiked ? 'All recipes' : 'Liked recipes'}
          </button>
        </div>
      </div>

      <div>
        {displayedRecipes.length === 0 ? (
          <div>
            <img
              className="mx-auto size-[400px]"
              src={NotFound}
              alt="not found"
            />
            <p className="text-500 font-600 text-center">No recipes found</p>
          </div>
        ) : (
          <div className="mt-8 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {displayedRecipes.map((recipe) => (
              <Recipe
                key={recipe.id}
                recipe={recipe}
                isLiked={likedRecipes.includes(recipe.id)}
                onToggle={handleLikedToggle}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Recipes;
