
const PhotographySection = () => {
  const photos = [
    { id: 1, src: "/photos/p6.jpeg" },
    { id: 2, src: "/photos/P1.jpeg" },
    { id: 3, src: "/photos/P2.jpeg" },
    { id: 4, src: "/photos/P3.jpg" },
    { id: 5, src: "/photos/P4.jpeg" },
    { id: 6, src: "/photos/p5.jpeg" }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Photography
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Capturing moments and telling stories through the lens
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 aspect-square cursor-zoom-in"
              onClick={() => window.open(photo.src, '_blank', 'noopener,noreferrer')}
            >
              <img 
                src={photo.src}
                alt="Photo"
                className="object-cover w-full h-full absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                style={{ filter: 'brightness(0.85)' }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30 text-lg font-medium">
                  Click to Enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            onClick={() => window.open('https://www.instagram.com/regular_clicks', '_blank', 'noopener,noreferrer')}
          >
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
