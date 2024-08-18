// src/components/RecipeCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Card className="recipe-card mb-4 shadow-sm">
      <Card.Img variant="top" src={recipe.image} alt={recipe.name} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{recipe.name}</Card.Title>
        <Card.Text className="card-description text-truncate">{recipe.instructions.join(' ')}</Card.Text>
        <Link to={`/detail/${recipe.id}`}>
          <Button className="view-button" variant="primary">View Recipe</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
