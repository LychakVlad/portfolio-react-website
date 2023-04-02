import React, { useRef, useState } from 'react';
import LargeTitle from '../Titles/LargeTitle';
import Button from '../UI/Button';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import emailjs from '@emailjs/browser';
import FormSubmit from '../FormSubmit';

const Contact = () => {
  const [popup, setPopup] = useState(false);
  const form = useRef();

  const closePopup = () => {
    setPopup(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setPopup(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        className="section container xl  mx-auto min-h-full text-indigo-950 flex items-center font-poppins flex-col w-full mb-10"
      >
        <div className="text-center mb-8">
          <LargeTitle title="Lets talk about your ideas!" />
        </div>
        <div className="w-2/4">
          <form
            className="w-ful grid  grid-rows-1 gap-5 bg-white p-12 rounded-3xl shadow-xl text-slate-600"
            ref={form}
            onSubmit={sendEmail}
          >
            <Input
              placeholder="Name"
              type="text"
              name="user_name"
              id="floating_outlined"
              className=" block px-2.5 pb-2.5 pt-5 w-full text-lg text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer placeholder-transparent"
            />
            <Input
              placeholder="E-mail"
              type="email"
              name="user_email"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-5 w-full text-lg text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer placeholder-transparent"
            />
            <TextArea
              id="message"
              name="message"
              rows="4"
              class="block p-2.5 w-full text-lg text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
              placeholder="What about..."
            />
            <Button
              title="Contact me"
              type="submit"
              value="Send"
              className="border-0 text-white bg-indigo-500 p-4 rounded-lg w-full hover:bg-indigo-400 transition-color duration-300 focus:bg-indigo-600"
            />
          </form>
        </div>
      </div>
      <FormSubmit popup={popup} closePopup={closePopup} />
    </>
  );
};

export default Contact;
