
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Travel() {
    const travel_list = [
        { title:"Anawangin Cove",location:"San Antonio, Zambales Philippines",alt:"",  src: "tb.jpeg", id: 1, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
        {  title:"Diguisit Beach",location:"Baler, Aurora Philippines",alt:"", src: "ta.jpg", id: 2 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", },
        {  title:"Tinipak River",location:"Tanay, Rizal Philippines",alt:"", src: "tc.jpeg", id: 3, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
        
        {  title:"Fanshawe Conservation Area",location:"London, Ontario Canada",alt:"", src: "tj.JPG", id: 8 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", }, 
         {   title:"Fanshawe Conservation Area",location:"London, Ontario Canada",alt:"", src: "tk.jpg", id: 9, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
          { title:"Anawangin Beach",location:"San Antonio, Zambales Philippines",alt:"",  src: "ti.jpeg", id: 7, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
      
        { title:"Treasure Mountain",location:"Tanay, Rizal Philippines",alt:"",  src: "td.jpg", id: 4, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
        {  title:"Mount Daraitan",location:"Tanay, Rizal Philippines",alt:"", src: "te.jpeg", id: 5 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", },
        {  title:"Mount Binutasan",location:"Tanay, Rizal Philippines",alt:"", src: "tf.jpeg", id: 6, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
 
        { title:"Buntot Palos Falls",location:"Pangil, Laguna Philippines",alt:"",  src: "tf2.jpg", id: 10, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
        {  title:"Millennium Tree (Balete tree)",location:"Baler, Aurora Philippines",alt:"", src: "tg.jpg", id: 11 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", },
        {  title:"Kiltepan Viewpoint",location:"Sagada, Mountain Province Philippines",alt:"", src: "th.jpg", id: 12, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
 
        { title:"Elora Gorge Conservation Area",location:"Elora, Ontario Canada",alt:"",  src: "tv.jpg", id: 22, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
        {  title:"Replace",location:" Ontario Canada",alt:"", src: "tw.jpg", id: 23 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", },
        {  title:"Sumaguing Cave",location:"Sagada, Mountain Province Philippines",alt:"", src: "tx.jpg", id: 24, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
 
        { title:"Boler Mountain",location:"London, Ontario Canada",alt:"",  src: "tm.jpg", id: 13, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
        {  title:"The Thames Valley Trail",location:"London, Ontario Canada",alt:"", src: "tn.jpeg", id: 14 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", },
        {  title:"Niagara Falls",location:"Niagara Falls, Ontario Canada",alt:"", src: "to.JPG", id: 15, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
 
        
        {  title:"Lake Pandin",location:"San Pablo, Laguna Philippines",alt:"", src: "tr.jpg", id: 18, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
         {  title:"Innerkip Trout Lake",location:"Innerkip, Ontario Canada",alt:"", src: "tq.jpg", id: 17 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", },
         { title:"Sharon Creek Conservation Area",location:"Delaware, Ontario Canada",alt:"",  src: "tp.jpg", id: 16, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
    
        
        { title:"Quirino Bridge",location:"Bantay, Ilocos Sur Philippines",alt:"",  src: "ts.jpg", id: 19, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
        {  title:"Venice Grand Canal",location:"Taguig, Metro Manila Philippines",alt:"", src: "tt.jpg", id: 20 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", },
        {  title:"Sunova Lake",location:"Lakeside, Ontario Canada",alt:"", src: "tu.jpg", id: 21, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
 
      
     
     

    ];
    return (
        <section className="wrap">
            <h2 className="sectionQuotes">
                “The more you wander, the more you wonder!”
            </h2>
            <div className="absolute p-4 text-gray-400">
                <div className="grid lg:grid-cols-3 gap-x-6">
                {travel_list.map((item) => (
                           <div className="mb-12 lg:mb-0" key={item.id}>
                        <div className="travelPicDiv shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <LazyLoadImage src={require(`../images/travel/${item.src}`)} className="w-full"  alt={item.alt} effect="blur"/>
                                <div
                                    className="travelPic mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                ></div>
                           
                        </div>
                        <h5 className="text-lg font-bold mb-3 text-teal-500 flex items-center justify-center lg:justify-start">{item.title}</h5>
                        <div className="mb-3 text-gray-200 font-medium text-sm ">{item.location}</div>
                        {/* <p > {item.description}</p> */}
                    </div>
                        ))}
                </div>
            </div>
        </section>

    );
}

export default Travel;
