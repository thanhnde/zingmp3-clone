import { Button } from "antd";

type ButtonProps = {
    name: string,
    onClick: () => void,
    backgroundColor: string
}

const NewReleaseButton = ({ name, onClick, backgroundColor }: ButtonProps) => {
    return (
        <Button
            style={{
                margin: "0 15px 0 0",
                backgroundColor: backgroundColor,
                color: "white",
                borderRadius: "100px",
                border: "1px hsla(0,0%,100%,0.1) solid",
                padding: "5px 25px 5px 25px",
                height: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onClick={onClick}>
            {name}
        </Button>
    )
}

export default NewReleaseButton;