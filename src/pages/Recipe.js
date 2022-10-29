import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Recipe = () => {
  const [details, setDetails] = useState({});
  const params = useParams();
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = useCallback(async () => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    } catch (err) {
      console.log(err);
    }
  }, [params.recipeId]);

  useEffect(() => {
    fetchDetails();
  }, [params.recipeId, fetchDetails]);

  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="highlight">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <InfoWrapper>
        <Info>
          <Button
            className={activeTab === 'instructions' ? 'active' : ''}
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === 'ingredients' ? 'active' : ''}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </Button>
        </Info>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </InfoWrapper>
    </DetailWrapper>
  );
};

const DetailWrapper = styled(motion.div)`
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;
  overflow-x: hidden;
  .highlight {
    img {
      width: 30vw;
    }
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 3rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7rem;
  h3 {
    font-size: 1rem;
    margin-bottom: 2rem;
    &:first-child {
      line-height: 150%;
    }
    &:last-child {
      margin-left: 5%;
    }
  }
`;
const Info = styled.div`
  display: flex;
  margin-bottom: 2rem;
  /* justify-content: center; */
  /* align-items: flex-start; */
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

export default Recipe;
