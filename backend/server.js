require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConn = require('./config/db'); // Ensure your database connection is initialized
const Pets = require('./routes/petRoutes');
const contactRoute = require('./routes/contactRoute');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 7778;

app.use('/contact', contactRoute);
app.use('/pets', Pets);

app.get('/', (req, res) => {
    res.status(200).json("Welcome"); 
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});



// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const petRoutes = require('./routes/petRoutes');

// dotenv.config();

// connectDB(); // Connect to MongoDB

// const app = express();

// app.use(cors()); // Allow requests from frontend
// app.use(express.json()); // Parse incoming JSON

// app.use('/pets', petRoutes); // Use the pet routes

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
