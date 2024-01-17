let country = "Guinea Bissau";
console.log(`from ${country}`);
country = country.replace("Guinea Bissau", "Guinea-Bissau");
console.log(`to ${country}`);

let city = " Sydney   ";
console.log(`from ${city}`);
city = city.trim();
console.log(`to ${city}`);

let place = "School";
console.log(`from ${place}`);
place = place.toUpperCase();
console.log(`to ${place}`);

let attraction = "Opera House";
console.log(`from ${attraction}`);
attraction = attraction.toLowerCase();
console.log(`to ${attraction}`);

let sentence = `I went to visit the ${place} in ${city}, rigth next to my school. Now I'm getting ready for my trip to ${country}`;
console.log(sentence);

let price = 4.5;
console.log(Math.round(price));
console.log(Math.ceil(price));
console.log(Math.floor(price));
console.log(Math.min(4, 1, 3, 10));
console.log(Math.max(4, 1, 3, 10));

// Challenge 1
// Create an array weekDays with all days of the week
let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[0]);
console.log(weekDays[6]);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[6] = "Funday";
console.log(weekDays);

// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekDays.shift();
weekDays.shift();
console.log(weekDays);

// Challenge 5
// Alert every day of the week this way:`Temperature on Monday is 18 degrees’
weekDays.forEach(function (day) {
  console.log(`Temperature on ${day} is 18 degrees`);
});

// or
function showDay(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
}
weekDays.forEach(showDay);


// Arrays and Objects
let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};

let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 25,
  capitalCity: false
};

let australianCities = ["Sydney", "Melbourne", "Canberra"];

let cities = [
  {
    name: "New York",
    country: "USA",
    language: "English",
    temperature: 15,
    capitalCity: false
  },
  {
    name: "London",
    country: "UK",
    language: "English",
    temperature: 9,
    capitalCity: true
  },
  {
    name: "Cape Town",
    country: "South Africa",
    language: "English",
    temperature: 25,
    capitalCity: true
  }
];

console.log(paris.temperature);
console.log(sydney.temperature);

console.log(australianCities[0]);
console.log(australianCities[1]);
console.log(australianCities[2]);

console.log(cities[0].name);
console.log(cities[0].temperature);

console.log(cities[1].name);
console.log(cities[1].temperature);

console.log(cities[2].name);
console.log(cities[2].temperature);
