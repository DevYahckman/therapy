import React from "react";
import styles from "./banner.module.scss";
import { Link } from 'react-router-dom';
function Banner(props) {
  return (
    <div className={styles.banner}>
      <div className="row">
        <div className="col-12 col-lg-6 col-md-12">
          <p className={styles.para_1}>Welcome to Mediplus</p>

          <p className={styles.para_2}>we are here for your care</p>

          <p className={styles.para_3}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>

          <Link to='/appointment' className={styles.btn}> Book an Appointment</Link>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
            <div className={styles.side_2}></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
