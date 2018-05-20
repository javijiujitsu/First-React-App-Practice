console.log("App.js is running!");

// JSX - JavaScript XML

var app = {
    title: 'Decision App',
    subtitle: 'This is what I have to do'
};
var templateOne = (
<div>
    <h1>{app.title}</h1> 
    <p> {app.subtitle}</p>
</div>
);

var user = {
    name: 'Javier',
    age: 28,
    location: 'Miami'
};

var templateTwo = (
<div>
    <h1>{user.name} </h1>
    <p> Age: {user.age}</p>
    <p> Location: {user.location} </p>
</div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);