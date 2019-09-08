import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const HeaderStyles = styled.header`
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.neutral300};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.span`
  color: ${props => props.theme.colors.fontPrimary};
  font-size: 22px;

  a {
    color: ${props => props.theme.colors.fontPrimary};

    &:hover {
      text-decoration: none;
    }
  }
`;

const HeaderNav = styled.nav`
  width: 50%;
  height: 80%;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    list-style: none;
  }

  a {
    color: ${props => props.theme.colors.fontPrimary};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.fontPrimary};
      text-decoration: none;
    }
  }
`;

function Header({ titleText, navList }) {
  return (
    <HeaderStyles>
      <HeaderTitle>
        <Link href="/">{titleText}</Link>
      </HeaderTitle>
      <HeaderNav>{navList}</HeaderNav>
    </HeaderStyles>
  );
}

export default Header;
