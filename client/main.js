const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', async () => {
  const title = document.createElement('h1');
  title.innerText = `Restaurants You've Visited`;
  body.insertBefore(title, body.firstElementChild);
  const newRestaurantSubmit = document.getElementById('newRestaurantSubmit');
  newRestaurantSubmit.onclick = addRestaurantClickHandler;
  await getRestaurantData();
});

const getRestaurantData = async () => {
  try {
    let allRestaurants = await axios.get('/restaurants/all');
    allRestaurants = allRestaurants.data;
    const restaurantCard = body.getElementsByClassName('restaurants').item(0);
    restaurantCard.innerText = '';
    for (let i = 0; i < allRestaurants.length; i++) {
      const restaurant = allRestaurants[i];
      restaurantCard.innerText += `\n${restaurant.name}`;
    }
  } catch (err) {
    alert('An error occured. See console.');
    console.error(err);
  };
};

const postRestaurantData = async (data) => {
  axios.post('/restaurants/insertNew', data)
      .then((res) => console.log(res))
      .catch((err) => console.error('An error occured', err));
};

const addRestaurantClickHandler = async (e) => {
  const form = e.target.parentElement;
  const nameInput = form.getElementsByClassName('nameInput')[0];
  const name = nameInput.value;
  const neighborhoodInput = form.getElementsByClassName('neighborhoodInput')[0];
  const neighborhood = neighborhoodInput.value;
  nameInput.value = '';
  neighborhoodInput.value = '';
  const restaurantData = {
    name,
    neighborhood,
  };
  await postRestaurantData(restaurantData);
  await getRestaurantData();
};
