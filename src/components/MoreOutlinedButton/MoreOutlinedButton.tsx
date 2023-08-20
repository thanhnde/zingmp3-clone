import { MoreOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";

type MoreOuterSize = {
    height: number,
    width: number
    margin?: string,
    backgroundColor?: string
}

const MoreOutlinedButton = ({ height, width, margin, backgroundColor}: MoreOuterSize) => {
    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor,
            borderRadius: "999px",
            margin: margin
        }}>
            <MoreOutlined style={{ transform: "rotate(90deg)" }} />
        </div>
    )
}

export default MoreOutlinedButton;