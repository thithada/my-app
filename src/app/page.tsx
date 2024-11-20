import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Header */}
      <header className="flex flex-col items-center mb-10">
        <Image
          src="/photo/Screenshot 2023-10-10 154121.png" // เปลี่ยนเป็นรูปของคุณ
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold mt-4">Thithada Islam</h1>
        <p className="text-gray-600">66026055@up.ac.th</p>
        <p className="text-gray-600">0934949511</p>
      </header>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">
          Programming Skills
        </h2>
        <ul className="grid grid-cols-2 gap-4">
          <li className="bg-white p-4 rounded shadow">JavaScript</li>
          <li className="bg-white p-4 rounded shadow">Python</li>
          <li className="bg-white p-4 rounded shadow">React</li>
          <li className="bg-white p-4 rounded shadow">SQL</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">
          Projects
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600">Description of your project.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">Description of your project.</p>
          </div>
        </div>
      </section>

      {/* GPX Section */}
      <section>
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">
          GPX
        </h2>
        <p className="text-gray-600">
          คุณสามารถเพิ่มไฟล์ GPX หรือแผนที่ที่คุณต้องการแสดงในส่วนนี้
        </p>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600">
            ตัวอย่างการแสดงไฟล์ GPX (ใส่ลิงก์หรือ API สำหรับแผนที่)
          </p>
        </div>
      </section>
    </div>
  );
}
