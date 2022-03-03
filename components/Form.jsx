import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumber } from "react-phone-number-input";
import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import Validator from "./Validator";
import Input from "./Input";
import { useCallback } from "react";
import InputData, { selectData } from "./InputData";
import SelectInput from "./SelectInput";
import axios from "axios";

const Form = () => {
  const [phoneno, setPhoneno] = useState("");
  const [parent, setParent] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [alert, setAlert] = useState({
    status: false,
    message: "",
    success: true,
  });
  const initialValue = {
    student_city: "",
    student_country: "",
    student_dob: "",
    student_email: "",
    student_grade: "grade 1",
    student_name: "",
    student_phone: "",
    student_time_zone: "UTC Western European Time",
    student_address: "",
    student_zip: "",
    country_code: "",
  };

  const [form, setForm] = useState(initialValue);
  const {
    student_email,
    student_name,
    student_grade,
    student_time_zone,
    student_phone,
    student_dob,
  } = form;

  useEffect(() => {
    if (phoneno) {
      const phoneNumber = parsePhoneNumber(phoneno);
      setForm((prev) => ({
        ...prev,
        student_phone: phoneNumber?.nationalNumber,
        country_code: "+" + phoneNumber?.countryCallingCode,
      }));
    }

    if (student_email && student_name && phoneno && student_dob) return setButtonDisable(false);
  }, [student_name, student_email, student_dob, phoneno]);

  const handleForm = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  let urlEncodedForm;
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const isValid = Validator({ student_email, phoneno });
      if (isValid) return setAlert((prev) => ({ status: true, message: isValid, success: false }));

      urlEncodedForm = new URLSearchParams({ ...form });

      const response = await axios.post(
        "https://her-shreersc-express-server.herokuapp.com/dev/admin/adminregisternewstudent",
        urlEncodedForm,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (typeof response.data !== "object") throw new Error();

      setAlert((prev) => ({
        ...prev,
        status: true,
        message: `Student Register Successfully`,
        success: true,
      }));

      setForm(initialValue);
      setPhoneno("");
    } catch (error) {
      setAlert((prev) => ({
        ...prev,
        status: true,
        message: "Server Error",
        success: false,
      }));
    }
  };

  return (
    <div className="z-50">
      {alert.status && (
        <Alert
          onClick={() => setAlert((prev) => ({ ...prev, status: false }))}
          success={alert.success}
          message={alert.message}
        />
      )}
      <form className="grid md:grid-cols-2 gap-4 mt-4 items-center" onSubmit={handleSubmit}>
        {InputData.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            value={form[field.name]}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleForm}
            className="formInput"
            label={field.label}
          />
        ))}

        {selectData.map((field) => (
          <SelectInput
            key={field.name}
            name={field.name}
            label={field.label}
            options={field.options}
            onChange={handleForm}
            value={form[field.name]}
          />
        ))}

        <div className="flex flex-col">
          <span>Enter Phone Number</span>

          <PhoneInput
            className="formInput"
            placeholder="Enter phone number"
            value={phoneno}
            onChange={setPhoneno}
            required
          />
        </div>

        <label className="flex flex-col ">
          <span>Select Date of Birth Of Student</span>
          <input
            type="date"
            name="student_dob"
            onChange={handleForm}
            value={student_dob}
            className="cursor-pointer formInput "
            required
          />
        </label>

        <button
          type="submit"
          disabled={buttonDisable}
          className="bg-blue-600 md:col-span-2 hover:scale-105 transition-all duration-300 text-white disabled:text-black p-2 disabled:cursor-not-allowed disabled:bg-gray-100"
        >
          Register New Student
        </button>
      </form>
    </div>
  );
};

export default Form;
