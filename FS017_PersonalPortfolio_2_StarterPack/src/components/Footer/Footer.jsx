import React, {Component} from 'react';
import css from "./Footer.module.scss";
import {motion} from "framer-motion";
import {footerVariants, staggerChildren} from "../../utils/motion.js";

class Footer extends Component {
    render() {
        return (
            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{once:false, amount:0.25}}

                className={`paddings ${css.wrapper}`}>
                <motion.div
                    variants={footerVariants}
                    className={`innerWidth yPaddings flexCenter ${css.container}`}>
                    <div className={`${css.left}`}>
                        <span className="primaryText">
                            Let's make something <br/> amazing together.
                        </span>
                        <span className="primaryText">
                            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
                        </span>
                    </div>

                    <div className={`${css.right}`}>
                        <div className={`${css.info}`}>
                            <span className="secondaryText">Information</span>
                            <p>145 New York, FL 5467, USA</p>
                        </div>

                        <div className={`${css.menu}`}>
                            <li>Services</li>
                            <li>Works</li>
                            <li>Notes</li>
                            <li>Experience</li>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        );
    }
}

export default Footer;