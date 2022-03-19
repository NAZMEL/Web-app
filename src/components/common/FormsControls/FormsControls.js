import React from "react"
import { Field } from "redux-form";
import style from "./FormsControls.module.css";

const FormControl = (Element) => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + (hasError && style.error)}>
            <div>
                <Element {...props} {...input} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    <div>
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
}

export const Textarea = FormControl('textarea');
export const Input = FormControl('input');
