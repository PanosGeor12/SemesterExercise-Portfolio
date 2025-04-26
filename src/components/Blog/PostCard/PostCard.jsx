import parse from 'html-react-parser'

export default function PostCard({ title, category, slug, content, date, author}) {
    return (
        <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={date} className="">{date}</time>
                <a href="#" className="relative z-10 rounded-full bg-gray-50 text-black px-3 py-1.5 font-medium hover:bg-gray-100">{category}</a>
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold group-hover">
                    <a href={`blog/post/${slug}`}>
                        <span className="absolute inset-0"></span>
                        {title}
                    </a>
                </h3>
                <div className="mt-5 line-clamp-3 text-sm/6">{parse(content.substring(0,25))}...</div>
            </div>
            <div className="text-sm/6 py-5">
                <p className="text-gray-600">{author}</p>
            </div>
        </article>
    );
}