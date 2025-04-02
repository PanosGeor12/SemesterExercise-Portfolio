import './Posts.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const response = await axios({
                    url : "https://wordpress.test/graphql", 
                    method : "post",
                    data : {
                        query : `query Posts {
                            posts {
                              nodes {
                                id
                                title
                              }
                            }
                        }`
                    }
                });

                setPosts(response.data.data.posts.nodes)
                setLoading(false)
            } catch(err) {

            }
            
        }    
        fetchPosts();
    }, []);

    if (loading) {
        return <div id='loadingOverlay'>
                    <PacmanLoader loading={loading}/>
                </div>;
    }
    return (
        <>

        {(posts.length > 0) 
            ?  posts.map((post) => (
                    <div key={post.id}>{post.title}</div>
                )) 
            : <p>No posts</p>}
        </>
    )
}
