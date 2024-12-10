import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      {/* About Me */}
      <header className="flex flex-col items-center text-center mb-10">
        <Image
          src="/photo/Screenshot 2023-10-10 154121.png" 
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold mt-4">Thithada Islam</h1>
        <p className="text-gray-600">Tomas</p>
      </header>

      <section className="text-center mb-10">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4 inline-block">
          About me
        </h2>
        
      </section>

      {/* Programming Skills */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4 inline-block">
          Programming Skills
        </h2>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <li className="bg-white p-4 rounded shadow">JavaScript</li>
          <li className="bg-white p-4 rounded shadow">Python</li>
          <li className="bg-white p-4 rounded shadow">React</li>
          <li className="bg-white p-4 rounded shadow">SQL</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4 inline-block">
          Contact
        </h2>
        <p className="text-gray-600">อีเมล: 66026055@up.ac.th</p>
        <p className="text-gray-600">เบอร์โทร: 0934949511</p>
      </section>
    </div>
  );
}
