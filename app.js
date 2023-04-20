import express from 'express'
export * from './db.js'

express()
  .use(express.json())
  .get('/', (req, res) => res.status(200).json('hello world'))
  .post('/hello', (req, res) => res.status(200).json(req.body))
  .post('/world', (req, res) => res.status(200).json(req.body))
  .post('/docker', (req, res) => res.status(200).json(req.body))
  .listen(process.env.PORT, () => console.log(`localhost connect : ${process.env.PORT}`))
