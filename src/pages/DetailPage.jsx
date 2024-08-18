// src/pages/DetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingIcon from '../components/LoadingIcon';

const DetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        const recipeData = response.data.recipes.find(recipe => recipe.id === parseInt(id));
        setRecipe(recipeData);
      } catch (error) {
        console.error('Error fetching recipe', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <LoadingIcon />;

  if (!recipe) return <p className="text-center">Recipe not found</p>;

  return (
    <>
      <Header />
      <div className="detail-page container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="recipe-image-container">
              <img src={recipe.image} alt={recipe.name} className="img-fluid rounded shadow-lg" />
            </div>
            <h2 className="recipe-title mt-4 mb-3">{recipe.name}</h2>
          </div>
          <div className="col-md-7">
            <div className="recipe-details">
              <h4 className="section-title">Description</h4>
              <p className="description-text">{recipe.instructions.join(' ')}</p>
              <h5 className="section-title">Ingredients</h5>
              <ul className="list-group ingredient-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="list-group-item ingredient-item">{ingredient}</li>
                ))}
              </ul>
              <div className="recipe-meta mt-4">
                <p><strong>Preparation Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                <p><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
                <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
                <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
