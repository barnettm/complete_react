'use strict';

var appRoot = document.querySelector('#app');
var details = false;
var secretInfo = '';

var toggleDetails = function toggleDetails() {
    if (!details) {
        secretInfo = 'This is top secret shit right here';
    } else {
        secretInfo = '';
    }
    details = !details;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement('div', null),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            details ? "Hide Details" : "Show Details"
        ),
        React.createElement(
            'p',
            null,
            secretInfo
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
