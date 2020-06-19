import React from 'react';

const Filter = () => {
	return (
		<>
			<ul className='filter'>
				<li className='filter-item'>All Categories</li>
				<li className='filter-item filter-item--selected filter-item--before '>
					Gardening
				</li>
				<li className='filter-item '>Arts & Crafts</li>
				<li className='filter-item '>Cooking</li>
				<li className='filter-item  filter-item--selected filter-item--before '>
					Writing
				</li>
				<li className='filter-item  filter-item--selected filter-item--before '>
					Drawing
				</li>
				<li className='filter-item '>Photography</li>
				<li className='filter-item '>Singing</li>
				<li className='filter-item '>Knitting</li>
			</ul>
		</>
	);
};

export default Filter;
