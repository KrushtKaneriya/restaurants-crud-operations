import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "website-with-slider.html"));
})


app.get('/krushit', () => {
    res.json({"message":"Hii This Is Krushit!!!"});
})

app.use(express.static(path.join(__dirname, "views")));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})