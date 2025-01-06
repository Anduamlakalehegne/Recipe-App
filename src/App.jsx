import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
