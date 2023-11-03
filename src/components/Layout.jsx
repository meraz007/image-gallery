import { useState } from 'react'
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
    const ImageList = [
        {id: 1, src:ImageOne, selected: false},
        {id: 2, src:ImageTwo, selected: false},
        {id: 3, src:ImageThree, selected: false},
        {id: 4, src:ImageFour, selected: false},
        {id: 5, src:ImageFive, selected: false},
        {id: 6, src:ImageSix, selected: false},
        {id: 7, src:ImageSeven, selected: false},
        {id: 8, src:ImageEight, selected: false},
        {id: 9, src:ImageNine, selected: false},
        {id: 10, src:ImageTen, selected: false},
        {id: 11, src:ImageEleven, selected: false},
    ]

    const [images, setImages] = useState(ImageList.slice(1,12));
    const [selectedImageIds, setSelectedImageIds] = useState([]);
    console.log(images)
    const handleImageClick = (imageId) => {
        const updatedImages = images.map((image) => {
          if (image.id === imageId) {
            return { ...image, selected: !image.selected };
          }
          return image;
        });
    
        setImages(updatedImages);
    
        const selectedIds = updatedImages
          .filter((image) => image.selected)
          .map((image) => image.id);
    
        setSelectedImageIds(selectedIds);
      };

      const handleDeleteSelectedImages = () => {
        const updatedImages = images.filter((image) => !image.selected);
        setImages(updatedImages);
        setSelectedImageIds([]);
      };
      const selectNewPhoto = (e) => {
        document.getElementById('photoInput').click();
      };
    return(
        <>
        <div className="shadow-md rounded bg-white">
            <div className='p-6'>
                {selectedImageIds.length ? (
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" checked onChange={()=>''} name="" id="selected" />
                            <label htmlFor="selected" className='font-medium'>1 File Selected</label>
                        </div>

                        <div>
                            <button onClick={handleDeleteSelectedImages} className='font-medium text-red-500'>Delete files</button>
                        </div>
                    </div>
                ): (
                    <h1 className='font-semibold'>Gallery</h1>
                )}
            </div>
            <div className="border border-t"></div>
            <div className='flex gap-4 p-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className='col-span-2'>
                    <div className='border p-4 relative overflow-hidden'>
                        <img src={ImageList[0].src} alt="" />
                    </div>
                </div>
                {images.map((image,index) => 
                    <div key={index} className="border cursor-pointer group">
                        <div className="relative overflow-hidden">
                        <img 
                            className="w-full object-cover" 
                            src={image.src} alt="" 
                        />
                        <div className="absolute h-full w-full bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <input 
                                className='mt-10 ml-5 w-6 h-5' 
                                type="checkbox" 
                                checked={image.selected}
                                onChange={() => handleImageClick(image.id)}
                            />
                        </div>
                        </div>
                    </div>
                )}
                <div className='border-2 border-dashed p-4 flex items-center justify-center cursor-pointer'>
                    <div className='flex flex-col items-center gap-2'>
                        <img className='w-8 h-8' src={ImageIcon} alt="" />
                        <span className='font-semibold'>Add Images</span>
                    </div>
                </div>
                 {/* <div className="flex justify-center w-full h-32 px-4 transition border border-[#A1A7C4] border-dashed rounded-[10px] appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" onClick={selectNewPhoto}>
                    <div className="flex flex-col items-center justify-center py-6">
                        <label className="flex flex-col items-center rounded-[10px] border border-[#D7DBEC] cursor-pointer px-3 focus:outline-none focus:rounded">
                        <span className="font-sans text-[13px] leading-6 text-indigo-550 px-4 py-2">Add File</span>
                        </label>
                        <input
                            type="file"
                            id="photoInput"
                            style={{ display: 'none' }}
                            onChange={updatePhotoPreview}
                        />
                    </div>
                    </div>
                    <div v-if="photoPreview" className="relative">
                            <span
                            style={{
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundImage: `url('${photoPreview}')`,
                              }}
                                className="block w-32 h-32 rounded-[10px]"

                            ></span>
                        </div> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default Layout;