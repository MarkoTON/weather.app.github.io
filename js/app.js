// Init storage
const storage = new Storage();
//Get Storage location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

//// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;
	
	// Change location
	weather.changeLocation(city, state);

	// Set location  local storage
	storage.setLocationData(city, state);

	// Geat Weather and dispaly
	getWeather();

	// Close modal
	$('#locModal').modal('hide');
});

//// Funkcija za uzimanje podataka o vremenu
function getWeather(){
	weather.getWeather()
	.then(results => {
		//console.log(results);
		//Prenos podataka na UI
		ui.paint(results);
	})
	.catch(err => console.log(err));
}

