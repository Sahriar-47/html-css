// 🔹 Email Reputation Check
function checkEmail() {
    const email = document.getElementById("email").value;
    const apiKey = "8b6cf262ff504d1ca1ee235ea7b8cf67";
    const url = "https://emailreputation.abstractapi.com/v1/";

    document.getElementById("emailResult").innerText = "Checking...";

    fetch(`${url}?api_key=${apiKey}&email=${email}`)
        .then(response => response.json())
        .then(data => {
            if (data.email_deliverability.status === "deliverable") {
                document.getElementById("emailResult").innerText =
                    "✅ Email is deliverable";
            } else {
                document.getElementById("emailResult").innerText =
                    "❌ Email is NOT deliverable";
            }
        })
        .catch(() => {
            document.getElementById("emailResult").innerText =
                "⚠️ Error checking email";
        });
}

// 🔹 Weather Check
function checkWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "2d932e0c34e29da5988a0942c74be895";
    const url = "https://api.openweathermap.org/data/2.5/weather";

    document.getElementById("weatherResult").innerText = "Checking...";

    fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerText =
                    `🌤️ ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
            } else {
                document.getElementById("weatherResult").innerText =
                    "❌ City not found or API error";
            }
        })
        .catch(() => {
            document.getElementById("weatherResult").innerText =
                "⚠️ Error fetching weather";
        });
}
