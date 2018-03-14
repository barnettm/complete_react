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

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
       {(user.age && user.age) >= 18 && <p>Age: {user.age}</p> } 
        {getLocation(user.location)}
    </div>
);




var appRoot = document.querySelector('#app')

ReactDOM.render(templateTwo, appRoot)