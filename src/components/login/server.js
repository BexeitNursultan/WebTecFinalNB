
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3307,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
        if (err) res.status(500).send(err);
        else res.status(201).send('User created');
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {
        if (err) res.status(500).send(err);
        else if (result.length > 0) {
            const comparison = await bcrypt.compare(password, result[0].password);
            if (comparison) {
                const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.json({ token });
            } else res.status(401).send('Invalid credentials');
        } else res.status(404).send('User not found');
    });
});

const PORT = process.env.PORT || 3307;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
