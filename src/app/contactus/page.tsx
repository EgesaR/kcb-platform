"use client";

import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFaceSadCry,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";

const ContactUsPage = () => {
  const [showUp, setShowUp] = useState(false);
  const [sentStatus, setSentStatus] = useState({
    success: false,
    error: false,
    message: "",
  });
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.append("access_key", "ec13fd8d-6475-4eee-b10c-3e4b7d618d7b");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setSentStatus({
          success: true,
          error: false,
          message: "Message sent successfully",
        });
      } else {
        setSentStatus({
          success: false,
          error: true,
          message: result.message,
        });
      }
    } catch (err) {
      console.log("An error occured and it is:", err);
    }
  }

  return (
    <div className='flex w-full h-[85vh] rounded-xl justify-center items-center flex-col px-10 relative'>
      <h1 className='text-3xl font-bold'>CONTACT INFORMATION</h1>
      <p className='text-xl text-slate-600'>
        Any questions or remarks? Just write us a message
      </p>
      <div className='flex flex-row h-[75%] w-full mt-12 rounded-2xl p-2 '>
        <div className='rounded-2xl h-full w-[40%] bg-green-800 py-6 px-8 relative'>
          <h1 className='text-white font-bold text-[1.7rem] mb-3'>
            Contact Information
          </h1>
          <p className='text-slate-300 text-sm'>
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <ul className='flex flex-col gap-6 mt-10'>
            <li className='flex gap-4 items-center'>
              <FontAwesomeIcon icon={faPhone} />
              <label className='text-slate-300'>hell@gmail.com</label>
            </li>
            <li className='flex gap-4 items-center'>
              <FontAwesomeIcon icon={faEnvelope} />
              <label className='text-slate-300'>hell@gmail.com</label>
            </li>
            <li className='flex gap-4 items-center'>
              <FontAwesomeIcon icon={faLocationDot} />
              <label className='text-slate-300 text-sm'>
                0.49300777179291766, 33.199230765831985 of Jinja
                <a
                  href='#'
                  className='text-sm ml-[1.3rem] text-black dark:text-white'>
                  Use Google Maps
                </a>
              </label>
            </li>
          </ul>
          <div className='absolute bottom-8 w-full flex items-center gap-5'>
            <Link
              href='#'
              className='h-10 w-10 flex justify-center items-center rounded-full hover:bg-green-500'>
              <FontAwesomeIcon icon={faFacebookF} className='fa-1x' />
            </Link>
            <Link
              href='#'
              className='h-10 w-10 flex justify-center items-center rounded-full hover:bg-green-500'>
              <FontAwesomeIcon icon={faInstagram} className='fa-1x' />
            </Link>
            <Link
              href='#'
              className='h-10 w-10 flex justify-center items-center rounded-full hover:bg-green-500'>
              <FontAwesomeIcon icon={faFacebookF} className='fa-1x' />
            </Link>
          </div>
        </div>
        <form
          className='rounded-2xl h-full w-[60%] px-10 pt-5'
          onSubmit={handleSubmit}>
          <div className='flex gap-10 mb-9'>
            <FormInput
              title='First Name'
              placeholder='First Name'
              type='text'
              inputSyle=''
            />
            <FormInput
              title='Last Name'
              placeholder='Last Name'
              type='text'
              inputSyle=""/>
          </div>
          <div className='flex gap-10 mb-9'>
            <FormInput
              title='Mail'
              placeholder='Mail'
              type='email'
              inputSyle=''
            />
            <FormInput
              title='Phone Number'
              placeholder='Phone Number'
              type='tel'
              inputSyle=''
            />
          </div>
          <FormInput
            title='Message'
            placeholder='Write your message...'
            type='textarea'
            inputStyle='w-24'
          />
          <div className='flex mt-6'>
            <FormConfirmationPopUp
              handleSubmit={handleSubmit}
              messageObj={sentStatus}
              showUp={showUp}
              setShowUp={setShowUp}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUsPage;

const FormConfirmationPopUp = ({
  handleSubmit,
  messageObj,
  showUp,
  setShowUp,
}) => {
  console.log("Message Object", messageObj);
  return (
    <div className='w-full relative'>
      <button
        type='submit'
        className='modal-button py-3 px-5 text-xs bg-green-700  text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-green-900 ml-auto'
        data-pd-overlay='#static-backdrop-modal'
        data-modal-target='static-backdrop-modal'
        data-modal-toggle='static-backdrop-modal'
        onClick={() => handleSubmit()}>
        {" "}
        Send Message{" "}
      </button>
      <div
        id='static-backdrop-modal'
        className='pd-overlay hidden w-full h-full fixed top-0 left-0 z-[100] overflow-x-hidden overflow-y-auto bg-black/50'>
        <div
          className='opacity-0  ease-out modal-open:opacity-100 transition-all modal-open:duration-500 sm:max-w-lg sm:w-full m-5 sm:mx-auto'
          style={{ marginTop: "calc(100vh/3.7)" }}>
          <div className='flex flex-col bg-white rounded-2xl py-4 px-5'>
            <div className='overflow-y-auto py-8 min-h-[250px] grid place-items-center'>
              {messageObj.success === messageObj.error ? (
                <label className='text-black'>
                  Something is not right! Please fill in to submit your
                  feedback... :)
                </label>
              ) : messageObj.success ? (
                <>
                  <label className='hidden'>
                    {setTimeout(() => {
                      setShowUp(true);
                    }, 5000)}
                  </label>
                  <input type='checkbox' id='check' checked={showUp} />
                  <label
                    htmlFor='check'
                    className='inline-block relative w-[126px] h-[126px] border-2 rounded-full border-l-[#5cb85c] iconLabel'>
                    <div className='icon'></div>
                  </label>
                  <h1 className='text-xl text-black font-semibold mt-10 mb-1'>
                    Thanks for your feedback!
                  </h1>
                  <p className='text-base text-black'>
                    The development will work on you...
                  </p>
                </>
              ) : (
                <>
                  <label className='inline-block relative w-[126px] h-[126px] border-2 rounded-full border-red-700'>
                    <FontAwesomeIcon
                      icon={faFaceSadCry}
                      className='text-red-700 text-6xl absolute left-[35%] top-[50%] translate-y-[-50%] translate-x-[-20%]'
                    />
                  </label>
                  <h1 className='text-xl text-black font-semibold mt-10 mb-1'>
                    Something went wrong!
                  </h1>
                  <p className='text-base text-black'>
                    Please retry. Am sure next time it will work.
                  </p>
                </>
              )}
            </div>
            <div className='flex items-center justify-end pt-4 border-t border-gray-200 space-x-4'>
              <button
                type='button'
                className='py-2.5 px-5 text-xs  bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 close-modal-button'
                data-pd-overlay='#static-backdrop-modal'
                data-modal-target='static-backdrop-modal'>
                <Link href={messageObj.success ? '/' : "#"}>Okay, got it
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ title, placeholder, type = "text", inputStyle="" }) => {
  return (
    <div className='flex-1'>
      <p className='text-sm text-slate-300'>{title}</p>
      {type === "textarea" ? (
        <textarea
          rows={1}
          cols={1}
          placeholder='Write here your message...'
          name={title.toLowerCase()}
          required
          className='w-full h-20 bg-transparent border-b-2 mt-2 outline-none placeholder:italic placeholder:text-slate-400'></textarea>
      ) : (
        <input
          placeholder={placeholder}
          className={`bg-transparent border-b-2 rouded-b-xl mt-2 outline-none w-full
           placeholder:italic placeholder:text-slate-400 focus:border-green-400 ${inputStyle}`}
          type={type}
          name={title.toLowerCase()}
          required
        />
      )}
    </div>
  );
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputSyle: PropTypes.string,
};

FormInput.defaultProps = {
  title: "Title",
  placeholder: "Text",
};
