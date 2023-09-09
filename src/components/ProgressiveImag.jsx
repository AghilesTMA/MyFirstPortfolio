import React, { useEffect, useState } from 'react'

const ProgressiveImag = ({placeholderImg,Img,...props}) => {
  const [imgSrc,setImgSrc] = useState(placeholderImg||Img);
  useEffect(()=>{
    const img = new Image();
    img.src = Img;
    img.onload = ()=>{
      setImgSrc(Img)
    }
  },[Img])
  return (
    <img
      src={imgSrc}
      alt={props.alt||""} 
      className={imgSrc===placeholderImg?" blur-sm grayscale":""}
      {...props}
    />
  )
}

export default ProgressiveImag