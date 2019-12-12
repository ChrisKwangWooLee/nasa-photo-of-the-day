import React from 'react';
import Dates from './Dates';

function DatesList(props) {
    const {today, month, numToMonth} = props;

    function generateDaysInMonth(today, month, numToMonth) {
    // deal with current month (ex. December) *******
        if (numToMonth(today.getMonth() + 1) === month) {
            const currentDate = today.getDate();        

            // Loop through each day and create a date string (ex. 2020-03-16)
            let daysInLastMonth = [];
            for (let day = 1; day < currentDate; day++) {            

                let dayStr = day.toString();
                if (dayStr.length === 1) {
                    dayStr = `0${dayStr}`;  // Day string
                }
                
                let monthStr = (today.getMonth() + 1).toString();
                if (monthStr.length === 1) {
                    monthStr=`0${monthStr}`;
                }
                let yearStr = today.getFullYear().toString();   // Year string

                daysInLastMonth.push(`${yearStr}-${monthStr}-${dayStr}`)
            }
            return daysInLastMonth;
        } else {  
        // Deal with other months ********

            // Set month and year string
            let yearStr = today.getFullYear().toString();
            let monthStr = monthToNum(month).toString();
            if (monthStr.length === 1) {
                monthStr = `0${monthStr}`;
            }

            // Get last day of current month
            let lastDay = new Date(Number(yearStr), monthToNum(month), 0);

            // looop through each day and push to daysInMonth array
            let daysInMonth = [];
            for(let day = 1; day <= lastDay.getDate(); day++) {
                let dayStr = day.toString();
                if (dayStr.length === 1) {
                    dayStr = `0${dayStr}`;
                }

                daysInMonth.push(`${yearStr}-${monthStr}-${dayStr}`);
            }
            return daysInMonth;
        }
    }

    let daysInMonthArr = generateDaysInMonth(today, month, numToMonth);

    return (
        <div>
            {/* day will be ex. {2019-12-03} */}
            {daysInMonthArr.map((day, index) => {
                return <Dates key={index} day={day}/>
            })}
        </div>
    )
}

export default DatesList;

function monthToNum(month) {
    if (month === 'January') {
        return 1;
    } else if (month === 'February') {
        return 2;
    } else if (month === 'March') {
        return 3;
    } else if (month === 'April') {
        return 4;
    } else if (month === 'May') {
        return 5;
    } else if (month === 'June') {
        return 6;
    } else if (month === 'July') {
        return 7;
    } else if (month === 'August') {
        return 8;
    } else if (month === 'September') {
        return 9;
    } else if (month === 'October') {
        return 10;
    } else if (month === 'November') {
        return 11;
    } else if (month === 'December') {
        return 12;
    }
}