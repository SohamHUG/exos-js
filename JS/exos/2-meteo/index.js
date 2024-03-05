const apiKey = '1587159bb0692bc32c752afb5ebd8948';
async function weather() {
    const city = document.getElementById('cityInput').value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weatherInfo = document.getElementById('weatherInfo');

    try {
        const response = await axios.get(url);
        const data = response.data;

        const descriptionMeteo = data.weather[0].description;
        const temperature = data.main.temp;
        const humidite = data.main.humidity;

        weatherInfo.innerHTML = `
            <p>Météo : ${descriptionMeteo}</p>
            <p>Température : ${temperature}°C</p>
            <p>Humidité : ${humidite}%</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        try {
            const response = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
            const data = await response.data;
            const cityName = data[0].name;

            const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
            const data2 = await response2.data;
            const temperature = data2.main.temp;

            document.getElementById('coordinates').innerHTML = `
            <p>Latitude: ${latitude}, Longitude: ${longitude}</p>
            <p>Ville: ${cityName}</p>
            <p>Température : ${temperature} °C</p>
            `;
        } catch (error) {
            document.getElementById('coordinates').innerHTML = `Erreur: ${error.message}`;
        }
    });
}





