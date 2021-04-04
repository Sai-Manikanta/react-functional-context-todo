import { useState, createContext } from 'react'

export const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        { id:1, name: 'the way of kings', author: 'brandon sanderson' },
        { id:2, name: 'the name of the wind', author: 'patrick rothfuss' },
        { id:3, name: 'the work of Dev', author: 'Mani' },
    ]);

    const addBook = (book) => {
        setBooks([...books, book]);
        console.log(book);
    }

    const removeBook = (bookId) => {
        const filteredBooks = books.filter(book => book.id !== bookId);
        setBooks(filteredBooks);
    }

    return ( 
        <BooksContext.Provider value={{books, addBook, removeBook}}>
            { children }
        </BooksContext.Provider>
    );
}
 
export default BooksContextProvider;