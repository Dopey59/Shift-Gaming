import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/footer';


export default function ContactUs(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yd247in', 'template1', form.current, 'VdQ4--7AZkMyERSyS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className='min-h-screen bg-gradient-to-tr from-zinc-900 to-slate-900 flex p-6 justify-evenly flex-col sm:items-center'>

        <div className='text-center flex text-white flex-col gap-2'>
          <h1 className='sm:text-4xl text-3xl'>Formulaire de contact</h1>
          <p className='sm:text-xl text-md'>Remplis le formulaire ci-dessous</p>
        </div>
        
        <form className="flex flex-col gap-6 " ref={form} onSubmit={sendEmail}>
          <div className='flex sm:flex-row flex-col gap-6 '>
            <input 
              className="border-b-2 p-2 rounded-md border-solid border-black outline-none"
              type="text"
              name="user_name"
              placeholder='Nom du destinataire'
              />
            <input
              type="email"
              name="user_email"
              placeholder='email'
              className="border-b-2 p-2 rounded-md border-solid border-black outline-none"
              />
          </div>

          <div className='flex flex-col gap-2'>
            <label for="text" name="message" className='text-white'>Message :</label>
            <textarea 
            name="message"
            className="border-2 rounded-md border-solid border-black"
            rows={4}
            />
            
            <input 
            type="submit"
            value="Envoyer"
            className='bg-blue-500 p-2 rounded-md hover:bg-blue-600
            hover:cursor-pointer text-white'
            />
          </div>

        </form>
      </div>
      <Footer/>
    </>
  );
};