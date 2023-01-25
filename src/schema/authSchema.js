import joi from "joi";

function validateBirthdate(value) {
  // Validate the format of the birthdate
  const birthdateRegex =
    /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/;
  if (!birthdateRegex.test(value)) {
    throw new joi.ValidationError(
      `Birthdate must be in the format DD/MM/YYYY`,
      value,
      userSchema
    );
  }

  // Convert the string to a date object
  const date = value.split("/");
  const birthdate = new Date(date[2], date[1] - 1, date[0]);

  // Validate that the birthdate is no more than 18 years ago
  const currentYear = new Date().getFullYear();
  if (currentYear - birthdate.getFullYear() < 18) {
    throw new joi.ValidationError(
      `You must be 18 years old or older`,
      value,
      userSchema
    );
  }
  return value;
}

export const userSchema = joi.object({
  name: joi.string().min(3).required(),
  birthdate: joi
    .string()
    .custom(validateBirthdate, "Birthdate validation")
    .required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  confirmPassword: joi.string().valid(joi.ref("password")).required(),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});
