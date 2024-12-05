import Book from "./Book";
import "./App.css";

function Books({ books }) {
  return (
    <div class="books">
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          price={book.price}
          image={book.image}
        />
      ))}
    </div>
  );
}

export default Books;
