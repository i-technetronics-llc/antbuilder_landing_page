const FormNavigationButton = ({ hasPreviousStep, isLastStep, handlePreviousStep, isSubmitting }) => {
    return (
        <div className="flex items-center justify-end space-x-7 mt-8">
            {hasPreviousStep && (
                <button className="text-gray-800 dark:text-gray-200 text-sm flex items-center" onClick={handlePreviousStep}>
                    <ArrowNarrowLeftIcon className="w-4 h-4 mr-2" /> Back
                </button>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2 text-lg font-medium text-center w-max inline-flex items-center text-white bg-blue-500 rounded-xl"
            >
                {isLastStep ? 'Submit' : 'Next'}
            </button>

        </div>
    )
}