import { useState } from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/queryHeaderimg.jpg";
import styles from "./ContactForm.module.css";

const Query = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending....");
    let response = await fetch("http://localhost:4001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });
    let result = await response.json();
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({
        success: false,
        message: "Something Went Wrong Please Try Again later",
      });
    } else {
      setStatus({ success: true, message: "Message Send Successfully" });
    }
  };
  return (
    <>
      <Header title="Contact Us" image={HeaderImage}></Header>

      <div className={styles.containers}>
        <div className={styles.form_container}>
          <h1>Ask Me</h1>
          <p> We're here to help if you have any questions</p>
          <form className={styles.form_inner} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
            </div>
            <div className={styles.row}>
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone No."
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </div>
            <div className={styles.row}>
              <textarea
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
            </div>
            <button type="submit">{buttonText}</button>
            {status.message && (
              <div className={styles.row}>
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Query;
