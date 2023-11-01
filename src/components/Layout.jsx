import ImageOne from '../assets/images/image-1.webp'
import ImageTwo from '../assets/images/image-2.webp'
import ImageThree from '../assets/images/image-3.webp'
import ImageFour from '../assets/images/image-4.webp'
import ImageFive from '../assets/images/image-5.webp'
import ImageSix from '../assets/images/image-6.webp'
import ImageSeven from '../assets/images/image-7.webp'
import ImageEight from '../assets/images/image-8.webp'
import ImageNine from '../assets/images/image-9.webp'
import ImageTen from '../assets/images/image-10.jpeg'
import ImageEleven from '../assets/images/image-11.jpeg'
import ImageIcon from '../assets/images/image-icon.png'

const Layout = () => {
    const ImageList = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix, ImageSeven,ImageEight,ImageNine,ImageTen,ImageEleven]
    const nextSixImage = ImageList.slice(1,12)
    console.log(nextSixImage)
    return(
        <>
        <div className="shadow-md rounded bg-white">
            <div className="flex justify-between p-6">
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="selected" />
                    <label htmlFor="selected">1 File Selected</label>
                </div>

                <div>
                    <button>Delete file</button>
                </div>
            </div>
            <div className="border border-t"></div>
            <div className='flex gap-4 p-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className='col-span-2'>
                    <div className='border p-4'>
                        <img src={ImageList[0]} alt="" />
                    </div>
                </div>
                {nextSixImage.map((image,index) => 
                    <div key={index} className='border p-4 cursor-pointer'>
                        <img src={image} alt="" />
                    </div>
                )}
                <div className='border-2 border-dashed p-4 flex items-center justify-center cursor-pointer'>
                    <div className='flex flex-col items-center gap-2'>
                        <img className='w-8 h-8' src={ImageIcon} alt="" />
                        <span className='font-semibold'>Add Images</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Layout;