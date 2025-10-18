import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const Education = ({ data }) => {
  if (!data || data.length === 0) return <div>No education available</div>;

  // Hardcoded courses for IIT Jodhpur
  const iitJodhpurCourses = {
    computerScience: [
      "Introduction to Computer Science",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Systems",
      "Design and Analysis of Algorithms",
      "Computer Architecture",
      "Computer Networks",
      "Cryptography",
      "Virtualization and Cloud Computing",

    ],
    aiCourses: [
      "Pattern Recognition and Machine Learning",
      "Deep Learning",
      "Computer Vision"
    ],
    mathematics: [
      "Design and analysis of Experiments",
      "Probability Statistics and Stochastic process",
      "Mathematics I",
      "Mathematics II"
    ],
    electrical: [
      "Communication Systems",
      "Data Communication Networks",
      "Embedded Systems and IoT",
      "Signals and Systems",
      "Modelling and Simulation",
      "Introduction to Electrical Engineering"
    ]
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="education-section"
    >
      <Container>
        <h2 className="section-title mb-5">Education</h2>
        <div className="timeline">
          {data.map((edu, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="timeline-marker">
                <FaGraduationCap className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h3 className="degree">{edu.degree}</h3>
                <div className="institution">{edu.institution}</div>
                <div className="duration">{edu.start_date} - {edu.end_date || 'Present'}</div>
                <p className="field-of-study">{edu.field_of_study}</p>

                {/* Display Courses for IIT Jodhpur */}
                {edu.institution === "Indian Institute of Technology, Jodhpur" && (
                  <div className="courses-section">
                    <h3>Courses Taken :</h3>
                    <div className="course-category">
                      <h4>Computer Science Courses</h4>
                      <ul>
                        <h5>
                        {iitJodhpurCourses.computerScience.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                        </h5>
                      </ul>
                    </div>
                    <div className="course-category">
                      <h4>AI Courses</h4>
                      <ul>
                        <h5>
                        {iitJodhpurCourses.aiCourses.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                        </h5>
                      </ul>
                    </div>
                    <div className="course-category">
                      <h4>Mathematics Courses</h4>
                      <ul>
                        <h5>
                        {iitJodhpurCourses.mathematics.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                        </h5>
                      </ul>
                    </div>
                    <div className="course-category">
                      <h4>Electrical Courses</h4>
                      <ul>
                        <h5>
                        {iitJodhpurCourses.electrical.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                        </h5>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Display Courses for Lohia Inter College */}
                {edu.institution === "Lohia Inter College, Prayagraj" && edu.degree === "Class XI-XII" && (
                  <div className="courses-section">
                    <h3>Courses Taken:</h3>
                    <ul>
                        <h5>
                      {["Physics", "Chemistry", "Mathematics", "Hindi", "English"].map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                        </h5>
                    </ul>
                  </div>
                )}

                {edu.institution === "Lohia Inter College, Prayagraj" && edu.degree === "Class IX-X" && (
                  <div className="courses-section">
                    <h3>Courses Taken:</h3>
                    <ul>
                        <h5>
                      {["Maths", "Science", "Hindi", "Social Science", "English", "Sanskrit"].map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                        </h5>
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Education;
