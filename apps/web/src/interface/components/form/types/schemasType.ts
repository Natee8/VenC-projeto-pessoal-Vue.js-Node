//profilebase

import { registerFormBaseSchema } from "../schemas/formBaseSchema";
import { profileFormSchema } from "../schemas/profileBaseSchema";
import * as yup from "yup";

export type ProfileFormSchema = yup.InferType<typeof profileFormSchema>;

//registerbase
export type RegisterFormBaseSchema = yup.InferType<
  typeof registerFormBaseSchema
>;

//registerradiusandcep
