type Comments = {
    created_at: String 
    id: Number
    post_id: Number
    text: string
    username: string
}

type Votes = {
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
