import { ErrorMessage, useField } from "formik";
import { useEffect, useRef, useState } from "react";

const FormikAutoComplete = ({ type = "text", suggestions, placeholder, name, className, ...props }) => {
    const [field, meta, helpers] = useField({ name, type })
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    const filteredSuggestions = suggestions.filter((suggestion) => {
        let suggestionLowerCase = suggestion.toLowerCase()
        let queryLowerCase = field.value.toLowerCase()

        if (suggestionLowerCase === queryLowerCase) return false

        return suggestionLowerCase.includes(queryLowerCase)
    })

    const isSuggestionsEmpty = filteredSuggestions.length === 0

    const openAutoComplete = () => {
        setIsOpen(true)
    }

    const closeAutocomplete = () => {
        setIsOpen(false)
    }

    const handleClickOutside = () => {
        closeAutocomplete()
    }

    useEffect(() => {
        // closes the modal if there is no values
        if (field.value) openAutoComplete()
        else closeAutocomplete()

    }, [field.value])

    useEffect(() => {
        // closes the modal if the user clicks outside
        document.addEventListener("click", (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) closeAutocomplete()
        })
        return () => document.removeEventListener("click", handleClickOutside)
    })

    const handleItemClick = (item) => {
        helpers.setValue(item)
        closeAutocomplete()
    }


    return (
        <>
            <ErrorMessage name={name} >
                {(message) => <span className='text-sm text-red-600 font-medium'>{message}</span>}
            </ErrorMessage>
            <div ref={menuRef} className="relative w-full">
                <input
                    type={type}
                    placeholder={placeholder ? placeholder : ""}
                    className={`${meta.error && meta.touched ? "ring-1 ring-red-600" : ""} ${className}`}
                    {...field}
                    {...props}
                />

                {/* dropdown suggestions */}
                <div
                    className={`bg-gray-100 dark:bg-gray-600 shadow-md absolute top-full mt-1 rounded-lg left-0 w-full px-1 py-3 z-20 overflow-y-auto ${isOpen && !isSuggestionsEmpty ? "block" : "hidden"}`}>
                    {filteredSuggestions
                        .slice(0, 10)
                        .map((suggestion, idx) => {
                            return (
                                <p
                                    key={`suggestion-${idx}`}
                                    onClick={(e) => handleItemClick(suggestion)}
                                    className="text-sm rounded-md text-gray-800 dark:text-gray-300 px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-500">
                                    {suggestion}
                                </p>
                            )
                        })}
                </div>
            </div>
        </>

    );
};

export default FormikAutoComplete