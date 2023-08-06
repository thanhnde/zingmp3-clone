import Music from "../NewReleaseMusicCard/NewReleaseMusicCard";
import styles from './NewReleaseDetail.module.css';

type TypeMusicProps = {
    type: string
}

type NewReleaseProps = Array<{
    imageMusic: string;
    nameMusic: string;
    artist: string;
    releaseTime: string;
    type: string;
    premium?: undefined;
} | {
    imageMusic: string;
    nameMusic: string;
    artist: string;
    releaseTime: string;
    type: string;
    premium: boolean;
}>

const dataNew = {
    "QT": [
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "QT Music 1",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "QUỐC TẾ",
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "QT Music 2",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "QUỐC TẾ",
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "QT Music 3",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "QUỐC TẾ",
            premium: true
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "QT Music 4",
            artist: "Wheel",
            releaseTime: "2 ngày trước",
            type: "QUỐC TẾ",
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "QT Music 6",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "QUỐC TẾ",
        },
    ],

    "VN": [
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "VN Music 1",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "VIỆT NAM",
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "VN Music 2",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "VIỆT NAM",
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "VN Music 3",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "VIỆT NAM",
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "VN Music 4",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "VIỆT NAM",
            premium: true
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "VN Music 5",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "VIỆT NAM",
            premium: true
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "VN Music 6",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "VIỆT NAM",
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "VN Music 7",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "VIỆT NAM",
        },
        {
            imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
            nameMusic: "VN MUSIC INDEX 13",
            artist: "Wheel",
            releaseTime: "3 ngày trước",
            type: "VIỆT NAM",
        },
    ],
}

const dataOld = [
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "VN Music 1",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "VIỆT NAM",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "VN Music 2",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "VIỆT NAM",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "VN Music 3",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "VIỆT NAM",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "VN Music 4",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "VIỆT NAM",
        premium: true
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "QT Music 1",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "QUỐC TẾ",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "VN Music 5",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "VIỆT NAM",
        premium: true
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "QT Music 2",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "QUỐC TẾ",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "VN Music 6",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "VIỆT NAM",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "QT Music 3",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "QUỐC TẾ",
        premium: true
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "QT Music 4",
        artist: "Wheel",
        releaseTime: "2 ngày trước",
        type: "QUỐC TẾ",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "VN Music 7",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "VIỆT NAM",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "QT Music 6",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "QUỐC TẾ",
    },
    {
        imageMusic: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/banner/6/c/2/d/6c2d209def0a531085ac6c1944d70450.jpg",
        nameMusic: "VN MUSIC INDEX 12",
        artist: "Wheel",
        releaseTime: "3 ngày trước",
        type: "VIỆT NAM",
    },
]

const NewReleaseDetail = ({ type }: TypeMusicProps) => {
    let newReleaseDetail: NewReleaseProps = [];

    if (type === "ALL") newReleaseDetail = Object.values(dataNew).flat();
    else if (type === "QT" || type === "VN") {
        newReleaseDetail = dataNew[type];
    }

    return (
        <div className={styles.gridMusic}>
            {newReleaseDetail.map((item, index) => {
                if (index < 12) {
                    return (
                        <Music
                            imageMusic={item.imageMusic}
                            nameMusic={item.nameMusic}
                            artist={item.artist}
                            releaseTime={item.releaseTime}
                            type={item.type}
                            premium={item.premium}
                            key={item.nameMusic}
                        />
                    )
                }
            })}
        </div>
    )
}

export default NewReleaseDetail;