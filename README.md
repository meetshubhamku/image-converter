# Image Converter

This project focuses on converting the images into desirable output using various query parameters.

Sample URL

- http://localhost:3000/unsafe?height=500&width=500&quality=50&format=webp&image=http://path/to/image.jpg

Height

- The height parameter sets the height of the image. Accepts an integer value

Width

- The hewidthight parameter sets the width of the image. Accepts an integer value

Image

- The image parameter sets the location of the image which needs to converted. Accepts a string

Quality

- The quality parameter sets the quality of the image. Accepts an integer value ranging between 0 to 100. Default set to 70.

Format

- The format parameter sets the output image format. If not provided default is set to 'webp'.

## Installation

Steps

```bash
    git clone https://github.com/meetshubhamku/image-converter.git
    cd image-converter
    npm install
    npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=8000`
