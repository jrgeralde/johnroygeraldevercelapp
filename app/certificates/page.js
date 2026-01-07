// app/certificates/page.tsx
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import BackToTop from "../components/BackToTop"; // adjust the path as needed

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function CertificatesPage() {
  return (
    <>
      <Head>
        <title>Home | John Roy Geralde</title>
      </Head>
      <div className="w-full px-2 py-4 max-w-full mx-auto">
        <h2 className="text-2xl font-semibold transform hover:scale-105 transition-transform duration-200"> <FontAwesomeIcon icon={faCertificate} className="mr-2 "/>My Certificates</h2>
        <hr />
      </div>

      <div className="flex flex-col md:flex-row min-h-screen gap-4 p-0 m-0.5">
      
        {/* Left Column */}
        <div className="w-full md:w-[50%] p-4 bg-white rounded-lg shadow">
          {/* EFSET */}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

              <a 
                  href="https://cert.efset.org/32zuaQ"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=" hover:text-blue-600 underline font-medium"
                >
                  View Actual Certificate on EF SET Website
              </a>
       
              <h5 className="text-2xl font-semibold"><FontAwesomeIcon icon={faCertificate} className="mr-2 text-base text-blue-600"/>
                  English Certification from EF Set - C1 ADVANCED
              </h5>
              <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>October 21, 2025</h6>

              <img
                  src="/assets/images/efset.jpg"
                  alt="Avatar"
                  className="mx-auto rounded-lg  border-2 border-black-900"
                />

          </div>

          {/* COURSERA - GRAPHQL Basics */}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

              <a 
                  href="https://www.coursera.org/account/accomplishments/verify/XTXQCSYD9DKT"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=" hover:text-blue-600 underline font-medium"
                >
                  View Actual Certificate on COURSERA Website
              </a>
       
              <h5 className="text-2xl font-semibold"><FontAwesomeIcon icon={faCertificate} className="mr-2 text-base text-blue-600"/>
                  COURSERA GraphQL Basics Training
              </h5>
              <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>November 11, 2025</h6>

              <img
                  src="/assets/images/CourseraGraphQL.JPG"
                  alt="Avatar"
                  className="mx-auto rounded-lg  border-2 border-black-900"
                />

          </div>

          {/* COURSERA - GRAPHQL Intermediate */}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

              <a 
                  href="https://www.coursera.org/account/accomplishments/verify/1IX1VHFOLQKI"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=" hover:text-blue-600 underline font-medium"
                >
                  View Actual Certificate on COURSERA Website
              </a>
       
              <h5 className="text-2xl font-semibold"><FontAwesomeIcon icon={faCertificate} className="mr-2 text-base text-blue-600"/>
                  COURSERA GraphQL Intermediate Training
              </h5>
              <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>November 22, 2025</h6>

              <img
                  src="/assets/images/CourseraGraphQL2.JPG"
                  alt="Avatar"
                  className="mx-auto rounded-lg  border-2 border-black-900"
                />

          </div>

     {/* COURSERA - ADVANCE Training */}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

              <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/15BCB2YXKZ41"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=" hover:text-blue-600 underline font-medium"
                >
                  View Actual Certificate on COURSERA Website
              </a>
       
              <h5 className="text-2xl font-semibold"><FontAwesomeIcon icon={faCertificate} className="mr-2 text-base text-blue-600"/>
                  COURSERA GraphQL ADVANCE Training
              </h5>
              <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>January 2, 2026</h6>

              <img
                  src="/assets/images/CourseraGraphQL3.JPG"
                  alt="Avatar"
                  className="mx-auto rounded-lg  border-2 border-black-900"
                />

          </div>          

        </div>

        {/* Right Column */}
        <div className="w-full md:w-[50%] p-4 bg-white rounded-lg shadow">        

          {/* UDEMY Fullstack Web Development Certificate*/}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

            <a 
                href="https://www.udemy.com/certificate/UC-30fdd047-02d7-4572-9cce-e5f976af32ab"
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-blue-600 underline font-medium"
              >
                View Actual Certificate on UDEMY Website
            </a>

            <h5 className="text-2xl font-semibold"><FontAwesomeIcon icon={faCertificate} className="mr-2 text-base text-blue-600"/>
              UDEMY Fullstack Web Development Certificate
            </h5>
            <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>November 25, 2025</h6>

            <img
                src="/assets/images/UDEMYFULLSTACKCOURSE.JPG"
                alt="Avatar"
                className="mx-auto rounded-lg  border-2 border-black-900"
              />

          </div>

          {/* Coursera React Basics Certificate*/}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

            <a 
                href="https://www.coursera.org/account/accomplishments/verify/J0J76S0EUWE7"
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-blue-600 underline font-medium"
              >
                View Actual Certificate on COURSERA Website
            </a>

            <h5 className="text-2xl font-semibold"><FontAwesomeIcon icon={faCertificate} className="mr-2 text-base text-blue-600"/>
              COURSERA React Basics Certificate
            </h5>
            <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>November 11, 2025</h6>

            <img
                src="/assets/images/CourseraReactBasics.JPG"
                alt="Avatar"
                className="mx-auto rounded-lg  border-2 border-black-900"
              />

          </div>

          {/* Coursera Introduction to Next JS Certificate*/}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

            <a 
                href="https://www.coursera.org/account/accomplishments/verify/086C3YS43LXO"
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-blue-600 underline font-medium"
              >
                View Actual Certificate on COURSERA Website
            </a>

            <h5 className="text-2xl font-semibold"><FontAwesomeIcon icon={faCertificate} className="mr-2 text-base text-blue-600"/>
              COURSERA Introduction to Next JS Certificate
            </h5>
            <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>November 25, 2025</h6>

            <img
                src="/assets/images/CourseraIntroductiontoNextJS.JPG"
                alt="Avatar"
                className="mx-auto rounded-lg  border-2 border-black-900"
              />

          </div>

          {/* UDEMY MS SQL Fail Over Cluster Certificate*/}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

            <a 
                href="https://www.udemy.com/certificate/UC-9c70be1b-7445-408a-82eb-a8333b5fb2fb"
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-blue-600 underline font-medium"
              >
                View Actual Certificate on UDEMY Website
            </a>

            <h5 className="text-2xl font-semibold"><FontAwesomeIcon icon={faCertificate} className="mr-2 text-base text-blue-600"/>
              UDEMY MS SQL Fail Over Cluster Certificate
            </h5>
            <h6 className="text-sm text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-base text-black"/>November 25, 2025</h6>

            <img
                src="/assets/images/UDEMYMSSQLSERVERFOCLUSTER.JPG"
                alt="Avatar"
                className="mx-auto rounded-lg  border-2 border-black-900"
              />

          </div>


        </div>

      </div>  
         {/* Floating Back to Top Button */}
         <BackToTop />
    </>
  );
}
