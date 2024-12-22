import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px] rounded-xl mt-5 ">
      <div id="slide1" className="carousel-item relative w-full">
        <div style={{background:`url("https://i.ibb.co.com/BNhw7vb/pexels-miraybostanci-3234893.jpg")`,
          backgroundPosition:"center",
          backgroundRepeat :"no-repeat",
          backgroundSize: "cover"
        }}
         className="min-h-[60vh] w-full flex justify-center items-center ">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">Unlock the Stories Hidden in History with ArtifactsLog</h1>
          
          
        </div>
         
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div style={{background:`url("https://i.ibb.co.com/HCn7PgX/pexels-gonzalo-mendiola-95842233-24706485.jpg")`,
         backgroundPosition:"center",
         backgroundRepeat :"no-repeat",
         backgroundSize: "cover"
      }}

         className="min-h-[50vh] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center ">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">Unlock the Stories Hidden in History with ArtifactsLog</h1>
          
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div style={{background:`url("https://i.ibb.co.com/VBDnPw6/pexels-iamngakaneka-889973.jpg")`,
         backgroundPosition:"center",
         backgroundRepeat :"no-repeat",
         backgroundSize: "cover"
      }}
         className="min-h-[50vh] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center ">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">Unlock the Stories Hidden in History with ArtifactsLog</h1>
         
          
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <div style={{background:`url("https://i.ibb.co.com/zHG4Mbx/pexels-martinpechy-2844471-1.jpg")`,
         backgroundPosition:"center",
         backgroundRepeat :"no-repeat",
         backgroundSize: "cover"
      }}
         className="min-h-[50vh] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center ">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">Unlock the Stories Hidden in History with ArtifactsLog</h1>
          
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>
    );
};

export default Banner;