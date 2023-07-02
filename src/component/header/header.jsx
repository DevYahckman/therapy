import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { navItems } from "./navItem";

function Header(props) {
  const [isActive, setisActive] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleclose = () => {
    setShow(false);
  };
  const handleActive = () => {
    setisActive(!isActive);
  };
  return (
    <div>
      <div className={` container ${styles.header}`}>
        <div className={styles.title}>Medi+</div>

        <nav className={`  ${styles.hideOnMobile} ${styles.navs}`}>
          <Link to="/" className={` ${styles.nav_items}`}>
            Home
          </Link>
          <Link to="#" className={` ${styles.nav_items}`}>
            About
          </Link>
          <Link to="#" className={` ${styles.nav_items}`}>
            Department
          </Link>
          <Link to="#" className={` ${styles.nav_items}`}>
            Blog
          </Link>
          <Link to="#" className={` ${styles.nav_items}`}>
            Contact
          </Link>
          <Link
            to="/appointment"
            className={`${styles.btn} ${styles.nav_items}`}
          >
            Appointment
          </Link>
        </nav>

        <div className={`${styles.hideOnDesktop} ${styles.icon}`}>
          <CgMenuGridR size={30} onClick={handleShow} />

          <Offcanvas show={show} onHide={handleclose} placement={"end"}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className={styles.title}>Medi+</div>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <div className={styles.resp_nav}>
                {navItems.map((item) => (
                  <Link
                    to={item.path}
                    onClick={handleclose}
                    className={styles.resp_navs}
                  >
                    {" "}
                    <span className={styles.resp_navs_logo}>
                      {item.icon}
                    </span>{" "}
                    {item.label}
                  </Link>
                ))}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}

export default Header;
