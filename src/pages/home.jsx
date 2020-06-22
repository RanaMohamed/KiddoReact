import React from "react";
import Category from "../components/category";
import LatestPosts from "../components/latestPosts";
import ContactForm from "./../components/contactForm";
import Header from "./../components/header";

const Home = () => {
  return (
    <>
      <section className="slide heroheader">
        <div className="heroheader__gradient"></div>

        <div className="heroheader__container">
          <div className="heroheader__container__background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              width="1920"
              height="1080"
              viewBox="0 0 1920 1080"
            >
              <defs>
                <filter
                  id="BGYellow"
                  x="-9"
                  y="-10"
                  width="1942.651"
                  height="1002.855"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="5" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood flood-opacity="0.161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <clipPath id="clip-header-background">
                  <rect width="1920" height="1080" />
                </clipPath>
              </defs>
              <g
                id="header-background"
                clip-path="url(#clip-header-background)"
              >
                <g
                  id="Group_6456"
                  data-name="Group 6456"
                  transform="translate(7980 -6278)"
                >
                  <g
                    transform="matrix(1, 0, 0, 1, -7980, 6278)"
                    filter="url(#BGYellow)"
                  >
                    <path
                      id="BGYellow-2"
                      data-name="BGYellow"
                      d="M1114-291V663.749s67.093-46.539,185.253-32.952c88.662,10.2,213.4,89.225,320.106,54.136,248.733-81.792,134.75-310.1,489.574-348.35S3038.651,531.94,3038.651,531.94V-291Z"
                      transform="translate(-1114 285)"
                      fill="#fdd343"
                    />
                  </g>
                  <g id="BGShapes" transform="translate(-7975 6272)">
                    <g id="BGShape">
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        stroke="#53bcc0"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-1301 169)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_11"
                        data-name="Path 11"
                        stroke="#e55658"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-1235 180)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_12"
                        data-name="Path 12"
                        stroke="#fbfbfa"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-1276 237)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                    </g>
                    <g id="BGShape-2" data-name="BGShape">
                      <path
                        id="Path_13"
                        data-name="Path 13"
                        stroke="#53bcc0"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-1301 899)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_14"
                        data-name="Path 14"
                        stroke="#e55658"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-1235 910)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_15"
                        data-name="Path 15"
                        stroke="#fdd343"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-1276 957)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                    </g>
                    <g id="BGShape-3" data-name="BGShape">
                      <path
                        id="Path_16"
                        data-name="Path 16"
                        stroke="#53bcc0"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(549 42)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_17"
                        data-name="Path 17"
                        stroke="#e55658"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(615 53)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_18"
                        data-name="Path 18"
                        stroke="#fdd343"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(574 110)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                    </g>
                    <g id="BGShape-4" data-name="BGShape">
                      <path
                        id="Path_19"
                        data-name="Path 19"
                        stroke="#53bcc0"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(524 731)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_20"
                        data-name="Path 20"
                        stroke="#e55658"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(590 742)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_21"
                        data-name="Path 21"
                        stroke="#fdd343"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(549 799)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                    </g>
                    <g id="BGShape-5" data-name="BGShape">
                      <path
                        id="Path_22"
                        data-name="Path 22"
                        stroke="#53bcc0"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-881 759)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_23"
                        data-name="Path 23"
                        stroke="#e55658"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-815 770)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_24"
                        data-name="Path 24"
                        stroke="#fbfbfa"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-856 827)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                    </g>
                    <g id="BGShape-6" data-name="BGShape">
                      <path
                        id="Path_25"
                        data-name="Path 25"
                        stroke="#53bcc0"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-382 401)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_26"
                        data-name="Path 26"
                        stroke="#e55658"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-316 412)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_27"
                        data-name="Path 27"
                        stroke="#fbfbfa"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-357 469)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                    </g>
                    <g id="BGShape-7" data-name="BGShape">
                      <path
                        id="Path_28"
                        data-name="Path 28"
                        stroke="#53bcc0"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(207 350)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_29"
                        data-name="Path 29"
                        stroke="#e55658"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(273 361)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_30"
                        data-name="Path 30"
                        stroke="#fbfbfa"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(232 418)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                    </g>
                    <g id="BGShape-8" data-name="BGShape">
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        stroke="#53bcc0"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-246 15)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_32"
                        data-name="Path 32"
                        stroke="#e55658"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-180 26)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                      <path
                        id="Path_33"
                        data-name="Path 33"
                        stroke="#fbfbfa"
                        d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                        fill="none"
                        transform="translate(-221 83)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        opacity="0.15"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="heroheader__content">
          <div className="heroheader__content__text">
            <div className="heroheader__content__socialMedia">
              <a href="/">
                <i className="fab fa-facebook heroheader__content__socialMedia__icon"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter heroheader__content__socialMedia__icon"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram heroheader__content__socialMedia__icon"></i>
              </a>
            </div>

            <div className="heroheader__content__title">
              <h2 className="heroheader__content__slogan">
                HAVING FUN IS THE BEST WAY TO LEARN
              </h2>
              <p className="heroheader__content__callToAction">
                Come to join our community
              </p>
            </div>
          </div>
          <div className="heroheader__content__images">
            <img
              className="heroheader__content__images__image"
              src="../img/heroheaderImage.png"
            />

            <div />
          </div>
        </div>
      </section>
      <section className="slide my-lg">
        <div className="home-section2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            width="1920"
            height="1490"
            viewBox="0 0 1920 1490"
          >
            <defs>
              <filter
                id="BGBlue"
                x="-7.337"
                y="19.684"
                width="1940.989"
                height="1470.316"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="-10" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
              <clipPath id="clip-blue-background">
                <rect width="1920" height="1490" />
              </clipPath>
            </defs>
            <g id="blue-background" clip-path="url(#clip-blue-background)">
              <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#BGBlue)">
                <path
                  id="BGBlue-2"
                  data-name="BGBlue"
                  d="M225.324,39.632S-39.96,724.06,10.521,970.531s242.5,234.014,314.382,416.155-29.994,221.248-14.83,364.644,75.484,208.939,75.484,208.939H1455.45V37.281Z"
                  transform="translate(1961.93 34.55) rotate(90)"
                  fill="#53bcc0"
                />
              </g>
              <g id="BGShapes" transform="translate(0 -670)">
                <g id="BGShape">
                  <path
                    id="Path_87"
                    data-name="Path 87"
                    stroke="#fdd343"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-347 825)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_88"
                    data-name="Path 88"
                    stroke="#e55658"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-281 836)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_89"
                    data-name="Path 89"
                    stroke="#fbfbfa"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-322 893)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                </g>
                <g id="BGShape-2" data-name="BGShape">
                  <path
                    id="Path_90"
                    data-name="Path 90"
                    stroke="#fdd343"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(549 1057)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_91"
                    data-name="Path 91"
                    stroke="#e55658"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(615 1068)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_92"
                    data-name="Path 92"
                    stroke="#fbfbfa"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(574 1125)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                </g>
                <g id="BGShape-3" data-name="BGShape">
                  <path
                    id="Path_93"
                    data-name="Path 93"
                    stroke="#fdd343"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-1301 1230)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_94"
                    data-name="Path 94"
                    stroke="#e55658"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-1235 1241)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_95"
                    data-name="Path 95"
                    stroke="#fbfbfa"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-1276 1298)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                </g>
                <g id="BGShape-4" data-name="BGShape">
                  <path
                    id="Path_96"
                    data-name="Path 96"
                    stroke="#fdd343"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-654 1057)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_97"
                    data-name="Path 97"
                    stroke="#e55658"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-588 1068)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_98"
                    data-name="Path 98"
                    stroke="#fbfbfa"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-629 1125)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                </g>
                <g id="BGShape-5" data-name="BGShape">
                  <path
                    id="Path_99"
                    data-name="Path 99"
                    stroke="#fdd343"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-72 1057)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_100"
                    data-name="Path 100"
                    stroke="#e55658"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-6 1068)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_101"
                    data-name="Path 101"
                    stroke="#fbfbfa"
                    d="M1310.218-43.537S1286.144-14.854,1297.071-14s1.878-40.806-5.8-34.147,25.781,31.586,27.318,20.488-33.635-2.39-33.635-2.39"
                    fill="none"
                    transform="translate(-47 1125)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    opacity="0.15"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="home-section2__content">
          <div className="container my-xl">
            <LatestPosts></LatestPosts>
            <Category></Category>
          </div>
        </div>
      </section>
      <section className="slide2">
        <div className="container home-section3__content">
          <h2 className="home-section3__content__title">
            Know Interact Develop Do Offer
          </h2>
          <div className="home-section3__content__infograph ">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  width="432.087"
                  height="456.958"
                  viewBox="0 0 432.087 456.958"
                >
                  <defs>
                    <filter
                      id="Ellipse_10"
                      x="102.51"
                      y="120.304"
                      width="223"
                      height="223"
                      filterUnits="userSpaceOnUse"
                    >
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feFlood flood-opacity="0.161" />
                      <feComposite operator="in" in2="blur" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <g id="know" transform="translate(-166.49 -2395.696)">
                    <path
                      id="Path_102"
                      data-name="Path 102"
                      d="M1232.444,7816.409c-1.521-95.844,187.124-252.541,261.669-251.02s34.845,79.779,61.953,142.534,109.957-10.178,108.435,96.315-128.933,189.786-217.55,214.507-108.015-85.194-136.92-115.621S1233.965,7912.252,1232.444,7816.409Z"
                      transform="translate(-1065.944 -5169.682)"
                      fill="#fdd343"
                    />
                    <g
                      transform="matrix(1, 0, 0, 1, 166.49, 2395.7)"
                      filter="url(#Ellipse_10)"
                    >
                      <circle
                        id="Ellipse_10-2"
                        data-name="Ellipse 10"
                        cx="102.5"
                        cy="102.5"
                        r="102.5"
                        transform="translate(111.51 126.3)"
                        fill="#fff"
                      />
                    </g>
                    <text
                      id="Know_"
                      data-name="Know "
                      transform="translate(307 2644)"
                      fill="#106d74"
                      font-size="48"
                      font-family="PermanentMarker-Regular, Permanent Marker"
                    >
                      <tspan x="0" y="0">
                        Know{" "}
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
              <div>some words</div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide">
        <ContactForm></ContactForm>
      </section>
    </>
  );
};

export default Home;
