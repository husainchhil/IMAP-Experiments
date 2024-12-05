import "./App.css"

function Book({ image, title, author, price }) {
  return (
    <div class="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>{price}</h4>
    </div>
  );
}

export default Book;
