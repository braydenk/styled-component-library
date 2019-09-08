import styled from 'styled-components';
import React from 'react';
import Button from './Button';

const StyledCard = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.neutral400};
  width: 300px;
  height: 250px;
  padding: 1em 2em;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
`;

const P = styled.span`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: gray;
`;

const CardHeaderTitle = styled.h1`
  font-size: 20px;
`;

const CardHeaderSubTitle = styled.h1`
  font-size: 16px;
  color: ${props => props.theme.colors.neutral600};
`;

const CardHeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;

const CardBody = styled.div`
  margin-top: 1em;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const CardActionButton = styled.button`
  border: none;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: 1em;
  max-height: 40px;
  padding: 0.5em 1em;
  border-radius: 4px;
  font-weight: 500;

  :hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

function Card() {
  return (
    <StyledCard>
      <CardHeader>
        <P />
        <CardHeaderTextContainer>
          <CardHeaderTitle>Title text</CardHeaderTitle>
          <CardHeaderSubTitle>Secondary Text</CardHeaderSubTitle>
        </CardHeaderTextContainer>
      </CardHeader>
      <CardBody>
        <p>
          This is the card body text, it can go for around 4 sentences at max.
        </p>
      </CardBody>
      <CardActions>
        <CardActionButton>Button</CardActionButton>
        <CardActionButton>Button</CardActionButton>
      </CardActions>
    </StyledCard>
  );
}

export default Card;
