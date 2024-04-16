import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, CircularProgress, Pagination, Box } from '@mui/material';
import BookCard from '../../components/booksContainer/BookCard';

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchBooks = (page) => {
    setLoading(true);
    axios.get(`https://gutendex.com/books/?page=${page}`)
      .then(res => {
        setBooks(res.data.results);
        // Assuming the API returns total_count of items and items per page is consistent
        const totalBooks = res.data.count;
        const booksPerPage = 32; 
        setTotalPages(Math.ceil(totalBooks / booksPerPage));
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBooks(currentPage);
    // Cleanup or limit the effect to run only when currentPage changes
    return () => {
      // any cleanup actions go here
    };
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="p-10">
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <BookCard book={book}/>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" marginY={5}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" />
      </Box>
    </div>
  );
};

export default BookPage;
