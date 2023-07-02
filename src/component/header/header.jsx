import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
// import { navItems } from '../../utils/helpers/nav';
import { navItems } from './navItem';
// import {HiOutlineMenuAlt1} from 'react-icons/hi'
import styles from "./header.module.scss";

const linkStyle = {
  textDecoration: "none",
};

function AppHeader(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

// const [show, setShow] = useState(false)

  return (
    <div className={styles.header}>
      <div className={`${styles.textLogo}`}>
        {/* <img className={`${styles.logo}`} src="/assets/logo.png" alt="logo" /> */}
        <div>LOGO</div>
      </div>
      <div className={`${styles.navSection} ${styles.hideOnMobile} justify-content-end`}>
        <Link to="/" style={linkStyle}>
          <span className={`${styles.navItem}`}>Home</span>
        </Link>
        <Link to="#" style={linkStyle}>
          <span className={`${styles.navItem}`}>About </span>
        </Link>
        <Link to="/login" style={linkStyle}>
          <span className={`${styles.navItem}`}>Doctors</span>
        </Link>
        <Link to="#" style={linkStyle}>
          <span className={`${styles.navItem}`}>Blog</span>
        </Link>
        <Link to="#" style={linkStyle}>
          <span className={`${styles.navItem}`}>Contact </span>
        </Link>
        <Link to="/appointment" style={linkStyle}>
          <span className={`${styles.navItem} ${styles.btn}`}>
            Book a therapy
          </span>
        </Link>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "70%" }}
      >
        <div className={styles.sideBarContainer}>
          <div className={`${styles.textLogo}`}>
            <img
              className={`${styles.logo}`}
              src="../assets/logo.png"
              alt="logo"
            />
            <div>
              LOGO
            </div>
          </div>

          <div className={styles.navItems}>
            {navItems.map((item, i) => (
              <Link key={i} style={{ textDecoration: "none" }} to={item.path}>
                <div className={styles.navItem}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}

export default AppHeader;
