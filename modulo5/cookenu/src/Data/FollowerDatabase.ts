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
}