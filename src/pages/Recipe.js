import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Recipe = () => {
  const [details, setDetails] = useState({});
  const params = useParams();

//     const fetchDetails = async () => {
//     const data = await fetch(
//       `https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`
//     );
//     const detailData = await data.json();
//     setDetails(detailData);
// console.log(detailData);

//   };

//     useEffect(() => {
//       fetchDetails();
//     }, [params.recipeId]);
  return <div>recipe</div>;
};

export default Recipe;
