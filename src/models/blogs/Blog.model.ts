import { model, Schema } from "mongoose"

export interface Blog {
    title: string
    authorId: string
    desciption: String
    timeStamp: Date
}

const BlogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    authorId: { type: String, required: true },
    desciption: { type: String, required: true },
    timeStamp: { type: Date, required: true },
})

export default model<Blog>('Blog', BlogSchema)