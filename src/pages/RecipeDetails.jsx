import { useParams } from 'react-router-dom';
import { recipes } from '../data';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState('information');

  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <div>
      <div className="relative">
        <div className="absolute left-0 top-0  h-full w-full bg-black opacity-80" />

        <div className="container flex h-[60vh] flex-col items-start justify-center">
          <div className="z-40 mr-auto max-w-[700px] pt-16 text-white">
            <h2 className="text-500 font-700 md:text-800 mb-1 capitalize leading-[1.2]">
              {recipe.title}
            </h2>
          </div>

          <img
            className="absolute left-0 -z-10 h-full w-full object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
      </div>

      <div className="container py-12">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="mb-4 md:mb-0">
            <img className="rounded-md" src={recipe.image} alt={recipe.title} />
          </div>

          <div>
            <div className="space-x-4">
              <button
                className={`${
                  selected === 'information'
                    ? 'font-500 rounded-lg bg-primary-400 px-4 py-2 text-white'
                    : 'rounded-lg border border-neutral-900 px-4 py-2'
                }`}
                onClick={() => setSelected('information')}
              >
                Information
              </button>
              <button
                className={`${
                  selected === 'ingredients'
                    ? 'font-500 rounded-lg bg-primary-400 px-4 py-2 text-white'
                    : 'rounded-lg border border-neutral-900 px-4 py-2'
                }`}
                onClick={() => setSelected('ingredients')}
              >
                Ingredients
              </button>
            </div>

            <div className="mt-4">
              {selected === 'information' && <p>{recipe.information}</p>}

              {selected === 'ingredients' && (
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-2">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
