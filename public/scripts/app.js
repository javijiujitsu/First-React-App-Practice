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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous',
        ' '
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);
