import React from "react";
import Deer from "../../Assests/Gallery/Rectangle 17.png";
import fox from "../../Assests/Gallery/Rectangle 18.png";
import goart from "../../Assests/Gallery/Rectangle 19.png";
import tiger from "../../Assests/Gallery/Rectangle 20.png"
import bird from "../../Assests/Gallery/Rectangle 22.png"
import zeebra from "../../Assests/Gallery/Rectangle 21.png"
import deer2 from "../../Assests/Gallery/Rectangle 16.png"
const Gallery = () => {
  return (
    <div class="grid grid-cols-2 gap-2  h-screen bg-black">
      <div className=" grid-rows-2 mt-12">
        <div className=" h-[30%]">
          <span className=" font-serif  text-4xl ml-[80px] mb-[50] font-thin  box-border   mt-10 text-white">
            Gallery
          </span>
          <br />
          <br />
          <p className="mb-[100] ml-[80px] box-border  text-lg mt-10 tracking-wide space-y-4 text-white">
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit.<br/> Nullam consectetur purus vel urna cursus, ut
            vestibulum <br/> libero  consectetur. Sed dapibus purus{" "}
          </p>
        </div>
        <div className=" flex grid-row-2 mt-5 text-white">
          <div className=" w-[50%] mt-10 ml-[80px] text-white">
            <img src={Deer} />
          </div>
          <div className=" grid-flow-row mt-4 mr-[50px] text-white">
            <div className="h-[30vh] text-white">
              <img src={goart} />
            </div>
            <div className="h-[50%]  text-white">
              <img src={fox} />
            </div>
          </div>
        </div>
      </div>
      <div class="place-self-stretch  grid-rows-2 text-white">
        <div className="text-white h-[65vh] gap-[30px] flex grid-cols-2 ">
    <div className=" mt-20  ml-9 "> <img src={bird} />
    <div className=" mt-[20px]  ml-0"> <img src={zeebra}/></div></div>
    <div className="  mt-[150px]"> <img src={deer2} /></div>
    
        </div>
        <div className="text-white ml-9 "> <img src={tiger} /></div>
      </div>
    </div>
  );
};

export default Gallery;
