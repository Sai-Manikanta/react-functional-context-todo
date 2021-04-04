import { useContext } from 'react'
import { BooksContext } from '../contexts/BooksContext'

const Header = () => {
    const { books } = useContext(BooksContext);

    return ( 
        <header className="bg-theme-secondary text-gray-200 p-4 text-center">
            <h1 className="text-2xl font-extrabold tracking-wide">Ninja Reading List</h1>
            <p className="mt-3 text-sm">Currently you have { books.length } books to get through...</p>
        </header>
     );
}
 
export default Header;