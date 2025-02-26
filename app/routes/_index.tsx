
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tech Meetup 2023" },
    { name: "description", content: "Join our exciting tech meetup event!" },
  ];
};

const resources = [
  {
    href: "#register",
    text: "Register Now",
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
          d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "#agenda",
    text: "View Agenda",
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
          d="M2 16L10 8L18 16M10 8V2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "#speakers",
    text: "Meet the Speakers",
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
          d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 18C16 14.6863 13.3137 12 10 12C6.68629 12 4 14.6863 4 18"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-blue-600 px-6 py-20 text-white dark:bg-blue-800">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Tech Meetup 2023</h1>
        <p className="mb-6 text-xl">Connect, Learn, and Grow with Fellow Developers</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href="#register"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            Register Now
          </a>
          <a
            href="#learn-more"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Event Details */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold">Date & Time</h2>
            <p className="text-center text-gray-600 dark:text-gray-300">November 15, 2023</p>
            <p className="text-center text-gray-600 dark:text-gray-300">9:00 AM - 5:00 PM</p>
          </div>
          
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold">Location</h2>
            <p className="text-center text-gray-600 dark:text-gray-300">Tech Hub Conference Center</p>
            <p className="text-center text-gray-600 dark:text-gray-300">123 Innovation Street</p>
          </div>
          
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold">Ticket Price</h2>
            <p className="text-center text-gray-600 dark:text-gray-300">Early Bird: $49</p>
            <p className="text-center text-gray-600 dark:text-gray-300">Regular: $79</p>
          </div>
        </div>

        {/* About Section */}
        <div id="learn-more" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">About the Meetup</h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Join us for a day of inspiring talks, hands-on workshops, and networking opportunities. 
            Our tech meetup brings together developers, designers, and tech enthusiasts to share 
            knowledge and explore the latest trends in technology.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Whether you're a seasoned professional or just starting your journey in tech, 
            this event has something for everyone. Don't miss this chance to connect with 
            like-minded individuals and expand your horizons.
          </p>
        </div>

        {/* Registration Form Preview */}
        <div id="register" className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-bold">Register for the Event</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Secure your spot at the Tech Meetup 2023. Fill out the form below to register.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-600 dark:bg-gray-700" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-600 dark:bg-gray-700" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-600 dark:bg-gray-700" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-600 dark:bg-gray-700" />
            </div>
          </div>
          
          <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
            Submit Registration
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-gray-100 px-6 py-8 text-center dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-300">© 2023 Tech Meetup. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Terms</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
