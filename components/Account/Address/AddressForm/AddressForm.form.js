import * as Yup from 'yup';

export function initialValues(address) {
    return {
        title: address?.title || '',
        name: address?.name || '',
        surname: address?.surname || '',
        company: address?.company || '',
        vat: address?.vat || '',
        region: address?.region || '',
        city: address?.city || '',
        address: address?.address || '',
        cp: address?.cp || '',
        phone: address?.phone || '',
        email: address?.email || '',
    };
}

export function validationSchema() {
    return Yup.object({
        title: Yup.string()
            .required('The field title is required')
            .max(255, 'Title cannot exceed 255 characters'),
        name: Yup.string()
            .required('The field name is required')
            .max(255, 'Name cannot exceed 255 characters'),
        surname: Yup.string()
            .required('The field surname is required')
            .max(255, 'Surname cannot exceed 255 characters'),
        company: Yup.string()
            .nullable()
            .max(255, 'Company cannot exceed 255 characters'),
        vat: Yup.string()
            .nullable()
            .max(20, 'VAT cannot exceed 20 characters'),
        region: Yup.string()
            .required('The field region is required')
            .max(255, 'Region cannot exceed 255 characters'),
        city: Yup.string()
            .required('The field city is required')
            .max(255, 'City cannot exceed 255 characters'),
        address: Yup.string()
            .required('The field address is required')
            .max(255, 'Address cannot exceed 255 characters'),
        cp: Yup.string()
            .required('The field postal code is required')
            .max(10, 'Postal code cannot exceed 10 characters'),
        phone: Yup.string()
            .required('The field phone is required')
            .max(20, 'Phone cannot exceed 20 characters'),
        email: Yup.string()
            .required('The field email is required')
            .email('Enter a valid email address')
            .max(255, 'Email cannot exceed 255 characters'),
    });
}
