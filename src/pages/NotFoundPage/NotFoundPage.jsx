import css from './NotFoundPage.module.css'
import { MdWifiOff } from "react-icons/md";

const NotFoundPage = () => {
  return <h1 className={css.notPage}>PAGE NOT FOUND...<MdWifiOff className={css.icon} /></h1>;
};

export default NotFoundPage;