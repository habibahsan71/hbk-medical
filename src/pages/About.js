import React from "react";

const About = () => {
  return (
    <div className='container my-5'>
      <div className='d-flex my-5 '>
        <div className='col-md-8'>
          <h1>Our <span className="text-info">Services</span>? </h1>
          <p className="para">
            Music education is a field of practice in which educators are trained for careers as elementary or secondary music teachers, school or music conservatory ensemble directors. Music education is also a research area in which scholars do original research on ways of teaching and learning music.
            Music education improves and develops language skills in children. Music stimulates the brain, and with its varied sounds and lyrics, students are exposed to a large amount of vocabulary in a short amount of time.
          </p>
        </div>
        <div className='col-md-4'>
          <img className="w-75 rounded" src="https://i.ibb.co/gtcqQdq/1.jpg" alt="healthy food"></img>
        </div>
      </div>
      <div className='d-flex my-5'>
        <div className='col-md-4'>
          <img className="w-75 rounded" src="https://i.ibb.co/jM24fTx/2.jpg" alt="healthy food"></img>
        </div>
        <div className='col-md-8'>
          <h1>We Provide Best <span className="text-info">Surgeons</span></h1>
          <p className="para">
            Chorus is a portion of music education focused on the vocal skills of students, improving these skills through performance, memorization and reading of music. Chorus can be a requirement for elementary school students in many school districts, though it is often offered as an elective or extracurricular activity through middle and high school. In elementary school, teachers introduce students to notes, pitch, rhythm and other basic choral concepts. Often, the music instructors will teach children short songs with few notes to introduce the art of singing. Middle School choirs begin to sing more difficult songs and introduce harmony, a method which will be built upon in high school.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
