var appRoot = document.querySelector('#app');
var details = false;
var secretInfo = '';






const toggleDetails = () => {
    if(!details) {
        secretInfo = 'This is top secret shit right here';

    }else{
        secretInfo = ''
    }
    details = !details
    render()
}


const render = () => {
    var template = (
        <div>
            <h1>Visibility Toggle</h1>
            <div></div>
            <button onClick={toggleDetails}>{details ? "Hide Details" : "Show Details"}</button>
            <p>{secretInfo}</p>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

render()