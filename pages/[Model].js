import React, { useEffect, useState } from 'react'
import { SectionImg, LastSectionFooter } from '../HomeData'
import styled from 'styled-components'
import TeslaNav from '../components/TeslaNav'
import SliderModel from '../components/Slider'
import ExtraFeatures from '../components/ExtraFeatures'
import { motion } from 'framer-motion'

export const getStaticPaths = () => {
  const paths = SectionImg.map(item => {
    return { params: { Model: item.Name } }
  })
  return { paths, fallback: false }
}
export const getStaticProps = ({ params }) => {
  const CarData = SectionImg.find(item => item.Name === params.Model)
  return {
    props: { data: CarData },
  }
}

const Model = ({ data }) => {
  const [view, setView] = useState(false)
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1 }, y: 0 },
  }
  useEffect(() => {
    const setY = () => {
      console.log(window.scrollY)

      if (window.scrollY === 0) return setView(true)
      if (window.scrollY >= 133.3333282470703 && window.scrollY <= 1000)
        return setView(true)
      if (window.scrollY >= 1600) return setView(true)
      setView(false)
    }

    window.addEventListener('scroll', setY)

    return () => {
      window.removeEventListener('scroll', setY)
    }
  }, [])

  return (
    <ModelContainer>
      <TeslaNav />

      <ModelImg>
        <img src={data.url} alt="" />
        <Name>
          <h1>{data.Name}</h1>
          <p>Plaid</p>
        </Name>
        <Miles>
          {data.performance.map((item, id) => (
            <div>
              <p key={id}>{item.m} </p>
              <span>{item.p}</span>
            </div>
          ))}
          <MileButton>Order Now</MileButton>
        </Miles>
      </ModelImg>
      <InteriorImage>
        <img
          src="https://tesla-view.thron.com/api/xcontents/resources/delivery/getThumbnail/tesla/1370x770/482c7084-fb08-4f68-8cea-ac8ec2fac56c.jpg?v=19&dpr=200"
          alt=""
        />
        <motion.p
          style={{ x: -90 }}
          variants={variants}
          animate={view ? 'visible' : 'hidden'}
        >
          All-New Interior
        </motion.p>
      </InteriorImage>
      <SliderModel
        SliderImages={data.SliderImages}
        SliderContent={data.sliderContent}
      />
      <ExtraFeatures ExtraFeatures={data.ExtraFeatures} view={view} />
      <SecondImageModel>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/d4a3d44d-a5b6-47b1-87db-707cbe0dade1/bvlatuR/std/1370x770/ModelS_03?lcid=2b084dd2-ade1-49ec-a470-45363112146c&v=18"
          alt=""
        />
        <SecondMile>
          {data.performance.map((item, id) => (
            <div key={id}>
              <p key={id}>{item.m} </p>
              <span>{item.p}</span>
            </div>
          ))}
        </SecondMile>
      </SecondImageModel>
      <OrderNow>
        <div>
          <p>Plaid</p>
          <h2>Beyond Ludicrous</h2>
          <Button>Order Now</Button>
        </div>
        <p>
          With the longest range and quickest acceleration of any electric
          vehicle in production, Model S Plaid is the highest performing sedan
          ever built. Both Long Range and Plaid powertrains, with updated
          battery architecture, are capable of back-to-back, consistent 1/4 mile
          runs.
        </p>
      </OrderNow>
    </ModelContainer>
  )
}

export default Model

const ModelContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
`
const ModelImg = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Name = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  line-height: 3px;
  p {
    color: #3d5c5c;
    font-size: 18px;
  }
  h1 {
    font-weight: 600;
  }
`
const Miles = styled.div`
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 600;
    color: white;
    font-size: 28px;
    cursor: pointer;
  }
  span {
    margin-top: -20px;
    font-size: 14px;
    color: white;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 60px;
  }
`
const MileButton = styled.button`
  width: 150px;
  height: 40px;
  outline: none;
  border: 3px solid white;
  color: white;
  background-color: transparent;
  border-radius: 50px;
  margin-left: 60px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    transition: 0.2s ease-out;
    background-color: white;
    color: black;
  }
`
const InteriorImage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
    font-size: 28px;
    font-weight: 600;
    color: black;
  }
`

const SecondImageModel = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  top: 200px;
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`
const SecondMile = styled.div`
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 600;
    color: white;
    font-size: 28px;
    cursor: pointer;
  }
  span {
    margin-top: -20px;
    font-size: 14px;
    color: white;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 60px;
  }
`

const OrderNow = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  position: relative;
  top: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;

    p {
      font-size: 20px;
    }
    h2 {
      margin-top: -100px;
    }
  }

  p {
    width: 600px;
    height: 100px;
  }
`
const Button = styled.button`
  width: 150px;
  height: 40px;
  outline: none;
  border: 3px solid black;
  color: black;
  background-color: transparent;
  border-radius: 50px;
  margin-left: 60px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: white;
    transition: 0.2s ease-out;
    background-color: black;
  }
`
