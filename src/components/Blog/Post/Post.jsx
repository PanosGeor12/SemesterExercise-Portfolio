import './Post.css'
import { useParams, useMatch } from 'react-router';

export default function Post() {
    const match = useMatch('/blog/:slug');
    const postSlug = match.params["slug"];

    return (
        <>
        
        </>
    );
}