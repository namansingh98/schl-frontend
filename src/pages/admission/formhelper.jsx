import * as yup from "yup";

export const Schema = yup.object().shape({
  fname: yup.string().required(),
});
