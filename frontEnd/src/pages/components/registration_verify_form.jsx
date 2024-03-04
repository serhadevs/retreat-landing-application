import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import VerificationSchema from "../validation_schemas/verification_schema";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const RegistrationVerifyForm = ({
  // eslint-disable-next-line react/prop-types
  handleToggle,
  // eslint-disable-next-line react/prop-types
  handleStateRef,
  // eslint-disable-next-line react/prop-types
  handleStateMessage,
  // eslint-disable-next-line react/prop-types
  handleStateAlertColor,
  // eslint-disable-next-line react/prop-types
  handleModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      invitees_ref: "",
    },
    resolver: yupResolver(VerificationSchema),
  });

  const [btn, setBtn] = useState(false);

  const onSubmit = async (data) => {
    setBtn(true);
    handleStateMessage("Loading..");
    handleStateAlertColor("rgba(11, 218, 81, .5)");
    await axios
      .post(
        "https://retreat-application.onrender.com/confirmation/" +
          data.invitees_ref.toLowerCase()
      )
      .then((res) => {
        console.log(res);
        if (res.data.Status == "Success") {
          handleStateRef(data.invitees_ref.toLowerCase());
          handleToggle(2);
        }
        if (res.data.Error != "") {
          handleStateMessage(res.data.Error);
          handleStateAlertColor("rgba(255, 0, 0, 0.4)");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="verify-modal">
        <h2>Verify Email</h2>
        <h3>
          A verification code will be sent to you to complete registration.
        </h3>
        <input
          type="text"
          className="modal-control"
          placeholder="Enter Email"
          {...register("invitees_ref")}
          onChange={setBtn(false)}
        />
        <p
          style={{
            marginTop: "0.3rem",
            color: "red",
            marginLeft: "10%",
            fontWeight: "bold",
            marginBottom: "-1vh",
          }}
        >
          {errors.invitees_ref?.message}
        </p>
        <div className="modal-buttons">
          <button className="btn-success" type="submit" disabled={btn}>
            Submit
          </button>
          <button className="btn-danger" type="button" onClick={handleModal}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationVerifyForm;
