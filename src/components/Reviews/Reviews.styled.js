import styled from 'styled-components';

export const ReviewListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  padding-left: 20px;
  padding-right: 20px;
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

export const ReviewListContainerItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  //   padding-top: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-radius: 2px;
  font-weight: bald;

  background-color: ${props => props.theme.colors.middleAccent};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  text-decoration: none;
`;
