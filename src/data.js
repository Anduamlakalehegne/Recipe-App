import Pancakes from './assets/pancakes.jpg';
import Spaghetti from './assets/spaghetti.jpg';
import Chicken from './assets/chicken.jpg';
import Cookies from './assets/cookies.jpg';
import Salad from './assets/salad.jpg';
import Curry from './assets/curry.jpg';

import Person1 from './assets/person1.jpg';
import Person2 from './assets/person2.jpg';

export const recipes = [
  {
    id: '1',
    title: 'Classic Pancakes',
    time: '20 mins',
    difficulty: 'Easy',
    image: Pancakes,
    description: 'Fluffy, golden pancakes perfect for breakfast',
    information:
      'These pancakes are a staple breakfast item that are easy to make and customizable. They’re light, fluffy, and perfect for stacking with toppings like maple syrup, fresh fruit, or whipped cream. Ideal for lazy weekend mornings or quick weekday breakfasts, they are a family favorite that never disappoints.',
    ingredients: [
      '1 cup all-purpose flour',
      '2 tablespoons sugar',
      '1 teaspoon baking powder',
      '1/2 teaspoon baking soda',
      '1 cup buttermilk',
      '1 egg',
      '2 tablespoons melted butter',
    ],
  },
  {
    id: '2',
    title: 'Spaghetti Carbonara',
    time: '30 mins',
    difficulty: 'Medium',
    image: Spaghetti,
    description: 'Creamy Italian pasta with eggs and bacon',
    information:
      "Spaghetti Carbonara is a traditional Roman dish that's as rich in flavor as it is in history. It features a creamy sauce made from eggs and cheese, complemented by the smoky saltiness of pancetta or bacon. Simple yet luxurious, this dish is perfect for impressing guests or indulging in a comforting meal.",
    ingredients: [
      '200g spaghetti',
      '2 large eggs',
      '50g grated Parmesan cheese',
      '100g pancetta or bacon, diced',
      '2 garlic cloves, minced',
      'Salt and black pepper to taste',
    ],
  },
  {
    id: '3',
    title: 'Chicken Stir-Fry',
    time: '25 mins',
    difficulty: 'Easy',
    image: Chicken,
    description: 'Quick and healthy Asian-inspired dish',
    information:
      "This chicken stir-fry is a quick, healthy, and vibrant dish that’s perfect for busy weeknights. Packed with fresh vegetables and lean chicken, it offers a delicious balance of flavors and textures. Serve it over steamed rice or noodles for a complete and satisfying meal that's ready in minutes.",
    ingredients: [
      '300g chicken breast, sliced',
      '2 tablespoons soy sauce',
      '1 tablespoon sesame oil',
      '1 bell pepper, sliced',
      '1 carrot, julienned',
      '1 broccoli head, chopped',
      '2 garlic cloves, minced',
    ],
  },

  {
    id: '4',
    title: 'Chocolate Chip Cookies',
    time: '35 mins',
    difficulty: 'Easy',
    image: Cookies,
    description: 'Chewy and delicious cookies with melty chocolate chips',
    information:
      'These chocolate chip cookies are a timeless treat that everyone loves. They are soft, chewy, and loaded with melty chocolate chips in every bite. Perfect for a quick snack, a dessert after dinner, or even a gift for loved ones, these cookies are easy to make and utterly irresistible.',
    ingredients: [
      '1 cup butter, softened',
      '1 cup white sugar',
      '1 cup brown sugar',
      '2 large eggs',
      '2 teaspoons vanilla extract',
      '3 cups all-purpose flour',
      '1 teaspoon baking soda',
      '2 cups chocolate chips',
    ],
  },
  {
    id: '5',
    title: 'Caesar Salad',
    time: '15 mins',
    difficulty: 'Easy',
    image: Salad,
    description: 'Crisp lettuce with creamy dressing and crunchy croutons',
    information:
      'Caesar salad is a classic dish that combines crisp romaine lettuce, creamy Caesar dressing, and crunchy croutons. It’s a refreshing option for a light meal or a side dish to complement heavier entrees. Top it with grilled chicken or shrimp for added protein, making it a versatile and satisfying choice.',
    ingredients: [
      '1 romaine lettuce head, chopped',
      '1/2 cup Caesar dressing',
      '1/2 cup Parmesan cheese, grated',
      '1 cup croutons',
      '1 chicken breast, grilled and sliced (optional)',
      'Salt and black pepper to taste',
    ],
  },
  {
    id: '6',
    title: 'Vegetable Curry',
    time: '40 mins',
    difficulty: 'Medium',
    image: Curry,
    description: 'Hearty and flavorful curry with seasonal vegetables',
    information:
      "This vegetable curry is a wholesome and flavorful dish that's packed with nutrients and spices. Made with a variety of seasonal vegetables, it's simmered in a rich and creamy coconut milk sauce.  Serve it with steamed rice or naan for a comforting, vegan-friendly meal that everyone will love.",
    ingredients: [
      '2 tablespoons vegetable oil',
      '1 onion, diced',
      '2 garlic cloves, minced',
      '1 tablespoon curry powder',
      '1 can coconut milk',
      '2 cups mixed vegetables (e.g., carrots, peas, potatoes)',
      'Salt and pepper to taste',
      'Fresh cilantro for garnish',
    ],
  },
];

export const testimonialData = [
  {
    id: '1',
    name: 'Emma Watson',
    rating: 5,
    handle: '@emma_w',
    image: Person1,
    description:
      'Zest has transformed the way I cook at home. The recipes are easy to follow and absolutely delicious!',
  },

  {
    id: '2',
    name: 'Liam Anderson',
    rating: 5,
    handle: '@liam_anderson',
    image: Person2,
    description:
      'I love how organized and inspiring this platform is. It feels like I have a personal chef guiding me every day!',
  },
];
