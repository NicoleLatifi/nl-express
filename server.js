const express = require('express');
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Tea Server';
app.locals.teas = [
  { id: 1 ,name: 'Bolder Breakfast',ingredients: ['black tea', 'pu\'erh tea', 'calendula flowers', 'sunflower petals', 'dark chocolate flavoring'] , sizeAndPrice: { 'sample': 3, '4oz': 12.50, '16oz': 36.75 }, organic: false },
  { id: 2, name: 'Coconut Cabana', ingredients: ['oolong tea', 'shaved coconut', 'coconut flavoring', 'vanilla flavoring'], sizeAndPrice: { 'sample': 5, '4oz': 17, '16oz': 59 }, organic: false },
  { id: 3, name: 'Mediative Mind', ingredients: ['organic white tea', 'organic jasmine pearls', 'organic rose petals'], sizeAndPrice: { 'sample': 3, '2oz': 12.25, '8oz': 34.50 }, organic: true }
];

app.get('/', (request, response) => {
  response.send('Your tea is ready');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is steeping on http://localhost:${app.get('port')}.`);
});
