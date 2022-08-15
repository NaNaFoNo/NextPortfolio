import mongodb, { ObjectId } from 'mongodb'

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

    static async getProjects() {
        try {
            return await portfolio.find().toArray() 
        } catch (e) {
            console.error(`Unable to get projects: ${e}`)
            return { error: e }
        }
    }

    static async addProject(projectDoc) {
        try {
            return await portfolio.insertOne(projectDoc)
        } catch (e) {
            console.error(`Unable to post a new project: ${e}`)
            return { error: e }
        }
    }

    static async updateProject(projectId, data) {
        try {
            const responseUpdate = await portfolio.updateOne(
                { _id: ObjectId(projectId) },
                { $set: data }, 
            )
            return responseUpdate
        } catch (e) {
            console.error(`Unable to update project: ${e}`)
            return { error: e }
        }
    }
    

    static async deleteProject(projectId) {
        try {
            const deleteResponse = await portfolio.deleteOne({ _id: ObjectId(projectId) })

            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete project: ${e}`)
            return { error: e }
        }
    }


}