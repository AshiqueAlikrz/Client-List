import React from "react";
import UnstyledPaginationIntroduction from "./Pagination";
import { IoMdMore } from "react-icons/io";
import { userData } from "../data/userDummyData";

const TableList = () => {
  return (
    <div className="py-3 w-full h-full ">
      <div className="w-full h-screen  ">
        <table className="w-full bg-white border border-gray-300  ">
          <thead className="sticky top-0 h-16 bg-gradient-to-t from-cyan-600 to-sky-900 ">
            <tr>
              <th className="py-3 px-4 border-b text-left rounded-l-2xl text-white font-semibold">No</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">Date</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">Name</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">Contact</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">Brief</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">DMT</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">Client Manager</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">Followup</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">Calls</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold">Meeting</th>
              <th className="py-3 px-4 border-b text-left text-white font-semibold rounded-r-2xl">Action</th>
            </tr>
          </thead>

          <tbody className="w-full h-full  ">
            {userData.map((userData, index) => (
              <tr className={` border hover:bg-gray-100  ${index % 2 === 0 ? "bg-white" : "bg-blue-100"} `} key={index}>
                <td className="text-left py-5 px-4 border-b  rounded-l-2xl">{userData.no}</td>
                <td className="text-left py-5 px-4 border-b ">
                  <p className="font-light-">{userData.date}</p>
                  <p className="text-sm font-light">{userData.contactTime}</p>
                </td>
                <td className="text-left py-5 px-4 border-b">{userData.name}</td>
                <td className="text-left py-5 px-4 border-b">
                  {userData.email}
                  <p className="text-sm font-light">{userData.phoneNumber}</p>
                </td>
                <td className="text-left py-5 px-4 border-b">{userData.brief}</td>
                <td className="text-left py-5 px-4 border-b">{userData.dmt}</td>
                <td className="text-left py-5 px-4 border-b">{userData.clientManager}</td>
                <td className="text-left py-5 px-4 border-b ">{userData.followup}</td>
                <td className="text-left py-5 px-4 border-b ">
                  <p className="bg-yellow-100 h-8 w-8 rounded-full flex justify-center items-center border-yellow-200 border-2">{userData.calls}</p>
                </td>
                <td className="py-5 px-4 border-b">
                  <p className="bg-green-100 h-8 w-8 rounded-full flex justify-center items-center border-green-200 border-2">{userData.meeting}</p>
                </td>
                <td className="py-5 px-4 border-b rounded-r-2xl">
                  <IoMdMore className="size-5" />
                </td>
              </tr>
            ))}
            <div className="w-full h-10"></div>
          </tbody>
        </table>
      </div>
      <div className="fixed bottom-0 w-screen h-16 flex justify-end bg-white">
        <UnstyledPaginationIntroduction />
      </div>
    </div>
  );
};

export default TableList;
