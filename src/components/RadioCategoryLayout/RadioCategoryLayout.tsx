import { RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import MusicCard from '../MusicCard/MusicCard';

type RadioCategoryLayoutProps = {
    title: string,
    data: Array<{
        title: string,
        imageAlbum: string
    }>,
    nameOfOtherButton?: string,
    height: string,
    width: string,
    numOfDisplay: number
}

const RadioCategoryLayout = ({ title, data, nameOfOtherButton, height, width, numOfDisplay }: RadioCategoryLayoutProps) => {
    return (
        <div style={{ height: height, width: width, paddingTop: '50px', paddingBottom: '16px' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

                <h1 style={{ color: 'white', fontSize: '20px', paddingBottom: "16px" }}>{title}</h1>
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
            <div style={{ display: 'grid', gridTemplateColumns: "auto auto auto auto auto", height: "100%", width: "100%", fontWeight: 'bold', color: 'white' }}>
                {data.map((i, index) => {
                    if (index < numOfDisplay) {
                        return (
                            <MusicCard title={i.title} imageAlbum={i.imageAlbum} />
                        )
                    } else return null
                })}
            </div>
        </div >
    )
}

export default RadioCategoryLayout;