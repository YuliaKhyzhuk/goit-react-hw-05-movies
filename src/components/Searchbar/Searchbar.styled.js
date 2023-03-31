import styled from 'styled-components';

export const SearchForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin-bottom: 20px;
`;

export const SearchFormButton = styled.button`
padding: 6px;
font-weight: bold;
cursor: pointer;
font-size: 15px;
outline: none;
border-radius: ${props => props.theme.borderRadius.sm};
color: ${props => props.theme.colors.secondaryWhite};
background-color: ${props => props.theme.colors.primaryAccent};
box-shadow: ${props => {
  return ` 0 1px 3px ${props.theme.colors.secondaryAccent}`;
}};
transition: ${props => props.theme.transition};

&:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
`;

export const SearchFormButtonLabelut = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
`;

export const SearchFormInput = styled.input`
display: flex;
flex-basis: calc(100% / 3 - 20px);
padding: 8px;
font-size: 15px;
font-weight: bold;
cursor: pointer;
background-color: ${props => props.theme.colors.secondaryWhite};
box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
border: 1px solid ${props => props.theme.colors.secondary};
border-radius: ${props => props.theme.borderRadius.sm};
transition: ${props => props.theme.transition};

&:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  outline: none;
`;
