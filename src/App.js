import "./App.css";
import Navbar from "./components/Navbar";
import BookProvider from "./contexts/BookContext";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookProvider>
    </div>
  );
}

export default App;
