

import React from "react";
import img1 from "../images/hec.jpg";

const Registration = () => {
  return (
    <div className=" mt-8 mx-10">
      <div className="bg-blue-600  text-white">
        <p className="font-bold text-2xl ml-10  mt-4">
          REGISTRATION FOR CENTRALIZED TEST
        </p>
      </div>

      <div className="w-full bg-white p-8">
        <img src={img1} alt="HEC Logo" className="mx-auto mb-5" />

        <hr className="border border-solid border-black mt-5" />

        <div className="text-black">
          <div className="mt-4">
            <p className="font-bold">Description:</p>
            <p className="text-justify">
              The Higher Education Commission (HEC) in collaboration with Special
              Investment Facilitation Council (SIFC), Ministry of IT & Telecom
              (MoITT), Pakistan Software Export Board (PSEB), Pakistan IT
              Industry Association (P@SHA), and National Computing Education
              Accreditation Council (NCEAC) is conducting a Centralized Test for
              the students of 7th Semester of CS & Related Disciplines through
              Virtual University Platform. This is part of an academia-industry
              co-opt program to facilitate the placement of talented IT students
              in IT industry to acquire hands-on experience on latest technologies
              for better job opportunities in the local and international market.
            </p>
          </div>

          <div className="mt-4">
            <p className="font-bold">Eligibility:</p>
            <p>
              Students who are currently enrolled in 7th Semester of BS/BE
              Computing or related disciplines.
            </p>
          </div>

          <div className="mt-4">
            <p className="font-bold">Registration Process:</p>
            <ol className="list-decimal pl-5">
              <li>Student application submission through this portal.</li>
              <li>
                Verification of registration details by the concerned Focal Person
                of each university (by Focal Person).
              </li>
              <li>
                Confirmation / Test details shall be forwarded by Virtual
                University to the eligible candidates (by Virtual University).
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
