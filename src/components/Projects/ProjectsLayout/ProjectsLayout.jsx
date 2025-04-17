export default function ProjectsLayout({ title, description, children }) {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 pb-5 sm:mb-8 sm:pb-8">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">{title}</h2>
                <p className="mt-2 text-lg/8">{description}</p>
            </div>
            {children}
        </div>
    );
}