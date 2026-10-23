import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).send("Hello, Github Actions!");
})

app.get('/health', (req, res) => {
  res.status(200).send("Hello, Health check");
})
export default app;