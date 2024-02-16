import * as yup from 'yup'

const RegisterSchema = yup.object().shape({
    invitees_ref: yup.string().email("This is not a valid email").required("this field is required"),
    verification_code: yup.number().typeError("Required and only numbers")
});

export default RegisterSchema;