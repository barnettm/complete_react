console.log('app.js is running')

const app = {
    title: 'Indecision',
    subtitle: 'Just another awesome app'
}


var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: "Matt",
    age: 35,
    location: 'Orange County'
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);




var appRoot = document.querySelector('#app')

ReactDOM.render(template, appRoot)