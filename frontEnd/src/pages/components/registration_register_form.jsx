import { useForm } from "react-hook-form";
import axios from 'axios'
import {yupResolver} from "@hookform/resolvers/yup"
import RegisterSchema from "../validation_schemas/register_schema";

// eslint-disable-next-line react/prop-types
const RegistrationRegisterForm = ({handleStateMessage, handleStateAlertColor, inv_ref}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      invitees_ref: inv_ref ? inv_ref : "",
      verification_code: ""
    },
    resolver : yupResolver(RegisterSchema)
  });

  const onSubmit = async (data) => {
    const values = {
        invitees_ref: data.invitees_ref,
        verification_code: data.verification_code
      };
  
      await axios
        .post("https://retreat-application.onrender.compatrons/register", values)
        .then((res) => {
          console.log(res);
          if (res.data.Status == "Success") {
            handleStateMessage("You have been registered");
            handleStateAlertColor("rgba(11, 218, 81, .5)");
          } else if (res.data.Error != "") {
            handleStateMessage(res.data.Error);
            handleStateAlertColor("rgba(255, 0, 0, 0.4)");
          }
        })
        .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="register-modal">
        <h2>Register</h2>
        <h3>
          Enter verification code sent your email to complete registration
        </h3>
        <input
          type="text"
          className="modal-control"
          placeholder="Enter Email"
          {...register("invitees_ref")}
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
        <input
          type="text"
          className="modal-control"
          placeholder="Enter Verification Code"
          {...register("verification_code")}
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
          {errors.verification_code?.message}
        </p>
        <div className="modal-buttons">
          <button className="btn-success">Submit</button>
          <button className="btn-danger">Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationRegisterForm;
