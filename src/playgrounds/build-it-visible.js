class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)        
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(prevState) {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey this is some secret stuff</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// var appRoot = document.querySelector('#app');
// var details = false;
// var secretInfo = '';

// const toggleDetails = () => {
//     if(!details) {
//         secretInfo = 'This is top secret shit right here';

//     }else{
//         secretInfo = ''
//     }
//     details = !details
//     render()
// }


// const render = () => {
//     var template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <div></div>
//             <button onClick={toggleDetails}>{details ? "Hide Details" : "Show Details"}</button>
//             <p>{secretInfo}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }

// render()