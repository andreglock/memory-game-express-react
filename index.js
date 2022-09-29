import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { wildcardEndpoint } from './controllers/errorController.js';
import { globalErrorHandler } from './middlewares/globalErrorHandler.js';
import postsRouter from './routes/postsRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Add support for json requests
app.use(express.json());

// "Post" endpoints
app.use('/posts', postsRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Wildcard endpoint, runs for everything..... except errors!
app.use(wildcardEndpoint);

// This middleware handles all uncaught errors
app.use(globalErrorHandler);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Posts page listening on port: ${port}`);
