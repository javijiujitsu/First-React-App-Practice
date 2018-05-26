console.log("App.js is running!");

// JSX - JavaScript XML

const app = {
    title: 'Decision App',
    subtitle: 'This is what I have to do',
    options: ['One', 'Two']
};

const templateOne = (
<div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p> {app.options.length > 0 ? "Here are your options": "No options"} </p>
    <ol>
        <li> Item one</li>
        <li> Item Two </li>
</ol>
</div>
);

const user = {
    name: 'Javier',
    age: 28,
    location: 'Miami'
};

function getLocation (location){
    if (location){
     return <p> Location: {location}</p>;
    }
}

const templateTwo = (
<div>
    <h1>{user.name ? user.name: 'Anonymous'} </h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
 </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);