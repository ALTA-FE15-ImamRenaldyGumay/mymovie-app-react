import { Link } from "react-router-dom"

interface buttonProps{
    bgButt: string
    children: string
}
const Button = (props: buttonProps) => {

    const { bgButt, children } = props;

    return (
        <div>
            <button className={`py-2 px-4 ${bgButt} text-white rounded-md mb-4`}>
                <Link to="">{children}</Link>
            </button>
        </div>
    )
}

export default Button