import * as yup  from 'yup'

const ValidationSchema = () => {
    let schema = yup.object().shape({
        email: yup.string().required(),
    })

    return schema
}

export default ValidationSchema