import React, { useEffect, useState } from 'react'
import { PopupModal, useCalendlyEventListener } from 'react-calendly'
import EventDetails from './EventDetails'
import FormStep from './forms/FormStep'

const makeCalendlyRequest = async (url) => {
    // make a request using calendly Authorization token
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_CALENDLY_API_TOKEN}`,
            },
        });

        if (!res.ok) {
            throw new Error('Error occurred while making the request');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(`Calendly API request failed: ${error.message}`);
    }
};


function formatDateTime(date, timezone) {
    // formate the date in this format (Wednesday, Jul 19, 2023, 12:00 PM West Africa Standard Time)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: timezone,
        timeZoneName: "long",

    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
}


const ScheduleCallStep = ({ snapshot, eventDetails, setEventDetails }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    const eventEmpty = eventDetails.length === 0

    useCalendlyEventListener({
        onEventScheduled: async (e) => {
            try {
                const data = await makeCalendlyRequest(e.data.payload.event.uri)
                const eventInviteeDetail = await makeCalendlyRequest(e.data.payload.invitee.uri)

                setEventDetails([
                    {
                        name: "Event Name",
                        value: data.resource.name,
                    },
                    {
                        name: "Event Start Time",
                        value: formatDateTime(new Date(data.resource.start_time), eventInviteeDetail.resource.timezone),
                    },
                    {
                        name: "Event location",
                        value: data.resource.location.type,
                    },
                    {
                        name: "Join Url",
                        value: data.resource.location.join_url,
                        isLink: true
                    },
                    {
                        name: "Your Email",
                        value: eventInviteeDetail.resource.email,
                    },
                    {
                        name: "Your Name",
                        value: eventInviteeDetail.resource.name,
                    },
                ])

            } catch (error) {
                alert("An error occurred while fetching data from Calendly. Please try again later.")
            }


        },
    });

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <FormStep
            title={"Get in touch with us"}
            description="We would love to know more about your project. please schedule a call" >

            <div className='space-y-3'>
                <h4>{!eventEmpty ? "Event Details" : "Schedule a call"}</h4>

                {eventEmpty &&
                    <button
                        onClick={() => setIsOpen(true)}
                        type='button'
                        className='bg-gray-200 dark:bg-gray-600 text-left px-3 text-gray-800 dark:text-gray-300 w-full py-5 rounded-md'>
                        Pick a date
                    </button>
                }

                {!eventEmpty && <EventDetails details={eventDetails} />}

            </div>

            {
                mounted &&
                <PopupModal
                    url="https://calendly.com/cyphermoon/frontend-developer"
                    prefill={{
                        name: `${snapshot.firstName} ${snapshot.lastName}`,
                        email: snapshot.email
                    }}
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={document.getElementById("__next")}
                />
            }


        </FormStep>
    )
}

export default ScheduleCallStep