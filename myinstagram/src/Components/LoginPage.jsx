import "./LoginPage.css"
import {Card, Col, Container, Form, FormControl, InputGroup, Row, Button, Image} from "react-bootstrap"
import inst_image from '../images/9364675fb26a.svg'
import inst_logo from '../images/logoinsta.png'
import fb from '../images/fb.png'
import playstore from '../images/play.png'
import appstore from '../images/app.png'
const LoginPage = () => {

    return <>
                <Row>
                    <Col className="" style={{border: "1px solid black"}}></Col>

                    <Col style={{border: "2px solid black"}} className="">
                        <div className="container">
                            
                            <Image className="loginpage_component_left loginpage_component" src={inst_image} width="456px" heigth="618px"/>

                            <div className="loginpage_component_rigth loginpage_component text-center">
                                <Card className="form_card">
                                    <Card.Title>
                                        <Image src={inst_logo} width="175px" className="loginpage_logo"/>
                                    </Card.Title>

                                    <div className="loginpage_login">
                                        <Form className="form">
                                                <InputGroup className="form_input_group  mb-3" >
                                                    <FormControl type="email" placeholder="Phone number, username or email address" className="form_input form_child"/>
                                                </InputGroup>

                                                <InputGroup className="form_input_group ">
                                                    <FormControl type="password" placeholder="Password" className="form_input form_child"/>
                                                </InputGroup>

                                                <div className="">
                                                    <Button type="submit" className="mt-4 form_child">Log in</Button>
                                                </div>

                                                <div className="login_ordiv mt-4">
                                                    <div>
                                                        <div className="login_divbar"></div>
                                                        <div className="login_or">OR</div>
                                                        <div className="login_divbar"></div>
                                                    </div>
                                                </div>
                                        </Form>
                                    </div>

                                    <div className="login_fb mt-4">
                                        <Image src={fb} width="16px" className="login_fb_logo"/>
                                        <span className="login_fb_text">Log in with Facebook</span>
                                    </div>

                                    <div className="login_pf mt-3">
                                        <a href="#">Forgotten your password?</a>
                                    </div>
                                </Card>

                                <Card className="mt-2 inst_login_signup">
                                        <p>Don't have an account? <a href="#">Sign up</a></p>
                                </Card>

                                <div className="inst_app">
                                    <p>Get the app.</p>
                                    <div>
                                        <Image src={appstore} width="136px" height="40px" className="inst_app_apple"/>
                                        <Image src={playstore} width="136px" height="40px" className="inst_app_google"/>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                    </Col >

                    <Col className="" style={{border: "1px solid black"}}></Col>
                </Row>
    </>
}

export default LoginPage;