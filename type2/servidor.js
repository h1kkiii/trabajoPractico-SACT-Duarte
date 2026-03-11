import express from 'express';
import { join } from 'path';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = import.meta.dirname;

app.use(express.static(join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});