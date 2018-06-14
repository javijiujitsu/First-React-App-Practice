'use strict';

console.log("App.js is running!");

// JSX - JavaScript XML

var app = {
    title: 'Decision App',
    subtitle: 'This is what I have to do',
    options: ['One', 'Two']
};

var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.options.length > 0 ? "Here are your options" : "No options",
        ' '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Item one'
        ),
        React.createElement(
            'li',
            null,
            ' Item Two '
        )
    )
);

var user = {
    name: 'Javier',
    age: 28,
    location: 'Miami'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            ' Location: ',
            location
        );
    }
}

var count = 0;

var addOne = function addOne() {
    console.log("addOne");
};

var minusOne = function minusOne() {
    console.log("minusOne");
};

var reset = function reset() {
    console.log("reset");
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

// Challenge
// Make button with -1  minus one function and log minus one
//make reset button


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
