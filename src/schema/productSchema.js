import joi from "joi";

export const productSchema = joi.object({
  title: joi.string().min(3).required(),
  img: joi.string().required(),
  category: joi.string().required(),
  description: joi.string().min(6).required(),
  size: joi.number().required(),
  price: joi.number().required(),
});
