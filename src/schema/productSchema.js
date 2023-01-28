import joi from "joi";

export const productSchema = joi.object({
  title: joi.string().min(3).required(),
  image: joi.string().required(),
  category: joi.string().required(),
  shortdescription:joi.string().min(6).required(),
  description: joi.string().min(6).required(),
  price: joi.string().regex(/^-?\d+(,\d{3})*(\.\d+)?$/).required(),
});

//category poderá ser:
/* 
noalcohol
copyright
cocktail
shot
beer
whiskey
wine
bottle
*/