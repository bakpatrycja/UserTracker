import { app } from './server.js'
require('dotenv').config()
const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`Api running at port ${PORT}`)
})
