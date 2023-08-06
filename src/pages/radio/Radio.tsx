import Slider from "react-slick";
import ArrowCustom from "./ArrowCustom/ArrowCustom";
import RadioLiving from "./RadioLiving/RadioLiving";
import RadioChannel from "./RadioChannel/RadioChannel";
import PodcastDiscover from "./PodcastDiscover/PodcastDiscover";
import PodcastType from "./PodcastType/PodcastType";

const data = [
    {
        name: "XONE Radio",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "V-POP",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "Pladio",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "Chạm",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "On Air",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "Bolero",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "US-UK",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "K-POP",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "Acoustic",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "Rap Việt",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/4/4/4/e4448cd298ab768ee32144fb0b344016.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    }
]

const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    swipeToSlide: false,
    nextArrow: <ArrowCustom />,
    prevArrow: <ArrowCustom />,
};

const Radio = () => {
    return (
        <>
            <title>Radio | Xem bài hát, album, MV đang hot nhất hiện tại</title>
            <h3 style={{ color: 'white', fontSize: '40px', fontWeight: 700, marginBottom: '20px' }}>Radio</h3>
            {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                {data.map((i, index) => (
                    <RadioLiving name={i.name} numOfListening={i.numOfListening} image={i.image} avatar={i.avatar} />
                ))}
            </div> */}

            <Slider {...settings} >
                {data.map((i, index) => (
                    <RadioLiving name={i.name} numOfListening={i.numOfListening} image={i.image} avatar={i.avatar} />
                ))}
            </Slider>

            <RadioChannel />
            <PodcastDiscover />
            <PodcastType />
        </>
    )
}

export default Radio