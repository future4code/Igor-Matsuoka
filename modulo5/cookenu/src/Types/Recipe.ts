export class Recipe {
    private id: string;
    private title: string;
    private description: string;
    private createdAt: string;
    private creator_id: string;

    constructor(
        id: string,
        title: string,
        description: string,
        createdAt: string,
        creator_id: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.creator_id = creator_id
    }

    public getId() {
        return this.id
    }

    public getTitle() {
        return this.title
    }

    public getDescription() {
        return this.description
    }

    public getCreatedAt() {
        return this.createdAt
    }

    public getCreatorId() {
        return this.creator_id
    }

    static toUserModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.createdAt, data.creator_id)
    }
}