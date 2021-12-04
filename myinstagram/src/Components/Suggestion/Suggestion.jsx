import './Suggestion.css'
import pp1 from '../../images/pp1.png';

export default function Suggestion() {
    return <>
        <div className="suggestions">
            <div>
                <span className="suggestions_title">Suggestions for you</span>
                <span className="suggestions_see_all">See All</span>
            </div>

            <div className="list_suggestions">
                <div className="suggestion">
                    <img src={pp1} alt="" className="rounded-circle"  width="40" height="40"/>

                    <div className="suggestion_profil">
                        <div className="suggestion_username">myUsername</div>
                        <div className="suggestion_name">my name</div>
                    </div>

                    <span className="suggestion_follow"><a href="#">Follow</a></span> 
                </div>

                <div className="suggestion">
                    <img src={pp1} alt="" className="rounded-circle"  width="40" height="40"/>

                    <div className="suggestion_profil">
                        <div className="suggestion_username">myUsername</div>
                        <div className="suggestion_name">my name</div>
                    </div>

                    <span className="suggestion_follow"><a href="#">Follow</a></span> 
                </div>

                <div className="suggestion">
                    <img src={pp1} alt="" className="rounded-circle"  width="40" height="40"/>

                    <div className="suggestion_profil">
                        <div className="suggestion_username">myUsername</div>
                        <div className="suggestion_name">my name</div>
                    </div>

                    <span className="suggestion_follow"><a href="#">Follow</a></span> 
                </div>

                <div className="suggestion">
                    <img src={pp1} alt="" className="rounded-circle"  width="40" height="40"/>

                    <div className="suggestion_profil">
                        <div className="suggestion_username">myUsername</div>
                        <div className="suggestion_name">my name</div>
                    </div>

                    <span className="suggestion_follow"><a href="#">Follow</a></span> 
                </div>
            </div>
            
        </div>
    </>
}