import React from 'react';
import MonthButton from './MonthsButton/MonthButton';
import styled from 'styled-components';
// import {css} from 'emotion';

function Previous(props) {
    const {today, handleDateChange} = props;
    const currentMonth = today.getMonth() + 1;

    // Make an array of months
    const monthsArr = monthsArrCreator(currentMonth);

    const PreviousAPODs = styled.div`
        
        background: rgb(95, 100, 117);
        display: flex;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        justify-content: center;
    `




    return(
        <div>
            <PreviousAPODs className="previous-APODs" id="previous-APODs" >
                {monthsArr.map(month => {
                    return <MonthButton key={month} 
                                        today={today} 
                                        month={month} 
                                        numToMonth={numToMonth}
                                        handleDateChange={handleDateChange}/>
                })}
            </PreviousAPODs>
            {/* <div className={css`
                padding: 30px;
                background-color: hotpink;
                max-width: 1280px;
                margin: 0 auto;
                font-size: 20px;
                &:hover {
                    color: white;
                }
            `}>This is where content needs to be displayed on click (used Emotion to style this)</div> */}
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