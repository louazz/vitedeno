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
        <div class="container">
        <img src={Image} />
        <div class="centered  content-to-hide"><h1>Hi there... </h1>

          <h5>Do you know that you can save a lot of time with useing Ultimatejobs</h5>
          <h5>So what are you waiting for? start applying now </h5>
          <button class="button button-black"> Sign Up</button>

        </div>
        </div>
        <hr/>
        <h4>About us</h4>
        <hr />
        <div class="row">
          <div class="column">
            <center>
<h4>Title 1</h4></center>
<p>{lorem.generateParagraphs(2)}</p>

          </div>
          <div class="column">
          <center><h4>Title 2</h4></center>
<p>{lorem.generateParagraphs(2)}</p>
          </div>
        </div>
        <hr/>
<h4>Contact us</h4>
        <hr/>
        <div class="row">
          <div class="column"><label>Title</label><input placeholder="title"/> </div>
          <div class="column"><label>Email</label><input placeholder='email'/></div>
    
        </div>
        <label>Query</label>
        <textarea rows="30" cols="70" placeholder='your query' ></textarea>
<button class="button button-black">Submit</button>
      </div></div>
  )
}
export default Home;