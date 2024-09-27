import {Router} from 'express'

const routere = Router()

routere.get('/email', (req,res) => {
    res.json({email: 'mexmat@top.com'})
})

routere.get('/rand', (req,res) => {
    const rand = Math.floor(Math.random() * 10) + 1
    res.json({rand})
})

export default routere
