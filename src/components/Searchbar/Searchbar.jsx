import styles from './searchbar.module.css';
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Searchbar = ({handleClickSubmit}) => {
  const [search, setSearch] = useState('');

  const onChange = (event) => {
    setSearch(event.currentTarget.value);
  }

  const handleClick = (event) => {
    event.preventDefault();

    if (search === '') {
      toast.warn("Please enter words");
      return;
    }

    handleClickSubmit({search});
    setSearch('');
    reset();
  }
  
    const reset = () => {
        setSearch({
            search: ""
        });
    }

    return (<div className={styles.searchbar}>
      <form onSubmit={handleClick} className={styles.form}>
        <button type="submit" className={styles.button}>
          <CiSearch className={styles.icon} />
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          onChange={onChange}
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
    </div>
    )
  }

Searchbar.propTypes = {
    handleClickSubmit: PropTypes.func,
  }