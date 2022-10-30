import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Wrapper, Card, Gradient } from './CourseKindStyles';
import styled from 'styled-components';


const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();
        setPopular(data.recipes);
        console.log(data);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <H3>Popular Picks</H3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            // gap: '3rem',
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={'/recipe/' + recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const H3 = styled.h3`
  margin-left: 2rem;
  margin-bottom: 0.5rem;
`;

export default Popular;
