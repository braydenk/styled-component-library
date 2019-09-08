import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from './Link';
import Button from './Button';

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
  width: 40%;

  @media (min-width: 900px) {
    width: 30%;
  }

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

const HeaderMobileNavButton = styled.button`
  background: ${props => props.theme.colors.background};
  border: none;
`;

const HeaderNavMobile = styled(HeaderNav)`
  position: absolute;
  background: ${props => props.theme.colors.background};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ul {
    margin-top: 4em;
    height: 50%;
    flex-direction: column;
  }

  li {
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.neutral400};
  }

  a {
    padding-left: 0.5em;
  }
`;

const HeaderNavMobileCloseButton = styled.button`
  background: ${props => props.theme.colors.background};
  border: none;
  float: right;
  margin: 1em;
`;

function Header({ titleText, navList }) {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsMediumScreen(true);
    } else {
      setIsMediumScreen(false);
    }
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <HeaderStyles>
      <HeaderTitle>
        <Link href="/">{titleText}</Link>
      </HeaderTitle>
      {isMediumScreen ? (
        <HeaderMobileNavButton onClick={toggleMobileNav}>
          Menu
        </HeaderMobileNavButton>
      ) : (
        <HeaderNav>{navList}</HeaderNav>
      )}

      {isMobileNavOpen && (
        <HeaderNavMobile>
          <HeaderNavMobileCloseButton onClick={toggleMobileNav}>
            X
          </HeaderNavMobileCloseButton>
          {navList}
        </HeaderNavMobile>
      )}
    </HeaderStyles>
  );
}

export default Header;
