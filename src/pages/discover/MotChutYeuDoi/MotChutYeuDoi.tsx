import DiscoverCategortyLayout from '../../../components/DiscoverCategortyLayout/DiscoverCategortyLayout';

const data = [
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươ1i',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    },
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươi2',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    },
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươ3i',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    },
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươi4',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    },
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươ5i',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    },
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươ6i',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    },
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươ7i',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    },
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươ8i',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    },
    {
        title: 'Ở đây có những lựa chọn V-Pop làm bạn vui tươ9i',
        imageAlbum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
    }
]

const MotChutYeuDoi = () => {
    return (
        <DiscoverCategortyLayout data={data} title='Một Chút Yêu Đời' height="250px" width="100%" numOfDisplay={5}/>
    )
}

export default MotChutYeuDoi;