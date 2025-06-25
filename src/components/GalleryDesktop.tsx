import React from 'react';

const GalleryDesktop = () => (
  <section id="gallery" className="py-24 px-6 bg-white">
    <h2 className="text-4xl font-bold text-center mb-6">Фото выполненных услуг эвакуатора</h2>
    <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">Здесь скоро появятся фотографии наших выездов и успешных эвакуаций. Вы сможете оценить качество работы до обращения к нам.</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {[1,2,3,4].map(i => (
        <div key={i} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-4xl text-primary">+</div>
      ))}
    </div>
  </section>
);

export default GalleryDesktop;