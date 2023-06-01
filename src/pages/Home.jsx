import '../App.css'
import Image from '../assets/bulb_2.jpg';
import { LoremIpsum } from "lorem-ipsum";
function Home() {

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  return (

    <div><div className='container'>
      <h2>Welcome to our Recruitment App</h2>
      <br />
      <div className="container">
        <img src={Image} className='img1' />
        <div className="centered  content-to-hide"><h1>Hi there... </h1>

          <h5>Do you know that you can save a lot of time with useing Ultimatejobs</h5>
          <h5>So what are you waiting for? start applying now </h5>
          <button className="button button-black"> Sign Up</button>

        </div>
      </div>
      <div className='container color4'>
      <hr />
      <h4>About us</h4>
      <hr />
      <div className="row">
        <div className="column">
          <center>
            <h4> Overview</h4></center>
          <p>This application is for applicants and recruiters where the recruiter has the right to add a job post and the applicant can browse all job openings and eventually apply after setting up his/her profile with the relevant data needed within the application process.</p>

        </div>
        <div className="column">
          <center><h4>Guide</h4></center>
          <p>if you are looking for job or looking for your future employees then this application is made for you. If you are an applicant start with setting up your profile, browse current vacancies, and eventually apply with one click. For recruiter, you can add a job post and view applicants Resumé while clicking on the application link on the navigation bar.</p>
        </div>
      </div>
      <hr />
      <h4>Contact us</h4>
      <hr />
      <div class="row">
        <div class="column"><label>Title</label><input placeholder="title" /> </div>
        <div class="column"><label>Email</label><input placeholder='email' /></div>

      </div>
      <label>Query</label>
      <textarea rows="30" cols="70" placeholder='your query' ></textarea>
      <button class="button button-black">Submit</button>
    </div></div></div>
  )
}
export default Home;