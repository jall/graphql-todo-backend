export default class Todo {
    _id: String;
    text: String;
    complete: Boolean;

    constructor(text: String, complete: Boolean) {
        this.text = text;
        this.complete = complete;
    }

}
