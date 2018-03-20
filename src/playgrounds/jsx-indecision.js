console.log('app.js is running')

const app = {
    title: 'Indecision',
    subtitle: 'Just another awesome app',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option)
        e.target.elements.option.value = '';
    }
    render();
}

const onRemoveAll = () => {
    app.options = [];
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}



const render = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}


let count = 0;
const addOne = () => {
    count++
    renderCounterApp()
}



const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0;
    renderCounterApp()
}


var appRoot = document.querySelector('#app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button  onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    
}

renderCounterApp();
render()