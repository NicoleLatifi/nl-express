const express = require('express');
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Tea Server';
app.locals.teas = [
  { id: 1 ,name: 'Bolder Breakfast',ingredients: ['black tea', 'pu\'erh tea', 'calendula flowers', 'sunflower petals', 'dark chocolate flavoring'] , sizeAndPrice: { 'sample': 3, '4oz': 12.50, '16oz': 36.75 }, organic: false },
  { id: 2, name: 'Coconut Cabana', ingredients: ['oolong tea', 'shaved coconut', 'coconut flavoring', 'vanilla flavoring'], sizeAndPrice: { 'sample': 5, '4oz': 17, '16oz': 59 }, organic: false },
  { id: 3, name: 'Mediative Mind, Organic', ingredients: ['organic white tea', 'organic jasmine pearls', 'organic rose petals'], sizeAndPrice: { 'sample': 3, '2oz': 12.25, '8oz': 34.50 }, organic: true },
  { id: 4, name: 'Hibiscus Petals, Organic', ingredients: ['organic hibiscus flowers'], sizeAndPrice: { 'sample': 4, '4oz': 9.25, '16oz': 29 }, organic: true }
];

app.get('/', (request, response) => {
  response.send('Your tea is ready');
});

app.get('/api/v1/teas', (request,response) => {
  response.status(200).json(app.locals.teas)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is steeping on http://localhost:${app.get('port')}.`);
});
