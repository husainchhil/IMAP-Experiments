import Books from "./Books";
import "./App.css";

function App() {
  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "$10",
      image:
        "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      price: "$15",
      image:
        "https://m.media-amazon.com/images/I/61NGp-UxolL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      price: "$12",
      image:
        "https://m.media-amazon.com/images/I/91JGwQlnu7L._AC_UF1000,1000_QL80_.jpg",
    },
  ];
  return (
    <div class="app">
      <h1 class="header">Bookstore</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
