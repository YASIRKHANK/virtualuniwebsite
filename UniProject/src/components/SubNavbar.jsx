
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/virtual.png";  
import img2 from "../images/admission.png";  
import img3 from "../images/facultis.png";  
import img4 from "../images/student.png";  
import img5 from "../images/campus.png";  
import img6 from "../images/opportunities.png";  
import img7 from "../images/links.png";  

function SubNavbar() {
  const [showContent, setShowContent] = useState("");
  const items = [
    { title: "About Us", image: img1 },
    { title: "Admissions", image: img2 },
    { title: "Faculties", image: img3},
    { title: "Students", image: img4},
    { title: "Virtual Campuses", image: img5},
    { title: "Opportunities", image: img6},
    { title: "Important Links", image: img7},
  ];

  // Function to handle hover and set the currently hovered item
  const handleHover = (item) => {
    setShowContent(item);
  };

  // Function to handle leaving the hover and hide content for the item
  const handleLeave = () => {
    setShowContent("");
  };

  return (
    <nav className="bg-gray-700 h-28 text-white">
      <ul className="flex  ml-20 gap-x-20">
        {items.map((item) => (
          <li key={item.title} className="relative">
            <div
              onMouseEnter={() => handleHover(item.title)}
              onMouseLeave={handleLeave}
            >
              <img 
                src={item.image} 
                // alt={item.title} 
                className="" 
                style={{ 
                  width: "50px",   
                  height: "35px",  
                 marginTop:"30px",
                 marginLeft:"10px"

                  
                }} 
              />
              <Link to="#">{item.title}</Link>
              {showContent === item.title && (
                <div className="absolute top-full bg-white border ">
                  {item.title === "About Us" && (
                    <div className="w-48 text-black ">
                    <Link to="https://www.vu.edu.pk/AboutUs/ChancellorMessage.aspx"  className="hover:bg-gray-500">Chancellor's Message</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/AboutUs/VisionAndMission.aspx" className="hover:bg-gray-500">Vision and  Mission</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/AboutUs/AboutVU.aspx" className="hover:bg-gray-500">Introduction</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/AboutUs/Organization.aspx" className="hover:bg-gray-500">Organizational Structure</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/AboutUs/Bog.aspx" className="hover:bg-gray-500"> Board of Governors</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/HowVuWorks.aspx" className="hover:bg-gray-500"> Mode of Education</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/AboutUs/Faculty.aspx" className="hover:bg-gray-500">FACULTY MEMBERS INFO</Link>
                    <br />
                  </div>
                  )}
                
                {item.title === "Admissions" && (
                    <div className="w-48 text-black ">
                    <Link to="https://www.vu.edu.pk/Admissions/AdmissionProcedure.aspx"  className="hover:bg-gray-500">Admision Schedule</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/FeeStructure.aspx" className="hover:bg-gray-500">Fee Structure</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/Fee/FeeCalculator.aspx" className="hover:bg-gray-500">Fee Claculator</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/prospectus/default.aspx" className="hover:bg-gray-500">Propectus</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/Apply/Admissions.aspx" className="hover:bg-gray-500"> How to Apply?</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/Apply/Login.aspx" className="hover:bg-gray-500">Online Apply</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/StudyScheme/" className="hover:bg-gray-500">Study Scheme</Link>
                    <br />
                  </div>
                  )}


{item.title === "Faculties" && (
                    <div className="w-48 text-black ">
                    <Link to="https://www.vu.edu.pk/pages/FacultyofArts.aspx"  className="hover:bg-gray-500">Faculties of Arts</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/FacultyofCS_IT.aspx" className="hover:bg-gray-500">Faculties of cs &nIT</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/FacultyofEducation.aspx" className="hover:bg-gray-500">Faculties Eduction</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/FacultyofManagement.aspx" className="hover:bg-gray-500">Faculties Managment</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/FacultyofScience_Technology.aspx" className="hover:bg-gray-500">Faculties Science & Technology</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/AcademicPrograms/CertificateCourses.aspx" className="hover:bg-gray-500">Certified Courses</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/ZeroSemester.aspx" className="hover:bg-gray-500">Zero Semester</Link>
                    <br />
                  </div>
                  )}



{item.title === "Students" && (
                    <div className="w-48 text-black ">
                    <Link to="https://www.vu.edu.pk/Orientation/VUOrientation.aspx"  className="hover:bg-gray-500">How to study at VU</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/studentservices/academiccalendar.aspx" className="hover:bg-gray-500">Acadamic  Calendar</Link>
                    <br />
                    <Link to="https://handbook.vu.edu.pk/HandBook_Pages/LecturesatVU.htm" className="hover:bg-gray-500">Lecture Schedule</Link>
                    <br />
                    <Link to="https://vulms.vu.edu.pk/" className="hover:bg-gray-500">LMS login</Link>
                    <br />
                    <Link to="https://sbasse.lums.edu.pk/sites/default/files/inline-files/Undergraduate%20Student%20Handbook%202022-2023.pdf" className="hover:bg-gray-500">Student Handbook</Link>
                    <br />
                    <Link to="https://www.classcentral.com/collection/free-certificates" className="hover:bg-gray-500">Certified Courses</Link>
                    <br />
                    <Link to="https://email.com/" className="hover:bg-gray-500">VU Email</Link>
                    <br />
                  </div>
                  )}

                  {item.title === "Virtual Campuses" && (
                    <div className="w-48 text-black ">
                    <Link to="https://www.vu.edu.pk/PVCs/Default.aspx"  className="hover:bg-gray-500">Virtual Campuses</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/Pages/CampusOpportunityMain.aspx" className="hover:bg-gray-500">Become a virtual Campuses</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/PVCRules.aspx" className="hover:bg-gray-500">PVC Rules</Link>
                   
                  </div>
                  )}
                  

                  {item.title === "Opportunities" && (
                    <div className="w-48 text-black ">
                    <Link to="https://www.vu.edu.pk/Opportunities/Jobs.aspx"  className="hover:bg-gray-500">job</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/PVCRules.aspx" className="hover:bg-gray-500">Course Development</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/Opportunities/Tenders.aspx" className="hover:bg-gray-500">Tendars</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/pages/VendorRegistration.aspx">Vendor Regeistration</Link>
                    <br />
                    <Link to="https://qb.vu.edu.pk/public/ExaminerRegistration.aspx" className="hover:bg-gray-500">Examed Suprendent Registration</Link>
                    <br />
        
                  </div>
                  )}
                


                {item.title === "Important Links" && (
                    <div className="w-56 text-black ">
                    <Link to="https://www.vu.edu.pk/pages/harassmentProtection.aspx"  className="hover:bg-gray-500">Protection against harrasment</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/NewsDetails.aspx?type=&NewsId=3143" className="hover:bg-gray-500">Citizen portal</Link>
                    <br />
                    <Link to="https://oric.vu.edu.pk/" className="hover:bg-gray-500">ORC</Link>
                    <br />
                    <Link to="https://www.vu.edu.pk/verify/OnlineTranscriptVerification.aspx">Degree/Transcript verification</Link>
                    <br />
                    <Link to="https://www.digiskills.pk/" className="hover:bg-gray-500">DigiSkills</Link>
                    <br />
        
                  </div>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SubNavbar;
