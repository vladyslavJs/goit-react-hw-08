import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import css from './Contacts.module.css';
import toast from 'react-hot-toast';
import { IoIosPersonAdd } from "react-icons/io";

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() =>
        toast.error('Oops... Something went wrong', {
          id: 'error',
        })
      );
  }, [dispatch]);

  return (
    <div>
      <p className={css.title}>Here you can add a contact and manage them easily <IoIosPersonAdd /></p>
      <div>
        <ContactForm />
        <SearchBox />
      </div>
      {loading && !error && <Loader />}
      {error && <b>{error}</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;