import './Contact.css';
import Title from '../Title';
import Inputs from './Inputs/Inputs';
import MainContent from '../MainContent/MainContent';
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {

  const [isSend, setIsSend] = useState(false);
  const [validMail, setValidMail] = useState(false);

  const sendMessage = (data) => {
    const firstName = data.get("first-name").trim();
    const lastName = data.get("last-name").trim();

    const fullName = firstName + " " + lastName;
    const email = data.get("email").trim();
    const message = data.get("message").trim();

    if (validMail) {
      axios({
        method: "post",
        url: import.meta.env.VITE_MAILER_SEND_ENDPOINT,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer {${import.meta.env.VITE_MAILER_SEND_API_KEY}}`,
          'X-Requested-With' : 'XMLHttpRequest'
        },
        data: {
          "from": {
            "email": email
          },
          "to": [
            {
              "email": "panagiotisgeoraris12@gmail.com"
            }
          ],
          "personalization": [{
            // "email": "recipient@email.com",
            "data": {
              "user": {
                "name": fullName
              },
              "year": new Date().getFullYear(),
              "message": message,
              "account_name": import.meta.env.VITE_SITE_NAME
            }
          }],
          "template_id": "3z0vklo88k747qrx"
        }
      });
    setIsSend(true);
  }
}

const validateEmail = (event) => {
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  const email = event.target.value;
  const emailClasses = event.target.classList;

  if (!regex.test(email)) {
    emailClasses.add("focus:outline-red-800", "outline-red-800");
  } else {
    emailClasses.remove("focus:outline-red-800", "outline-red-800");
    emailClasses.add("focus:outline-green-800", "outline-green-800");
    setValidMail(true);
  }
}

return (
  <>
    <Title title='Contact' />
    <MainContent>
      {isSend &&
        <Success />
      }
      <div className="isolat px-6 py-15 sm:py-15 lg:px-8" id='contactForm'>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Let's get in touch</h2>
          <p className="mt-2 text-lg/8">Are you interested in any of my project's or want to make a project with me?
            <br />
            If so fill the form bellow
          </p>
        </div>
        <form action={sendMessage} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <Inputs.Input
              id="first-name"
              name="first-name"
              label="First Name"
              type="text"
              autocomplete="given-name"
            />

            <Inputs.Input
              id="last-name"
              name="last-name"
              label="Last Name"
              type="text"
              autocomplete="family-name"
            />
          </div>
          <Inputs.Input
            id="email"
            name="email"
            label="Email"
            type="email"
            autocomplete="email"
            validate={validateEmail}
          />
          <div className="sm:col-span-2">
            <Inputs.Textarea
              id="message"
              name="message"
              label="Message"
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 cursor-pointer"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div >
    </MainContent >
  </>
);
}

function Success() {
  return (
    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
      <span className="font-medium">Message Sent successfully!</span> Thanks for contacting me!
    </div>
  );
}