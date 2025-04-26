import './ProjectCard.css';

export default function ProjectCard({ title, description, yearOfCompletion, technologies = [], link, image, imageAlt }) {
    return (
        <div className="space-y-12">
            <div className="rounded-xl p-6 transition-all duration-300 hover:bg-gray-700 hover:shadow-xl flex flex-col lg:flex-row gap-6 cursor-pointer">
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                    <p className="text-gray-400 mb-6 text-lg">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {technologies.map((tag, index) => (
                            <span
                                key={index}
                                className="text-sm px-3 py-1 rounded-full bg-gray-700 text-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className='py-3'>Year of Completion: {yearOfCompletion}</p>

                    <a
                        href={link}
                        className="inline-block text-blue-400 hover:text-blue-300 font-medium"
                        target='_blank'
                    >
                        View Project →
                    </a>
                </div>

                <div className="lg:w-1/3">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="rounded-lg object-cover w-full shadow-md"
                    />
                </div>
            </div>
            <hr />

        </div>
    );
}