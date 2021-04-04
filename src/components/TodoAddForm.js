import { useRef, useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';
import { v4 as uuidv4 } from 'uuid';

const TodoAddForm = () => {
    const { addBook } = useContext(BooksContext);

    const nameInputRef = useRef();
    const authorInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameInputRef.current.value;
        const author = authorInputRef.current.value;
        const todo = { id: uuidv4(), name, author };

        addBook(todo);
        nameInputRef.current.value = "";
        authorInputRef.current.value = "";
    }
    return ( 
        <form onSubmit={handleSubmit} className="bg-theme-primary px-4 pb-4">
            <input type="text" className="w-full bg-theme-tertiary outline-none text-gray-300 rounded p-1" placeholder="book title" ref={nameInputRef} />
            <input type="text" className="w-full bg-theme-tertiary outline-none text-gray-300 rounded p-1 mt-2" placeholder="author" ref={authorInputRef} />
            <button className="mt-4 bg-gray-300 px-4 py-1 text-sm rounded-sm block mx-auto">add book</button>
        </form>
     );
}
 
export default TodoAddForm;