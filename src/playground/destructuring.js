
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: PublisherName} = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [type, , medium] = item;

console.log(`A medium ${type} costs ${medium}`);