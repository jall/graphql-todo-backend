// @flow

import Datastore from 'nedb';
import path from 'path';

let database = new Datastore({
    filename: path.join(__dirname, '/../database/todos.db'),
    autoload: true
});

export default database;
