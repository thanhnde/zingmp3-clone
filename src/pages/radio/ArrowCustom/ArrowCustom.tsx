const ArrowCustom = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style }} // Need custom 
            onClick={onClick}
        >
        </div>
    )
}

export default ArrowCustom;