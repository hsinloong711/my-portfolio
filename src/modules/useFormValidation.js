import { reactive } from "@vue/reactivity";
import useValidators from "@/modules/validators";

const error = reactive({});
export default function useFormValidation() {
  const { isEmpty, isEmail } = useValidators;

  const validateNameField = (fieldName, fieldValue) => {
    error[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : "";
  };

  const validateEmailField = (fieldName, fieldValue) => {
    error[fieldName] = !fieldValue ? isEmail(fieldName, fieldValue) : "";
  };

  return { error, validateNameField, validateEmailField, isEmpty, isEmail };
}
