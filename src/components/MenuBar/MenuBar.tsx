import { useEffect, useState } from 'react';
import styles from './MenuBar.module.css';
import './ModalCustom.css'

import { List, Tag, Divider, Image, Modal, Button } from 'antd';

import { NavLink, useLocation } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
import ModalContent from './ModalContent/ModalContent';

import { saveURL } from '../../utils/SaveURL';

import { getStorage } from 'firebase/storage';
import { getDatabase, get, ref as refDatabase } from 'firebase/database';

type URLProps = {
    name: string,
    path: string
}

const menu1 = [
    { name: 'Khám Phá', path: "/", icon: "discover.png", iconPath: "" },
    { name: '#zingchart', path: "/zing-chart", icon: "zing-chart.png", iconPath: "" },
    { name: 'Radio', path: "/radio", icon: "radio.png", iconPath: "" },
    { name: 'Thư Viện', path: "/music-library", icon: "music-library.png", iconPath: "" },
]

const menu2 = [
    { name: 'BXH Nhạc Mới', path: "/top-new-release", icon: "top-new-release.png", iconPath: "" },
    { name: 'Chủ Đề & Thể Loại', path: "/topic", icon: "topic.png", iconPath: "" },
    { name: 'Top 100', path: "/top-100", icon: "top-100.png", iconPath: "" },
]

const newPlayListIcon = {
    icon: "new-playlist.png",
    iconPath: ""
};

const MenuBar = () => {
    ///////////////// Firebase /////////////////////
    const db = getDatabase();
    const storage = getStorage();

    const [menuState1, setMN1] = useState(menu1);
    const [menuState2, setMN2] = useState(menu2);
    const [newPlayListIconState, setNewPlayListIconState] = useState(newPlayListIcon);

    // Get download link from realtime db
    const getURL = async (db: any) => {
        const snap = (await get(refDatabase(db, 'icon-menu-bar')))

        await Promise.all(snap.val().map((item: URLProps) => {
            menuState1.map((state) => {
                if (state.icon === item.name) {
                    state.iconPath = item.path
                }
            })

            menuState2.map((state) => {
                if (state.icon === item.name) {
                    state.iconPath = item.path
                }
            })

            if (newPlayListIconState.icon === item.name) {
                newPlayListIconState.iconPath = item.path
            }

            // menuState1.forEach((state) => {
            //     const found = imageUrl.find((item) => state.icon === item.name);
            //     if (found) {
            //         console.log(found)
            //     }
            // })
        }))

        setMN1([...menuState1]);
        setMN2([...menuState2]);
        setNewPlayListIconState(newPlayListIconState);
    }

    const awaitData = async () => {
        await saveURL(db, storage, 'icon-menu-bar');
        getURL(db);
    }


    // Save donwload url of image to firebase
    useEffect(() => {
        awaitData();
    }, [])


    ////////////////// Path /////////////////

    const currentPath = useLocation().pathname;
    const [pathActive, setPathActive] = useState(currentPath);

    const handlePathActive = (name: string) => {
        setPathActive(name);
    }

    ///////////////// Modal ///////////////////

    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
    const handleOk = () => {
        setTimeout(() => {
            setModalOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setModalOpen(false);
    };

    const [inputValue, setInputValue] = useState("");

    const handleChange = (valueProps: any) => {
        setInputValue(valueProps)
    }

    const createNewPlaylist = (value: string) => {
        alert(value);
    }

    return (
        <div className={styles.menu}>
            <div className={styles.brand}>
                <Image
                    className={styles.logo}
                    src="/zmp3.svg"
                    alt="Zingmp3 Logo"
                    width={120}
                    height={40}
                    preview={false}
                />
            </div>

            <div className={styles.menuFunction}>
                <List
                    size="large"
                    dataSource={menuState1}
                    renderItem={(item) => {
                        if (pathActive === item.path) {
                            return (
                                <NavLink
                                    to={`${item.path}`}
                                    onClick={() => handlePathActive(item.path)}
                                >
                                    <List.Item className={styles.itemActive}>
                                        <div className={styles.menu1}>
                                            <div style={{ marginRight: "10px" }}>
                                                <Image
                                                    src={item.iconPath || "/assets/error-image/error-circle.png"}
                                                    alt={`${item.name} Logo`}
                                                    width={24}
                                                    preview={false}
                                                />
                                            </div>
                                            <p className={styles.hoverText} style={{ marginRight: "10px" }}>{item.name}</p>
                                            {
                                                item.name === "Radio"
                                                &&
                                                <Tag color="#FE0000" style={{
                                                    width: "auto",
                                                    height: "17px",
                                                    lineHeight: "16px",
                                                    textAlign: "center",
                                                    fontSize: "9px",
                                                    fontWeight: "bold",
                                                }}>LIVE</Tag>

                                            }
                                            {
                                                item.name === "#zingchart"
                                                &&
                                                <div className={styles.playOutlined}>
                                                    <PlayCircleOutlined style={{ fontSize: "18px" }} />
                                                </div>

                                            }
                                        </div>
                                    </List.Item>
                                </NavLink>
                            )
                            // Other path
                        } else return (
                            <NavLink
                                to={`${item.path}`}
                                onClick={() => handlePathActive(item.path)}
                            >
                                <List.Item className={styles.itemUnActive}>
                                    <div className={styles.menu1}>
                                        <div style={{ marginRight: "10px" }}>
                                            <Image
                                                src={item.iconPath || "/assets/error-image/error-circle.png"}
                                                alt={`${item.name} Logo`}
                                                width={24}
                                                preview={false}
                                            />
                                        </div>
                                        <p className={styles.hoverText} style={{ marginRight: "10px" }}>{item.name}</p>
                                        {
                                            item.name === "Radio"
                                            &&
                                            <Tag color="#FE0000" style={{
                                                width: "auto",
                                                height: "17px",
                                                lineHeight: "16px",
                                                textAlign: "center",
                                                fontSize: "9px",
                                                fontWeight: "bold",
                                            }}>LIVE</Tag>

                                        }
                                        {
                                            item.name === "#zingchart"
                                            && <div className={styles.playOutlined}>
                                                <PlayCircleOutlined style={{ fontSize: "18px" }} />
                                            </div>
                                        }
                                    </div>
                                </List.Item>
                            </NavLink>
                        )
                    }}
                />

                <div style={{ padding: "0 25px 0 25px", margin: '-10px 0 -10px 0', width: "auto", height: "48px" }}>
                    <Divider style={{ backgroundColor: "hsla(0, 0%, 100%, 0.1)" }} />
                </div>

                <List
                    size="large"
                    dataSource={menuState2}
                    renderItem={(item) => {
                        if (pathActive === item.path) {
                            return (
                                <NavLink
                                    to={`${item.path}`}
                                    onClick={() => handlePathActive(item.path)}
                                >
                                    <List.Item className={styles.itemActive}>
                                        <div className={styles.menu1}>
                                            <div style={{ marginRight: "10px" }}>
                                                <Image
                                                    src={item.iconPath || "errorCircle.png"}
                                                    alt={`${item.name} Logo`}
                                                    width={24}
                                                    preview={false}
                                                />
                                            </div>
                                            <p className={styles.hoverText} style={{ marginRight: "10px" }}>{item.name}</p>
                                            {
                                                item.name === "Radio"
                                                && <Tag color="#FE0000" style={{
                                                    width: "auto",
                                                    height: "17px",
                                                    lineHeight: "16px",
                                                    textAlign: "center",
                                                    fontSize: "9px",
                                                    fontWeight: "bold",
                                                }}>LIVE</Tag>
                                            }
                                        </div>
                                    </List.Item>
                                </NavLink>
                            )
                        } else return (
                            <NavLink
                                to={`${item.path}`}
                                onClick={() => handlePathActive(item.path)}
                            >
                                <List.Item className={styles.itemUnActive}>
                                    <div className={styles.menu1}>
                                        <div style={{ marginRight: "10px" }}>
                                            <Image
                                                src={item.iconPath || "/assets/error-image/error-circle.png"}
                                                alt={`${item.name} Logo`}
                                                width={24}
                                                preview={false}
                                            />
                                        </div>
                                        <p className={styles.hoverText} style={{ marginRight: "10px" }}>{item.name}</p>
                                        {
                                            item.name === "Radio"
                                                ?
                                                <Tag color="#FE0000" style={{
                                                    width: "auto",
                                                    height: "17px",
                                                    lineHeight: "16px",
                                                    textAlign: "center",
                                                    fontSize: "9px",
                                                    fontWeight: "bold",
                                                }}>LIVE</Tag>
                                                : <></>
                                        }
                                    </div>
                                </List.Item>
                            </NavLink>
                        )
                    }}
                />

                <div style={{ borderTop: "1px hsla(0, 0%, 100%, 0.1) solid" }} onClick={showModal}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        width: 'auto',
                        height: '48px',
                        padding: "0 25px 0 25px",
                    }}>
                        <div style={{ marginRight: "10px", marginLeft: "2px", cursor: "pointer" }}>
                            <Image
                                src={newPlayListIconState.iconPath || "/assets/error-image/error-circle.png"} // Skeleton ant
                                alt={`New playlist Logo`}
                                width={24}
                                height={24}
                                preview={false}
                            />
                        </div>
                        <p className={styles.hiddenSelect}>Tạo playlist mới</p>
                    </div>
                </div>
            </div>

            <Modal title="Tạo playlist mới" open={modalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                transitionName=""
                centered
                wrapClassName="modalCustom"
                footer={[
                    <>
                        {inputValue !== ""
                            ? <Button onClick={() => { createNewPlaylist(inputValue) }} style={{
                                width: "100%",
                                borderRadius: "999px",
                                border: 0,
                                backgroundColor: "#9b4de0",
                                color: 'white'
                            }}>
                                Tạo mới
                            </Button>
                            : <Button onClick={() => { createNewPlaylist(inputValue) }} disabled style={{
                                width: "100%",
                                borderRadius: "999px",
                                border: 0,
                                backgroundColor: "#9b4de0",
                                color: 'white'
                            }}>
                                Tạo mới
                            </Button>
                        }
                    </>
                ]}
            >
                <ModalContent inputValue={inputValue} onChange={handleChange} />
            </Modal>
            {inputValue}
        </div >
    )
}

export default MenuBar;