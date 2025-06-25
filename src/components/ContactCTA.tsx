import React from 'react';

const ContactCTA = () => (
  <section id="contact" className="py-24 px-6">
    <div className="bg-primary text-dark text-center p-10 rounded-xl w-full shadow-lg">
      <h3 className="text-2xl font-bold mb-2">Нужна эвакуация сейчас?</h3>
      <p className="mb-4">Работаем круглосуточно по Минску и области</p>
      <a href="tel:+11234567890" className="inline-block bg-white text-dark font-bold py-3 px-6 rounded-full transition hover:bg-gray-100">
        +1 (123) 456‑78‑90
      </a>
    </div>
  </section>
);

export default ContactCTA;