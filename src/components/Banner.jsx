import React from "react";

export const Banner = () => {
  const images = [
  "https://kartinki.pics/uploads/posts/2021-03/thumbs/1617174442_1-p-reklama-pitstsi-krasivo-1.png",
  "https://seo-profik.ru/media/blog/covers/reklama-pitstsyi-marketingovyie-strategii-v-2021-godu.jpg",
  "https://1place.su/ru/blog/wp-content/uploads/2018/10/post52.jpg"
];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImg = images[randomIndex];


    return (
        <div className = "banner" >
            <img className = "banner__image" src= {randomImg} alt="" />
        </div>
    );
}

export default Banner;