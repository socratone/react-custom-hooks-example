import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MainNavItemProps = {
  to: string;
  children: string;
};

const MainNavItem = ({ to, children }: MainNavItemProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: dodgerblue;
`;

export default MainNavItem;
