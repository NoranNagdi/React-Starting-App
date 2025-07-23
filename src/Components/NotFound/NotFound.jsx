import React from 'react'
import { useEffect } from 'react';

export default function NotFound() {
     useEffect(() => {
        document.title = "404";
      }, []);
    return (
        <div className='min-vh-100 bg-body d-flex flex-column align-items-center justify-content-center'>
            <h1>404</h1>
            <h2>Not Found</h2>
        </div>
    )
}
