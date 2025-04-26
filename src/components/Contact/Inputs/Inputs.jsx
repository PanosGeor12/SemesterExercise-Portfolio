function Input({ label, id, type, name, autocomplete, validate }) {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="block text-sm/6 font-semibold">
                {label}
            </label>
            <div className="mt-2.5">
                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autocomplete}
                    onChange={validate}
                    className="block w-full rounded-md bg-dark px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                    required
                />
            </div>
        </div>
    );
}

function Textarea({ label, id, name}) {
    return (
        <>
            <label htmlFor={id} className="block text-sm/6 font-semibold">
                {label}
            </label>
            <div className="mt-2.5">
                <textarea
                    id={id}
                    name={name}
                    rows={4}
                    className="block w-full rounded-md bg-darj px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                    defaultValue={''}
                    required
                />
            </div>
        </>
    );
}

export default {
    Input,
    Textarea
} 