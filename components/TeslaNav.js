import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'

const category = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels']
const MenuCategory = ['Existing Invantory', 'Used Inventory', 'Trade-In', 'CyberTruck', 'Roadster',
    'Semi', 'Charging', 'PowerWall', 'Commercial Energy', 'Utilities', 'Test Drive', 'Find Us', 'Support'
]

const TeslaNav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()



    return (
        <NavContainer>
            <Link href="/">
                <NavLogo></NavLogo>
            </Link>
            <TeslaCategory>
                {
                    category?.map((item, id) => (
                        <Category key={id} onClick={() => router.push(`/${item}`)}>
                            {item.toUpperCase()}
                        </Category>
                    ))
                }
            </TeslaCategory>
            <TeslaNavigaton>
                <p>SHOP</p>
                <p>TESLA ACCOUNT </p>
                <svg onClick={() => setMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </TeslaNavigaton>
            {
                menuOpen && (
                    <motion.div
                        initial={{ x: 0, width: 0, height: '100vh', }}
                        animate={{
                            x: 0, position: 'absolute', top: 0, right: 0, backgroundColor: 'white',
                            width: 300, height: '100vh', display: 'flex', flexDirection: 'column', overflowY: 'scroll',
                            justifyContent: 'center', alignItems: 'center', zIndex: 5
                        }}
                    >
                        <Close>
                            <svg onClick={() => setMenuOpen(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Close>
                        <MenuItemCategory>
                            {
                                MenuCategory.map((item, id) => (
                                    <MenuItem key={id}>{item}</MenuItem>
                                ))
                            }
                        </MenuItemCategory>



                    </motion.div>
                )
            }
        </NavContainer>
    )
}

export default TeslaNav

// const component = styled.div``

const NavContainer = styled.div`
    width: 100%;
    height:50px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    background-color:transparent;
    font-weight:600;
    font-size:14;
    color:black;
    position:fixed;
    top:0px;
    z-index:10;
    

`
const NavLogo = styled.img`
    box-sizing:border-box;
    width:100px;
    height:40px;
    background-image:url('https://p1.hiclipart.com/preview/164/304/900/car-logo-tesla-inc-typography-text-letter-disruptive-innovation-png-clipart.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    cursor: pointer;
    position: relative;
    left:30px;
    outline:none;
    
`
const TeslaCategory = styled.div`
    display:flex;
    align-items:center;
    position: absolute;
    left:50%;
    transform:translateX(-50%);
    

`
const TeslaNavigaton = styled.div`
    display:flex;
    align-items:center;
    position: relative;
    right:30px;

    p{
        margin-left:10px;
        cursor:pointer;
        &:hover{
        color:white;
    }
    }
    svg{
        width:30px;
        height:30px;
        margin-left:10px;
        cursor:pointer;
    }
`
const Category = styled.p`
    margin-left:15px;
    cursor:pointer;
    &:hover{
        color:white;
    }
`

const Close = styled.div`
    cursor:pointer;
    width:30px;
    height:30px;
    position: absolute;
    right:15px;
    top:10px;
    `
const MenuItemCategory = styled.div`
        width:90%;
        margin-top:160px;
    `
const MenuItem = styled.p`
    width:90%;
    height:40px;
    padding:10px;
    border-bottom:1px solid gray;
    cursor:pointer;
    margin-left:15px;
    
`
