import { Helmet } from "react-helmet";

const Contact = () => {
  <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact us at CtrlSchool of Engineering"
        />
      </Helmet>
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" 
        required
        />
        <label>Email:</label>
        <input type="text" 
        required
        />
        <label>Message:</label>
        <textarea
          required
          ></textarea>
          <button>Submit</button>
      </form>

    </div>
  );
};

export default Contact;
