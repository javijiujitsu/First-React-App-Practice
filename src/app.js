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
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}> What should I do?</button>
            </div>
        );
    }
}




class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);


    }
    handleRemoveAll(){
        console.log(this.props.options);
        // alert('This is going to remove something');
    }
    render(){
        return (
            <div>
            <button onClick={this.handleRemoveAll}> Remove all button</button>
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
    handleAddOption(e){
        e.preventDefault();      
    
    
        const option = e.target.elements.option.value.trim();

        if (option){
            alert(option);
        }

    }
        
   
    render(){
        return (
        <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>  
        </div>
            
       

        );
    }
}



//---------------- ENDING OF REACT COMPONENTS --------------------//





ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
