const TutorialVideo = () => {
  return (
    <section className="lg:px-peya-x p-4">
      <div>
        <div className="h-[20vh] lg:h-[75vh] w-full relative overflow-hidden mt-4">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/AyOOFLsE9wI`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube"
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TutorialVideo;
