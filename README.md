# Image Converter

This project allows users to convert images to desirable outputs using various query parameters. It supports setting image height, width, quality, and format.

## Sample URLs

### With Your Image

Use this URL format to convert a specific image:

`http://localhost:3000/unsafe?height=500&width=500&quality=50&format=webp&image=http://path/to/image.jpg`

### With Dummy Image

Use this URL format to convert a sample image from `picsum.photos`:

`http://localhost:3000/unsafe?height=500&width=500&quality=50&format=webp`

## Parameters

### Height

The `height` parameter sets the height of the image. It accepts an integer value.

### Width

The `width` parameter sets the width of the image. It accepts an integer value.

### Image

The `image` parameter specifies the URL of the image to be converted. It accepts a string value.

### Quality

The `quality` parameter sets the quality of the output image. It accepts an integer value ranging from 0 to 100, with a default value of 70.

### Format

The `format` parameter sets the output image format. If not provided, the default is set to 'webp'.

## Environment Variables

To run this project, you need to add the following environment variable to your `.env` file:

`PORT=8000`

## Installation

To install and run the project, follow these steps:

```bash
git clone https://github.com/meetshubhamku/image-converter.git
cd image-converter
npm install
npm start
```
