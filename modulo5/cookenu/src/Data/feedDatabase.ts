import { BaseDatabase } from "./baseDatabase";

export class FeedDatabase extends BaseDatabase {
    public async getFeed(followerId: string): Promise<any> {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT Recipe.id, title, description, createdAt, User.id, User.name
                FROM Recipe
                JOIN User
                ON Recipe.creator_id = User.id
                JOIN Followers
                ON Followers.followed_id = Recipe.creator_id
                AND Followers.follower_id = '${followerId}'
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}