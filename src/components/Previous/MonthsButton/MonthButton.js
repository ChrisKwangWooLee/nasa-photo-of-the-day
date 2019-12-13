import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import styled from 'styled-components';

function MonthButton(props) {
    const {today, month, numToMonth, handleDateChange} = props;

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(dropdownOpen => !dropdownOpen);
    
    const Month = styled.div``

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
        // ex. daysInMonthArr generates an array of [2019-02-30, etc.]
        let daysInMonthArr = generateDaysInMonth(today, month, numToMonth);


    return(
        <Month key={month} className={month} >
            <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{width: "8.3%"}} >
                <DropdownToggle>
                    {month}
                </DropdownToggle>
                <DropdownMenu   modifiers={{  setMaxHeight: {
                                                enabled: true,
                                                order: 890,
                                                fn: (data) => {
                                                return {
                                                    ...data,
                                                    styles: {
                                                    ...data.styles,
                                                    overflow: 'auto',
                                                    maxHeight: 200,
                                                    },
                                                };
                                                },
                                            },
                                            }}>
                    {daysInMonthArr.map((day, index) => {
                        return <DropdownItem key={index} onClick ={() => 
                                    handleDateChange(day)}>
                                        {day}
                                </DropdownItem>
                    })}
                </DropdownMenu>
            </Dropdown>
        </Month>
    )
}

export default MonthButton;


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