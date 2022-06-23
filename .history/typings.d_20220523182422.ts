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

type Post = {
    created_at: String
    id: Number
    title: string
    body: string
    image: string
    subreddit_id: Number
    username: string
    votes: Votes[]
    comments: Comments[]
    subreddit: Subreddit[]
