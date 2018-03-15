'use strict';

console.log('app.js is running');

var app = {
    title: 'Indecision',
    subtitle: 'Just another awesome app',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options'
    ) : React.createElement(
        'p',
        null,
        'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    console.log('minus');
};

var reset = function reset() {
    console.log('reset');
};

var appRoot = document.querySelector('#app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
