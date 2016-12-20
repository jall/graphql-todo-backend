import database from '../database';
import process from 'process';

let data = [
    {
        text: 'Buy milk',
        complete: false
    }, {
        text: 'Pay water bill',
        complete: false
    }, {
        text: 'Defeat Metroman',
        complete: false
    }, {
        text: 'Take over the world',
        complete: false
    }
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
