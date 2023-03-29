// // log to console
// console.log('hello world');

// // var, let, const

// var name = 'Pelz fx';
// console.log(name);
// name = 'pelz';
// console.log(name);

// // Primitive 

// // string
// const name ='joohn doe';
// // number
// const age = 45;
// // boolean
// const hasKids = true;
// // nulll
// const car = null;
// // undefined
// let test;
// // symbol 
// const sym = Symbol();

// // reference types - objects 
// // array
// const hobbies = ['moviies', 'music'];
// // object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }

// console.log(typeof car)

// // Type conversion
// // 
// const num  


'use strict'
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const  openingHours = {
    thu:{
        open: 12,
        close: 22,
    },
    fri:{
        open: 11,
        close: 23,
    },
    sat:{
        open: 0,
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italino',
    location: 'Barnawa',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startermenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risottto'],

    // ES6 enhanced object literals
    openingHours,

    order: function(starterIndex, mainIndex){
        return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({
        starterIndex = 1,
        mainIndex = 0,
        time ='20:00',
        address,
    }){
        console.log(
            `Order recieved! ${this.startermenu [starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasts with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};
// SPLIT AND JOIN
console.log('a+very+nice+string'.split('+'));
console.log('Pelumi Alonge'.split(' '));

const [firstName, lastName] = 'Pelumi Alonge'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName)


// // FIX CAPITALZATION IN NAME
// const passenger = 'jONaS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice 
// (1);
// console.log(passengerCorrect);

// // COMPARING EMAILS
// const email = 'hello@pelz.io';
// const loginEmaail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmaail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmaail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // REPLACING STRINGS
// const priceGB = '288,974#'
// const priceUS = priceGB.replace('#', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// // console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // METHODS THAT REPLACE BOOLEANS
// const plane = 'A320';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//     console.log('Part of the NEW Airbus family');
// }

// const checkBaggage = function(items){
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')){
//         console.log('You are NOT allowed on board');
//     }else{
//         console.log('welcome on Board');
//     };
// };
// checkBaggage('I have a laptp, some Food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// // Football coding challenge
// const gameEvents = new Map([
//     [17, 'GOAL'],
//     [36, 'Substitution'],
//     [47, 'GOAL'],
//     [61, 'Substitution'],
//     [64, 'Yellow Card'],
//     [69, 'Red Card'],
//     [70, 'Substitution'],
//     [72, 'Substitution'],
//     [76, 'GOAL'],
//     [80, 'GOAL'],
//     [92, 'Yellow Card'],
// ])

// const events = [...new Set(gameEvents.values())];
// gameEvents.delete(64);

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// const half = min <= 45 ? 'FIRST' : 'SECOND'
// for (const [min, event] of gameEvents){
//     console.log(`[${half} HALF] ${min}: ${event}`)
// }

// const question = new Map([
//     ['question', 'what is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'Correct'],
//     [false, 'Try again!']
// ]);
// console.log(question);

// console.log(Object.entries(openingHours)); 
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// for (const [key, value] of question){
//     if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer =3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert maps to array
// console.log([...question]);

// Map Fundamentals

// const rest = new Map();
// rest.set('name', 'Classicco Italiano');
// rest.set(1, 'Firenze, Italy' )
// console.log(rest.set(2, 'lisborn, Portugal'));

// rest
// .set('categories', ['Italian', 'Pizzeria', 'Vegeteerian', 'Oraganic '])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are Open')
// .set(false, 'We are Closed')

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(false));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2)

// const arr = [1, 2]
// rest.set(document.querySelector('h1'),'Heading');
// console.log(rest);
// console.log(rest.size)

// console.log(rest.get(arr)); 

// // Sets
// const orderSet = new Set (['Pasta', 'Pizza', 'Pizza', 'Rissoto', 'Pasta', 'Pizza' ]);
// console.log(orderSet);
// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// console.log(orderSet.add("Garlic Bread"));
// console.log(orderSet.delete('Rissoto'));

// // Set are iterables
// for (const order of orderSet){console.log(order)}

// // Examples/ UseCases of sets
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//     new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// )

 

// // Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// console.log(`We are open on ${properties.length} days`);

// for (const day of properties){
//     console.log(day);
// };

// // Property Values

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for ( const [key, {open, close}]of entries){
//     console.log(`On ${key} we open at ${open} and close ${close}`);
// }

// const rest1 = {
//     name: 'capri',
//     numGuests: 20
// }

// const rest2 ={
//     name: 'La piazza',
//      owner: 'Giovani Rossi',
// }

// // the or assignment operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest2.owner = rest2.owneer && '<ANONYMOUS>'
// console.log(rest1);
// console.log(rest2);



// // looping Arrays
// const menu = [...restaurant.startermenu, ...restaurant.mainMenu
// ];

// for (const  item of menu) console.log(item);


// if(restaurant.openingHours && restaurant.openingHours.mon);
// // console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon?.open);
// // console.log(restaurant.openingHours.mon?.open);

// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// for(const day of days){
//     console.log(day);
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`)
    
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist')

// // Arrays 
// const users = [
//     {name : 'Pelz', email: 'hello@gmail.com'}
// ];
// console.log(users[0]?.name ?? 'User array empty')


// // const arr = [2,3,4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x,y,z] = arr;

// // console.log(x,y,z);

// // const [first, second] = restaurant.categories;

// // const [starter, main]  = restaurant.order(2, 0);


// // Spread operator
// const arr = [7,8,9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenuCopy = [...restaurant.mainMenu];

// // join ttwoo aarrays or more
// const menu = [...restaurant.startermenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables are arrays, strings, maps, sets, but not objects

// const str = 'Pelz';
// const letters = [...str, '', 'S.  ']
// console.log(letters);

// // Real world Example

// const ingredients = [prompt('let\'s make pasta! Ingredient 1?'),
// prompt('let\'s make pasta! Ingredient 2?'), prompt('let\'s make pasta! Ingredient 3?')]

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};;
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // the Rest pattern
// const array = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.startermenu];
// console.log(pizza, risotto, otherFood);

// // Objects

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function(...numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// //short circuting
// restaurant.numGuests =23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// // And operator
// console.log(0 && 'Pelz');
// console.log(7 && 'Jonas');

// console.log("helloo" && 23 && null && 'Pelz');

// if(restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms', 'spinach');
// } 

// // The nullish coalescing operator
//  const guestCorrect = restaurant.numGuests ?? 10;
//  console.log(guestCorrect); // it works with nullish values

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Alaba',
//             'Davies',
//             'Kimich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnabry',
//             'Lewandoski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakkimi',
//             'Weigl',
//             'witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],

//     score: '4:0',
//     scored: ['Lewandoski', 'Gnabry', 'Lewandoski', 'Hummels'],
//     date: 'Nov 9t, 2037',
//     odds:{
//         team: 1.33,
//         x: 3.25,
//         team2: 6.5, 
//     },
// };

// for (const [i, player] of game.scored.entries()){
//     console.log(`Goal ${i + 1}: ${player}`);
// }
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds )
// average += odd;
// average /= odds
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)){
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//     console.log(`Odd of ${teamStr} ${odd}`);
// }


// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Courtinho', 'Perisic',];

// const {odds: {team1, x: draw, team2}} = game;

// const printGoals = function(){
//     console.log(`${players.length} goals were scored`);;
// }

// printGoals(...game.scored);

// team1 < team2 && console.log('Team1 is more likely to win');

// Looping arrays