import { PropsWithChildren } from 'react';
import { Link, LinkProps } from '@mui/material';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

type NavLinkProps = PropsWithChildren<LinkProps & RouterLinkProps>;

const NavLink = (props: NavLinkProps) => {
  return <Link {...props} component={RouterLink} />;
};

export default NavLink;
