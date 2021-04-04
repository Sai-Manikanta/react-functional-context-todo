import { useContext } from 'react'
import TodoItem from "./TodoItem"
import { BooksContext } from '../contexts/BooksContext'


const TodoList = () => {
    const { books } = useContext(BooksContext);

    return ( 
        <div className="bg-theme-primary p-4 text-gray-200">
           { books.map(book => <TodoItem key={book.id} book={book} />)}
        </div>
     );
}
 
export default TodoList;