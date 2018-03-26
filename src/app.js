import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Action from './components/Action';
import Header from './components/Header';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOptionsSingular = this.handleDeleteOptionsSingular.bind(this)
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const optionsArray = JSON.parse(json)
            if(optionsArray) {
                this.setState(() => ({options: optionsArray}))
            }
        } catch (e) {
            //Do nothing at all
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }

    handleDeleteOptionsSingular(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
        
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item'
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
        
    }
    
    render() {
        const subTitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionsSingular={this.handleDeleteOptionsSingular}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}







const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
            props.options.map((option) => (
                <Option 
                key={option} 
                optionText={option}
                handleDeleteOptionsSingular={props.handleDeleteOptionsSingular}
                />))
        }   
     </div>
    )
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

