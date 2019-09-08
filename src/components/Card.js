import styled from 'styled-components';
import React from 'react';
import Button from './Button';

const StyledCard = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.neutral400};
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

const P = styled.span`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.neutral400};
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

const CardHeaderContainer = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  padding: 1em;
  margin-top: 1em;
`;

const CardBodyContainer = styled.div`
  height: 50%;
  padding: 0.5em 1.5em;
`;

const CardActionsContainer = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  margin-bottom: 1em;
`;

const CardHeaderTitle = styled.h1`
  font-size: 20px;
`;

function Card() {
  return (
    <StyledCard>
      <CardHeaderContainer>
        <P />
        <CardHeaderTextContainer>
          <CardHeaderTitle>Title</CardHeaderTitle>
          <CardHeaderSubTitle>Secondary Text</CardHeaderSubTitle>
        </CardHeaderTextContainer>
      </CardHeaderContainer>
      <CardBodyContainer>
        <p>
          This is the card body text, it can go for around 4 sentences at max.
        </p>
      </CardBodyContainer>
      <CardActionsContainer>
        <Button primary small>
          Button
        </Button>
        <Button primary small>
          Button
        </Button>
      </CardActionsContainer>
    </StyledCard>
  );
}

export default Card;
