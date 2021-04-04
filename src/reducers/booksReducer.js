const booksReducer = (books, action) => { // state = books
    switch(action.type){
        case 'ADD_BOOK':
            return [...books, action.payload.book];
        break;
        case 'REMOVE_BOOK':
            return books.filter(book => book.id !== action.payload.id);
        break;
        default:
            return books;
    }
}

export default booksReducer;