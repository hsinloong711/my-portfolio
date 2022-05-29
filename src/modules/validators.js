export default function useValidators() {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? fieldName + " is required." : "";
  };

  const isEmail = (fieldName, fieldValue) => {
    let re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !re.test(fieldValue) ? "Invalid " + "email" + " address." : "";
  };

  return { isEmpty, isEmail };
}
