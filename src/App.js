import React from "react";

function App() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <h1>Kiddo</h1>
          <ul className="nav-ul">
            <li>
              <a href="#a"> Home</a>
            </li>
            <li>
              <a href="#a">Categories</a>
            </li>
            <li>
              <a href="#a">Store</a>
            </li>
            <li>
              <a href="#a">About</a>
            </li>
            <li>
              <a href="#a">Contact</a>
            </li>
            <li>
              <a href="#f">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#noto">
                <i className="far fa-bell"></i>
              </a>
            </li>
            <li>
              <a href="#profile">
                <img src="./img/avatar.svg" alt="kid"></img>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="App">Kiddo</div>
      {/* Number Card */}
      <section className="number-card">
        <h3>interested categories</h3>
        <img src="./img/008-create.svg" alt="c"></img>
        <p>4</p>
      </section>

      {/* Profile pic */}
      <section className="profile-pic">
        <div>
          <img id="pic" src="./img/kid.svg" alt="kid"></img>
          <section className="profile-pic_inner">
            <img src="./img/Icon awesome-camera.svg" alt=""></img>
          </section>
        </div>
      </section>

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "10rem"
        }}
      >
        <div className="post-card post-card--bg post-card--bg--primary">
          <div className="post-card__img">
            <img alt="Post" src="../img/post1.png" />
          </div>
          <div className="post-card__body">
            <p className="post-card__title">Post 1</p>
            <p>
              Lorem ipsum dolor sit amet, vel id nusquam repudiandae
              interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
              Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
              habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
              errem indoctum ea eam.
            </p>
            <div className="post-card__info">
              <img
                className="post-card__avatar"
                alt="Avatar"
                src="../img/avatar.png"
              />
              <div>
                <p>Full name</p>
                <i className="fa fa-heart like-icon"></i>
                <span>20</span>
                <i className="fa fa-comment comment-icon"></i>
                <span>10</span>
              </div>
            </div>
            <div className="post-card__overlay">
              <button>View Details</button>
              <button>Button2</button>
            </div>
          </div>
        </div>
        <div className="post-card post-card--bg post-card--bg--1">
          <div className="post-card__img">
            <img alt="Post" src="../img/post1.png" />
          </div>
          <div className="post-card__body">
            <p className="post-card__title">Post 1</p>
            <p>
              Lorem ipsum dolor sit amet, vel id nusquam repudiandae
              interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
              Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
              habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
              errem indoctum ea eam.
            </p>
            <div className="post-card__info">
              <img
                className="post-card__avatar"
                alt="Avatar"
                src="../img/avatar.png"
              />
              <div>
                <p>Full name</p>
                <i className="fa fa-heart like-icon"></i>
                <span>20</span>
                <i className="fa fa-comment comment-icon"></i>
                <span>10</span>
              </div>
            </div>
            <div className="post-card__overlay">
              <button>View Details</button>
              <button>Button2</button>
            </div>
          </div>
        </div>
        <div className="post-card post-card--bg post-card--bg--2">
          <div className="post-card__img">
            <img alt="Post" src="../img/post1.png" />
          </div>
          <div className="post-card__body">
            <p className="post-card__title">Post 1</p>
            <p>
              Lorem ipsum dolor sit amet, vel id nusquam repudiandae
              interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
              Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
              habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
              errem indoctum ea eam.
            </p>
            <div className="post-card__info">
              <img
                className="post-card__avatar"
                alt="Avatar"
                src="../img/avatar.png"
              />
              <div>
                <p>Full name</p>
                <i className="fa fa-heart like-icon"></i>
                <span>20</span>
                <i className="fa fa-comment comment-icon"></i>
                <span>10</span>
              </div>
            </div>
            <div className="post-card__overlay">
              <button>View Details</button>
              <button>Button2</button>
            </div>
          </div>
        </div>
        <div className="post-card post-card--bg post-card--bg--3">
          <div className="post-card__img">
            <img alt="Post" src="../img/post1.png" />
          </div>
          <div className="post-card__body">
            <p className="post-card__title">Post 1</p>
            <p>
              Lorem ipsum dolor sit amet, vel id nusquam repudiandae
              interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
              Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
              habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
              errem indoctum ea eam.
            </p>
            <div className="post-card__info">
              <img
                className="post-card__avatar"
                alt="Avatar"
                src="../img/avatar.png"
              />
              <div>
                <p>Full name</p>
                <i className="fa fa-heart like-icon"></i>
                <span>20</span>
                <i className="fa fa-comment comment-icon"></i>
                <span>10</span>
              </div>
            </div>
            <div className="post-card__overlay">
              <button>View Details</button>
              <button>Button2</button>
            </div>
          </div>
        </div>
        <div className="post-card post-card--bg post-card--bg--4">
          <div className="post-card__img">
            <img alt="Post" src="../img/post1.png" />
          </div>
          <div className="post-card__body">
            <p className="post-card__title">Post 1</p>
            <p>
              Lorem ipsum dolor sit amet, vel id nusquam repudiandae
              interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
              Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
              habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
              errem indoctum ea eam.
            </p>
            <div className="post-card__info">
              <img
                className="post-card__avatar"
                alt="Avatar"
                src="../img/avatar.png"
              />
              <div>
                <p>Full name</p>
                <i className="fa fa-heart like-icon"></i>
                <span>20</span>
                <i className="fa fa-comment comment-icon"></i>
                <span>10</span>
              </div>
            </div>
            <div className="post-card__overlay">
              <button>View Details</button>
              <button>Button2</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ margin: "2rem auto" }}>
        <div className="post-card post-card--md post-card--bg post-card--bg--4">
          <div className="post-card__post">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">Post 1</p>
              <p>
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.png"
                />
                <div>
                  <p>Full name</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>20</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>10</span>
                </div>
              </div>
              <div className="post-card__overlay">
                <button>View Details</button>
                <button>Button2</button>
              </div>
            </div>
          </div>
          <div className="comments">
            <h2>Comments</h2>
            <div className="comment">
              <div className="comment__user">
                <img alt="Avatar" src="../img/avatar.png" />
              </div>
              <p className="comment__text">
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
            </div>
            <div className="comment">
              <div className="comment__user">
                <img alt="Avatar" src="../img/avatar.png" />
              </div>
              <p className="comment__text">
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
            </div>
            <div>
              <input placeholder="Add a comment" />
            </div>
          </div>
        </div>
      </div>

      {/* -------------- Inputs--------------- */}
      <div style={{ margin: "2rem auto", width: "50%" }}>
        <div
          style={{ backgroundColor: "#fdd343", width: "100%", padding: "1rem" }}
        >
          <input
            type="text"
            className="input --text-color-primary input--padding-sm input--border-radius-md"
            placeholder="user name"
          />
        </div>
        <br></br>
        <input
          type="text"
          className="input input--text-color-primary input--border-primary input--padding-xs input--border-radius-md"
          placeholder="Email Address"
        />
        <br></br>
        <input
          type="text"
          className="input input--text-color-secondary input--border-secondary input--bg-primary input--padding-xs input--border-radius-md"
          placeholder="Email Address"
        />
        <br></br>
        <input
          type="search"
          className="input input--text-color-primary input--border-primary input--padding-xs input--border-radius-md input--bg-info"
          placeholder="search ..."
        />
        <br></br>
        <div
          style={{ backgroundColor: "#e55658", width: "100%", padding: "1rem" }}
        >
          <input
            type="text"
            className="input input--text-color-primary input--bg-secondary input--padding-sm input--border-radius-md"
            placeholder="Email"
          />
          <br></br>
          <br></br>
          <textarea
            type="text"
            className="input input--text-color-primary input--bg-secondary input--padding-xs input--border-radius-md"
            placeholder="write your message here..."
          />
        </div>
        <br></br>
        <input
          type="text"
          className="input input--text-color-info input--padding-sm input--border-radius-md input--border-info"
          placeholder="post title"
        />
        <br></br>
        <br></br>
        <input
          type="text"
          className="input input--text-color-primary input--comment input--border-dark input--padding-xs input--border-radius-xl"
          placeholder="Add a comment...."
        />
      </div>
      {/* ---------------Profile Card------------ */}
      <div
        style={{ backgroundColor: "#fdd343", width: "100%", padding: "1rem" }}
        className="container"
      >
        {/* Supporter profile card */}
        <div className="profile-card profile-card--display-flex">
          <div className="profile-card__part-lg profile-card__part-lg--after ">
            <p className="profile-card__title">about</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </p>
            <p className="profile-card__title">categories</p>
          </div>
          <div className="profile-card__part-sm">
            <i className="fas fa-briefcase  profile-card__icon-lg"></i>
            <p className="profile-card__text-secondary">math teacher</p>
            <i className="fas fa-envelope profile-card__icon-lg"></i>
            <p className="profile-card__text-secondary">amal@gmail.com</p>
          </div>
          <div className="profile-card__edit ">
            <i className="fas fa-pen"></i>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* Kid profile card */}
        <div className="profile-card profile-card--display-flex">
          <div className="profile-card__part-lg ">
            <p className="profile-card__title">about</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </p>
            <p className="profile-card__title">interests</p>
          </div>
          <div className="profile-card__part-sm">
            {/* Badges for test */}
            <div>
              <i
                className="fas fa-certificate"
                style={{
                  margin: ".5rem",
                  fontSize: "3rem",
                  color: "#e55658",
                }}
              ></i>
              <i
                className="fas fa-certificate"
                style={{
                  margin: ".5rem",
                  fontSize: "3rem",
                  color: "#53bcc0",
                }}
              ></i>
              <i
                className="fas fa-certificate"
                style={{
                  margin: ".5rem",
                  fontSize: "3rem",
                  color: "#106d74",
                }}
              ></i>
            </div>
            <div
              style={{
                marginTop: "6rem",
              }}
            >
              <button
                style={{
                  backgroundColor: "#e55658",
                  color: "weith",
                }}
              >
                <i className="far fa-edit"></i> Write New Post{" "}
              </button>
              <button
                style={{
                  backgroundColor: "#e55658",
                  color: "weith",
                }}
              >
                {" "}
                <i className="fas fa-coins"></i> Buy Coins{" "}
              </button>
            </div>
          </div>
          <div className="profile-card__edit ">
            <i className="fas fa-pen"></i>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* Buyer profile card */}
        <div className="profile-card">
          <div className="profile-card--display-flex">
            <span className="profile-card__title">
              <i className="fas fa-envelope profile-card__icon-sm "></i>Email
            </span>
            <p className="profile-card__text-primary--1">buyer@gmail.com</p>
          </div>
          <div className="profile-card--display-flex">
            <span className="profile-card__title">
              <i className="fas fa-map-marker profile-card__icon-sm "></i>
              Address
            </span>
            <p className="profile-card__text-primary--2">6 October</p>
          </div>
          <div className="profile-card--display-flex">
            <span className="profile-card__title">
              <i className="fas fa-phone-alt  profile-card__icon-sm "></i>phone
            </span>
            <p className="profile-card__text-primary--1">01020304050</p>
          </div>

          <div className="profile-card__edit ">
            <i className="fas fa-pen"></i>
          </div>
        </div>
      </div>

      {/* Filter*/}
      <div className="container">
        <ul className="filter">
          <li className="filter-item">All Categories</li>
          <li className="filter-item filter-item--selected filter-item--before ">
            Gardening
          </li>
          <li className="filter-item ">Arts & Crafts</li>
          <li className="filter-item ">Cooking</li>
          <li className="filter-item  filter-item--selected filter-item--before ">
            Writing
          </li>
          <li className="filter-item  filter-item--selected filter-item--before ">
            Drawing
          </li>
          <li className="filter-item ">Photography</li>
          <li className="filter-item ">Singing</li>
          <li className="filter-item ">Knitting</li>
        </ul>
      </div>

      {/* -------------- Post Card --------------- */}
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "10rem",
          }}
        >
          <div className="post-card post-card--bg post-card--bg--primary">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">Post 1</p>
              <p>
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.svg"
                />
                <div>
                  <p>Full name</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>20</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>10</span>
                </div>
              </div>
              <div className="post-card__overlay">
                <button>View Details</button>
                <button>Button2</button>
              </div>
            </div>
          </div>
          <div className="post-card post-card--bg post-card--bg--1">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">Post 1</p>
              <p>
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.svg"
                />
                <div>
                  <p>Full name</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>20</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>10</span>
                </div>
              </div>
              <div className="post-card__overlay">
                <button>View Details</button>
                <button>Button2</button>
              </div>
            </div>
          </div>
          <div className="post-card post-card--bg post-card--bg--2">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">Post 1</p>
              <p>
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.svg"
                />
                <div>
                  <p>Full name</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>20</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>10</span>
                </div>
              </div>
              <div className="post-card__overlay">
                <button>View Details</button>
                <button>Button2</button>
              </div>
            </div>
          </div>
          <div className="post-card post-card--bg post-card--bg--3">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">Post 1</p>
              <p>
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.svg"
                />
                <div>
                  <p>Full name</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>20</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>10</span>
                </div>
              </div>
              <div className="post-card__overlay">
                <button>View Details</button>
                <button>Button2</button>
              </div>
            </div>
          </div>
          <div className="post-card post-card--bg post-card--bg--4">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">Post 1</p>
              <p>
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.svg"
                />
                <div>
                  <p>Full name</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>20</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>10</span>
                </div>
              </div>
              <div className="post-card__overlay">
                <button>View Details</button>
                <button>Button2</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ margin: "2rem auto" }}>
        <div className="post-card post-card--md">
          <div className="post-card__post">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">Post 1</p>
              <p>
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.svg"
                />
                <div>
                  <p>Full name</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>20</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>10</span>
                </div>
              </div>
              <div className="post-card__overlay">
                <button>View Details</button>
                <button>Button2</button>
              </div>
            </div>
          </div>
          <div className="comments">
            <h2>Comments</h2>
            <div className="comment">
              <div className="comment__user">
                <img alt="Avatar" src="../img/avatar.svg" />
              </div>
              <p className="comment__text">
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
            </div>
            <div className="comment">
              <div className="comment__user">
                <img alt="Avatar" src="../img/avatar.svg" />
              </div>
              <p className="comment__text">
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
            </div>
            <div>
              <input
                type="text"
                className="input input--text-color-primary input--comment input--border-dark input--padding-xs input--border-radius-xl"
                placeholder="Add a comment...."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ margin: "2rem auto" }}>
        <div className="post-card post-card--lg">
          <div className="post-card__post">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">Post 1</p>
              <p className="post-card__description">
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam. Lorem ipsum dolor sit
                amet, vel id nusquam repudiandae interpretaris, eam an quem
                pericula. Mei te aliquid mediocritatem. Sint rebum repudiandae
                vel ei. In mollis fuisset fierent pro, habemus dolores tincidunt
                ad nam. Vis laudem nostrud ex, augue errem indoctum ea eam.
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.svg"
                />
                <div>
                  <p>Full name</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>20</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>
          <div className="comments">
            <h2>Comments</h2>
            <div className="comment">
              <div className="comment__user">
                <img alt="Avatar" src="../img/avatar.svg" />
              </div>
              <p className="comment__text">
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
            </div>
            <div className="comment">
              <div className="comment__user">
                <img alt="Avatar" src="../img/avatar.svg" />
              </div>
              <p className="comment__text">
                Lorem ipsum dolor sit amet, vel id nusquam repudiandae
                interpretaris, eam an quem pericula. Mei te aliquid
                mediocritatem. Sint rebum repudiandae vel ei. In mollis fuisset
                fierent pro, habemus dolores tincidunt ad nam. Vis laudem
                nostrud ex, augue errem indoctum ea eam.
              </p>
            </div>
            <div>
              <input
                type="text"
                className="input input--text-color-primary input--comment input--border-dark input--padding-xs input--border-radius-xl"
                placeholder="Add a comment...."
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------- Pagination ---------------- */}
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="pagination">
          <i className="fa fa-arrow-left arrow"></i>
          <span className="page">1</span>
          <span className="page">2</span>
          <span className="page">3</span>
          <span className="page">4</span>
          <span className="page">77</span>
          <span className="page">250</span>
          <i className="fa fa-arrow-right arrow"></i>
        </div>
      </div>

      {/* ------------BASANT Div--------------- */}
      <div>
        <button className="btn btn--rect btn--primary">
          <i className="fa fa-heart"></i> Button2
        </button>
        <button className="btn btn--rect btn--light">
          <i className="fa fa-heart"></i> Button2
        </button>
        <button className="btn btn--rect btn--1">
          <i className="fa fa-heart"></i> Button2
        </button>
        <button className="btn btn--circle">
          <i className="fa fa-heart"></i>
        </button>
        <button className="btn btn--circle btn--primary">
          <i className="fa fa-heart"></i>
        </button>
        <button className="btn btn--circle btn--1">
          <i className="fa fa-heart"></i>
        </button>
        <button className="btn btn--circle btn--2">
          <i className="fa fa-heart"></i>
        </button>
        <button className="btn btn--circle btn--4">
          <i className="fa fa-heart"></i>
        </button>
      </div>

      {/* --------------------------- */}
    </React.Fragment>
  );
}

export default App;
