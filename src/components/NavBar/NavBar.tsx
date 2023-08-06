import styles from './NavBar.module.css';

import { ArrowLeftOutlined, ArrowRightOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Image } from 'antd';

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: "100%",
                height: "auto",
            }}>
                <div className={styles.leftNavBar}>
                    <div style={{ width: "auto", height: "40px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <ArrowLeftOutlined className={styles.arrowLeftButton} />
                        <ArrowRightOutlined className={styles.arrowRightButton} />
                    </div>

                    <div className={styles.searchBar}>
                        <SearchOutlined style={{ fontSize: '20px', color: "hsla(0, 0%, 100%, 0.8)" }} />
                        <Input className={styles.inputSearch} placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...' />
                    </div>
                </div>

                <div className={styles.rightNavBar}>
                    <div className={styles.downloadWindows}>
                        <div>
                            <Image
                                src="/assets/download-windows.png"
                                alt='User setting'
                                height={20}
                                width={20}
                                preview={false}
                            />
                        </div>
                        <p>Tải bản Windows</p>
                    </div>

                    <div className={styles.settingButton}>
                        <SettingOutlined style={{ fontSize: "20px" }} />
                    </div>

                    <div className={styles.userSettingButton}>
                        <Image
                            src="/assets/user-default.png"
                            alt='User setting'
                            height={40}
                            width={40}
                            style={{ borderRadius: "20px" }}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBar;