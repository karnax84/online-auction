import { Link } from "react-router";
// import { AdsComponent } from "../components/AdsComponent";
import { useSelector } from "react-redux";

export const About = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-sm shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            About This Project
          </h1>

          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              Welcome to our Online Auction System - a comprehensive web
              application designed to facilitate online bidding and auctions.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Project Purpose
              </h2>
              <p>
                This project has been developed as an educational resource for
                students pursuing their final year or third year minor/major
                projects. It serves as a practical example of building a
                full-featured web application with modern technologies and best
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                For Students
              </h2>
              <p>
                If you're a computer science or related field student working on
                your academic project, you can use this codebase to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Understand modern web development patterns and practices
                </li>
                <li>Learn how to implement real-time bidding systems</li>
                <li>Study user authentication and authorization</li>
                <li>Explore database design for auction systems</li>
                <li>Learn about responsive design and user experience</li>
              </ul>
            </section>

            {/* {!user && <AdsComponent dataAdSlot="1002244889" />} */}

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>User registration and authentication</li>
                <li>Real-time auction bidding</li>
                <li>Item listing and management</li>
                <li>User profile management</li>
                <li>Responsive design for all devices</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
