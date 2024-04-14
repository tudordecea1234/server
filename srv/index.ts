import express from 'express';
import cors from 'cors';

const app = express();
const memory: string[] = [];

// enable JSON body parser
app.use(express.json());
app.use(cors());

// Endpoint to save inputs into memory
app.get('/send/:input', (req, res) => {
    const input = req.params.input;
    memory.push(input);
    res.send(`Input "${input}" saved into memory.`);
});

// Endpoint to print all content from memory
app.get('/content', (req, res) => {
    res.json(memory);
});

export default app;
