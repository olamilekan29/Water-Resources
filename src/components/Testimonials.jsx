import avatar1 from "../assets/img/avatar1.webp"
import avatar2 from "../assets/img/avatar2.webp"
import avatar3 from "../assets/img/avatar3.webp"
import { FaStar } from "react-icons/fa6";
const Testimonials = () => {
    return(
        <>
            <div className="grid pt-[50px] text-center pb-[30px]">
               <h1 className="text-[50px] font-bold font-serif">What Our Clients Say</h1> 
               <h2 className="text-[20px] fonts-serif"><span className="font-bold">Discover how Techlhab has transformed water access </span> for our clients through <br /> exceptional borehole drilling services.</h2>
            </div>
            <div className="flex pb-[70px]">
                
                <div className="w-[400px] bg-black text-white grid p-[20px] ml-[30px] mb-[30px] rounded">
                <span className="flex gap-[10px] bg-gold-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </span>
                   <h3 className="text-[18px] mb-[35px] font-sans">Techlhab provided outstanding service! The team was professional and completed the drilling ahead of schedule.</h3>
                    <span className="flex">
                        <img className="w-[50px] rounded-3xl mr-[50px]" src={avatar1} alt="" />
                       <span> 
                        <h4>Samuel Adeyemi</h4>
                         <h5>property owner</h5>
                        </span>
                    </span>
                </div>


                <div className="w-[400px] bg-black text-white grid p-[20px] ml-[30px] mb-[30px] rounded">
                <span className="flex gap-[10px] bg-gold-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </span>
                   <h3 className="text-[18px] mb-[35px] font-sans">I am extremely satisfied with the borehole installation. It has significantly improved my farm's water supply</h3>
                    <span className="flex">
                        <img className="w-[50px] rounded-3xl mr-[50px]" src={avatar2} alt="" />
                       <span> 
                        <h4>Amina Bello</h4>
                         <h5>Local Farmer</h5>
                        </span>
                    </span>
                </div>


                <div className="w-[400px] bg-black text-white grid p-[20px]  mx-[30px] mb-[30px] rounded">
                <span className="flex gap-[10px] bg-gold-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </span>
                   
                   <h3 className="text-[18px] mb-[35px] font-sans">Their expertise in borehole drilling is unmatched. I highly recommend Techlhab for any water needs.</h3>
                    <span className="flex">
                        <img className="w-[50px] rounded-3xl mr-[50px]" src={avatar3} alt="" />
                       <span> 
                        <h4>Chinedu Okafor</h4>
                         <h5>Business owner</h5>
                        </span>
                    </span>
                </div>
            </div>


        </>
    )
}
export default Testimonials