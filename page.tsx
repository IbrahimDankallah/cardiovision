import { Metadata } from "next";
import Link from "next/link";
import { FiBook, FiClock, FiDownload, FiLock } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Training & Capacity Building | CardioVision Healthcare",
  description: "Professional training programs in cardiovascular technology including BLS, ACLS, ECG, and Echocardiography",
};

const shortCourses = [
  {
    title: "Basic Life Support (BLS)",
    description: "Essential life-saving skills for healthcare providers",
    duration: "1-2 days",
    level: "Beginner",
  },
  {
    title: "Advanced Cardiac Life Support (ACLS)",
    description: "Advanced training for managing cardiac emergencies",
    duration: "2-3 days",
    level: "Advanced",
  },
  {
    title: "ECG Interpretation",
    description: "Comprehensive training in reading and interpreting electrocardiograms",
    duration: "3-5 days",
    level: "Intermediate",
  },
  {
    title: "Echocardiography",
    description: "Hands-on training in cardiac ultrasound imaging and interpretation",
    duration: "1-2 weeks",
    level: "Advanced",
  },
];

const diplomaProgram = {
  title: "Diploma in Cardiovascular Technology",
  description: "Comprehensive program covering all aspects of cardiovascular technology, including theory and practical training",
  duration: "12-18 months",
  level: "Professional",
};

export default function TrainingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-3xl">
          <h1 className="heading-primary text-white mb-4">Training & Capacity Building</h1>
          <p className="text-xl text-primary-100">
            Empowering healthcare professionals with specialized cardiovascular training
          </p>
        </div>
      </section>

      {/* Short Courses */}
      <section className="section-container">
        <div className="mb-12 text-center">
          <h2 className="heading-secondary">Short Courses</h2>
          <p className="text-body max-w-2xl mx-auto">
            Intensive training programs designed to enhance skills in specific areas of cardiovascular care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {shortCourses.map((course, index) => (
            <div key={index} className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-body text-sm mb-3">{course.description}</p>
                </div>
                <FiBook className="h-8 w-8 text-primary-600 flex-shrink-0 ml-4" />
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <FiClock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                  {course.level}
                </span>
              </div>
              <button className="btn-primary w-full flex items-center justify-center">
                <FiLock className="h-4 w-4 mr-2" />
                Apply (Coming Soon)
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Diploma Program */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="heading-secondary mb-3">{diplomaProgram.title}</h2>
                <p className="text-body mb-4">{diplomaProgram.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <FiClock className="h-4 w-4 mr-1" />
                    <span>{diplomaProgram.duration}</span>
                  </div>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                    {diplomaProgram.level}
                  </span>
                </div>
              </div>
              <FiBook className="h-12 w-12 text-primary-600 flex-shrink-0 ml-6" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                <FiLock className="h-4 w-4 mr-2" />
                Apply (Coming Soon)
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <FiDownload className="h-4 w-4 mr-2" />
                Download Curriculum (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CME Programs */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-secondary text-center mb-8">Continuing Medical Education (CME)</h2>
          <div className="card">
            <p className="text-body mb-4">
              CardioVision offers regular CME programs for doctors and nurses to stay updated with the latest 
              developments in cardiovascular care. Our programs include:
            </p>
            <ul className="space-y-2 text-body">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Monthly clinical case discussions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Quarterly workshops on new techniques and technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Annual cardiovascular conference</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Online learning modules (coming soon)</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary inline-block">
                Contact Us for CME Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
