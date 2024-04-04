import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  // Define your email address
  const emailAddress = 'amaan083.hitit2020@gmail.com';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700">
        Have a question or feedback? We'd love to hear from you! Feel free to reach out to our customer support team via email or phone, and we'll get back to you as soon as possible.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
        <p className="text-lg text-gray-700">Email: <Link to={`mailto:${emailAddress}`} className="underline">{emailAddress}</Link></p>
        <p className="text-lg text-gray-700">Phone: 1-800-FOODIE</p>
      </div>
    </div>
  );
}

export default Contact;
