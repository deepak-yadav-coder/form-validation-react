import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';

export const Signup = () => {

    const validate = Yup.object({
        firstName: Yup.string().max(20, 'only twenty character allowed.').required('required.'),
        lastName: Yup.string().max(20, 'only twenty character allowed.'),
        email: Yup.string().email('email is invalid').required('required.'),
        password: Yup.string().min(6, 'password must be at least 6 characters.'),
        age: Yup.number().max(999, 'only three digite allowed'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must be same').required('required.')
    })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                age: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
        // onSubmit={value => console.log(value)}
        >
            {Formik => (
                < div >
                    <h1 className='center'>Sign up</h1>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text"></TextField>
                        <TextField label="Last Name" name="lastName" type="text"></TextField>
                        <TextField label="Age" name="age" type="number"></TextField>
                        <TextField label="Email" name="email" type="email"></TextField>
                        <TextField label="Password" name="password" type="password"></TextField>
                        <TextField label="Confirm Password" name="confirmPassword" type="password"></TextField>
                        <div className="text-center">
                            <button className="btn btn-success mt-3 me-2" type="submit">Submit</button>
                            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik >
    )
}
