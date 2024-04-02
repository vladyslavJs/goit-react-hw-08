import c from './AuthNav.module.css';
import CustomLink from '../CustomNavLink/CustomNavLink';

const AuthNav = () => {
  return (
    <div className={c.nav}>
      <CustomLink to="/register">Sign up</CustomLink>
      <CustomLink to="/login">Log in</CustomLink>
    </div>
  );
};

export default AuthNav;