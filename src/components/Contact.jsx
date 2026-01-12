export default function Contact() {
  return (
    
    <section id="contact" className="py-20 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input className="p-3 bg-gray-800 rounded" placeholder="Name" />
        <input className="p-3 bg-gray-800 rounded" placeholder="Email" />
        <textarea className="p-3 bg-gray-800 rounded h-32" placeholder="Message"/>
        <button className="bg-blue-500 py-3 rounded font-semibold">
          Send Message
        </button>
      </form>
    </section>
  );
}
