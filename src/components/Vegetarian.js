import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Wrapper, Card, Gradient } from './CourseKindStyles';
import styled from 'styled-components';

const Vegetarian = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      setVeggie(data.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div>
      <Wrapper>
        <H3>Vegetarian Picks</H3>
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            pagination: false,
            drag: 'free',
            // gap: '3rem',
          }}
        >
          {veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
};

const H3 = styled.h3`
  margin-left: 2rem;
  margin-bottom: 0.5rem;
`;

export default Vegetarian;
