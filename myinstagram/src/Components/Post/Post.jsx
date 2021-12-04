import './Post.css';
import post from '../../images/post.jpg'
import pp1 from '../../images/pp1.png';
import option from '../../images/option.svg'
import share from '../../images/message.svg'
import react from '../../images/love.svg'
import comment from '../../images/comment.svg'
import save from '../../images/save.svg'

export default function Post({profil, username, image_url, likes, comments}) {
    return <>
        <article className="post_container">
            <div className="post_header">
                <div className="post_head_profil">
                    <img src={pp1} alt="" className='rounded-circle post_head_profil_image' width="40" />
                    <span className="post_head_profil_text">Username
                    </span>
                </div>
                <img src={option} className='post_head_options' width="30" height="30"/>
            </div>

            <div className="post_image">
                <img src={post} className='' width='100%'/>
            </div>

            <div className="analytic">
                <div>
                    <img src={react} alt="" className="post_reactimage"/>
                    <img src={comment} alt="" className="post_reactimage"/>
                    <img src={share} alt="" className="post_reactimage"/>
                    <img src={save} alt="" className="post_reactimage"/>
                </div>
                <div>
                    <span style={{fontWeight: 'bold', marginLeft: '10px'}}>7098K likes</span>
                </div>
                
            </div>

            <div className="">
                <div className="post_comment">
                    <span className="username" style={{fontWeight: 'bold', margin: '0px 10px'}}>Username</span>
                    <span>bondds dedsdhjdhdhjsdjhdsjhdjhddhdjsjdh</span>
                </div>

                <div className="post_comment">
                    <span className="username" style={{fontWeight: 'bold', margin: '0px 10px'}}>Username</span>
                    <span>bondds dedsdhjdhdhjsdjhdsjhdjhddhdjsjdh</span>
                </div>

                <div className="post_comment">
                    <span className="username" style={{fontWeight: 'bold', margin: '0px 10px'}}>Username</span>
                    <span>bondds dedsdhjdhdhjsdjhdsjhdjhddhdjsjdh</span>
                </div>

                <input type="text" name="post_commentbox" id="post_commentbox" placeholder='Add a comment...' />
            </div>
        </article>
        
{/*         
        <article className="post">
            <img src={post} />
        </article>

        <article className="post">
            <img src={post} />
        </article> */}
    </ >  
}