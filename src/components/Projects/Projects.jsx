import MainContent from "../MainContent/MainContent";
import Title from "../Title";
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import BlogLayout from "../Blog/BlogLayout/BlogLayout";
import ProjectsLayout from "./ProjectsLayout/ProjectsLayout";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios({
                    url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
                    method: "post",
                    data: {
                        query: `query Projects {
                                projects {
                                    nodes {
                                        id
                                        title
                                        content
                                        projectFields {
                                            yearOfCompletion
                                            description
                                            technologies
                                            projectLink {
                                                url
                                            }
                                            projectImage {
                                                node {
                                                    mediaItemUrl
                                                    altText
                                                }
                                            }
                                        }
                                    }

                                }
                            }`
                    }
                });

                if (!response.data.data.projects.nodes) {
                    setError(true)
                } else {
                    setProjects(response.data.data.projects.nodes)
                    setLoading(false)
                }
            } catch (err) {
                setError(true)
                console.log(err)
            }
        }
        fetchProjects();
    }, []);

    useEffect(() => {
        if (error) {
            setLoading(false);
        }
    }, [error])

    return (
        <>
            <Title title="Projects" />
            <MainContent>
                <ProjectsLayout title="Projects" description="Take a look at some of my projects">
                    {(projects.length > 0)
                        ? projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                yearOfCompletion={project.projectFields.yearOfCompletion}
                                description={project.projectFields.description}
                                technologies={project.projectFields.technologies}
                                link={project.projectFields.projectLink.url}
                                image={project.projectFields.projectImage.node.mediaItemUrl}
                                imageAlt={project.projectFields.projectImage.node.altText} />
                        ))
                        : (error)
                            ? <div>
                                <div className='no-post'>
                                    Could not fetch projects please try again later
                                    <a
                                        href="/"
                                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                                    >
                                        Go back home
                                    </a>
                                </div>
                            </div>
                            : <div className='no-post'>No projects uploaded yet... :(</div>}
                </ProjectsLayout>
            </MainContent>
        </>
    );
}