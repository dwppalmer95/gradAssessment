const axios = require('axios');

document.addEventListener('DOMContentLoaded', async () => {
  const title = document.createElement('hi');
  title.innerText = `'Restaurants You've Visited`;
  const body = document.querySelector('body');
  body.firstElementChild.insertBefore(title);
  try {
    const allRestaurants = await axios.get('/restaurants/all');
    const restaurantCard = body.getElementsByClassName('restaurants').item(0);
    for (let i = 0; i < allRestaurants.length; i++) {
      const restaurant = allRestaurants[0];
      restaurantCard.innerText += `\n${restaurant.name}`;
    }
  } catch (err) {
    alert('An error occured. See console.');
    console.error(err);
  };
});
