import React, { useRef, useState } from 'react';
import LargeTitle from '../Titles/LargeTitle';
import Button from '../UI/Button';
import TextArea from '../UI/TextArea';
import emailjs from '@emailjs/browser';
import FormSubmit from '../modals/FormSubmit';
import { useForm } from 'react-hook-form';
import cn from 'classnames';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [popup, setPopup] = useState(false);
  const form = useRef();

  const closePopup = () => {
    setPopup(false);
  };

  const onSubmit = (e) => {
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
          form.current.reset();
          setPopup(true);
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
        className="section container xl  mx-auto min-h-full text-indigo-950 flex items-center font-poppins flex-col w-full mb-10 px-5 transition-all duration-300"
      >
        <div className="text-center my-20">
          <LargeTitle title="Open to job opportunities" />
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-ful grid  grid-rows-1 gap-5 bg-white p-12 rounded-3xl shadow-xl m-auto text-slate-600 dark:bg-indigo-900  max-w-xl max-lg:p-7 "
            ref={form}
          >
            <div className="relative">
              <input
                {...register('user_name', { required: 'Name is required' })}
                defaultValue=""
                placeholder="Name"
                type="text"
                id="floating_outlined"
                className={cn(
                  ' block px-2.5 pb-2.5 pt-5 w-full text-lg text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  dark:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-400 peer placeholder-transparent dark:text-slate-300',
                  {
                    'focus:border-red-500 border-red-500 dark:focus:border-red-500 dark:border-red-500 animate-headShake':
                      errors?.user_name,
                  }
                )}
              />
              <label
                htmlFor="floating_outlined"
                className={cn(
                  'pointer-events-none absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-2 origin-[0] bg-transparent  px-3  peer-focus:text-indigo-400  peer-focus:dark:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent ',
                  {
                    'focus:text-red-500 peer-focus:text-red-500 text-red-500  dark:focus:text-red-500 peer-focus:dark:text-red-500 dark:text-red-500':
                      errors?.user_name,
                  }
                )}
              >
                Name
              </label>
            </div>
            <div
              className={cn(
                'max-h-0 opacity-0 transition-all duration-300 -mt-4 px-3',
                {
                  'max-h-1 opacity-100 text-red-500': errors?.user_name,
                }
              )}
            >
              {errors.user_name?.message}
            </div>

            <div className="relative">
              <input
                {...register('user_email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Please enter valid email',
                  },
                })}
                defaultValue=""
                placeholder="Email"
                type="text"
                id="floating_outlined"
                className={cn(
                  ' block px-2.5 pb-2.5 pt-5 w-full text-lg text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  dark:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-400 peer placeholder-transparent dark:text-slate-300',
                  {
                    'focus:border-red-500 border-red-500  dark:focus:border-red-500 dark:border-red-500 animate-headShake':
                      errors?.user_email,
                  }
                )}
              />
              <label
                htmlFor="floating_outlined"
                className={cn(
                  'pointer-events-none absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-2 origin-[0] bg-transparent  px-3  peer-focus:text-indigo-400  peer-focus:dark:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent',
                  {
                    'peer-focus:dark:text-red-500 focus:text-red-500 peer-focus:text-red-500 text-red-500  dark:focus:text-red-500 dark:text-red-500':
                      errors?.user_email,
                  }
                )}
              >
                Email
              </label>
            </div>
            <div
              className={cn(
                'max-h-0 opacity-0 transition-all duration-300 -mt-4 px-3',
                {
                  'max-h-1 opacity-100 text-red-500': errors?.user_email,
                }
              )}
            >
              {errors.user_email?.message}
            </div>

            <TextArea
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full text-lg placeholder:text-gray-400 text-indigo-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:border-indigo-600 dark:focus:border-indigo-400 focus:outline-none focus:ring-0 focus:border-indigo-400 peer dark:text-slate-300"
              placeholder="Your message"
            />
            <Button
              title="Contact me"
              type="submit"
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
