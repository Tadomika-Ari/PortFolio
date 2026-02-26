import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import logopro from "./profile_LE.jpg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

        {/* HERO CARD */}
        <div className="flex flex-col items-center gap-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-10 max-w-lg w-full mx-4">
          
          {/* Photo */}
          <img
            src={logopro}
            alt="Lucas EECKHOUTTE"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          {/* Nom */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Lucas EECKHOUTTE
          </h1>

          {/* Titre */}
          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
            New developer !
          </p>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            I'm a new developer studying at Epitech. I love computer and new tech ! What else do I like ? I love read, write a book and video games ! Welcome to my portfolio !
          </p>

          {/* Boutons */}
          <div className="flex gap-4">
            <a
              href="/projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              My projects
            </a>
            <a
              href="/contact"
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              ...
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}
const user = {
  name: "Lucas EECKHOUTTE",
  imageSize: 90,
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
