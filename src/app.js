//--------------  REACT COMPONENTS --------------//

class IndecisionApp extends React.Component {
    render() {
        const title = 'Decision';
        const subtitle = 'Let a computer automate your tasks';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>

        );
    }
}

class Header extends React.Component {
    render(){
        console.log(this.prop);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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

// Setup options prop for Options component
// Render the length of the array

class Options extends React.Component {
    render(){
        return (
            <div>
            {
              this.props.options.map((option) => <Option key={option} optionText={option} />)

            
           


            }
            </div>

        );
    }
}

class Option extends React.Component {
        render(){
            return (
             <div>
            {this.props.optionText}
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
