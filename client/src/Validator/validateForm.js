export const loginValidator = (values) => {
    let errors = {};

    if(!values.email.trim()) {
        errors.email = 'Email is required';
    }

    if(!values.password) {
        errors.password = 'Password is required';
    }

    return errors;
}

export const registerValidator = (values) => {
    let errors = {};

    if(!values.firstname.trim()) {
        errors.firstname = 'First Name required';
    }

    if(!values.lastname.trim()) {
        errors.lastname = 'Last Name required';
    }

    if(!values.email.trim()) {
        errors.email = 'Email is required';
    }

    if(!values.password || values.password !== values.passwordConfirm ) {
        errors.password = 'Password is required';
    }

    if(values.password !== values.passwordConfirm || !values.passwordConfirm ) {
        errors.passwordConfirm = 'Password are not matching';
    }

    return errors;
}

export const userValidator = (values) => {
    let errors = {};

    if(!values.firstname.trim()) {
        errors.firstname = 'First Name required';
    }

    if(!values.lastname.trim()) {
        errors.lastname = 'Last Name required';
    }

    if(!values.address || !values.address.trim()) {
        errors.address = 'Address required';
    }

    if(!values.phone || !values.phone.trim()) {
        errors.phone = 'Phone required';
    }

    if(!values.postal || !values.postal.trim()) {
        errors.postal = 'Code postal required';
    }


    return errors;
}


export const confirmValidator = (code) => {
    let errors = {};

    if(!code) {
        errors.code = 'Code is required';
    }

    return errors;
}
