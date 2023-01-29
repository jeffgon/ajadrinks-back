import joi from 'joi'

export const paymentSchema = joi.object({
    typePayment: joi.string().valid("Cartão de Crédito", "Cartão de Débito").required(),
    numberCard: joi.number().required(),
    nameCard: joi.string().required(),
    validateCard: joi.number().required(),
    cvcCard: joi.number().required()
})