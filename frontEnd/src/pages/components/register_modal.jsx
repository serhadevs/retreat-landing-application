import registerImage from "../assets/images/vectors/registerImage.jpg";
import { useState } from "react";
import RegistrationVerifyForm from "./registration_verify_form";
import RegistrationRegisterForm from "./registration_register_form";

// eslint-disable-next-line react/prop-types
const RegisterModal = ({ handleModal }) => {
  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(false);
  const [invitees_ref, setInviteesRef] = useState("");
  const [message, setMessage] = useState("");
  const [alertColor, setAlertColor] = useState("");

  const alertStyle = {
    background: alertColor,
  };

  const containerStyle = {
    height: "100vh",
    zIndex: 1,
    position: "absolute",
    background: "rgba(0,0,0, 0.4)",
    width: "100%",
    display: "flex",
  };

  //handle states in children
  const handleStateRef = (inv_ref) =>{
    setInviteesRef(inv_ref);
  }

  const handleStateMessage = (message) =>{
    setMessage(message);
  }

  const handleStateAlertColor =(alertColor)=>{
    setAlertColor(alertColor);
  }
  const handleToggle = (index) => {
    if (index == 1) {
      setView1(true);
      setView2(false);
    }
    if (index == 2) {
      setView2(true);
      setView1(false);
    }
  };

  const handleAlert = () => {
    setMessage("");
  };

  return (
    <div className="modal-container" style={containerStyle}>
      <div className="modal">
        <div className="modal-left">
          <img src={registerImage} alt="" className="register-modal-image" />
        </div>
        <div className="modal-right">
          <div className="toggle-x">
            <div className="toggle">
              <div
                className={`toggle-left ${view1 ? "toggle-active" : ""}`}
                onClick={() => {
                  handleToggle(1);
                }}
              >
                Verification
              </div>
              <div
                className={`toggle-right ${view2 ? "toggle-active" : ""}`}
                onClick={() => {
                  handleToggle(2);
                }}
              >
                Register
              </div>
            </div>
            <div
              className="modal-active"
              onClick={() => {
                handleModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
          </div>

          {message ? (
            <div className="alert" style={alertStyle}>
              <div className="message">
                <div className="message-text">{message}</div>
              </div>
              <div className="message-close">
                <div className="message-close-symbol" onClick={handleAlert}>
                  X
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="modal-content">
            {view1 ? <RegistrationVerifyForm handleToggle={handleToggle} handleStateRef={handleStateRef} handleStateMessage={handleStateMessage} handleStateAlertColor={handleStateAlertColor} handleModal={handleModal}/> : ""}
            {view2 ? <RegistrationRegisterForm inv_ref={invitees_ref} handleStateAlertColor={handleStateAlertColor} handleStateMessage={handleStateMessage} handleModal={handleModal}/> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
