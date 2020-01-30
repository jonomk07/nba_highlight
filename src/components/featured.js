import React  from 'react'
import Slider from 'react-slick'

const settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1
}

const generateSlides = ({slides}) =>{
    if(slides){
        return(
            // grab all the settings 
            <Slider {...settings}>
                { slides.map((item)=> {
                    return(
                        <div key={item.id}>
                            <div className="item_slider"  style={{background:`url(/images/covers/${item.cover})`}}>
                                <div className="caption">
                                    <h4>{item.title}</h4>
                                    <h1>{item.topic}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}
const Featured=(props)=>{

    console.log(props)
    return (
        <div>
            {generateSlides(props)}
        </div>
    )

}

export default Featured;

