import { Octokit } from "@octokit/core"
import dotenv from 'dotenv'
dotenv.config()

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default class GitController {
  /* static async apiGetRepos(req, res, next) {
    try {
        const RepoResponse = await octokit.request("GET /users/{username}/repos", {
          username: process.env.GITHUB_USER,
          sort: "updated"
        });
        res.json(RepoResponse)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
  } */

  static async apiGetProjectInfo(repo) {
    try {
        const RepoResponse = await octokit.request("GET /repos/{owner}/{repo}", {
          owner: process.env.GITHUB_USER,
          repo: repo
        });
        return RepoResponse
    } catch (e) {
        return ({ error: e.message })
    }
  }

  static async apiGetRepoLanguages(repo) {
    try {
        const RepoResponse = await octokit.request('GET /repos/{owner}/{repo}/languages', {
          owner: process.env.GITHUB_USER,
          repo: repo
        })
        return RepoResponse
    } catch (e) {
        return ({ error: e.message })
    }
  }

}



