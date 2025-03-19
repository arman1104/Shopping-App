import Fashion from "./fashion.png";
import Vector from "./vector.png";

import heroImg from "./hero-img.png";
import heroStar from "./hero-star.png";

import brandImg1 from "./brand-img1.png";
import brandImg2 from "./brand-img2.png";
import brandImg3 from "./brand-img3.png";
import brandImg4 from "./brand-img4.png";
import brandImg5 from "./brand-img5.png";
import brandImg6 from "./brand-img6.png";

import arrival_1 from "./arrivals1.png";
import arrival_2 from "./arrivals2.png";
import arrival_3 from "./arrivals3.png";

import bannerStar from "./banner-star.png";
import bannerImg from "./banner-img.png";

import Favourite1 from "./fav-img1.png";
import Favourite2 from "./fav-img2.png";

import Ellipse1 from "./Ellipse1.png";
import Ellipse5 from "./Ellipse5.png";
import Ellipse6 from "./Ellipse6.png";
import IosStore from "./ios-store.png";
import PlayStore from "./play-store.png";
import Mobile from "./mobile-app.png";

import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import Twitter from "./twitter.png";
import LinkedIn from "./linkedIn.png";

export { Fashion, Vector, heroImg, heroStar };

export const brands = [
  brandImg1,
  brandImg2,
  brandImg3,
  brandImg4,
  brandImg5,
  brandImg6,
];

export const arrivals = [
  {
    id: 1,
    Image: arrival_1,
    title: "Hoodies & Sweetshirt",
    text: "Explore Now",
  },
  {
    id: 2,
    Image: arrival_2,
    title: "Coats & Parkas",
    text: "Explore Now",
  },
  {
    id: 3,
    Image: arrival_3,
    title: "Tees & T-Shirt",
    text: "Explore Now",
  },
];

export const bannerData = [
  { id: 1, Image: bannerImg, type: "main" },
  { id: 2, Image: bannerStar, type: "star" },
  { id: 3, Image: bannerStar, type: "star" },
  { id: 4, Image: bannerStar, type: "star" },
  { id: 5, Image: bannerStar, type: "star" },
];

export const favourites = [
  {
    id: 1,
    Image: Favourite1,
    title: "Trending on instagram",
    text: "Explore Now!",
  },
  {
    id: 2,
    Image: Favourite2,
    title: "All Under $40",
    text: "Explore Now!",
  },
];

export const vouchers = [
  {
    id: 1,
    title: "DOWNLOAD APP & GET THE VOUCHER!",
    text: "Get 30% off for first transaction using Rondovision mobile app for now.",
    playstore: PlayStore,
    iosStore: IosStore,
    ellipse1: Ellipse1,
    ellipse5: Ellipse5,
    ellipse6: Ellipse6,
    mobile: Mobile,
  },
];

export const socialMedia = [
  {
    id: 1,
    title: "FASHION",
    text: "Complete your style with awesome clothes from us.",
    icons: [
      { name: "Facebook", src: Facebook },
      { name: "Instagram", src: Instagram },
      { name: "Twitter", src: Twitter },
      { name: "LinkedIn", src: LinkedIn },
    ],
  },

  {
    id: 2,
    content: "Company",
    links: ["About", "Contact us", "Support", "Careers"],
  },

  {
    id: 3,
    content: "Quick Link",
    links: ["Share Location", "Orders Tracking", "Size Guide", "FAQs"],
  },

  {
    id: 4,
    content: "Legal",
    links: ["Terms & Conditions", "Privacy Policy"],
  },
];
