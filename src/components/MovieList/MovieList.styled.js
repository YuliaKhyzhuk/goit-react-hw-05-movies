import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerMovieList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  list-style-type: none;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const MovieListContainerItem = styled.li`
  width: 90%;
  padding: 5px;
  border-radius: 2px;
  font-weight: bald;

  background-color: ${props => props.theme.colors.middleAccent};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  text-decoration: none;
`;

export const MovieListTitle = styled.h2`
  display: flex;
  justify-content: center;

  text-shadow: ${props => {
    return ` 0 1px 1px ${props.theme.colors.secondaryAccent}`;
  }};
`;

export const MovieListItemLink = styled(Link)`
  font-size: 25px;
  font-weight: bald;
  color: ${props => props.theme.colors.primaryBlack}; ;
`;
