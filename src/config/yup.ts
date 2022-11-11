import * as yup from 'yup'

yup.setLocale({
    number: {
        min: 'Campo ${path} inválido, o valor mínimo é ${min}.'
    },
    string: {
        matches: 'Campo ${path} inválido.',
        email: 'Email inválido!',
        min: 'Campo ${path} deve ter no mínimo ${min} caracteres.'
    },
    array: {
        min: 'Nenhuma opção disponível.'
    },
    mixed: {
        required: '${path} é um campo obrigatório.',
        oneOf: '${path} deve ser um dos seguintes valores: ${values}.',
        notType: '${path} deve ser um valor do tipo ${type}.',
        default: 'Campo ${path} inválido.'
    }
})

export default {yup, validateSchema: async (schema: yup.AnySchema, value: any, message: string = '') => {
    try {
        return await schema.validate(value, { abortEarly: true, stripUnknown: true })
    } catch (err: any) {
        const error = {
            status: 400,
            message: err.errors[0] || message
        }
        
        return error
    }
}}