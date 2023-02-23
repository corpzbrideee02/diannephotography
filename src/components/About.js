import { about_list } from "../json/aboutList";

function About() {
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
