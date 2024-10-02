import gall1 from "../assets/img/gall1.webp"
import gall2 from "../assets/img/gall2.webp"
import gall3 from "../assets/img/gall3.webp"
import gall4 from "../assets/img/gall4.webp"
import gall5 from "../assets/img/gall5.webp"
import gall6 from "../assets/img/gall6.webp"

const Gallery = () => {
    return(
        <>
        <div className="bg-gray-200">
            <div className="items-center justify-center text-center py-[50px]">
               <h1 className="text-[50px] font-sans font-bold">Our Project Gallery</h1>
               <h3 className="text-[20px] font-sans font-thin">Explore our past projects that demonstrate our commitment to quality and efficiency.</h3>
            </div>

            <div>
                <span className="flex gap-[30px] p-[20px]">
                    <img className="w-[600px]" src={gall1} alt="" />
                    <img className="w-[600px]" src={gall2} alt="" />
                </span>

                <span className="flex gap-[30px] p-[20px]">
                    <img className="w-[600px]" src={gall3} alt="" />
                    <img className="w-[600px]" src={gall4} alt="" />
                </span>

                <span className="flex gap-[30px] p-[20px]">
                    <img className="w-[600px]" src={gall5} alt="" />
                    <img className="w-[600px]" src={gall6} alt="" />
                </span>
            </div>
        </div>
        </>
    )
}
export default Gallery