import RadioCategoryLayout from "../../../components/RadioCategoryLayout/RadioCategoryLayout";

const data = [
    {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
        title: "How2Money x Doctor Housing"
    },
    {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/0/d/b/1/0db18352212495c489e270b229a79216.jpg",
        title: "HIEU.TV"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/3/e/5/b/3e5b595beba966297bdfe72debc7969d.jpg",
        title: "Tri kỷ cảm xúc"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/1/d/0/d/1d0d3f88a0ab911690cc0a3e9c23fff0.jpg",
        title: "Nắng thuỷ tinh"
    }, {
        imageAlbum: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/c/c/d/e/ccde39236b3e515ffb9bd0926f9599d9.jpg",
        title: "Mây Podcast"
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