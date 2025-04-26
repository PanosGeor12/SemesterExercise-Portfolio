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
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const response = await axios({
                    url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
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
                setError(true);
            }

        }
        fetchPosts();
    }, []);

    useEffect(() => {
        if (error) {
            setLoading(false);   
        }
    }, [error])

    return (
        <>
            <Title title="Blog" />
            <MainContent>
                <BlogLayout title="Blog" description="Read news from me and also learn how to build great things">
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
                        : (error) 
                            ?   <div>
                                    <div className='no-post'>
                                        Could not fetch posts please try again later
                                        <a 
                                            href="/" 
                                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                                        >
                                            Go back home
                                        </a>
                                    </div>
                                </div>
                            :   <div className='no-post'>No posts uploaded yet... :(</div>}
                </BlogLayout>
            </MainContent>
        </>
    )
}
