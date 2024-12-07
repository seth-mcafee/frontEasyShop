import * as Yup from 'yup'

export function initialValues(){
    return {
        name :'',
        email: '',
        password:''
    }
}

export function validationSchema(){

    return Yup.object({
        name: Yup.string().required("The field name is required"),
        email: Yup.string().email("Introduce a valid email").required("The field email is required"),
        password: Yup.string().required("The field password is required"),
    })
}