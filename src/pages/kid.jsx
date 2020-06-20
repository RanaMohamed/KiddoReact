import React from 'react';
import KidInfo from '../components/kidInfo';
import ProfilePicture from '../components/profilePicture';
import KidDashboard from '../components/kid/dashboard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getKidProfile } from '../redux/actions/userActions';
import { dateDiff } from '../helpers/date';
import Posts from '../components/kid/posts';

const Kid = () => {
	const profile = useSelector((state) => state.user.profile);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getKidProfile('5eedc5d158f6107e3811f359'));
	}, []);
	return (
		<>
			<div className='container'>
				<div className='d-flex justify-content-between'>
					<ProfilePicture></ProfilePicture>
					<div className='w-70'>
						<h1>{profile?.username}</h1>
						<h2>
							{dateDiff(new Date(profile?.dateOfBirth), new Date())} Years Old
						</h2>
						<KidInfo profile={profile}></KidInfo>
					</div>
				</div>
				<KidDashboard profile={profile}></KidDashboard>
				<section className='my-lg'>
					<h2>My Posts</h2>
					<Posts></Posts>
				</section>
			</div>
		</>
	);
};

export default Kid;
