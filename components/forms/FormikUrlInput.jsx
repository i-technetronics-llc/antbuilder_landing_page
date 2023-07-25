import { ErrorMessage, useField } from "formik";

const FormikUrlInput = ({ placeholder, name, className, ...props }) => {
    const [field, meta, helper] = useField({ name, type: "url" })

    return (
        <>
            <ErrorMessage name={name} >
                {(message) => <span className='text-sm text-red-600 font-medium'>{message}</span>}
            </ErrorMessage>
            <div>
                <input
                    type={"url"}
                    placeholder={placeholder ? placeholder : ""}
                    className={`${meta.error && meta.touched ? "ring-1 ring-red-600" : ""} ${className}`}
                    {...props}
                    {...field} />
            </div>
        </>

    );
};

export default FormikUrlInput