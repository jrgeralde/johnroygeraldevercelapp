// app/page.tsx
import Head from "next/head";
import BackToTop from "./components/BackToTop"; // adjust the path as needed

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBriefcase, faEnvelope,faCogs,faLanguage,faUser,faChalkboardTeacher,faCalendarAlt, faPenNib,faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | John Roy Geralde</title>
      </Head>

      <div className="flex flex-col md:flex-row min-h-screen gap-4 p-0 m-0.5">
      
        {/* Left Column */}
        <div className="w-full md:w-[30%] p-4 bg-gray-50 rounded-lg shadow">
          <div className="text-center">
            <Image
              src="/assets/images/IDPIC.jpg"
              alt="Avatar"
              width={288}
              height={288}
              className="w-72 h-72 mx-auto rounded-full  border-4 border-black-900 transform hover:scale-105 transition-transform duration-200"
            />
            <h1 className="mt-4 text-2xl font-semibold transform hover:scale-105 transition-transform duration-200">John Roy Geralde</h1>
          </div>

          <div className="mt-6 space-y-6 text-lg font-base text-left">
            <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
              <p><FontAwesomeIcon icon={faBriefcase} className="mr-2 text-base text-blue-600"/>Computer Science Instructor / Software Engineer</p>
              <p> <FontAwesomeIcon icon={faHouse} className="mr-2 text-base text-blue-600"/>Davao City, Philippines</p>
              <p> <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-base text-blue-600"/>jrgeralde@gmail.com</p>
              <p><FontAwesomeIcon icon={faYoutube} className="mr-2 text-base text-blue-600"/>
                <a
                  href="https://www.youtube.com/@roytek7667/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  YouTube Channel
                </a>
              </p>
              <p><FontAwesomeIcon icon={faLinkedin} className="mr-2 text-base text-blue-600"/>
                <a
                  href="https://www.linkedin.com/in/john-geralde-20141593/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  LinkedIn Profile
                </a>
              </p>
              <p><FontAwesomeIcon icon={faGithub} className="mr-2 text-base text-blue-600"/>
                <a
                  href="https://jrageralde.github.io/ITC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  My JavaScript GitHub Demos
                </a>
              </p>
            </div>

            {/* Skills */}
            <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
              <p className="font-bold mb-2"><FontAwesomeIcon icon={faCogs} className="mr-2 text-base text-blue-600"/>Skills</p>

              {[
                { name: "NodeJS, ReactJS, NextJS", value: 70 },
                { name: "GraphQL", value: 70 },
                { name: "Python Fullstack Web Development Using Odoo 18/19", value: 90 },
                { name: "Delphi Desktop and Fullstack Web Development using UNIGUI", value: 90 },
                { name: "HTML, Javascript, CSS", value: 90 },
                { name: "Database Management using PostgreSQL, MySQL, MS SQL", value: 95 },
                { name: "CRM (Go High Level, GHL)", value: 60 },
              ].map((skill, idx) => (
                <div key={idx} className="mb-2">
                  <p className="text-lg">{skill.name}</p>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <div
                      className="bg-blue-900 h-4 rounded-full text-right pr-1 text-white text-xs"
                      style={{ width: `${skill.value}%` }}
                    >
                      {skill.value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
              <p className="font-bold mb-2"><FontAwesomeIcon icon={faLanguage} className="mr-2 text-base text-blue-600"/>Languages Spoken</p>
              {[
                { name: "English (EF Set Certified as C1, Advanced)", value: 90 },
                { name: "Visayan", value: 95 },
                { name: "Filipino", value: 90 },
              ].map((lang, idx) => (
                <div key={idx} className="mb-2">
                  <p className="text-lg">{lang.name}</p>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <div
                      className="bg-blue-900 h-4 rounded-full text-right pr-1 text-white text-xs"
                      style={{ width: `${lang.value}%` }}
                    >
                      {lang.value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[70%] p-4 space-y-6">
          <h2 className="text-2xl font-semibold transform hover:scale-105 transition-transform duration-200"> <FontAwesomeIcon icon={faUser} className="mr-2 "/>About Me</h2>
          <hr />
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h5 className="font-semibold"><FontAwesomeIcon icon={faCogs} className="mr-2 text-base text-blue-600"/>Software Engineer / Web Developer</h5>
            <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>1996 - Present</h6>
            <p className="mt-4 mb-1.5">
              Highly skilled software development professional bringing talents for software design, development and integration. Offering advanced knowledge of in-demand programming languages. Gained extensive background in writing code and developing software solutions to various local industry clients.
            </p>
            <p className="mt-1.5 mb-1.5 font-semibold">
              Practices Exemplary Work Ethic. Strives to exceed expectations and Prioritizes meeting deadlines without supervision. Aggressive yet cheerful with colleagues.
            </p> 
            <p className="mt-1.5 mb-1.5 font-semibold">
              Constantly Updates and Trains on Recent Developments on Technologies and Platforms, well trained in Reactjs,NextJs,GraphQL and Odoo.
            </p>  
            <p className="mt-1.5 mb-1.5 font-semibold">
              Specializes in Modernizing Legacy Systems, having wide experience in developing desktop and web solutions in Delphi, Unigui and C#.
            </p>
            <p className="mt-1.5 mb-1.5">
              An experienced Database Administrator with actual experience in Windows Server Failover Clustering and Replication.
            </p>
            <p className="mt-1.5 mb-1.5">An avid user of Linux and Ubuntu.</p>
            <p className="mt-1.5 mb-1.5 font-semibold"> Underwent training in CRM Using Go High Level (GHL)</p>
          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h5 className="font-semibold"><FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2 text-base text-blue-600"/>Computer Science Instructor, Ateneo de Davao University</h5>
            <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>November 1987 - Present</h6>
            <p className="mt-4 mb-1.5">
              Conducts actual classroom instruction designed to achieve course objectives that are aligned with the school&apos;s mission and vision.
            </p>
            
            <p className="mt-1.5 mb-1.5">
              Collaborates with industry, makes project proposals for software development, develops and implements software solutions for various aspects of their operation.
            </p>
            <p className="mt-1.5 mb-1.5">
              Mentors students, fostering a collaborative learning environment that promotes innovation and knowledge sharing on various projects with industry partners.
            </p>
            <p className="mt-1.5 mb-1.5 font-semibold">
              Maintains very high standard in delivering classes. Very rarely late in coming to class. And never been absent for years. Informs students early when class is not possible and very earnest in granting grade consultations so students can protest, complain or have grades corrected.
            </p>

          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h5 className="font-semibold"><FontAwesomeIcon icon={faPenNib} className="mr-2 text-base text-blue-600"/>
              Author of Various Youtube Instructional Videos on Computer Programming and Other Subject Areas
            </h5>
            <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>2021 - Present</h6>
            <p className="mt-4 mb-1.5">
              Instructional Videos on History of Computing, Boolean Logic and Circuitverse, Assembly Language Programming, Database Desktop Development using C#, Introduction to Javascript, HTML and CSS.
              <b> Youtube channel:</b>{" "}
              <a
                href="https://www.youtube.com/@roytek7667/playlists"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                www.youtube.com/@roytek7667/playlists
              </a>
            </p>
          </div>

        
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <p className="font-bold"><FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-base text-blue-600"/>Education</p>
            <h6 className="text-sm text-black font-semibold mt-4"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>1996, Masters in Computer Science</h6>
            <p>Ateneo de Manila University</p>
            <p className="mb-4">Quezon City, Philippines</p>
            <h6 className="text-sm text-black font-semibold"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>1987, BS in Management Engineering</h6>
            <p>Ateneo de Davao University</p>
            <p>Davao City, Philippines</p>
          </div>
        </div>

      </div>
         {/* Floating Back to Top Button */}
         <BackToTop />
    </>
  );
}
