import React, { useEffect, useState } from 'react'
import TeslaNav from './teslaNav'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { SectionImg, LastSectionFooter } from '../HomeData'

const Home = () => {
  const [view, setView] = useState(true)
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.01 } },
  }

  useEffect(() => {
    let track = window.innerHeight
    console.log(track)
    const setY = () => {
      if (window.scrollY === 0) return setView(true)
      if (window.scrollY === track) return setView(true)
      if (window.scrollY === track * 2) return setView(true)
      if (window.scrollY === track * 3) return setView(true)
      if (window.scrollY === track * 4) return setView(true)
      if (window.scrollY === track * 5) return setView(true)

      setView(false)
    }
    const resize = () => {
      track = window.innerHeight
    }
    window.addEventListener('scroll', setY)
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('scroll', setY)
      window.addEventListener('resize', resize)
    }
  }, [])

  return (
    <HomeContainer>
      <TeslaNav />
      {SectionImg.map((item, id) => (
        <Section key={id}>
          <img src={item.url} alt="" />

          <Name variants={variants} animate={view ? 'visible' : 'hidden'}>
            <NameP>{item.Name}</NameP>
            <NameOrder>
              Order Online for <a>touchless Delivery</a>{' '}
            </NameOrder>
          </Name>

          <ButtonContainer
            variants={variants}
            animate={view ? 'visible' : 'hidden'}
          >
            <button className="btn1">Custom Order</button>
            <button className="btn2">Existing Inventory</button>
            {id === 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </ButtonContainer>

          {id === 5 && (
            <Footer variants={variants} animate={view ? 'visible' : 'hidden'}>
              {LastSectionFooter.map((item, id) => (
                <p key={id}>{item}</p>
              ))}
            </Footer>
          )}
        </Section>
      ))}
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
`
const Section = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`
const Name = styled(motion.div)`
  z-index: 5;
  width: auto;
  height: 100px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`
const NameP = styled.p`
  font-weight: 600;
  font-size: 40px;
  color: #3d5c5c;
`
const NameOrder = styled.p`
  margin-top: -40px;
  color: #5c8a8a;

  a {
    color: #3d5c5c;
    border-bottom: 1px solid gray;
    &:hover {
      transition: 0.1s ease-in;
      color: #262729;
      border-bottom: 2px solid black;
    }
  }
`
const spin = keyframes`
    from{
        transition: 1.5s; ease-in;
        transform:translateY(-3px)
    }
    to{
        transition: 2s; ease-in;
        transform:translateY(3px)

    }
`
const ButtonContainer = styled(motion.div)`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);

  .btn1 {
    width: 250px;
    height: 40px;
    outline: none;
    border: none;
    background-color: #343539;
    border-radius: 50px;
    opacity: 0.9;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
  .btn2 {
    width: 250px;
    height: 40px;
    outline: none;
    border: none;
    background-color: white;
    border-radius: 50px;
    margin-left: 15px;
    cursor: pointer;
  }
  svg {
    width: 40px;
    height: 40px;
    position: relative;
    top: 85px;
    left: -278px;
    animation: ${spin} 1s infinite ease-in;
  }
`

const Footer = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-weight: 500;

  p {
    margin-left: 15px;
    color: #393c41;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`
