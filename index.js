import express from 'express'
import SRouts from './routs/servers.js'

const s = express()

s.get('/', (req,res) => {
    res.send('kot')
})

s.use(SRouts)

s.listen(3000, () => {
    console.log('Serever has been started...')
})