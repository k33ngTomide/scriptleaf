import {Card, CardContent, Typography, Button} from '@mui/material';


const BookCard = ({book}) => {
  return (
    <div>
            <Card className="h-full">
              <CardContent>
                
                {/* <CardMedia
                  component="img"
                  height="300"
                  image={book.formats['image/jpeg']}
                  alt={book.title}
                /> */}

                <img src={book.formats['image/jpeg']}  alt='images' />
                <Typography gutterBottom variant="h6" component="div" className="text-lg font-semibold">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="primary" className="mb-4">
                  Authors: {book.authors.map((author) => author.name).join(', ')}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {book.subjects.slice(0, 3).map((subject, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-blue-500">
                      {subject}
                    </span>
                  ))}
                </div>

                <div className='flex justify-between mt-5'>

                  <Button variant='outlined' href={book.formats['text/html']}>
                    Read
                  </Button>

                  <Button variant='contained' href={book.formats['text/plain']}>
                    Download
                  </Button>

                </div>
              </CardContent>
            </Card>
    </div>
  )
}

export default BookCard;