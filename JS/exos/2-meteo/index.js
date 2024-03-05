async function weather() {
    const apiKey = '1587159bb0692bc32c752afb5ebd8948'; 
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





