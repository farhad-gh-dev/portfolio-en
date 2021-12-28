import { useState } from "react";
import axios from "axios";

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);

    //SEND TO API
    try {
      await axios.post(
        "https://applications-backend.herokuapp.com/email",
        formValues
      );

      //IF SUCCESS
      setIsLoading(false);
      setFormValues({
        name: "",
        email: "",
        location: "",
        message: "",
      });
      setTimeout(() => {
        alert("Ok, nice. I will get back to you as soon as possible  (｡◕‿‿◕｡)");
      }, 100);
    } catch {
      //IF FAIL
      setIsLoading(false);
      setTimeout(() => {
        alert(
          "Oh no, something went wrong. try to send your message again  ಠ_ಠ"
        );
      }, 100);
    }
  };

  return {
    isLoading,
    formValues,
    formUpdateHandler,
    formSubmitHandler,
  };
};

export default useContactForm;
