import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { AiFillCloseCircle, AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="logo" />
        </div>
        {/* End Logo */}
        {/* Search */}
        <div className={cx('search')}>
          <input type="text" placeholder="Search accounts and videos" />
          <button className={cx('clear')}>
            {/* clear */}
            <AiFillCloseCircle />
          </button>
          {/* loading */}
          <AiOutlineLoading3Quarters className={cx('loading')} />
          <button className={cx('search-btn')}>
            {/* btn search */}
            <BiSearch />
          </button>
        </div>
        {/* End Search */}
      </div>
    </header>
  );
};

export default Header;
