import React, {useRef, useState} from "react";
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from "react-icons/bi";
import {motion} from 'framer-motion'
import {getMenuStyles, headerVariants} from "../../utils/motion.js";
import useHeaderShadow from "../../hooks/useHeaderShadow.jsx";
import useOutsideAlerter from "../../hooks/useOutsideAlerter.jsx";
const Header = () =>{
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();

    useOutsideAlerter(
        {
            menuRef,
            setMenuOpened
        }
    );

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={headerVariants}
            viewport={{once:false, amount:0.25}}
            className={`bg-primary paddings ${css.wrapper}`}
            style={{boxShadow:headerShadow}}
        >
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    Binjan
                </div>

                <ul
                    ref={menuRef}
                    style={getMenuStyles(menuOpened)}
                    className={`flexCenter ${css.menu}`}>
                    <li><a href="#experties">Service</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#people">Testimonials</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+123 456 789</p>
                        <BiPhoneCall size={"40px"}/>
                    </li>
                </ul>
                {/* only for medium on small screen */}
                <div
                    className={css.menuIcon}
                    onClick={()=>setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30}/>
                </div>

            </div>
        </motion.div>
    )
}

export default Header