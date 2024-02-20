import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import VerificationSchema from "../validation_schemas/verification_schema";

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

  const onSubmit = async (data) => {
    await axios
      .post("https://retreat-landin-deploy.onrender.com/confirmation/" + data.invitees_ref)
      .then((res) => {
        console.log(res);
        if (res.data.Status == "Success") {
          handleStateRef(data.invitees_ref);
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
          <button className="btn-success" type="submit">
            Submit
          </button>
          <button className="btn-danger">Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationVerifyForm;
