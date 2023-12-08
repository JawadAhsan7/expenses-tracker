import styled from 'styled-components';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="content-container">
          <h1>404</h1>
          <p>The page you&#39;re looking for is not available.</p>
          <p>Go to <Link to='/'>Homepage</Link></p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="content-container">
        <h1>Error</h1>
        <p>Something went wrong, please try later</p>
        <p>Go to <Link to='/'>Homepage</Link></p>
      </div>
    </Wrapper>
  );
};
export default ErrorPage;

const Wrapper = styled.main`
  /* 
  SPACING SYSTEM (px)
  2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 / 144 / 160

  FONT SIZE SYSTEM (px)
  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98 / 112 / 128 / 144 / 160
  */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  h1 {
    font-size: 16rem;
    font-weight: 300;
    margin: 0;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.8rem;
    margin: 0.2rem;
  }
`; 