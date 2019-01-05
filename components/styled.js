import styled, { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import { withBaseIcon } from 'react-icons-kit';
import colorValues, { uiGroups, syntaxGroups, ansiGroups } from 'nova-colors';

const rebootCss = reboot({
  fontFamilyBase: '"Courier New", Courier, monospace',
  bodyColor: uiGroups.foreground,
  bodyBg: uiGroups.background,
  linkColor: syntaxGroups.identifier,
  linkHoverColor: syntaxGroups.identifier,
  textMuted: colorValues.grays.gray3
});

export const GlobalStyle = createGlobalStyle`
  ${rebootCss}

  html {
    overflow: hidden;
    height: 100%;
  }

  body {
    height: 100%;
    overflow: auto;
  }

  html,
  body,
  body > div:first-child,
  #__next,
  #__next > div:first-child {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
  }

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }

  ::selection {
    background-color: ${uiGroups.userCurrentState};
    color: ${uiGroups.backgroundShade};
  }
`;

export const Header = styled.header`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${uiGroups.backgroundShade};
  padding: 1rem;
`;

export const HeaderIcon = withBaseIcon({ size: 22 });

export const HeaderLink = styled.a`
  color: ${syntaxGroups.trivial};
`;

export const Title = styled.h1`
  color: ${uiGroups.userCurrentState};
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0;
`;

export const Main = styled.main`
  flex: 1 1 auto;
  overflow-y: auto;
`;

export const Person = styled.section`
  display: flex;

  @media (max-width: 39.99em) {
    flex-direction: column;
  }
`;

export const Photo = styled.img`
  flex: 0 0 20rem;
  width: 20rem;
  height: 15rem;
  object-fit: cover;

  @media (max-width: 39.99em) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 59.99em) {
    &:nth-of-type(2) {
      display: none;
    }
  }

  @media (max-width: 79.99em) {
    &:nth-of-type(3) {
      display: none;
    }
  }
`;

export const About = styled.div`
  flex: 1 0 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 0.05rem dashed ${uiGroups.backgroundShade};

  @media (max-width: 39.99em) {
    justify-content: flex-start;
  }
`;

export const Name = styled.h2`
  color: ${uiGroups.userCurrentState};
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
  ${/* sc-selector */ Person}:hover & {
    color: ${syntaxGroups.emphasis};
  }
`;

export const SocialLink = styled.a`
  color: ${uiGroups.userCurrentState};
  margin-right: 0.5rem;

  ${/* sc-selector */ Person}:hover & {
    color: ${ansiGroups.bright.magenta};

    &:hover {
      color: ${ansiGroups.normal.magenta};
      opacity: 1;
    }
  }
`;

export const SocialIcon = withBaseIcon({ size: 32 });
