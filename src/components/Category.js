import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChopsticks, GiNoodles } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Category = () => {
  return (
    <List>
      <CuisineLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </CuisineLink>
      <CuisineLink to={'/cuisine/american'}>
        <FaHamburger />
        <h4>American</h4>
      </CuisineLink>
      <CuisineLink to={'/cuisine/thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </CuisineLink>
      <CuisineLink to={'/cuisine/japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </CuisineLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem auto;
`;

const CuisineLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
