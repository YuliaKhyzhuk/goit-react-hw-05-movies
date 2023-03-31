import styled from 'styled-components';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
height: 100vh;
  background-color: ${props => props.theme.colors.backgroundPrimary};
`;
