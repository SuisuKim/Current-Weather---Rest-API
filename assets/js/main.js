

// fetch
// fetch( 'http://api.weatherapi.com/v1/current.json?key=' )
//     .then( response => response.json() )
//     .then( data => console.log( data ) )
//     .catch( error => console.log( `Note: ${error}` ) );



const cityName = document.querySelector( '.city__name' );
const temp = document.querySelector('.temp');
const condition = document.querySelector('.condition');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const para = document.createElement('p');
const image = document.createElement('img');
const select = document.querySelector('#select');
const updateDate = document.querySelector('.last__update');
const london = "194852570c8f4cf09b860351230402&q=London&aqi=no";
const toronto = "194852570c8f4cf09b860351230402&q=toronto&aqi=no" ;
const seoul = "194852570c8f4cf09b860351230402&q=seoul&aqi=no";
const tokyo = "194852570c8f4cf09b860351230402&q=tokyo&aqi=no";



// ASYNC/AWAIT
async function getData( key ) {
    try {

        // const foobar = await fetch( 'http://api.weatherapi.com/v1/current.json?key=' + key );
        const foobar = await fetch( `http://api.weatherapi.com/v1/current.json?key=${key}` );
        const data = await foobar.json();

        console.log( data );
        console.log( data.location.name );

        // CITY NAME
        cityName.innerHTML = `${data.location.name}`;

        // TEMPERATURE
        temp.innerHTML = `${data.current.temp_c}<span>&deg;<span>`;

        // CONDITION
        condition.appendChild(image);
        condition.appendChild(para);
        image.src = `${data.current.condition.icon}`;
        image.alt = "condition";
        para.innerHTML = `${data.current.condition.text}`;

        // HUMIDITY
        humidity.innerHTML =`${data.current.humidity}`;

        // WIND
        wind.innerHTML = `${data.current.wind_mph} mph`;

        //LAST UPDATE   
        updateDate.innerHTML = `Last Updated: ${data.current.last_updated}`
        
    } catch( error ) {
        console.log( `Nope: ${error}` );
    }

}

const travel = [ ]


// DEFAULT CITY VALUE
getData(toronto);

 
// GETTING SELECTED CITY VALUE FROM THE DROPDOWN MENU
function cityChange() {
    if (select.value === "seoul" ){
        getData(seoul)  ;
    } else if (select.value ==="london") {
        getData(london);
    } else if (select.value ==="toronto") {
        getData(toronto)
    } else {
        getData(tokyo);
    }    
}
