const express = require('express')
const app = express()
const { version } = require('./package.json')
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/version', (_req, res) => {
  res.send(`version: ${version.replaceAll('"', '')}`) // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server started on port ${PORT}\n🚀 v${version.replaceAll('"', '')}`
  )
})
