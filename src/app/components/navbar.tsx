"use client";
import Link from "next/link";

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export const NavBar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white text-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-900"
          >
            <g clipPath="url(#clip0_40_7)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.1854 11.8818V5.1182C13.1854 5.736 12.2924 6.28123 10.9309 6.6063C10.0971 6.80533 9.08767 6.92183 8 6.92183C6.91233 6.92183 5.90287 6.80533 5.0691 6.6063C3.70757 6.28123 2.81455 5.736 2.81455 5.1182V11.8818C2.81455 12.4996 3.70757 13.0449 5.0691 13.3699C5.90287 13.569 6.91233 13.6855 8 13.6855C9.08767 13.6855 10.0971 13.569 10.9309 13.3699C12.2924 13.0449 13.1854 12.4996 13.1854 11.8818Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.48283 5.1173C3.49163 5.14237 3.5401 5.24867 3.793 5.41203C4.09933 5.60993 4.58307 5.80483 5.2239 5.95783C6.00023 6.1432 6.95707 6.25517 8 6.25517C9.04293 6.25517 9.99977 6.1432 10.7761 5.95783C11.4169 5.80483 11.9007 5.60993 12.207 5.41203C12.4599 5.24867 12.5084 5.14237 12.5172 5.1173C12.5096 5.09587 12.4778 5.03243 12.3545 4.93103C12.1755 4.78387 11.8763 4.62157 11.4477 4.4725C10.5967 4.1765 9.37777 3.98123 8 3.98123C6.62223 3.98123 5.4033 4.1765 4.55233 4.4725C4.12373 4.62157 3.82447 4.78387 3.6455 4.93103C3.52223 5.03243 3.49043 5.09587 3.48283 5.1173ZM12.5188 6.76257C12.1059 6.96417 11.6167 7.12797 11.0857 7.25473C10.1945 7.4675 9.13243 7.5885 8 7.5885C6.86757 7.5885 5.80547 7.4675 4.9143 7.25473C4.38327 7.12797 3.89413 6.96417 3.4812 6.76257V11.8758C3.48383 11.8848 3.51423 11.9956 3.793 12.1757C4.09933 12.3736 4.58307 12.5685 5.2239 12.7215C6.00023 12.9068 6.95707 13.0188 8 13.0188C9.04293 13.0188 9.99977 12.9068 10.7761 12.7215C11.4169 12.5685 11.9007 12.3736 12.207 12.1757C12.4858 11.9956 12.5162 11.8849 12.5188 11.8758V6.76257ZM13.8521 5.1182V11.8818C13.8521 12.5359 13.386 13.0014 12.9305 13.2956C12.4499 13.6061 11.8064 13.8463 11.0857 14.0184C10.1945 14.2311 9.13243 14.3521 8 14.3521C6.86757 14.3521 5.80547 14.2311 4.9143 14.0184C4.1936 13.8463 3.55007 13.6061 3.06949 13.2956C2.61402 13.0014 2.14788 12.5359 2.14788 11.8818V5.1182C2.14788 4.58947 2.45741 4.1818 2.7986 3.9012C3.14442 3.61683 3.60457 3.39047 4.11433 3.21316C5.1401 2.85636 6.51393 2.64789 8 2.64789C9.48607 2.64789 10.8599 2.85636 11.8857 3.21316C12.3954 3.39047 12.8556 3.61683 13.2014 3.9012C13.5426 4.1818 13.8521 4.58947 13.8521 5.1182Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_40_7">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
            Elevate HR
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white text-gray-900">
            {NavLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
