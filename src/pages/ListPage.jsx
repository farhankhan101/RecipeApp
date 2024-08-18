// src/pages/ListPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingIcon from '../components/LoadingIcon';
import BannerCarousel from '../components/BannerCarousel'; // Import the carousel

const ListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <LoadingIcon />;

  return (
    <>
      <Header />
      <BannerCarousel /> {/* Include the carousel */}

      <div className="container mt-4">
        <div className="row">
          {recipes.map(recipe => (
            <div className="col-md-4" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListPage;
