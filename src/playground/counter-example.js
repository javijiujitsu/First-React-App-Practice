let  count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
    console.log("addOne", count);
};

const minusOne = () => {
    console.log("minusOne");
    count --;
    renderCounterApp();
};

const reset = () => {
    console.log("reset");
    count = 0;
    renderCounterApp();
};



// Challenge
// Make button with -1  minus one function and log minus one
//make reset button


const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateTwo  = (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            
            <button onClick={minusOne}>-1</button>
            
            <button onClick={reset}>reset</button>
        </div>
    );      

    ReactDOM.render(templateTwo, appRoot);
}; 

renderCounterApp();