import React from "react";

const FormControl = ({ label, labelId, children }) => {
    return (
        <div className="space-y-2 flex flex-col">
            <label
                className="font-medium text-gray-700 dark:text-gray-200 capitalize"
                htmlFor={labelId}
            >
                {label}
            </label>
            {children}
            {/* {
                React.cloneElement(children, {
                    id: labelId
                })
            } */}
        </div>
    );
};

export default FormControl



