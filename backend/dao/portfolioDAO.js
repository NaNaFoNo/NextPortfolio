import mongodb from 'mongodb'

const ObjectID = mongodb.ObjectId

let portfolio

export default class PortfolioDAO {

    static async injectDB(conn) {
        if (portfolio) {
            return
        }

        try {
            portfolio = await conn.db(process.env.PORTFOLIO_NS).collection("projects")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in portfolioDAO: ${e}`,
            )
        }
    }

    static async addProject(projectName) {
        try {
            const projectDoc = {
                name: projectName,
            }

            return await portfolio.insertOne(projectDoc)
        } catch (e) {
            console.error(`Unable to Post a new project: ${e}`)
        }
    }


}