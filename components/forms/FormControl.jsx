import React from "react";

const FormControl = ({ label, labelId, children }) => {
    return (
        <div className="space-y-2 flex flex-col">
            <label
                className="font-medium text-gray-700 capitalize"
                htmlFor={labelId}
            >
                {label}
            </label>
            {
                React.cloneElement(children, {
                    id: labelId
                })
            }
        </div>
    );
};

export default FormControl



