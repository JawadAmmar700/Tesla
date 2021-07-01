import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ExtraFeatures = ({ ExtraFeatures, view }) => {
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1 }, y: 0 },
  }

  return (
    <FeatureContainer>
      <motion.img
        variants={variants}
        animate={view ? 'visible' : 'hidden'}
        src={ExtraFeatures[0].src}
        alt=""
      />
      <motion.div vvariants={variants} animate={view ? 'visible' : 'hidden'}>
        <h1>{ExtraFeatures[0].h1}</h1>
        <p>{ExtraFeatures[0].p}</p>
      </motion.div>
      <motion.div variants={variants} animate={view ? 'visible' : 'hidden'}>
        <h1>{ExtraFeatures[1].h1}</h1>
        <p>{ExtraFeatures[1].p}.</p>
      </motion.div>
      <motion.img
        variants={variants}
        animate={view ? 'visible' : 'hidden'}
        src={ExtraFeatures[1].src}
        alt=""
      />

      <motion.img src={ExtraFeatures[2].src} alt="" />
      <motion.div variants={variants} animate={view ? 'visible' : 'hidden'}>
        <h1>{ExtraFeatures[2].h1}</h1>
        <p>{ExtraFeatures[2].p}</p>
      </motion.div>
      <motion.div variants={variants} animate={view ? 'visible' : 'hidden'}>
        <h1>{ExtraFeatures[3].h1}</h1>
        <p>{ExtraFeatures[3].p}.</p>
      </motion.div>
      <motion.img
        variants={variants}
        animate={view ? 'visible' : 'hidden'}
        src={ExtraFeatures[3].src}
        alt=""
      />
    </FeatureContainer>
  )
}

export default ExtraFeatures

const FeatureContainer = styled.div`
  width: 87%;
  height: auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  grid-column-gap: -20px;

  div {
    width: 550px;
    height: 320px;
    display: flex;
    position: relative;
    color: white;
    flex-direction: column;

    h1 {
      font-size: 16px;
      margin-top: 80px;
      margin-left: 30px;
    }
    p {
      width: 250px;
      font-size: 14px;
      margin-left: 30px;
    }
  }
  img {
    width: 550px;
    height: 320px;
  }
  @media (max-width: 1192px) {
    div {
      width: 500px;
    }
    img {
      width: 500px;
    }
  }
  @media (max-width: 1087px) {
    div {
      width: 450px;
    }
    img {
      width: 450px;
    }
  }
  @media (max-width: 980px) {
    grid-template-columns: auto;
    div {
      display: none;
    }
    img {
      width: 100%;
      margin-top: 10px;
    }
  }
`
