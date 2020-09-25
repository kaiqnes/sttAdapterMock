const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ Hello: 'World!' })
})

app.post('/', (req, res) => {
    const response = {
        "watsonResults": [
            {
                "transcription": "bom dia gostaria de saber como abrir uma conta no santander",
                "precision": 1
            }
        ]
    }
    res.json(response)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})