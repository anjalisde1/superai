"use client"; // For Next.js App Router

export default function VideoSection() {
  return (
    <section className="py-12 px-4">
      {/* <div className="relative" style={{ paddingTop: '56.27659574468085%' }}>
        {/* Vimeo Embed */}
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-full h-full"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F1000853034%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F1000853034%3Fshare%3Dcopy&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1917008293-97ea34e2e5fe5bcf989830c414f344f0ace03b378a4570804527d736b36a2c25-d_1280&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo"
            width="940"
            height="529"
            scrolling="no"
            allowFullScreen
            title="Spur Launch Video"
          ></iframe>
        </div> 
      </div> */}

      {/* Code Embed */}
      {/* <div className="relative" style={{ paddingTop: '75%' }}>
        <iframe
          src="https://player.vimeo.com/video/1000853034?badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="absolute top-0 left-0 w-full h-full"
          title="Spur Launch Video"
        ></iframe>
      </div> */}

      {/* YouTube Embed */}
      <div className="relative" style={{ paddingTop: '56.17021276595745%' }}>
        <iframe
          src="https://www.youtube.com/embed/jNnym9QP8wU?rel=0&controls=1&autoplay=1&mute=0&start=0"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full pointer-events-auto"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Spur Launch"
        ></iframe>
      </div>

      {/* Button Link for YC Launch */}
      <a
        href="https://www.ycombinator.com/launches/LeX-spur-your-ai-qa-engineer"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <img
          src="https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4c00904537ff184655750_YC%20Icon.png"
          alt="YC Icon"
          className="w-6 h-6 mr-2"
        />
        <div className="text-lg">Check out our YC launch</div>
      </a>
    </section>
  );
}
