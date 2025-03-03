import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js'; 
import path from 'path';

dotenv.config({ path: path.resolve('.env') });
console.log("MongoDB URI:", process.env.MONGO_URI); // Debugging
dotenv.config();
console.log("MongoDB URI:", process.env.MONGO_URI);
const app = express();
app.use(express.json());
app.use(cors());

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routing dasar
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Menghubungkan routes ke server
app.use('/api', postRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
