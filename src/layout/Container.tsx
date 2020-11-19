import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container: React.FC = (props) => {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default Container;
