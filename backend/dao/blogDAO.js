import mongodb, { ObjectId } from 'mongodb'

// const ObjectID = mongodb.ObjectId

let blog

export default class BlogDAO {

    static async injectDB(conn) {
        if (blog) {
            return
        }

        try {
            blog = await conn.db(process.env.PORTFOLIO_NS).collection("blog")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in portfolioDAO: ${e}`,
            )
        }
    }

    static async getBlogs() {
        try {
            return await blog.find().toArray() 
        } catch (e) {
            console.error(`Unable to get Blogs: ${e}`)
            return { error: e }
        }
    }

    /* static async addBlog(BlogName, text, gitLink, url, stack) {
        try {
            const BlogDoc = {
                name: BlogName,
                description: text,
                github: gitLink,
                url: url,
                stack: stack
            }
            return await blog.insertOne(BlogDoc)
        } catch (e) {
            console.error(`Unable to post a new Blog: ${e}`)
            return { error: e }
        }
    }

    static async updateBlog(BlogId, data) {
        try {
            const responseUpdate = await blog.updateOne(
                { _id: ObjectId(BlogId) },
                { $set: data }, 
            )
            return responseUpdate
        } catch (e) {
            console.error(`Unable to update Blog: ${e}`)
            return { error: e }
        }
    }
    

    static async deleteBlog(BlogId) {
        try {
            const deleteResponse = await blog.deleteOne({ _id: ObjectId(BlogId) })

            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete Blog: ${e}`)
            return { error: e }
        }
    }
 */

}