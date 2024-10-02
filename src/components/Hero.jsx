import React from "react";
import back from "../assets/img/back2.webp"

function Hero() {
  return (
    <div className="h-[513px]" style={{ backgroundImage: `url(${back})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
    } }>
     <div className="grid text-center items-center justify-center py-[100px] ">
        <h1 className="text-[55px] text-[white] ease-out font-serif"> Experience Quality <br /> Borehole Drilling</h1>

        <h2 className="pt-[10px] text-[white] text-[22px] font-serif">At Hole, we deliver dependable and high-quality <br /> borehole services using advanced techniques and <br /> equipment. Trust us to meet your water needs with <br /> efficiency and professionalism.</h2>
       
     
     </div>
    </div>
  );
}

export default Hero;