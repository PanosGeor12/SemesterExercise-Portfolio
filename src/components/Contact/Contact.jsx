import './Contact.css';
import Title from '../Title';
import MainContent from '../MainContent/MainContent';

export default function Contact() {
    return (
        <>
            <Title title='Contact'/>
            <MainContent>
                <div className="isolat px-6 py-15 sm:py-15 lg:px-8" id='contactForm'>
                  <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Let's get in touch</h2>
                    <p className="mt-2 text-lg/8">Are you interested in any of my project's or want to make a project with me?
                        <br/>
                        If so fill the form bellow
                    </p>
                  </div>
                  <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold">
                          First name
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-dark px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold">
                          Last name
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-dark px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                            required
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold">
                          Email
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md bg-dark px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                            required
                          />
                        </div>
                      </div>                      
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold">
                          Message
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="block w-full rounded-md bg-darj px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                            defaultValue={''}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      >
                        Let's talk
                      </button>
                    </div>
                  </form>
                </div>
            </MainContent>
        </>
    );
}