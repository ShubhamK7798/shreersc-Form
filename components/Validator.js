import { isValidPhoneNumber } from "react-phone-number-input";
import isEmail from "validator/lib/isEmail";

const Validator = ({ student_email, phoneno }) => {
  if (!isValidPhoneNumber(phoneno)) return "Mobile Number is not Valid";
  if (!isEmail(student_email)) return "Email ID is not Valid";
};

export default Validator;
