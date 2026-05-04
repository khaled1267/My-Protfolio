
// import { LuGraduationCap, LuBriefcase } from "react-icons"; // React Icons ব্যবহার করলে ভালো

import { LucideBriefcase, LucideGraduationCap } from "lucide-react";

const Qualification = () => {
  const educationData = [
    {
      title: "SSC",
      institute: "Abdus Subhan Model Dhamrai,Dhaka",
      year: "2020 - 2023",
      position: "left",
    },
    {
      title: "Diploma",
      institute: "Barguna politacnic Inistitute",
      year: "2024 - 2027",
      position: "right",
    },
    {
      title: "B. Sc. in CSE",
      institute: "Private Univarcity",
      year: "2028 - 2031",
      position: "left",
    },
  ];

  return (
    <section className="bg-[#0a0c10] text-white py-20 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Qualification</h2>
          <p className="text-gray-400">My personal journey</p>
        </div>

        {/* Tabs (Experience & Education) */}
        <div className="flex justify-center gap-10 mb-16 text-xl">
         
          <div className="flex items-center gap-2 text-blue-500 border-b-2 border-blue-500 pb-1 cursor-pointer">
            <LucideGraduationCap /> <span>Education</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-700 mx-auto w-fit md:w-full md:flex md:flex-col items-center">
          
          {educationData.map((edu, index) => (
            <div key={index} className={`relative mb-12 w-full flex justify-between items-center ${edu.position === 'left' ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content Box */}
              <div className="md:w-[45%] w-full pl-8 md:pl-0 md:text-right">
                {edu.position === 'right' && <div className="hidden md:block"></div>}
                <div className={edu.position === 'left' ? 'md:text-right' : 'md:text-left'}>
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                  <p className="text-gray-400 text-sm">{edu.institute} - Institute</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 justify-start md:justify-end">
                    {/* Calendar Icon simulation */}
                    <span>📅 {edu.year}</span>
                  </div>
                </div>
              </div>

              {/* Central Circle Node */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900 shadow-[0_0_10px_white]"></div>

              {/* Empty Space for opposite side */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Qualification;