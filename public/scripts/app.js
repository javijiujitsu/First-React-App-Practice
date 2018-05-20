'use strict';

console.log("App.js is running!");

// JSX - JavaScript XML

var app = {
    title: 'Decision App',
    subtitle: 'This is what I have to do'
};
var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.subtitle
    )
);

var user = {
    name: 'Javier',
    age: 28,
    location: 'Miami'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        ' Location: ',
        user.location,
        ' '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);
