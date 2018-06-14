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

let  count = 0;

const addOne = () => {
    console.log("addOne");
};

const minusOne = () => {
    console.log("minusOne");
};

const reset = () => {
    console.log("reset");
};

const templateTwo  = (
    <div>
        <h1> Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        
        <button onClick={minusOne}>-1</button>
        
        <button onClick={reset}>reset</button>
    </div>

);




// Challenge
// Make button with -1  minus one function and log minus one
//make reset button


const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);