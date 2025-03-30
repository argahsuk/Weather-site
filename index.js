    let apiKey = 'f6f1f6c320e2b39a43cea6fda7907976'
    
    document.querySelector('button').addEventListener('click', async function Wr() {
        let city = document.querySelector('input').value
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        try {
            response = await fetch(url)
            const data = await response.json()
            let para = document.querySelector('p')
            para.innerHTML = `
            <b>${city}</b> <br>
        <b>Temperature:</b>${data.main.temp}°C <br>
        <b>Weather:</b>${data.weather[0].description} <br>
        <b>Humidity:</b>${data.main.humidity}%`    
        document.querySelector('input').value=""
    }
        catch (error) {
            document.querySelector('p').innerHTML = "Failed to fetch data!";
            console.error("Error:", error);
        }
    }
    )