
// Temple card

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Dallas Texas",
		location: "Dallas, Texas",
		dedicated: "1984, October, 19",
		area: 44207,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple06.jpg"
	  },
	  {
		templeName: "Billings Montana",
		location: "Billings, Montana",
		dedicated: "1999, November, 20",
		area: 33800,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/3-Boise-Idaho-Temple-1198985.jpg"
	  },
	  {
		templeName: "Preston England",
		location: "Preston, England",
		dedicated: "1998, June, 7",
		area: 33800,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-765118-wallpaper.jpg"
	  }
  ];
  
  // Function to create a temple card
  function createTempleCard(temple) {
	const card = document.createElement('div');
	card.classList.add('temple-card');
  
	card.innerHTML = `
	  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" class="temple-image">
	  <h3 class="temple-name">${temple.templeName}</h3>
	  <p><strong>Location:</strong> ${temple.location}</p>
	  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
	  <p><strong>Size:</strong> ${temple.area} sq ft</p>
	`;
  
	return card;
  }
  


  // Function to display temples
  function displayTemples(filteredTemples) {
	const templeCardsSection = document.getElementById('temple-cards');
	templeCardsSection.innerHTML = '';  
	
	filteredTemples.forEach(temple => {
	  const templeCard = createTempleCard(temple);
	  templeCardsSection.appendChild(templeCard);
	});
  }
  


  document.addEventListener("DOMContentLoaded", function () {
	const hamButton = document.querySelector("#menu");
	const navigation = document.querySelector(".navigation");
  
	if (hamButton && navigation) {
	  hamButton.addEventListener("click", () => {
		navigation.classList.toggle("open");
		hamButton.classList.toggle("open");
	  });
	}
  });
  // Footer year and last modified date
  document.getElementById('current-year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
  
  // Display all temples by default
  displayTemples(temples);
  
  // Event listeners for filtering
  document.getElementById('home').addEventListener('click', () => displayTemples(temples));
  document.getElementById('old').addEventListener('click', () => displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)));
  document.getElementById('new').addEventListener('click', () => displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)));
  document.getElementById('large').addEventListener('click', () => displayTemples(temples.filter(temple => temple.area > 90000)));
  document.getElementById('small').addEventListener('click', () => displayTemples(temples.filter(temple => temple.area < 10000)));
  

  // Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
	const hamButton = document.querySelector("#menu");
	const navigation = document.querySelector(".nav");
  
	if (hamButton && navigation) {
	  hamButton.addEventListener("click", () => {
		navigation.classList.toggle("open");
		hamButton.classList.toggle("open");
	  });
	}
  });


 
