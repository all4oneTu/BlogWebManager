import { GET_SUBREDDIT_BY_TOPIC } from './../.history/graphql/queries_20220531010753';
import { GET_POST_BY_ } from './../.history/graphql/queries_20220531010745';
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

export const GET_POST_BY_ID = gql`
    query MyQuery($post_id: ID!) {
        getPostById(id: $post_id) {
            created_at
            id
            title
            body
            subreddit_id
            username
            image
            comment{
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
            vote{
                created_at
                id
                post_id
                username
                upvote
            }
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
            image
            comment{
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
            vote{
                created_at
                id
                post_id
                username
                upvote
            }
        }
    }
`
export const GET_ALL_POSTS_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getPostListByTopic(topic: $topic) {
            created_at
            id
            title
            body
            subreddit_id
            username
            image
            comment{
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
            vote{
                created_at
                id
                post_id
                username
                upvote
            }
        }
    }
`
export const GET_ALL_VOTE_BY_POST_ID = gql`
    query MyQuery($post_id: ID!) {
        getVotesByPostId(post_id: $post_id) {
            created_at,
            id,
            post_id,
            upvote,
            username
        }
    }
`
export const GET_SUBREDDIT_WITH_LIMIT = gql`
    query MyQuery($limit: Int!) {
        getSubredditListWithLimit(limit: $limit) {
            created_at,
            id,
            