console.log("App.js is running!");

// JSX - JavaScript XML

const app = {
    title: 'Decision App',
    subtitle: 'This is what I have to do',
    options: []
};

const onFormSubmit = (e)=> {
    e.preventDefault();

   const option = e.target.elements.option.value;

   if (option) {
       app.options.push(option);
       e.target.elements.option.value = '';
       render();
   }
};

const onRemoveAll = (option) => {
    app.options = [];
    render();
};







const appRoot = document.getElementById('app');


const render = () => {
    const templateOne = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p> {app.options.length > 0 ? "Here are your options": "No options"} </p>
            <p> {app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li> Item one</li>
                <li> Item Two </li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        </div>
        );
        
        ReactDOM.render(templateOne, appRoot);
};

render();

