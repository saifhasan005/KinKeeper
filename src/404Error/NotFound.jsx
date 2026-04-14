import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', minHeight: '80vh',
            backgroundColor: '#f8f8f8'
        }}>
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <h1 style={{
                    fontSize: '96px', fontWeight: '500',
                    lineHeight: 1, letterSpacing: '-4px', margin: 0
                }}>404</h1>
                <div style={{
                    position: 'absolute', bottom: '-6px',
                    left: '50%', transform: 'translateX(-50%)',
                    width: '60px', height: '3px',
                    backgroundColor: '#E24B4A', borderRadius: '2px'
                }}></div>
            </div>

            <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>
                Page not found
            </p>
            <p style={{ fontSize: '14px', color: '#666', maxWidth: '280px', marginBottom: '2rem' }}>
                The page you're looking for doesn't exist or has been moved.
            </p>

            <Link to="/" style={{
                padding: '8px 20px', backgroundColor: '#E24B4A',
                color: '#fff', borderRadius: '8px',
                textDecoration: 'none', fontSize: '13px', fontWeight: '500'
            }}>
                Go back home
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E24B4A' }}></div>
                <span style={{ fontSize: '12px', color: '#999' }}>Error 404 — route not matched</span>
            </div>
        </div>
    );
};

export default NotFound;