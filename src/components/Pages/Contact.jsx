import React, { useRef } from 'react';
import LargeTitle from '../Titles/LargeTitle';
import Button from '../UI/Button';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  console.log(process.env.REACT_APP_PUBLIC_KEY);

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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
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
            className=" block px-2.5 pb-2.5 pt-4 w-full text-lg text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer placeholder-transparent"
          />
          <Input
            placeholder="E-mail"
            type="email"
            name="user_email"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer placeholder-transparent"
          />
          <TextArea
            id="message"
            name="message"
            rows="4"
            class="block p-2.5 w-full text-lg text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder="What about..."
          />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Contact;
