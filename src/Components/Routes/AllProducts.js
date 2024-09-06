import React from "react";

const AllProducts = () => {
  return (
    <div className="solutions-container">
      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white py-14 md:py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Wireless Network Communication System</h1>
        <p className="text-lg">DGMS certified system for Underground and OpenCast Mines.</p>
      </section>

      {/* Solutions Overview */}
      <section className="solutions-overview py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Underground Mining Solution */}
          <div className="solution-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Underground Mining</h3>
            <p className="text-base">
              SmartKavach devices worn by miners provide real-time data to surface control rooms,
              including video calls, safety alerts, and health monitoring, enhancing miner safety and communication.
            </p>
            <ul className="list-disc ml-4 mt-4">
              <li>Wi-Fi Mesh Network</li>
              <li>Real-Time Safety Alerts</li>
              <li>Video and Audio Communication</li>
              <li>Heart Rate Monitoring</li>
            </ul>
          </div>

          {/* OpenCast Mining Solution */}
          <div className="solution-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">OpenCast Mining</h3>
            <p className="text-base">
              Reliable, self-managing Wi-Fi Mesh Network ensures seamless and cost-effective communication across large open mining areas.
            </p>
            <ul className="list-disc ml-4 mt-4">
              <li>Cost-Efficient Connectivity</li>
              <li>Wireless Communication</li>
              <li>High Reliability in Extreme Conditions</li>
            </ul>
          </div>

          {/* Healthcare Solutions */}
          <div className="solution-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Mobile Health Care</h3>
            <p className="text-base">
              SmartKavach aids paramedics with live video feeds, patient tracking, and remote monitoring of vital signs, enabling quick response during emergencies.
            </p>
            <ul className="list-disc ml-4 mt-4">
              <li>Live Video Communication</li>
              <li>Vital Signs Monitoring</li>
              <li>GPS-Enabled Patient Tracking</li>
            </ul>
          </div>

          {/* Customized Solutions */}
          <div className="solution-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Customized Solutions</h3>
            <p className="text-base">
              EasyM2M offers customized wireless communication and monitoring systems tailored for your industrial needs.
            </p>
            <ul className="list-disc ml-4 mt-4">
              <li>Real-Time Monitoring</li>
              <li>Safety Alerts and Notifications</li>
              <li>Fully Customized Solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
