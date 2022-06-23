import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getSubredditListByTopic(topic: $topic) {
            created_at
            id
            topic
        }
    }
`

export const GET_ALL_POSTS = gql`
    query MyQuery {
        getPostList{
            created_at
            id
            title
            body
            subreddit_id
            username
            comments{
                id
                created_at
                post_id
                text
                username
            }
            subreddit{
                created_at
                id
                topic
            }
            votes{
                created_at
                id
                post_id
                username
                upvote
            }
        }
    }
`