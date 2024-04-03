import css from './AuthNav.module.css';
import CustomLink from '../CustomNavLink/CustomNavLink';

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <CustomLink to="/login">Log in</CustomLink>
      <CustomLink to="/register">Register</CustomLink>
    </div>
  );
};

export default AuthNav;