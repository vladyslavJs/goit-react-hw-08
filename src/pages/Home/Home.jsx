import css from './Home.module.css';
import homeBackground from '../../images/home.jpg'
import { FcPhoneAndroid } from "react-icons/fc";
import { FcServices } from "react-icons/fc";

const Home = () => {
    return (
        <div>
            <div className={css.title}>
                <h1><FcServices />Welcome to our homepage!</h1>
                <p>
                    Here, you can conveniently manage your contacts and stay connected with your friends, family, and colleagues.
                </p> 
            </div>
            <div className={css.info}>
                <h2><FcPhoneAndroid /> Why are we needed ?</h2>
                <p>
                    Our phone contacts management service is a convenient and simple way to organize your address book. Keep all your contacts in one place, easily edit and add new information, and quickly find the information you need when you need it.Try it out and see for yourself! Enjoy!
                </p>
            </div>
            
            <img className={css.image} src={homeBackground} alt="home background" />
        </div>
    );
};

export default Home;