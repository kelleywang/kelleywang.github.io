import { BookItem } from "../types";
import { getSlug, bookImagePrefix } from "../utils";
import "./CategoryBookListItem.css";
export default function CategoryBookListItem(props: { book: BookItem }) {
  const bookImageFileName = `${getSlug(props.book.title)}.gif`;
  return (
    <li className="book-box">
      <div className="book-image">
        <img
          src={`${bookImagePrefix}${bookImageFileName}`}
          alt={props.book.title}
          height="200"
          width="auto"
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-author">{props.book.author}</div>
      <div className="book-price">${(props.book.price / 100).toFixed(2)}</div>
      <button className="button">Add to Cart</button>
      <button className="button">Read Now</button>
    </li>
  );
}
