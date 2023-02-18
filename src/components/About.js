

function About() {
  const about_list = [
    {
      content: " I have a passion for photography which is a way to express my creativity and share my perspective with the world by capturing moments and creating beautiful images.",
      title: "Photography",
    },
    {
      content: "  I am an avid traveler. There is so much to learn and experience from different cultures and perspectives. From exploring new cities to immersing myself in different ways of life, travel has broadened my horizons and taught me so much about the world and myself.   ",
      title: "Travel",
    },
    {
      content: "  I love spending time in nature because it is essential for my physical and mental well-being. Being outside always makes me feel at peace and renewed, whether it's hiking, camping, or  just going for a walk.",
      title: "Nature",
    },
    {
      content: " I have a deep appreciation for music, enjoy listening to various genres, play guitar well, and see music as a way to connect with others and express their emotions in a unique way.",
      title: "Music",
    },
    {
      content: " I also have a deep appreciation for the arts. I find inspiration in all forms of creative expression, from painting and drawing to dance and music. Arts can bring people together and foster understanding, empathy, and connection.",
      title: "Arts",
    },
  ];
  return (
    <section className="wrap">
      <h2 className="sectionQuotes">About</h2>
      <div class="flex justify-center">
        <div class="text-gray-300">
          <h4 class="font-semibold text-lg mb-4 text-center">Thanks for visiting my website! I want to share with you a little bit about my interests outside of programming.</h4>
          <div className="container px-2 py-2 mx-auto lg:pt-4 lg:px-32">
            <div className="flex flex-wrap w-3/4 mx-auto" >
              {about_list.map((item) => (
                <div className="w-full p-6 hover:bg-slate-700 bg-slate-800 rounded mb-3">
                  <h6 class="text-xl mb-1 font-semibold text-teal-500">{item.title}</h6>
                  <p>{item.content}
                  </p>
                </div>

              ))}
            </div>

          </div>
          <h4 class="font-semibold text-lg mt-4 text-center">
            I hope that my love for photography, music, the outdoors, the arts, and travel shines through in everything that I do.
          </h4>
        </div>
      </div>


    </section>

  );
}

export default About;
