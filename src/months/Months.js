import React from 'react';
import './Months.css';
import Fetch from '../fetch/Fetch'

class Months extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
        }
    }

    render(){
       
        let arrayMonths = {
           'January' : [],
            'February' : [],
            'March' : [],
            'April' : [],
            'May' : [],
            'June' : [],
            'July' : [],
            'August' : [],
            'September' : [],
            'October' : [],
            'November' : [],
            'December' : []
        }
        return (
            <div className="months-block container">
                <h1>Тестове завдання для Yalantis React.js School (online)</h1>
                <Fetch  arrayMonths={arrayMonths}/>
            </div>
        );
    }
}

export default Months;
