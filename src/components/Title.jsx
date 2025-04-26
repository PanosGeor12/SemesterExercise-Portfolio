import { useEffect } from "react";

export default function Title({title}) {
    useEffect(() => {
        const initialTitle = document.title;

        const newTitle = initialTitle.replace("%PAGE_NAME%", title)

    
        document.title = newTitle;

        return () => {
            document.title = initialTitle;
        }

    }, [title]);
}