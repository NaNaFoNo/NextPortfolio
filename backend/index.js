import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import PortfolioDAO from "./dao/portfolioDAO.js"
import BlogDAO from "./dao/blogDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.PORTFOLIO_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
    )
    .catch(error => {
        console.log(error.stack)
        process.exit(1)
    })
    .then(async client => {
        await PortfolioDAO.injectDB(client)
        await BlogDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })