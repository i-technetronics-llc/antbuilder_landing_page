import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import FormNavigationButton from './FormNavigationButton'

const MultiStepForm = ({ onSubmit, snapshot, setSnapShot, children }) => {
    // form state
    const [currentStepIdx, setCurrentStepIdx] = useState(0)
    const steps = React.Children.toArray(children)
    const totalSteps = steps.length
    const currentStep = steps[currentStepIdx]
    const isLastStep = currentStepIdx === steps.length - 1
    const isFirstStep = currentStepIdx === 0


    const nextStep = (values) => {
        setCurrentStepIdx((idx) => isLastStep ? idx : idx + 1)
        setSnapShot(values)
    }
    const prevStep = (values) => {
        setSnapShot(values)
        setCurrentStepIdx((idx) => isFirstStep ? idx : idx - 1)
    }

    const handleSubmit = (values, helpers) => {
        if (currentStep.props.onSubmit) {
            currentStep.props.onSubmit()
        }
        if (isLastStep) {
            onSubmit(values, helpers)

        } else {
            nextStep(values)
            helpers.setSubmitting(false)
            helpers.setTouched({})
        }
    }


    return (
        <Formik
            initialValues={snapshot}
            onSubmit={handleSubmit}
            validationSchema={currentStep.props.validationSchema}>
            {(formik) => (
                <Form className="lg:border border-gray-200 dark:border-gray-400 rounded-xl p-4 w-full  max-w-4xl mx-auto relative">
                    <p className="text-sm text-gray-500 dark:text-gray-200 mb-1.5">{currentStepIdx + 1} / {totalSteps}</p>

                    {currentStep}

                    <FormNavigationButton
                        hasPreviousStep={currentStepIdx > 0 && currentStepIdx <= totalSteps - 1}
                        isLastStep={isLastStep}
                        handlePreviousStep={() => prevStep(formik.values)}
                        isSubmitting={formik.isSubmitting} />
                </Form>
            )}
        </Formik>
    )
}

export default MultiStepForm
