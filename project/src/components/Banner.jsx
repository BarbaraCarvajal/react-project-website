import {ArrowRightCircle} from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';



const Banner = () => {
    return(
        <>
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my portfolio
                        </span>
                        <h1>{`Hi I'm Barbarita `}<span className="wrap">Developer</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in non atque aut accusamus id officiis blanditiis rem libero quod eaque nulla eum animi placeat assumenda, hic facere? Eaque, ut?</p>
                        <button onClick={() => console.log('connect')}>Let's connect </button>
                    </Col>

                </Row>
            </Container>

        </section>
        </>
    )
}

export default Banner;