import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe, onToggle, isLiked }) => {
  return (
    <div className="relative mb-4 rounded-lg bg-white shadow-md">
      <button
        onClick={() => onToggle(recipe.id)}
        className="absolute left-4 top-4 z-20 flex size-[32px] cursor-pointer items-center justify-center rounded-full bg-primary-400 text-white"
      >
        <Heart
          size={20}
          className={`text-center ${isLiked ? 'fill-current' : ''}`}
        />
      </button>

      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-48 w-full rounded-t-lg object-cover"
        />

        <div className="p-4">
          <h2 className="text-400 font-600">{recipe.title}</h2>
          <div className="flex mt-2 items-center text-sm text-gray-600">
            <span className="mr-4">{recipe.time}</span>
            <span>{recipe.difficulty}</span>
          </div>

          <p className="text-200 mt-2">{recipe.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Recipe;
