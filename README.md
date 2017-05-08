# Hellittää

Simple Slack-like chat application build with NodeJS (and React, Redux, SocketIO, WebPack, Babel).

## Building

### Building with NodeJS

First install the dependencies:

```bash
npm install
```

And then compile from source:

```bash
npm run build
```

### Building with Docker

Build the Docker image:

```bash
docker build -t helittaa .
```

## Running

### Running with NodeJS

After building the project:

```bash
npm start
```

### Running with Docker

After building the Docker image:

```bash
docker run --rm -p 8080:8080 helittaa
```

## Development

For development, you can watch for changes and rebuild the application automatically:

```bash
npm run watch
```

Make sure you have installed the npm dependencies first, and keep in mind that the `npm start` command does not
automatically restart the server upon changes (you could use `nodemon dist/server/index.js` for example).