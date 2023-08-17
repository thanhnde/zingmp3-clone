import { MoreOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";

type MoreOuterSize = {
    height: number,
    width: number
    margin?: string
}

const MoreOutlinedButton = ({ height, width, margin}: MoreOuterSize) => {
    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "hsla(0,0%,100%,0.1)",
            borderRadius: "999px",
            margin: margin
        }}>
            <MoreOutlined style={{ transform: "rotate(90deg)" }} />
        </div>
    )
}

export default MoreOutlinedButton;