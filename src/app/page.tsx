export const metadata = {
  title: "Elevate HR | Human Resources Solutions",
  description:
    "Comprehensive HR services including recruitment, employee management, and compliance tailored to elevate your workforce.",
  openGraph: {
    title: "Elevate HR | Human Resources Solutions",
    description:
      "Comprehensive HR services including recruitment, employee management, and compliance tailored to elevate your workforce.",
    url: "https://www.elevatehr.com",
    siteName: "Elevate HR",
    type: "website",
  },
};

import BannerImage from "./components/BannerImage";

const coreOfferings = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
      </svg>
    ),
    title: "Talent Acquisition",
    description:
      "Find the best candidates with our streamlined recruitment process.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
      </svg>
    ),
    title: "Employee Management",
    description: "Manage your workforce efficiently with our integrated tools.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
      </svg>
    ),
    title: "Compliance & Risk",
    description: "Ensure your business stays compliant with all regulations.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col flex-1">
        <div className="@container">
          <BannerImage
            imageUrl="/emptyChairRoom.webp"
            heading="Elevate Your Workforce"
            subtext="We provide comprehensive HR solutions tailored to your business needs. From recruitment to compliance, we\'ve got you covered."
            buttonText="Learn More"
            textContainerClassName="items-center"
            navigateLink="/about"
          />
        </div>
        <div className="flex flex-col gap-10 px-4 py-10 @container">
          <div className="text-center mb-12">
            <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold tracking-tight">
              Our Core Offerings
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
              At Elevate HR, we offer a range of services designed to streamline
              your HR operations and enhance employee satisfaction. From talent
              acquisition to performance management, we provide the expertise
              and support you need to succeed.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
            {coreOfferings.map((offering, index) => (
              <div
                key={index}
                className="flex flex-1 gap-3 rounded-lg border border-gray-200 bg-white p-4 flex-col"
              >
                <div className="text-gray-900">{offering.icon}</div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 text-base font-bold leading-tight">
                    {offering.title}
                  </h2>
                  <p className="text-gray-600 text-sm font-normal leading-normal">
                    {offering.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BannerImage
          imageUrl="/banner2.webp"
          heading="Ready to Transform Your HR?"
          subtext="Contact us today to discuss how we can help your business grow."
          buttonText="Contact Us"
          textContainerClassName="items-start"
          navigateLink="/contact"
        />
      </div>
    </div>
  );
}
