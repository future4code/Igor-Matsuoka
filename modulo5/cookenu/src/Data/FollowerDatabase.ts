import { BaseDatabase } from "./baseDatabase";

export class FollowerDatabase extends BaseDatabase {
    public async createFollower(followed_id: string, follower_id:string): Promise<void> {
        try {
            await BaseDatabase.connection("Followers")
            .insert({
                followed_id: followed_id,
                follower_id: follower_id
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async deleteFollower(followed_id: string, follower_id:string): Promise<void> {
        try {
            await BaseDatabase.connection("Followers")
            .delete()
            .where({
                followed_id: followed_id,
                follower_id: follower_id
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async deleteFollowerById(id:string): Promise<void> {
        try {
            const result = await BaseDatabase.connection.raw(`
                DELETE Followers FROM Followers
                JOIN User
                ON Followers.follower_id = User.id
                WHERE follower_id ='${id}'
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async deleteFollowedById(id:string): Promise<void> {
        try {
            const result = await BaseDatabase.connection.raw(`
                DELETE Followers FROM Followers
                JOIN User
                ON Followers.followed_id = User.id
                WHERE followed_id = '${id}'
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}