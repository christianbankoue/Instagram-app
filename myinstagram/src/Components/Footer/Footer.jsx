import { useEffect, useState } from "react";
import "./Footer.css"
const Footer = () => {
    const [year, setYear] = useState();
    
    useEffect(() =>{
        setYear(new Date().getFullYear())
    }, [year])

    
    return <> 
        <div className="footer">
            <ul className="footer_items">
                <li className="footer_item"><a href="#">Meta</a></li>
                <li className="footer_item"><a href="#">About</a></li>
                <li className="footer_item"><a href="#">Blog</a></li>
                <li className="footer_item"><a href="#">Jobs</a></li>
                <li className="footer_item"><a href="#">Help</a></li>
                <li className="footer_item"><a href="#">API</a></li>
                <li className="footer_item"><a href="#">Privacy</a></li>
                <li className="footer_item"><a href="#">Terms</a></li>
                <li className="footer_item"><a href="#">Top accounts</a></li>
                <li className="footer_item"><a href="#">Hastags</a></li>
                <li className="footer_item"><a href="#">Locations</a></li>
                <li className="footer_item"><a href="#">Instagram Lite</a></li>
            </ul>

            <ul className="footer_items" style={{}}>
                <li className="footer_item"><a href="#">Beauty</a></li>
                <li className="footer_item"><a href="#">Dance</a></li>
                <li className="footer_item"><a href="#">Fitness</a></li>
                <li className="footer_item"><a href="#">Food & drink</a></li>
                <li className="footer_item"><a href="#">Home & garden</a></li>
                <li className="footer_item"><a href="#">Music</a></li>
                <li className="footer_item"><a href="#">Visual arts</a></li>
            </ul>

            <div className="footer_languages">
                <select name="languages" id="languages">
                    <option value="af">Afrikaans</option>
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="en-gb" selected>English (UK)</option>
                    <option value="fr-ca">Français (Canada)</option>
                    <option value="ro">Romana</option>
                </select>

                <span className="copyright">&copy; {year} Instagram form Meta</span>
            </div>
        </div>
    </>

}

export default Footer;