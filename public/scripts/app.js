console.log('app.js is running')
// var template = <p>This is JSX from app.js</p>
var template = React.createElement(
    "h1",
    {id: "someid"},
    "Something new"
);
var appRoot = document.querySelector('#app')

ReactDOM.render(template, appRoot)