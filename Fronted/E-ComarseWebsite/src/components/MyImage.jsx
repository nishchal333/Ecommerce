
import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
function MyImage({imgs =[{url : ""}]}) {
  const [currImg, setCurrImg]=useState(imgs[0]);
console.log(imgs);
  // Ensure imgs is an array
  const imageArray = Array.isArray(imgs) ? imgs : [{ url: "" }];
  useEffect(() => {
    if (imgs.length > 0) {
      setCurrImg(imgs[0]);
    }
  }, [imgs]);

  return (
   <Wrapper>
       <div className="grid ">
        {imageArray.map((curElm, index) => {
          console.log("curElm:", curElm.imgs);
console.log('filename',curElm.filename)
          return (
            <figure key={index}>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
 onClick={()=>setCurrImg(curElm)}
        />
      </figure>
    )
  }
)}
{/* 2nd column  */}
</div>
<div className="main-screen">
        <img src={currImg.url} alt={currImg.filename} />
      </div>

   </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;

