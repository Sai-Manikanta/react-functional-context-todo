import Header from "./components/Header";
import TodoAddForm from "./components/TodoAddForm";
import TodoList from "./components/TodoList";
import BooksContextProvider from "./contexts/BooksContext";

function App() {
  return (
    <div className="max-w-lg mx-auto p-3">
      <BooksContextProvider>
        <Header />
        <TodoList />
        <TodoAddForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
