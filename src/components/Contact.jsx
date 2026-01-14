export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6
      bg-white text-gray-900
      dark:bg-black dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Contact Me
      </h2>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          className="p-3 rounded border
          bg-gray-100 border-gray-300
          dark:bg-gray-800 dark:border-gray-700"
          placeholder="Name"
        />

        <input
          className="p-3 rounded border
          bg-gray-100 border-gray-300
          dark:bg-gray-800 dark:border-gray-700"
          placeholder="Email"
        />

        <textarea
          className="p-3 rounded border h-32
          bg-gray-100 border-gray-300
          dark:bg-gray-800 dark:border-gray-700"
          placeholder="Message"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white
          py-3 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
