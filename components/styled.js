import styled, { injectGlobal } from 'styled-components';
import reboot from 'styled-reboot';
import { withBaseIcon } from 'react-icons-kit';
import colorValues, { uiGroups, syntaxGroups } from 'nova-colors';

const rebootCss = reboot({
  fontFamilyBase: '"Courier New", Courier, monospace',
  bodyColor: uiGroups.foreground,
  bodyBg: uiGroups.background,
  linkColor: syntaxGroups.identifier,
  linkHoverColor: syntaxGroups.identifier,
  textMuted: colorValues.grays.gray3
});

injectGlobal`
  ${rebootCss}

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
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${uiGroups.backgroundShade};
  padding: 1.6rem;
`;

export const HeaderIcon = withBaseIcon({ size: 22 });

export const HeaderLink = styled.a`
  color: ${syntaxGroups.trivial};
`;

export const Title = styled.h1`
  color: ${uiGroups.userCurrentState};
  font-size: 2.5rem;
  font-weight: 400;
`;

export const Main = styled.main`
  flex: auto;
  overflow-y: auto;
`;

export const Person = styled.section`
  display: flex;
`;

export const About = styled.div`
  padding: 1.6rem;
`;

export const Name = styled.h2`
  color: ${uiGroups.userCurrentState};
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1;

  ${Person}:hover & {
    color: ${syntaxGroups.emphasis};
  }
`;

export const Social = styled.div``;

export const Photo = styled.img`
  flex: 1;
  width: 28rem;
  height: 21rem;
`;
