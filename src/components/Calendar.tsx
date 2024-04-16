import { CalendarDateRange } from '@/app/page';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type CalendarProps = {
    onCalendarChange: Dispatch<SetStateAction<CalendarDateRange>>;
    calendarValues: CalendarDateRange;
};

const CalendarComponent: React.FC<CalendarProps> = ({onCalendarChange, calendarValues}) => {

    const handleDateChange = (newValue: CalendarDateRange) => {
        onCalendarChange(newValue);
    };


    return (
        <div className='bg-zinc-900 align-middle justify-center flex items-center p-4 rounded-lg'>
            <Calendar
            onChange={(value) => handleDateChange(value as CalendarDateRange)}
            locale='en'
                className="text-black rounded-lg opacity-90"
                returnValue='range'
                value={calendarValues}
                view='month'
                selectRange={true}
            />
        </div>
    );
};

export default CalendarComponent;
