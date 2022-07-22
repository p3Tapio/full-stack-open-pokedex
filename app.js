const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000
const version = process.env.npm_package_version

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  res.send('ok')
})
app.get('/version', (_req, res) => {
  res.send(`version: ${version}`) // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}\n🚀 v${version}`)
})
