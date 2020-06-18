import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="App">Kiddo</div>

      {/* -------------- Post Card--------------- */}
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
            <i class="fas fa-briefcase  profile-card__icon-lg"></i>
            <p className="profile-card__text-secondary">math teacher</p>
            <i class="fas fa-envelope profile-card__icon-lg"></i>
            <p className="profile-card__text-secondary">amal@gmail.com</p>
          </div>
          <div className="profile-card__edit ">
            <i class="fas fa-pen"></i>
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
                class="fas fa-certificate"
                style={{
                  margin: ".5rem",
                  fontSize: "3rem",
                  color: "#e55658"
                }}
              ></i>
              <i
                class="fas fa-certificate"
                style={{
                  margin: ".5rem",
                  fontSize: "3rem",
                  color: "#53bcc0"
                }}
              ></i>
              <i
                class="fas fa-certificate"
                style={{
                  margin: ".5rem",
                  fontSize: "3rem",
                  color: "#106d74"
                }}
              ></i>
            </div>
            <div
              style={{
                marginTop: "6rem"
              }}
            >
              <button
                style={{
                  backgroundColor: "#e55658",
                  color: "weith"
                }}
              >
                <i class="far fa-edit"></i> Write New Post{" "}
              </button>
              <button
                style={{
                  backgroundColor: "#e55658",
                  color: "weith"
                }}
              >
                {" "}
                <i class="fas fa-coins"></i> Buy Coins{" "}
              </button>
            </div>
          </div>
          <div className="profile-card__edit ">
            <i class="fas fa-pen"></i>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* Buyer profile card */}
        <div className="profile-card">
          <div className="profile-card--display-flex">
            <span className="profile-card__title">
              {" "}
              <i class="fas fa-envelope profile-card__icon-sm "></i>Email
            </span>
            <p className="profile-card__text-primary--1">buyer@gmail.com</p>
          </div>
          <div className="profile-card--display-flex">
            <span className="profile-card__title">
              {" "}
              <i class="fas fa-map-marker profile-card__icon-sm "></i>Address
            </span>
            <p className="profile-card__text-primary--2">6 October</p>
          </div>
          <div className="profile-card--display-flex">
            <span className="profile-card__title">
              {" "}
              <i class="fas fa-phone-alt  profile-card__icon-sm "></i>phone
            </span>
            <p className="profile-card__text-primary--1">01020304050</p>
          </div>

          <div className="profile-card__edit ">
            <i class="fas fa-pen"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
