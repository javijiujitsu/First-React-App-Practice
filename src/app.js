//--------------  REACT COMPONENTS --------------//

class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>

        );
    }
}

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
            <Option />
            </div>

        );
    }
}

class Option extends React.Component {
        render(){
            return (
             <div>
             Option comment here 
             </div>
            );
        }
}


class AddOption extends React.Component {
    render(){
        return (
            <div>
              Add Options components here 
            </div>

        );
    }
}



//---------------- ENDING OF REACT COMPONENTS --------------------//





ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
