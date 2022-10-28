import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useRef } from 'react';


const Search = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const submitHandler = (e) => {
    const input = inputRef.current.value;
    e.preventDefault();
    navigate('/search/' + input);
    inputRef.current.value = ""
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input ref={inputRef} type="text" />
      </div>

      <button type="submit">Search</button>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0 auto;
  display: flex;
  div {
    position: relative;
    min-width: 50%;
    max-width: 70%;
    margin: 0 0.4rem 0 auto;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 0.4rem 0rem 0.4rem 3rem;
    border: none;
    border-radius: 16px;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(0%, -50%);
    color: white;
  }
  button {
    align-self: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: rgb(56, 56, 56);
    cursor: pointer;
    border-radius: 16px;
    transition: 0.3s;
    :hover {
      background-color: rgb(222, 222, 222);
    }
  }
`;

export default Search;
