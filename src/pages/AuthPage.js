import React from 'react';
import Auth from '../component/Auth/auth';

const AuthPage = ({ isAthenticated, authHandler }) => {
    return <Auth isAthenticated={isAthenticated} authHandler={authHandler} />;
};

export default AuthPage;
