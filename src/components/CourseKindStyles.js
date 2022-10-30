import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 4rem 0rem;
  @media (max-width: 768px) {
    margin: 2rem 0rem;

  }
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  border-radius: 32px;
  position: relative;
  margin: 0 2.2rem;
  @media (max-width: 1100px) {
    min-height: 20rem;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
    min-height: 14rem;
  }
  @media (max-width: 480px) {
    margin: 0 0.4rem;
  }
  img {
    border-radius: 32px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    left: 50%;
    color: white;
    z-index: 10;
    transform: translate(-50%, 0%);
    bottom: 0%;
    font-weight: 600;
    height: 40%;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
`;

export { Wrapper, Card, Gradient };
