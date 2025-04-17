import './Post.css'
import axios from 'axios';
import { useMatch, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import MainContent from '../../MainContent/MainContent';
import Title from '../../Title';

export default function Post() {

    const match = useMatch('/blog/post/:slug');
    const postSlug = match.params["slug"];

    const [post, setPost] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate();

    useEffect(() => {

        const fetchPost = async () => {
            try {
                const response = await axios({
                    url: "https://wordpress.test/graphql",
                    method: "post",
                    data: {
                        query: `query Post {
                                post (id : "${postSlug}", idType : SLUG) {
                                    title
                                    content
                                }
                            }`
                    }
                });

                if (!response.data.data.post) {
                    setError(true)
                } else {
                    setPost(response.data.data.post)
                    setLoading(false)
                }
            } catch (err) {

            }
        }
        fetchPost();
    }, [postSlug]);

    useEffect(() => {
        if (error) {
            navigate("/not-found");       
        }
    },[error])

    return (
        <>
            <Title title={post.title} />
            <MainContent>
                <div className='post'>
                    <h2>{post.title}</h2>
                    <div>{parse(String(post.content))}</div>
                </div>
            </MainContent>
        </>
    );
}