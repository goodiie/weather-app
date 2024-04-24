const api = {
    url:"https://open-meteo.com/v1/"
};

const https = require('https');

const weatherFetch = (latitude, longitude) => {
    https.get(`${api.url}forecast?${latitude}&${longitude}&current=temperature,relative_humidity,is_day,wind_speed`, (resp)=> {
        resp.on('data',(data) => {
            const weather = JSON.parse(data)
            console.log(weather)
        })
    }

    ).on('error',(err) => console.log(`Error: ${err}!`))
}

if(process.argv[2]=='weather') {
    console.log("Welcome to the weather App!")
    weatherFetch(process.argv[3])
}