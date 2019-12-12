import React, {useState, useEffect} from 'react';
import MonthButton from './MonthsButton/MonthButton';
import DatesList from './MonthsButton/DatesList';

function Previous(props) {
    const {today} = props;
    const currentMonth = today.getMonth() + 1;

    // Make an array of months
    const monthsArr = monthsArrCreator(currentMonth);




    return(
        <div className="previous-APODs" id="previous-APODs">
            {monthsArr.map(month => {
                return <MonthButton key={month} today={today} month={month} numToMonth={numToMonth}/>
            })}
        </div>
    )

}

export default Previous


// Helper functions

function monthsArrCreator(currentMonth) {
    let monthsArr = [];

    for (let i = currentMonth; i >= 1; i--) {
        monthsArr.unshift(numToMonth(i));
    }

    return monthsArr;
}

function numToMonth(num) {
    if (num === 1) {
        return 'January';
    } else if (num === 2) {
        return 'February'
    } else if (num === 3) {
        return 'March'
    } else if (num === 4) {
        return 'April'
    } else if (num === 5) {
        return 'May'
    } else if (num === 6) {
        return 'June'
    } else if (num === 7) {
        return 'July'
    } else if (num === 8) {
        return 'August'
    } else if (num === 9) {
        return 'September'
    } else if (num === 10) {
        return 'October'
    } else if (num === 11) {
        return 'November'
    } else if (num === 12) {
        return 'December'
    }
}