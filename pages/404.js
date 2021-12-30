import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])
    return (
        <div className='not-found'>
            <h1>Oops...</h1>
            <h2>Page cannot be found</h2>

            <p>You are being redirected to Homepage</p>
        </div>

    );
}

export default NotFound;