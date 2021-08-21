import { useState } from "react";
import axios from "axios";

const useContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const formUpdateHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //SEND TO API
    try {
      const { data } = await axios.post(
        "https://applications-backend.herokuapp.com/email",
        formValues
      );

      //IF SUCCESS
      setFormValues({
        name: "",
        email: "",
        location: "",
        message: "",
      });
      alert("Ok, nice. I will get back to you as soon as possible  (｡◕‿‿◕｡)");
    } catch {
      //IF FAIL
      alert("Oh no, something went wrong. try to send you message again  ಠ_ಠ");
    }
  };

  return {
    formValues,
    formUpdateHandler,
    formSubmitHandler,
  };
};

export default useContactForm;
