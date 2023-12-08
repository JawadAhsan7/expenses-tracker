import styled from 'styled-components';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="content-container">
          <h1>Not found</h1>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="content-container">
        <h1>Something went wrong</h1>
      </div>
    </Wrapper>
  );
};
export default ErrorPage;

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`; 