//--------------  REACT COMPONENTS --------------//

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Decision</h1>
                <h2> Let a computer automate your tasks</h2>
            </div>

        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button> What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
            Options component here
            </div>

        );
    }
}

class AddOptions extends React.Component {
    render(){
        return (
            <div>
              Add Options components here 
            </div>

        );
    }
}



//---------------- ENDING OF REACT COMPONENTS --------------------//



const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>

)

ReactDOM.render(jsx, document.getElementById('app'));
