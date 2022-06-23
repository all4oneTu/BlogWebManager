type Comments = {
    created_at: string
    id: number
    post_id: number
    text: string
    username: string
}

type Vote = {
    created_at: String
    id: Number
    post_id: Number
    upvote: Boolean
    username: string
}

type Subreddit = {
    created_at: String
    id: Number
    topic: string
}

type Post = {
    created_at: string
    id: number
    title: string
    body: string
    image: string
    subreddit_id: number
    username: string
    votes: Vote[]
    comments: Comments[]
    subreddit: Subreddit[]
}
