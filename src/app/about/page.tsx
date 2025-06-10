import Image from "next/image";

export const metadata = {
  title: "About Us - Elevate HR",
  description:
    "Learn more about Elevate HR's mission, values, and team. We're transforming human resources with strategic solutions tailored to your business.",
  openGraph: {
    title: "About Us - Elevate HR",
    description:
      "Discover Elevate HR's people-first approach, strategic thinking, and commitment to integrity. Meet the team driving HR transformation.",
    url: "https://www.elevatehr.com/about",
    siteName: "Elevate HR",
    type: "website",
  },
};

const values = [
  {
    title: "People-First Approach",
    description:
      "We prioritize the needs of our clients and their employees, fostering a positive and productive work environment.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="w-8 h-8"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-4-80a4,4,0,0,1,4-4h8a4,4,0,0,1,0,8h-8A4,4,0,0,1,124,136Zm4-40a4,4,0,0,1,4-4h8a4,4,0,0,1,0,8h-8A4,4,0,0,1,128,96Z" />
      </svg>
    ),
  },
  {
    title: "Strategic Thinking",
    description:
      "We provide innovative and data-driven HR strategies that align with your business objectives.",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="w-8 h-8"
      >
        <path d="M208,40H48A16,16,0,0,0,32,56V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,160H48V56H208ZM184,88a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,88Zm-8,32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm-8,32H80a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z" />
      </svg>
    ),
  },
  {
    title: "Integrity and Trust",
    description:
      "We uphold the highest ethical standards and maintain confidentiality in all our interactions.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="w-8 h-8"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v32h24A8,8,0,0,1,168,128Z" />
      </svg>
    ),
  },
];

const teamMembers = [
  {
    name: "Nehal Sharma",
    role: "CEO & Founder",
    image: "/david_rodriguez.jpg",
  },
  {
    name: "Elizabeth Holmes",
    role: "Head of HR Strategy",
    image: "/sarah_chen.jpg",
  },
  {
    name: "Tracy",
    role: "Director of Talent Acquisition",
    image: "/emily_carter.jpg",
  },
];

export default function AboutUs() {
  return (
    <div className="flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col flex-1 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
          At Elevate HR, we&apos;re dedicated to transforming human resources
          for modern businesses. Our team of experienced professionals brings a
          wealth of knowledge and a passion for innovation to every client
          engagement. We believe in fostering a culture of growth,
          collaboration, and excellence, both within our organization and for
          the companies we serve.
        </p>

        {/* Our Mission */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Our mission is to empower businesses with strategic HR solutions
            that drive success. We strive to be a trusted partner, providing
            tailored services that align with your unique goals and challenges.
            We&apos;re committed to delivering exceptional results and building
            long-term relationships based on trust and mutual respect.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${value.bgColor} ${value.textColor} mb-4`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-4 object-cover w-24 h-24"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
