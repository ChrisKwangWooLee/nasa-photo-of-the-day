import React from 'react';
import DatesList from './DatesList'

function MonthButton(props) {
    const {today, month, numToMonth} = props;



    return(
        <div key={month} className={month}>
            <p>{month}</p>
            <DatesList today={today} month={month} numToMonth={numToMonth}/>
        </div>
    )
}

export default MonthButton;