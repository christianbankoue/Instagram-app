import './InfoSection.css'
import pp1 from '../../images/pp1.png';
import { Button } from 'react-bootstrap';

export default function InfoSection() {

    return <>
        <div className="infoSection">
            <img src={pp1} alt="" className="rounded-circle"  width="70" height="70"/>

            <div className="infoSection_my_profil">
                <div className="infoSection_my_username">myUsername</div>
                <div className="infoSection_my_name">my name</div>
            </div>

            <span className="infoSection_switch"><a href="#">Switch</a></span> 
        </div>
    </>
}