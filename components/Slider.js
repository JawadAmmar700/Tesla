import React, { useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderModel = ({ SliderImages, SliderContent }) => {
  const [num, setNum] = useState(0)

  function SampleNextArrow(props) {
    const { onClick } = props
    const next = () => {
      onClick()
      if (num < 3) return setNum(num + 1)
      setNum(0)
    }
    return (
      <NextArrow onClick={next}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </NextArrow>
    )
  }
  function PrevousArrow(props) {
    const { onClick } = props
    const prev = () => {
      onClick()
      if (num < 1) return setNum(3)
      setNum(num - 1)
    }
    return (
      <PrevArrow onClick={prev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </PrevArrow>
    )
  }

  var settings = {
    dots: true,
    appendDots: dots => (
      <SLiderDots>
        <div>{dots}</div>
      </SLiderDots>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => <CustomDots></CustomDots>,
    nextArrow: <SampleNextArrow />,
    prevArrow: <PrevousArrow />,
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.01 } },
  }

  return (
    <SliderContainer>
      <Slider {...settings}>
        {SliderImages.map((item, id) => (
          <img src={item} key={id} alt="" />
        ))}
      </Slider>

      <SliderContentDetail>
        <h2>{SliderContent[num].h2}</h2>
        <p>{SliderContent[num].p}</p>
      </SliderContentDetail>
    </SliderContainer>
  )
}

export default SliderModel

const SliderContainer = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 500px;
    margin-bottom: 50px;
    outline: none;
  }
`

const SliderContentDetail = styled.div`
  z-index: 10;
  color: white;
  position: relative;
  left: 300px;
  top: -50px;
  width: 650px;
  height: 200px;

  h2 {
    color: white;
  }
  p {
    color: white;
  }
  @media (max-width: 1087px) {
    left: 200px;
  }
  @media (max-width: 980px) {
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
  }
  @media (max-width: 700px) {
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
    width: 300px;
    p {
      width: 300px;
    }
  }
`

const SLiderDots = styled.div`
  width: 50px;
  height: 20px;
  position: relative;
  top: 0px;
  left: 200px;
  div {
    margin-left: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1087px) {
    left: 100px;
  }
`
const CustomDots = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid white;
`

const NextArrow = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  right: 20px;
  svg {
    color: white;
    width: 20px;
    height: 20px;
  }
`
const PrevArrow = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 10;
  left: 20px;
  svg {
    color: white;
    width: 20px;
    height: 20px;
  }
`
