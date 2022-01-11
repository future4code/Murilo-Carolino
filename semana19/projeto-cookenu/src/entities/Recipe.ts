export class Recipe {
    constructor (
        private id: string,
        private title: string,
        private description: string,
        private creationDate: string,
        private userId: string
    ) {}

    getId() {
        return this.id
    }
    getTitle() {
        return this.title
    }
    getDescription() {
        return this.description
    }
    getCreationDate() {
        return this.creationDate
    }
    getUserId() {
        return this.userId
    }

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.creationDate, data.userId)
    }
}