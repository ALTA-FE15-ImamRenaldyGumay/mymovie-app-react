
interface imageProps{
    src: string
    alt: string
}
const Image = (props: imageProps) => {

    const { src, alt } = props;

    return (
        <div>
            <img
                className="w-64 h-80 rounded-md mb-5"
                src={src} alt={alt} />
        </div>
    )
}

export default Image