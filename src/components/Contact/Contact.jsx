import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { MdDone } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const ITEM_HEIGHT = 48;

const Contact = ({ contact: { name, number, id } }) => {
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(editContact({ contactId: id, contactInfo: values }))
      .unwrap()
      .catch(() =>
        toast.error('Oops... Something went wrong', {
          id: 'editError',
        })
      );
    setIsEdited(false);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this contact?')) {
    dispatch(deleteContact(id))
      .unwrap()
      .catch(() =>
        toast.error('Oops... Something went wrong', {
          id: 'deleteError',
        })
      );
    }
  };

  const handleEdit = () => {
    setIsEdited(true);
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <div className={css.icons}>
          <IoPerson />
          <FaPhoneAlt />
        </div>
        <div>
          {isEdited ? (
            <Formik
              onSubmit={handleSubmit}
              initialValues={{ name, number }}
              validationSchema={validationSchema}
            >
              <Form>
                <div className={css.formBox}>
                  <div className={css.fields}>
                    <Field
                      name="name"
                      as={TextField}
                      size="small"
                      id="standard-basic"
                      variant="standard"
                    />
                    <Field
                      name="number"
                      as={TextField}
                      size="small"
                      id="standard-basic"
                      variant="standard"
                    />
                  </div>
                  <div className={css.formButtonsBox}>
                    <button className={css.formBtn} type="submit">
                      <MdDone size={20} />
                    </button>
                    <button onClick={() => setIsEdited(false)} className={css.formBtn} type="button">
                      <MdClose size={20} />
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          ) : (
            <div className={css.data}>
              <p>{name}</p>
              <p>{number}</p>
            </div>
          )}
        </div>
      </div>

      {!isEdited && (
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                handleEdit();
              }}
            >
              <div className={css.menuItem}>
                <div>Edit</div>
                <div>
                  <MdEdit size={20} />
                </div>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleDelete();
              }}
            >
              <div className={css.menuItem}>
                <div>Delete</div>
                <div>
                  <MdDelete size={20} />
                </div>
              </div>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Contact;