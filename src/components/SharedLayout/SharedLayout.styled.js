import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.secondaryWhite};
  margin-bottom: 10px;
`;

export const HomeNavLink = styled(NavLink)`
  font-size: 25px;
  font-weight: bald;
  color: ${props => props.theme.colors.secondaryWhite};
  margin-bottom: 10px;
`;

export const HomeNavLinkContainer = styled.div`
  //   display: inline-block;
  width: 50%;
  margin-bottom: 10px;
  padding: 25px;
  margin-right: 10px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
  outline: none;
  border-radius: ${props => props.theme.borderRadius.sm};

  background-color: ${props => props.theme.colors.primaryAccent};
  box-shadow: ${props => {
    return ` 0 1px 3px ${props.theme.colors.secondaryAccent}`;
  }};
  transition: ${props => props.theme.transition};

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const MoviesNavLink = styled(NavLink)`
  font-size: 25px;
  font-weight: bald;
  color: ${props => props.theme.colors.secondaryWhite};
  margin-bottom: 10px;
`;

export const MoviesLinkContainer = styled.div`
  //   display: inline-block;
  width: 50%;
  margin-bottom: 10px;

  padding: 25px;

  font-weight: bold;
  text-align: center;

  cursor: pointer;
  font-size: 15px;
  outline: none;
  border-radius: ${props => props.theme.borderRadius.sm};

  background-color: ${props => props.theme.colors.primaryAccent};
  box-shadow: ${props => {
    return ` 0 1px 3px ${props.theme.colors.secondaryAccent}`;
  }};
  transition: ${props => props.theme.transition};

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
