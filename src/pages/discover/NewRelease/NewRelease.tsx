import { useState } from 'react';

import NewReleaseButton from "./NewReleaseButton/NewReleaseButton";
import NewReleaseDetail from './NewReleaseDetail/NewReleaseDetail';

import { RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

type ButtonProps = Array<{
    name: string,
    alias: string
}>

const nameButton: ButtonProps = [
    { name: "TẤT CẢ", alias: "ALL" },
    { name: "VIỆT NAM", alias: "VN" },
    { name: "QUỐC TẾ", alias: "QT" }
]

const NewRelease = () => {
    const [click, setClick] = useState("ALL");

    const handleButton = (alias: string) => {
        setClick(alias);
    }

    return (
        <div style={{ height: 'auto', marginTop: '50px' }}>
            <h1 style={{ color: 'white', fontSize: '20px' }}>Mới phát hành</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: '20px',
                marginBottom: "16px",
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {nameButton.map((btn) => {
                        if (click === btn.alias) {
                            return (
                                <NewReleaseButton
                                    key={btn.alias}
                                    name={btn.name}
                                    onClick={() => handleButton(btn.alias)}
                                    backgroundColor='#9b4de0'
                                />
                            )
                        } else {
                            return (
                                <NewReleaseButton
                                    key={btn.alias}
                                    name={btn.name}
                                    onClick={() => handleButton(btn.alias)}
                                    backgroundColor='transparent'
                                />
                            )
                        }
                    })}
                </div>
                <div>
                    <NavLink
                        to='#'
                        style={{
                            textDecoration: 'none',
                            fontSize: '12px',
                            color: 'hsla(0,0%,100%,0.5)',
                            display: 'flex', flexDirection: 'row'
                        }}
                    >
                        <p style={{ marginRight: '5px' }}>TẤT CẢ</p>
                        <RightOutlined />
                    </NavLink>
                </div>
            </div>
            <NewReleaseDetail type={click} />
        </div>
    )
}

export default NewRelease;