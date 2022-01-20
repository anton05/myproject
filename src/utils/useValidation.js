import { useEffect, useState } from "react";

export const useValidation = (rules, initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);
    
  useEffect(()=>{
    setIsValid(!Object.values(errors).some(x => !!x));
  },[errors, setIsValid]);

  const validate = (propertyName, propertyValue, model = null) => {
    setErrors({
      ...errors,
      [propertyName]: rules[propertyName](propertyValue, model),
    });
  };

  const onValueChange = (inputName, value) => {
    setTouched(true);
    validate(inputName, value, values);
    setValues({
      ...values,
      [inputName]: value,
    });
  };

  const setInitialValues = (data) => {
    setValues(data);
  };

  return {
    values: values,
    touched,
    setTouched,
    errors,
    onValueChange,
    setInitialValues,
    isValid
  };
};
