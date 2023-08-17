import { RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import MusicCard from '../MusicCard/MusicCard';

type DiscoverCateLayoutProps = {
    titleHeader: string,
    data: Array<{
        title: string,
        imageAlbum: string
    }>,
    nameOfOtherButton?: string,
    height: string,
    width: string,
    numOfDisplay: number
}

const DiscoverCategoryLayout = ({ titleHeader, data, nameOfOtherButton, height, width, numOfDisplay }: DiscoverCateLayoutProps) => {
    return (
        <div style={{ height: height, width: width, paddingTop: '50px', paddingBottom: '16px' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                <h1 style={{ color: 'white', fontSize: '20px', paddingBottom: "16px" }}>{titleHeader}</h1>
                <div>
                    <NavLink
                        to='#'
                        style={{
                            textDecoration: 'none',
                            fontSize: '12px',
                            color: 'hsla(0, 0%, 100%, 0.5)',
                            display: 'flex', flexDirection: 'row'
                        }}
                    >
                        <p style={{ marginRight: '5px' }}>{nameOfOtherButton}</p>
                        <RightOutlined />
                    </NavLink>
                </div>
            </div>
            {/* <div style={{ display: 'grid', gridTemplateColumns: "auto auto auto auto auto", height: "100%", width: "100%" }}> */}
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-start", height: "100%", width: "100%" }}>
                {Object.values(data).map((i: any, index: number) => {
                    if (index < numOfDisplay) {
                        if (index === 0) {
                            return (
                                <div style={{ margin: "0 15px 0 0" }}>
                                    <MusicCard title={i.title} imageAlbum={i.imageAlbum} />
                                </div>
                            )
                        }
                        if (index === 4) {
                            return (
                                <div style={{ margin: "0 0 0 15px" }}>
                                    <MusicCard title={i.title} imageAlbum={i.imageAlbum} />
                                </div>
                            )
                        }
                        else return (
                            <div style={{ margin: "0 15px 0 15px" }}>
                                <MusicCard title={i.title} imageAlbum={i.imageAlbum} />
                            </div>
                        )
                    } else return null
                })}
            </div>
        </div >
    )
}

export default DiscoverCategoryLayout;