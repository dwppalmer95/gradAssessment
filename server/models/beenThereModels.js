const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://dwppalmer95:PTRnnrHy7a85wmzU@cluster0.vu9bx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'appData',
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  neighborhood: String,
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = {
  Restaurant,
};
