import React from 'react';
import './Fetch.css';

class Fetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            color: '',
        }
        this.month = this.props.arrayMonths;
    }

    componentDidMount() {
        fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
            .then(data => data.json())
            .then(
                (result) => {

                    this.setState({
                        isLoaded: true,
                        array: result,
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    
    add = () => {

        this.state.array.forEach((e) => {
            let requiredMonth = new Date(e.dob).getMonth() + 1;
            if (requiredMonth === 1) {
                this.month['January'].push(e);
            }
            else if (requiredMonth === 2) {
                this.month['February'].push(e);
            }
            else if (requiredMonth === 3) {
                this.month['March'].push(e);
            }
            else if (requiredMonth === 4) {
                this.month['April'].push(e);
            }
            else if (requiredMonth === 5) {
                this.month['May'].push(e);
            }
            else if (requiredMonth === 6) {
                this.month['June'].push(e);
            }
            else if (requiredMonth === 7) {
                this.month['July'].push(e);
            }
            else if (requiredMonth === 8) {
                this.month['August'].push(e);
            }
            else if (requiredMonth === 9) {
                this.month['September'].push(e);
            }
            else if (requiredMonth === 10) {
                this.month['October'].push(e);
            }
            else if (requiredMonth === 11) {
                this.month['November'].push(e);
            }
            else if (requiredMonth === 12) {
                this.month['December'].push(e);
            }
        })
        for (let key in this.month){
            const amount = this.month[key].length;
            if (amount >= 0 && amount <= 2){
                this.setState({color : '#686868'})
            }
            else if (amount >= 3 && amount <= 6){
                this.setState({color : '#000dca'})
            }
            else if (amount >= 7 && amount <= 10){
                this.setState({color : '#00ca5b'})
            }
            else if (amount >= 11 ){
                this.setState({color : '#ca0700'})
            }
        }
        console.log(this.month);

    }

    render() {
        let arrayMonths = this.props.arrayMonths;
        const { error, isLoaded } = this.state;

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div className="fetch-block">
                    <div className='months'>
                    
                    <ul>
                        {Object.keys(arrayMonths).map(item => (
                            <li key={item} style={{ backgroundColor: this.state.color}}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button onClick={this.add}>Click</button>

                    </div>
                </div>
            );
        }
    }
}

export default Fetch;
