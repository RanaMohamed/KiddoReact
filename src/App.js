import React from 'react';

function App() {
	return (
		<React.Fragment>
			<div className='App'>Kiddo</div>

			<div
				className='container'
				style={{
					display: 'grid',
					gridTemplateColumns: 'auto auto auto',
					gap: '10rem',
				}}
			>
				<div className='post-card post-card--bg post-card--bg--primary'>
					<div className='post-card__img'>
						<img alt='Post' src='../img/post1.png' />
					</div>
					<div className='post-card__body'>
						<p className='post-card__title'>Post 1</p>
						<p>
							Lorem ipsum dolor sit amet, vel id nusquam repudiandae
							interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
							Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
							habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
							errem indoctum ea eam.
						</p>
						<div className='post-card__info'>
							<img
								className='post-card__avatar'
								alt='Avatar'
								src='../img/avatar.png'
							/>
							<div>
								<p>Full name</p>
								<i className='fa fa-heart like-icon'></i>
								<span>20</span>
								<i className='fa fa-comment comment-icon'></i>
								<span>10</span>
							</div>
						</div>
						<div className='post-card__overlay'>
							<button>View Details</button>
							<button>Button2</button>
						</div>
					</div>
				</div>
				<div className='post-card post-card--bg post-card--bg--1'>
					<div className='post-card__img'>
						<img alt='Post' src='../img/post1.png' />
					</div>
					<div className='post-card__body'>
						<p className='post-card__title'>Post 1</p>
						<p>
							Lorem ipsum dolor sit amet, vel id nusquam repudiandae
							interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
							Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
							habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
							errem indoctum ea eam.
						</p>
						<div className='post-card__info'>
							<img
								className='post-card__avatar'
								alt='Avatar'
								src='../img/avatar.png'
							/>
							<div>
								<p>Full name</p>
								<i className='fa fa-heart like-icon'></i>
								<span>20</span>
								<i className='fa fa-comment comment-icon'></i>
								<span>10</span>
							</div>
						</div>
						<div className='post-card__overlay'>
							<button>View Details</button>
							<button>Button2</button>
						</div>
					</div>
				</div>
				<div className='post-card post-card--bg post-card--bg--2'>
					<div className='post-card__img'>
						<img alt='Post' src='../img/post1.png' />
					</div>
					<div className='post-card__body'>
						<p className='post-card__title'>Post 1</p>
						<p>
							Lorem ipsum dolor sit amet, vel id nusquam repudiandae
							interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
							Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
							habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
							errem indoctum ea eam.
						</p>
						<div className='post-card__info'>
							<img
								className='post-card__avatar'
								alt='Avatar'
								src='../img/avatar.png'
							/>
							<div>
								<p>Full name</p>
								<i className='fa fa-heart like-icon'></i>
								<span>20</span>
								<i className='fa fa-comment comment-icon'></i>
								<span>10</span>
							</div>
						</div>
						<div className='post-card__overlay'>
							<button>View Details</button>
							<button>Button2</button>
						</div>
					</div>
				</div>
				<div className='post-card post-card--bg post-card--bg--3'>
					<div className='post-card__img'>
						<img alt='Post' src='../img/post1.png' />
					</div>
					<div className='post-card__body'>
						<p className='post-card__title'>Post 1</p>
						<p>
							Lorem ipsum dolor sit amet, vel id nusquam repudiandae
							interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
							Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
							habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
							errem indoctum ea eam.
						</p>
						<div className='post-card__info'>
							<img
								className='post-card__avatar'
								alt='Avatar'
								src='../img/avatar.png'
							/>
							<div>
								<p>Full name</p>
								<i className='fa fa-heart like-icon'></i>
								<span>20</span>
								<i className='fa fa-comment comment-icon'></i>
								<span>10</span>
							</div>
						</div>
						<div className='post-card__overlay'>
							<button>View Details</button>
							<button>Button2</button>
						</div>
					</div>
				</div>
				<div className='post-card post-card--bg post-card--bg--4'>
					<div className='post-card__img'>
						<img alt='Post' src='../img/post1.png' />
					</div>
					<div className='post-card__body'>
						<p className='post-card__title'>Post 1</p>
						<p>
							Lorem ipsum dolor sit amet, vel id nusquam repudiandae
							interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
							Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
							habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
							errem indoctum ea eam.
						</p>
						<div className='post-card__info'>
							<img
								className='post-card__avatar'
								alt='Avatar'
								src='../img/avatar.png'
							/>
							<div>
								<p>Full name</p>
								<i className='fa fa-heart like-icon'></i>
								<span>20</span>
								<i className='fa fa-comment comment-icon'></i>
								<span>10</span>
							</div>
						</div>
						<div className='post-card__overlay'>
							<button>View Details</button>
							<button>Button2</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
