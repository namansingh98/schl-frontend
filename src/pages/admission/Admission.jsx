// const imageMimeType = /image\/(png|jpg|jpeg)/i;
import Header from "../../components/Header";
import HeaderImage from "../../images/admissionHeaderimg.jpg";
import styles from "./Admission.module.css";
import LOGO from "../../../public/Logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReactToPrint } from "react-to-print";
import { useState, useRef } from "react";
const Admission = () => {
  const ComponentPDF = useRef(null);
  const resetForm = () => {
    setInputvalue({
      fname: "",
      mName: "",
      lname: "",
      date: "",
      aClass: "",
      tounge: "",
      religion: "",
      Aadhar: "",
      category: "",
      ffname: "",
      flname: "",
      fqualification: "",
      foccupation: "",
      fphone: "",
      frAadhar: "",
      mfname: "",
      mlname: "",
      mqulification: "",
      moccupation: "",
      mphone: "",
      mAadhar: "",
      locname: "",
      loclname: "",
      locphone: "",
      caddress: "",
      paddress: "",
    });
  };

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    mName: "",
    lname: "",
    date: "",
    aClass: "",
    tounge: "",
    religion: "",
    Aadhar: "",
    category: "",
    ffname: "",
    flname: "",
    fqualification: "",
    foccupation: "",
    fphone: "",
    frAadhar: "",
    mfname: "",
    mlname: "",
    mqulification: "",
    moccupation: "",
    mphone: "",
    mAadhar: "",
    locname: "",
    loclname: "",
    locphone: "",
    caddress: "",
    paddress: "",
  });
  console.log(inputvalue);
  const getValue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  const sendUserdata = async (e) => {
    e.preventDefault();
    setInputvalue({
      fname: " ",
      mName: " ",
      lname: " ",
      date: " ",
      aClass: " ",
      tounge: " ",
      religion: " ",
      Aadhar: " ",
      category: " ",
      ffname: " ",
      flname: " ",
      fqualification: " ",
      foccupation: " ",
      fphone: " ",
      frAadhar: " ",
      mfname: " ",
      mlname: "",
      mqulification: " ",
      moccupation: " ",
      mphone: " ",
      mAadhar: " ",
      locname: " ",
      loclname: " ",
      locphone: " ",
      caddress: "  ",
      paddress: " ",
    });
    const {
      fname,
      mName,
      lname,
      date,
      aClass,
      tounge,
      religion,
      Aadhar,
      category,
      ffname,
      flname,
      fqualification,
      foccupation,
      fphone,
      frAadhar,
      mfname,
      mlname,
      mqulification,
      moccupation,
      mphone,
      mAadhar,
      locname,
      loclname,
      locphone,
      caddress,
      paddress,
    } = inputvalue;
    if (fname == "") {
      toast.error("fname is required");
    } else if (mName == "") {
      toast.error("mName is required");
    } else if (lname == "") {
      toast.error("lname is required");
    } else if (date == "") {
      toast.error("date is required");
    } else if (aClass == "") {
      toast.error("aClass is required");
    } else if (tounge == "") {
      toast.error("tounge is required");
    } else if (religion == "") {
      toast.error("religion is required");
    } else if (Aadhar == "") {
      toast.error("Aadhar is required");
    } else if (category == "") {
      toast.error("category is required");
    } else if (ffname == "") {
      toast.error("ffname is required");
    } else if (flname == "") {
      toast.error("flname is required");
    } else if (fqualification == "") {
      toast.error("fqualification is required");
    } else if (foccupation == "") {
      toast.error("foccupation is required");
    } else if (fphone == "") {
      toast.error("fphone is required");
    } else if (frAadhar == "") {
      toast.error("frphone is required");
    } else if (mfname == "") {
      toast.error("mfname is required");
    } else if (mlname == "") {
      toast.error("mlname is required");
    } else if (mqulification == "") {
      toast.error("mqulification is required");
    } else if (moccupation == "") {
      toast.error("moccupation is required");
    } else if (mphone == "") {
      toast.error("mphone is required");
    } else if (mAadhar == "") {
      toast.error("mAadhar is required");
    } else if (locname == "") {
      toast.error("locname is required");
    } else if (loclname == "") {
      toast.error("loclname is required");
    } else if (caddress == "") {
      toast.error("caddress is required");
    } else if (paddress == "") {
      toast.error("paddress is required");
    } else if (locphone == "") {
      toast.error("locphone is required");
    } else {
      const response = await fetch("http://localhost:4001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          mName,
          lname,
          date,
          aClass,
          tounge,
          religion,
          Aadhar,
          category,
          ffname,
          flname,
          fqualification,
          foccupation,
          fphone,
          frAadhar,
          mfname,
          mlname,
          mqulification,
          moccupation,
          mphone,
          mAadhar,
          locname,
          loclname,
          locphone,
          caddress,
          paddress,
        }),
      });
      const datas = await response.json();
      console.log(datas);
      if (datas.status == 201) {
        toast.success("Your Responce is Submitted");
        setInputvalue({
          ...inputvalue,
          fname,
          mName,
          lname,
          date,
          aClass,
          tounge,
          religion,
          Aadhar,
          category,
          ffname,
          flname,
          fqualification,
          foccupation,
          fphone,
          frAadhar,
          mfname,
          mlname,
          mqulification,
          moccupation,
          mphone,
          mAadhar,
          locname,
          loclname,
          locphone,
          caddress,
          paddress,
        });
      }
    }
  };
  const generatepdf = useReactToPrint({
    content: () => ComponentPDF.current,
    documentTitle: "StudentData",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  return (
    <>
      <Header title="Admssion" image={HeaderImage}></Header>
      <div ref={ComponentPDF} style={{ width: "100%" }}>
        <form
          action="#"
          method="POST"
          className={styles.formContainer}
          onSubmit={sendUserdata}
        >
          <div className={styles.subContainer}>
            <a href="#" className={styles.Schlogo}>
              <img src={LOGO} alt="School Logo" />
            </a>
            <div className={styles.SchName}>
              <h1>ANKUR SCHOOL</h1>
            </div>
          </div>
          <div className={styles.SchAddress}>
            <p>Admin. Office: Qr. No 1C - 185. B.S City, Jharkhand</p>
            <p>School Campus- Capm 2, Bokaro</p>
          </div>
          <div className={styles.SchOffce}>
            <div className={styles.SchReg}>
              <small>FOR OFFICE USE ONLY</small>
              <p>Reg.No.:________________</p>
              <p>Reg. Date:___/____/____</p>
              <p>Fee:____Receipt:_____</p>
            </div>
            <div className={styles.SchRegname}>ADMISSION FROM</div>
          </div>
          <div className={styles.SchHeader}>Registration From</div>
          <div className={styles.form}>
            <div className={styles.formControler}>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                value={inputvalue.fname}
                onChange={getValue}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="mName">Middle Name</label>

              <input
                type="text"
                name="mName"
                id="mName"
                onChange={getValue}
                value={inputvalue.mName}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                id="lname"
                value={inputvalue.lname}
                onChange={getValue}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="date">Date of birth</label>
              <input
                type="date"
                name="date"
                id="date"
                value={inputvalue.date}
                onChange={getValue}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="aClass">Admitting in Class</label>
              <input
                type="text"
                name="aClass"
                id="aClass"
                onChange={getValue}
                value={inputvalue.aClass}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="tounge">Mother Tounge</label>
              <input
                type="text"
                name="tounge"
                value={inputvalue.tounge}
                id="tounge"
                onChange={getValue}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="religion">Religion</label>
              <input
                type="text"
                name="religion"
                id="religion"
                onChange={getValue}
                value={inputvalue.religion}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="Aadhar">Aadhar No:</label>
              <input
                type="number"
                name="Aadhar"
                id="Aadhar"
                onChange={getValue}
                value={inputvalue.Aadhar}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                onChange={getValue}
                value={inputvalue.category}
              />
            </div>

            <div className={styles.formControler}>
              <label htmlFor="ffname">Father's First Name</label>
              <input
                type="text"
                name="ffname"
                id="ffname"
                onChange={getValue}
                value={inputvalue.ffname}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="flname">Father's Last Name</label>
              <input
                type="text"
                value={inputvalue.flname}
                name="flname"
                id="flname"
                onChange={getValue}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="fqualification">Qualification:</label>
              <input
                type="text"
                name="fqualification"
                id="fqualification"
                onChange={getValue}
                value={inputvalue.fqualification}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="foccupation">Occupation:</label>
              <input
                type="text"
                name="foccupation"
                id="foccupation"
                onChange={getValue}
                value={inputvalue.foccupation}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="fphone">Phone</label>
              <input
                type="number"
                name="fphone"
                id="fphone"
                onChange={getValue}
                value={inputvalue.fphone}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="frAadhar">Aadhar No:</label>
              <input
                type="number"
                name="frAadhar"
                onChange={getValue}
                id="frAadhar"
                value={inputvalue.frAadhar}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="mfname">Mother's First Name</label>
              <input
                type="text"
                name="mfname"
                onChange={getValue}
                id="mfname"
                value={inputvalue.mfname}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="mlname">Mother's Last Name</label>

              <input
                type="text"
                onChange={getValue}
                name="mlname"
                value={inputvalue.mlname}
                id="mlname"
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="mqulification">Qulification:</label>
              <input
                type="text"
                name="mqulification"
                id="mqulification"
                onChange={getValue}
                value={inputvalue.mqulification}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="moccupation">Occupation:</label>
              <input
                type="text"
                name="moccupation"
                id="moccupation"
                onChange={getValue}
                value={inputvalue.moccupation}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="mphone">Phone</label>
              <input
                type="number"
                name="mphone"
                id="mphone"
                onChange={getValue}
                value={inputvalue.mphone}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="mAadhar">Aadhar No:</label>
              <input
                type="number"
                name="mAadhar"
                id="mAadhar"
                onChange={getValue}
                value={inputvalue.mAadhar}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="locname">Local Guadian's First Name:</label>
              <input
                type="text"
                name="locname"
                id="locname"
                onChange={getValue}
                value={inputvalue.locname}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="loclname">Local Guadian's Last Name:</label>
              <input
                type="text"
                name="loclname"
                id="loclname"
                onChange={getValue}
                value={inputvalue.loclname}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="locphone">Phone No:</label>
              <input
                type="number"
                name="locphone"
                id="locphone"
                onChange={getValue}
                value={inputvalue.locphone}
              />
            </div>
            <div className={styles.formControler}>
              <label htmlFor="caddress">Current Address:</label>
              <textarea
                name="caddress"
                id="caddress"
                cols="30"
                rows="10"
                onChange={getValue}
                value={inputvalue.caddress}
              ></textarea>
            </div>
            <div className={styles.formControler}>
              <label htmlFor="paddress">Permanent Address:</label>
              <textarea
                name="paddress"
                id="paddress"
                cols="30"
                rows="10"
                onChange={getValue}
                value={inputvalue.paddress}
              ></textarea>
            </div>
          </div>
          <hr className={styles.oneLine} />
          <div className={styles.ackow}>
            <h3>Acknowledgement</h3>
            <p>
              I hereby certify all of the information provided by me in this
              application(or any other accompanying or required documents) is
              correct, accurate and complete to the best of my knowledge
            </p>
          </div>
          <div className={styles.attach}>
            <p>Please Attach:</p>
            <ol className={styles.list}>
              <li>Aadhar Cards Of Father & Mother</li>
              <li>Aadhar Card Of Candidate</li>
              <li>Birth Certificate Of Candidate</li>
              <li>
                Transfer Certificate & Progress Report (Form The Previous
                School)
              </li>
            </ol>
          </div>
          <div className={styles.photoareawrapper}>
            <div className={styles.photoarea}>
              Recent Passport size photo of Father
            </div>
            <div className={styles.photoarea}>
              Recent Passport size photo of Student
            </div>
            <div className={styles.photoarea}>
              Recent Passport size photo of Mother
            </div>
            <div className={styles.signaturearea}>
              signature of Parent/Guardian
            </div>
          </div>
          <div className={styles.btns}>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
            <button type="submit" onClick={generatepdf}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Admission;
