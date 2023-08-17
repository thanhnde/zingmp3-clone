import { HeartOutlined } from "@ant-design/icons"

type HeartOuterSize = {
    height: number,
    width: number
    margin?: string
}

const HeartOutlinedButton = ({ height, width, margin }: HeartOuterSize) => {
    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: margin
        }}>
            <HeartOutlined />
        </div>
    )
}

export default HeartOutlinedButton;