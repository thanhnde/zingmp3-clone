import RadioCategoryLayout from "../../../components/RadioCategoryLayout/RadioCategoryLayout";

const data = [
    {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    },
    {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    },
]

const PodcastDiscover = () => {
    return (
        <>
            <RadioCategoryLayout data={data} title="Khám Phá Podcast" numOfDisplay={5} height="250px" width="100%" nameOfOtherButton="TẤT CẢ"/>
        </>
    )
}

export default PodcastDiscover;