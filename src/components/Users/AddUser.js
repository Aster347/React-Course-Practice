import styles from "./AddUser.module.css";
import stylesGiven from "./AddUserGiven.module.css";
import Card from '../UI/Card'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (

      <form className={styles.text} onSubmit={addUserHandler}>
        <label htmlfor="username">Username </label>
        <input className={styles.box} id="username" type="text" />
        <label htmlfor="age"> Age </label>
        <input className={styles.box} id="age" type="number" />
        <div>
          <button className={styles.box} type="submit">
            Add User
          </button>
        </div>
      </form>

  );
};

export default AddUser;
