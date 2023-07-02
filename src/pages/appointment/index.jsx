import React,{useContext} from "react";
import styles from "./apppoint.module.scss";
import img from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import USerContext from "../../context/userContext";


function Appointment(props) {
   const currentUser= useContext(USerContext)

   console.log('context', currentUser);

  const config = {
    public_key: process.env.REACT_APP_FLUTTER_API_KEY ,
    tx_ref: Date.now(),
    amount: 200,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: currentUser.gmail,
      phone_number: currentUser.phone,
      name: currentUser.name,
    },
    text: "Book Now",
    customizations: {
      title: "Therapy",
      description: "Payment for therapy",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        if (response.status === "successful") {
          window.location.href = "https://calendly.com/friendnpaldev/flutter";
        } else {
          alert("Transaction fail");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };
  return (
    <div>
      <div className={styles.banner}>
        <p className={styles.banner_text}>Appointment</p>
      </div>

      <div className={styles.appoint}>
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12">
            <img src={img} className={styles.img} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-md-12">
            <p className={styles.para_1}>
              We Are <span style={{ color: "blue" }}>John_DOe</span> A Medical
              Clinic
            </p>

            <p className={styles.para_2}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>

            <Link to="#" onClick={handlePayment} className={styles.btn}>
              Make an Appointment
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
