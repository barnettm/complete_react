console.log('app.js is running')

const app = {
    title: 'Indecision',
    subtitle: 'Just another awesome app',
    options: ['One', 'Two']
}


var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count++
}

const minusOne = () => {
    console.log('minus')
    count--
}

const reset = () => {
    console.log('reset')
}
const templateTwo = (

    <div>
        <h1>Count: {count}</h1>
        <button  onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
)





var appRoot = document.querySelector('#app')
ReactDOM.render(templateTwo, appRoot)