import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className='text-5xl font-bold'>Oops!</h1>
            <p className='my-5 text-xl'>Sorry, an unexpected error has occurred.</p>
            <p className='text-lg'>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    );

}

export default ErrorPage