import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const testName = 'Vasily';
const user = {
    firstName: 'Yuri',
    lastName: 'Nikulin'
};

const element = (
    <h1>
        Hello, {formatName(user)}! {testName} !
    </h1>
);

const reactElem = React.createElement(
    'h1',
    {
        className: 'helloThere'
    },
    'Hello there! I am an react element! Not JSX'
);



function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>       
    );
    ReactDOM.render(element, document.getElementById('root'));
}

// setInterval(tick, 1000);

const welcomeElem = <Welcome name="Sara" />;

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App2() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>    
    )
};

function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {props.date}
            </div>
        </div>
    );
};

function Avatar(props) {
    return (
        <img className="comment-info__avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
};

function UserInfo(props) {
    return (
        <div className="comment-info">
            <Avatar user={props.user} />
            <div className="comment-info__name">
                {props.user.name}
            </div>
        </div>
    )
}

var commentProps = {};
commentProps.author = {};
commentProps.author.name = 'Yuri';
commentProps.author.avatarUrl = '';
commentProps.text = 'Lorem ipsum dolor sit amet.';
commentProps.date = 'Jan 05';

const commentElem = <Comment {...commentProps}/>

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

class ClockApp extends React.Component {
    render() {
        return (
            <Clock />
        )
    }
}

// function clockTick() {
//     ReactDOM.render(
//         <ClockApp />,
//         document.getElementById('root')
//     );
// }

// ReactDOM.render(
//     commentElem,
//     document.getElementById('root')
// );

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick = {this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class AppToggle extends React.Component {
    render() {
        return (
            <div>
                <Toggle />
                <Toggle />
            </div>
        );
    }
}

function UserGreeting(props) {
    return (
        <h1>Welcome back!</h1>
    );
}

function GuestGreeting(props) {
    return (
        <h1>Please sign up.</h1>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button> 
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        const button = isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
            <LoginButton onClick={this.handleLoginClick} />
        )

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function ListItems(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, i) =>
        <li key={i}>{number}</li>
    );
    return (
        listItems
    );
}

function RenderLists() {
    const listNumbers = [1, 2, 3];
    return(
        <ul>
            <ListItems numbers={listNumbers}/>
        </ul>
    );
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value.toUpperCase()
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                </label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>    
        );
    }
}

class SelectFlavor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        this.setState({
            value: ''
        })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                   {this.state.value ? 
                    `Your favorite flavor is ${this.state.value}` :
                    `It seems like you don't have a favorite flavor yet`
                   }
                </label>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="banana">Banana</option>
                </select>
                <input type="submit" value="Submit" />
            </form>    
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature: temperature
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature: temperature
        })
    }

    componentDidUpdate() {
        console.log('The component has been updated' + this);
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                        onChange={this.handleChange} />
            </fieldset>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)

registerServiceWorker();
