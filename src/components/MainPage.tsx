import React from "react";

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Header / Name */}
        <div className="text-center mb-6">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-28 h-28 mx-auto rounded-full shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4">Marcin Kolber</h1>
          <p className="text-gray-600">Full-Stack Developer</p>
        </div>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">
            Work Experience
          </h2>
          <ul className="space-y-2">
            <li>
              <h3 className="font-medium">Software Developer – Tech Corp</h3>
              <p className="text-sm text-gray-600">2021 – Present</p>
              <p className="text-gray-700">
                Building full-stack applications with .NET and React.
              </p>
            </li>
            <li>
              <h3 className="font-medium">IT Specialist – Biz Solutions</h3>
              <p className="text-sm text-gray-600">2019 – 2021</p>
              <p className="text-gray-700">
                Supported enterprise systems and optimized workflows.
              </p>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              .NET
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              Docker
            </span>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">
            Education
          </h2>
          <p>
            <span className="font-medium">
              MSc in Advanced Computer Science – University of Manchester
            </span>
            <br />
            <span className="text-gray-600">2019 – 2020</span>
          </p>

           <p>
            <span className="font-medium">
              BSc in Software Engineering – Swansea University
            </span>
            <br />
            <span className="text-gray-600">2016 – 2019</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
