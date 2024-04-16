import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, Modal, Box } from '@mui/material';

import defaultMovieLogo from '../../assets/defaultMovieLogo.png';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 100,
    overflow: 'scroll',
    maxHeight: '90vh',
    display: 'block',
};

const MovieCard = ({ movie }) => {

    const {
        title,
        genre,
        synopsis,
        imageurl,
        released,
    } = movie;

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const imageUrlToDisplay = imageurl && imageurl.length > 0 ? imageurl[0] : defaultMovieLogo;

    return (
        <div className="max-w-md mx-auto my-4">
            <Card>
                <CardMedia
                    component="img"
                    height="300"
                    image={imageUrlToDisplay}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                        Genre: {genre.join(', ')}
                    </Typography>
                    <Typography variant="subtitle2" color="secondary">
                        Release Data: {released}
                    </Typography>
                    <Button onClick={handleOpen}>
                        Read Storyline
                    </Button>
                </CardContent>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="movie-modal-title"
                aria-describedby="movie-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="movie-modal-title" variant="h6" component="h2" gutterBottom>
                        {title}
                    </Typography>
                    <img
                        src={imageUrlToDisplay}
                        alt={title}
                        style={{ maxWidth: '100%', marginBottom: '20px' }}
                    />
                    <Typography variant="subtitle1" color="secondary" gutterBottom>
                        Genre: {genre.join(', ')}
                    </Typography>
                    <Typography variant="subtitle2" color="secondary" gutterBottom>
                        Release Date: {released}
                    </Typography>
                    <Typography id="movie-modal-description">
                        {synopsis}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default MovieCard;
