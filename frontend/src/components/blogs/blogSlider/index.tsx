"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BlogCard from "../blogCard";

const BlogsSlider = () => {
  const blogs = [
    {
      name: "Blog 1",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 2",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 3",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 4",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 5",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 6",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 7",
      path: "#",
      bgcolor: "black",
    },
  ];
  return (
    <div>
      <h1 className="text-medium font-bold mx-2 my-1">Latest Blogs</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogs.map((blog) => {
          return (
            <SwiperSlide key={blog.name}>
              <BlogCard {...blog} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BlogsSlider;
