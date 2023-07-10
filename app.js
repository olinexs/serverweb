'use strict'

const express = require('express')
const path = require('path')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()

// Serve static files from the "C:\Users\kakol\web tiket" directory
app.use(express.static('C:\\Users\\kakol\\web tiket'))

app.get('/', (req, res) => {
    res.sendFile('ngetes.html', { root: 'C:\\Users\\kakol\\web tiket' })
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
