import { useReducer, createContext } from 'react'

export const BooksContext = createContext();

const booksReducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, action.payload.book];
        break;
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.payload.id);
        break;
        default:
            return state;
    }
}

const BooksContextProvider = ({ children }) => {
    const [books, dispatch] = useReducer(booksReducer, [
        { id:1, name: 'the way of kings', author: 'brandon sanderson' },
        { id:2, name: 'the name of the wind', author: 'patrick rothfuss' },
        { id:3, name: 'the work of Dev', author: 'Mani' },
    ]);

    return ( 
        <BooksContext.Provider value={{books, dispatch}}>
            { children }
        </BooksContext.Provider>
    );
}
 
export default BooksContextProvider;