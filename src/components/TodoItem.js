import { useContext } from 'react';

import { BooksContext } from '../contexts/BooksContext';

const TodoItem = ({ book }) => {
    const { dispatch } = useContext(BooksContext);
    
    const handleDelete = (bookId) => {
        dispatch({
            type: 'REMOVE_BOOK',
            payload: {
                id: bookId
            }
        });
    }

    return ( 
        <div onClick={() => handleDelete(book.id)} className="group cursor-pointer bg-theme-secondary rounded p-2 mb-3">
            <h4 className="group-hover:line-through font-bold">{ book.name }</h4>
            <p className="group-hover:line-through text-sm text-gray-300">{ book.author }</p>
        </div> 
     );
}
 
export default TodoItem;