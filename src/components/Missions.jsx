import image1 from "../assets/img/image1.webp"
import image2 from "../assets/img/image2.webp"
import image3 from "../assets/img/image3.webp"
import { FaWater } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Missions = () => {
    return(
        <>
            <div className=" bg-gray-200 p-[20px]">
               <div className="flex text-center pb-[40px]"> 
                    <div className=" mt-[50px]">
                        <img className="w-[550px] rounded" src={image1} alt="" />
                    </div>
                        <div>
                            <div className="grid items-center justify-center text-center pl-[50px] pt-[40px]">
                                <h2 className="text-[40px] font-sembold pb-[20px]">Our Mission & Values</h2>
                                <h3 className="text-[18px] font-thin pb-[30px] font-serif">At Techlhab, we are committed to providing dependable and high <br />-quality borehole services. Our mission is to ensure access to clean <br /> and sustainable water sources tailored to our clients’ unique needs. <br /> We prioritize customer satisfaction and innovation in all our projects.
                                </h3>
                            </div>
                            <div className="flex text-left gap-[25px] ml-[30px] pt-[40px]">
                            <span>
                                <h3 className="text-[40px] font-bold pb-[15px]">100%</h3>
                                <h4 className="text-[15px] font-semobold pb-[30px] font-sans">We have successfully completed over 100 <br /> borehole projects, ensuring that our <br /> clients receive the best possible service <br /> and results.                        </h4>
                            </span>
                            <span>
                            <h3 className="text-[40px] font-bold pb-[15px]">20 team members</h3>
                                <h4 className="text-[15px] font-semobold pb-[30px] font-sans">Our dedicated team consists of 5 skilled <br /> professionals, each bringing unique <br /> expertise to ensure project success and <br /> client satisfaction.</h4>
                        </span>
                            </div>
                        </div>

            </div>


            <div className="flex text-center pb-[40px] pl-[35px]"> 
                   
                        <div>
                            <div className="grid items-center justify-center text-left  pt-[40px] ">
                                <h2 className="text-[40px] font-extrabold pb-[20px]">Comprehensive Borehole Drilling Services.</h2>
                                <h3 className="text-[18px] font-thin pb-[30px] font-serif">At Techlhab, we offer a range of borehole drilling services designed <br />to meet your water needs. Our experienced team uses advanced <br /> techniques and equipment to ensure efficient and reliable service.
                                </h3>
                            </div>
                            <span className="flex items-center">
                                <FaWater /><h1 className="ml-[20px] text-[20px] font-thin font-serif">Residential Borehole Drilling
                                </h1>
                            </span>

                            <span className="flex items-center">
                                <FaWater /><h1 className="ml-[20px] text-[20px] font-thin font-serif">Commercial Borehole Drilling
                                </h1>
                            </span>

                            <span className="flex items-center">
                                <FaWater /><h1 className="ml-[20px] text-[20px] font-thin font-serif"> Maintenance and Repair Services
                                </h1>
                            </span>

                            <span className="flex items-center">
                                <FaWater /><h1 className="ml-[20px] text-[20px] font-thin font-serif">Building Pilling
                                </h1>
                            </span>
                            
                        </div>
                        <div className=" mt-[50px]">
                        <img className="w-[550px] rounded" src={image2} alt="" />
                    </div>
            </div>



            <div className="flex text-center pb-[40px]"> 
                    <div className=" mt-[50px]">
                        <img className="w-[700px] rounded" src={image3} alt="" />
                    </div>
                        <div>
                            <div className="grid  pl-[40px] pt-[40px] text-left">
                                <h2 className="text-[40px] font-extrabold pb-[20px]">Why Choose Techlhab for Your Borehole Needs</h2>
                                <h3 className="text-[18px] font-thin pb-[30px] font-serif">Techlhab is committed to delivering dependable and high-quality <br /> borehole services. Our experienced team uses advanced techniques <br /> and equipment to ensure your water needs are met with efficiency <br /> and professionalism..
                                </h3>

                                <div>
                            <span className="flex items-center">
                                <FaCheckCircle /><h1 className="ml-[20px] text-[20px] font-thin font-serif"> Experienced and skilled team
                                </h1>
                            </span>
                            <span className="flex items-center">
                                <FaCheckCircle /><h1 className="ml-[20px] text-[20px] font-thin font-serif">Advanced drilling techniques
                                </h1>
                            </span>
                            <span className="flex items-center">
                                <FaCheckCircle /><h1 className="ml-[20px] text-[20px] font-thin font-serif">Commitment to customer satisfactio7
                                </h1>
                            </span>
                              
                            </div>
                            
                            </div>
                           
                           
                        </div>

            </div>

                
        </div>
        </>
    )
}
export default Missions


