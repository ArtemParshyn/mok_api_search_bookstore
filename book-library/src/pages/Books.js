import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const mockBooks = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

function Books() {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    setTimeout(() => {
      setBooks(mockBooks.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase())));
    }, 1000); // Имитация задержки
  }, [searchQuery]);

  return (
    <div>
      <h2>Book List</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchParams({ search: e.target.value })}
        placeholder="Search for a book..."
      />
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title} by {book.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
