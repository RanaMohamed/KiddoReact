import React from 'react';
import KidInfo from '../components/kidInfo';
import ProfilePicture from '../components/profilePicture';
import KidDashboard from '../components/kid/dashboard';
import PostWithComments from '../components/postWithComments';

const Kid = () => {
	return (
		<>
			<div className='container'>
				<div className='d-flex justify-content-between'>
					<ProfilePicture></ProfilePicture>
					<KidInfo></KidInfo>
				</div>
				<KidDashboard></KidDashboard>
				<section className='my-lg'>
					<h2>My Posts</h2>
					<PostWithComments></PostWithComments>
					<PostWithComments></PostWithComments>
					<PostWithComments></PostWithComments>
				</section>
			</div>
		</>
	);
};

export default Kid;
