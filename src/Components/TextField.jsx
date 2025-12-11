import React from "react";
import { useField, ErrorMessage } from "formik";

let count = 0;
export const TextField = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className="mb-3">
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field}{...props}
                autoComplete="on" placeholder={`enter your ${(label).toLowerCase()}`}
            ></input>
            <ErrorMessage component="h1" name={field.name} className="error"></ErrorMessage>

        </div>
    )
}