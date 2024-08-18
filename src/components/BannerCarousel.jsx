// src/components/BannerCarousel.jsx
import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BannerCarousel = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        console.log(response.data); // Check the structure of the data
        const allRecipes = response.data.recipes;
        const randomRecipes = allRecipes
          .sort(() => 0.5 - Math.random()) // Shuffle array
          .slice(0, 5); // Select 5 random items
        setRecipes(randomRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
  
    fetchRecipes();
  }, []);
  

  return (
    <Carousel className="banner-carousel rounded-0">
      {recipes.map((recipe) => (
        <Carousel.Item key={recipe.id} className="carousel-item">
          <img
            className="d-block w-100"
            src={recipe.image}
            alt={recipe.name}
          />
          <Carousel.Caption className="carousel-caption">
            <h3>{recipe.name}</h3>
            <p>
              {recipe.description && recipe.description.length > 100
                ? `${recipe.description.slice(0, 100)}...`
                : recipe.description || 'No description available'}
            </p>
            <Link to={`/detail/${recipe.id}`}>
              <Button className="view-button" variant="light">View Recipe</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
