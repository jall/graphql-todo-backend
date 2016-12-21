import process from 'process';

import database from '../database';
import Todo from '../Model/Todo';

let data = [
    new Todo('Buy milk', false),
    new Todo('Pay water bill', false),
    new Todo('Defeat Metroman', false),
    new Todo('Take over the world', false)
];

console.log('Adding default todos into database...');

database.insert(data, (err) => {
    if (err) {
        console.log('Failed to add to database!');
        console.log(err);
    } else {
        console.log('Added default todos successfully!');
    }

    process.exit();
});
