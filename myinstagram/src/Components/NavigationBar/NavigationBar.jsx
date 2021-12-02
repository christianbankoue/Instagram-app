import { Col, Image, Nav, Navbar, Row } from "react-bootstrap"
import inst_logo from '../../images/logoinsta.png'
import home from '../../images/home.svg'
import message from '../../images/message.svg'
import new_post from '../../images/new_post.svg'
import react from '../../images/love.svg'
import find from '../../images/find.svg'
import pp from '../../images/pp1.png'

export default function NavigationBar(){
    return <> 
        <Navbar style={{borderBottom: '3px solid #FFE8E8'}}>
            <Row style={{width: '100%', margin: "0px" }}>
                <Col xs={2}></Col>
                <Col xs={3}>
                    <Navbar.Brand style={{width: '345px'}}>
                        <Image src={inst_logo} width="150"/>
                    </Navbar.Brand>
                </Col>
                <Col className="text-center" xs={3}>
                        <input type="search" placeholder="Search" style={{width: '215px', height: '28px', marginTop: '10px', paddingLeft: '10px', border: '1px solid #FFE8E8', color: '#B5B5B5'}}/>
                </Col>
                <Col style={{paddingTop: '4px'}} xs={3}>
                    <Nav className="">
                        <Nav.Link>
                            <img src ={home} width="27px" height="27px" alt="Home"/>
                        </Nav.Link>
                        
                        <Nav.Link>
                            <img src ={message} width="27px" height="27px" alt="Message"/>
                        </Nav.Link>
                        
                        <Nav.Link>
                            <img src ={new_post} width="27px" height="27px" alt="New Post"/>
                        </Nav.Link>

                        <Nav.Link>
                            <img src ={find} width="27px" height="27px" alt="Find"/>
                        </Nav.Link>

                        <Nav.Link >
                            <img src ={react} width="27px" height="27px" alt="React"/>
                        </Nav.Link>
                                                
                        <Nav.Link>
                            <img src ={pp} width="27px" height="27px" alt="Home" className="rounded-circle" style={{border: '1px solid green'}}/>
                        </Nav.Link>
                        
                    </Nav>
                
                </Col>
                <Col xs={1}></Col>
            </Row>   
        </Navbar>
    </>
}
