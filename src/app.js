class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}



class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <Option />
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>Option Here</div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>AddOption Compoenent Here</p>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))