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

ReactDOM.render(
    <AppToggle />,
    document.getElementById('root')
)

registerServiceWorker();
