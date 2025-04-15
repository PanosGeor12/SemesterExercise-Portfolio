import './Blog.css';
import { useState, useEffect } from 'react'
import parse from 'html-react-parser'
import Title from '../Title';
import axios from 'axios';

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
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">Blog</h2>
                    <p className="mt-2 text-lg/8">Read news from me and also learn how to build great things</p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {(posts.length > 0)
                        ? posts.map((post) => (
                            <article className="flex max-w-xl flex-col items-start justify-between" key={post.id}>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={new Date(post.date).toDateString()} className="">{new Date(post.date).toDateString()}</time>
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 text-black px-3 py-1.5 font-medium hover:bg-gray-100">{post.categories.nodes[0]?.name}</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold group-hover">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            {post.title}
                                        </a>
                                    </h3>
                                    <div className="mt-5 line-clamp-3 text-sm/6">{parse(post.content)}</div>
                                </div>
                                <div className="text-sm/6 py-5">
                                    <p className="text-gray-600">{post.author.node.name}</p>
                                </div>
                            </article>
                        ))
                        : <p>No posts</p>}
                </div>
            </div>
        </>
    )
}
