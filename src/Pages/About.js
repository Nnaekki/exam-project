import { Helmet } from "react-helmet";
const About = () => {
    <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="About CtrlSchool of Engineering"
        />
      </Helmet>
    return ( 
        <div className="about">
            <h2>About CtrlSchool</h2>
            <p> CtrlSchool of Engineering was created to give enthusiatic tech students a chance to learn more and improve on their tech skills with practical courses that have real life applications. You won't believe it, but one of our students created this entire website using React. We want the same for you too!</p>
        </div>
     );
}
 
export default About;