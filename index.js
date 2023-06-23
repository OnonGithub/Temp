function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var selectedUnit = document.getElementById("unit").value;

    if (selectedUnit === "celsius") {
        document.getElementById("celsius").textContent = "Celsius: " + temperatureInput;
        document.getElementById("fahrenheit").textContent = "Fahrenheit: " + celsiusToFahrenheit(temperatureInput);
        document.getElementById("kelvin").textContent = "Kelvin: " + celsiusToKelvin(temperatureInput);
    } else if (selectedUnit === "fahrenheit") {
        document.getElementById("celsius").textContent = "Celsius: " + fahrenheitToCelsius(temperatureInput);
        document.getElementById("fahrenheit").textContent = "Fahrenheit: " + temperatureInput;
        document.getElementById("kelvin").textContent = "Kelvin: " + fahrenheitToKelvin(temperatureInput);
    } else if (selectedUnit === "kelvin") {
        document.getElementById("celsius").textContent = "Celsius: " + kelvinToCelsius(temperatureInput);
        document.getElementById("fahrenheit").textContent = "Fahrenheit: " + kelvinToFahrenheit(temperatureInput);
        document.getElementById("kelvin").textContent = "Kelvin: " + temperatureInput;
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return parseFloat(celsius) + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (parseFloat(fahrenheit) - 32) * 5/9 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
