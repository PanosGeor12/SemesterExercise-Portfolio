import './Blog.css';
import { useState, useEffect } from 'react'
import Title from '../Title';
import axios from 'axios';
import PostCard from './PostCard/PostCard';
import BlogLayout from './BlogLayout/BlogLayout';
import MainContent from '../MainContent/MainContent';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const response = await axios({
                    url: "https://wordpress.test/graphql",
                    method: "post",
                    data: {
                        query: `query Posts {
                            posts {
                              nodes {
                                id
                                date
                                author {
                                    node {
                                        id
                                        name
                                    }
                                }
                                categories {
                                    nodes {
                                        id
                                        name
                                    }
                                }
                                title
                                slug
                                content
                              }
                            }
                        }`
                    }
                });

                setPosts(response.data.data.posts.nodes)
                setLoading(false)
            } catch (err) {

            }

        }
        fetchPosts();
    }, []);

    return (
        <>
            <Title title="Blog" />
            <MainContent>
                <BlogLayout>
                    {(posts.length > 0)
                        ? posts.map((post) => (
                            <PostCard
                                key={post.id}
                                date={new Date(post.date).toDateString()}
                                category={post.categories.nodes[0]?.name}
                                title={post.title}
                                content={post.content}
                                author={post.author.node.name}
                                slug={post.slug} />
                        ))
                        : <p>No posts</p>}
                </BlogLayout>
            </MainContent>
        </>
    )
}
