import { useState } from 'react';
import styles from './ModalContent.module.css'

import { Input, Switch } from "antd";

type InputProps = {
    inputValue: string,
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}

const ModalContent = ({ inputValue, onChange }: InputProps) => {
    const [stateCheck1, setStateCheck1] = useState(false);
    const [stateCheck2, setStateCheck2] = useState(false);

    const handleChange = (e: any) => {
        onChange(e.target.value)
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center', marginBottom: '10px', fontSize: "18px" }}>Tạo playlist mới</h3>
            <Input className={styles.modalSearch}
                value={inputValue}
                onChange={handleChange} type="text" placeholder='Nhập tên playlist' />

            <div className={styles.selector}>
                <div>
                    <h3 style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 400 }}>Công khai</h3>
                    <h3 style={{ fontSize: '12px', fontWeight: 400, color: "hsla(0,0%,100%,0.5)" }}>Mọi người có thể nhìn thấy playlist này</h3>
                </div>

                <div style={{ margin: "15px 30px 15px 0" }}>
                    <Switch
                        size="small"
                        style={{ backgroundColor: stateCheck1 === true ? 'rgb(155,77,224)' : 'rgb(160,160,160)' }}
                        checked={stateCheck1}
                        onChange={(e) => {
                            setStateCheck1(e)
                        }}
                    />
                </div>
            </div>

            <div className={styles.selector}>
                <div>
                    <h3 style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 400 }}>Phát ngẫu nhiên</h3>
                    <h3 style={{ fontSize: '12px', fontWeight: 400, color: "hsla(0,0%,100%,0.5)" }}>Luôn phát ngẫu nhiên tất cả các bài hát</h3>
                </div>
                <div style={{ margin: "15px 30px 15px 0" }}>
                    <Switch
                        size="small"
                        style={{ backgroundColor: stateCheck2 === true ? 'rgb(155,77,224)' : 'rgb(160,160,160)' }}
                        checked={stateCheck2}
                        onChange={(e) => {
                            setStateCheck2(e)
                        }}
                    />
                </div>
            </div>
        </div >
    )
}

export default ModalContent;