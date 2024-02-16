import * as yup from 'yup'

const VerificationSchema = yup.object().shape({
    invitees_ref : yup.string().email("This is not a valid email").required("This field is required")
})

export default VerificationSchema