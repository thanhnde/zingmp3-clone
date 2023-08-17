import Slider from "react-slick";
import ArrowCustom from "./ArrowCustom/ArrowCustom";
import RadioLiving from "./RadioLiving/RadioLiving";
import RadioSchedule from "./RadioSchedule/RadioSchedule";
import PodcastDiscover from "./PodcastDiscover/PodcastDiscover";
import PodcastType from "./PodcastType/PodcastType";

const data = [
    {
        name: "XONE Radio",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/c/8/1/4c8122132440e3d958845d746abf482d.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
    },
    {
        name: "V-POP",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg"
    },
    {
        name: "Pladio",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/7/6/f/376f7ae6281eacb4f53aad770d86257e.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/2/c/c/f/2ccf96f6da468b466c5f8d1188f62eee.jpg"
    },
    {
        name: "Chạm",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg"
    },
    {
        name: "On Air",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/e/3/4/ee344bad4a9124b88906548837f3bce2.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/5/4/0/854010f76bddeefd5f13305a1d6cc8be.jpg"
    },
    {
        name: "Bolero",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
    },
    {
        name: "US-UK",
        numOfListening: 100,
        image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg",
        avatar: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg"
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
                {data.map((i) => (
                    <div>
                        <RadioLiving name={i.name} numOfListening={i.numOfListening} image={i.image} avatar={i.avatar} />

                    </div>
                ))}
            </Slider>

            <RadioSchedule />
            <PodcastDiscover />
            <PodcastType />
        </>
    )
}

export default Radio