import React from 'react';
import { useParams } from 'react-router-dom';

const mockBooks = [
  { id: 1, title: '1984', author: 'George Orwell', description: 'A dystopian novel.' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about racism and injustice.' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A novel about the American dream.' },
];

function BookDetails() {
  const { id } = useParams();
  const book = mockBooks.find(book => book.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
    </div>
  );
}

export default BookDetails;
