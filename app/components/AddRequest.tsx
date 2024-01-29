'use client'

import { useState } from "react";

export default function AddRequest() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [mail, setMail] = useState("");
  const [roomName, setRoomName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    try{
      fetch ('/api/add-request', {method: 'POST', headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        nim: nim,
        mail: mail,
        roomName: roomName,
        startDate: startDate,
        endDate: endDate,
      })
    })
    }catch(error){
      console.log(error);
    } finally{
      alert('Request has been submitted!')
    }

    // Reset form
    setName("");
    setNim("");
    setMail("");
    setRoomName("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <section className="w-full min-h-screen p-8 flex items-center justify-evenly ">
      <div className="w-2/4 text-center">
        <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">
          Form Peminjaman Ruangan
        </h1>
        <p className="text-gray-500 mb-6">
          Silahkan isi form untuk melakukan peminjaman ruangan
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        {/* Name, Nim, Side by Side */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="nim" className="text-sm">
              NIM
            </label>
            <input
              type="text"
              name="nim"
              id="nim"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Your NIM"
              required
            />
          </div>
        </div>
        {/* Email Address*/}
        <div className="flex-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded mt-1"
            placeholder="Your Phone Number"
            required
          />
        </div>
        {/* Dropdown Room Name */}
        <div className="flex-1">
          <label htmlFor="roomName" className="text-sm">
            Room Name
          </label>
          <select
            name="roomName"
            id="roomName"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded mt-1"
            required
          >
            <option value="">Select Room</option>
            <option value="Colab 1">Colab 1</option>
            <option value="Colab 2">Colab 2</option>
            <option value="Colab 3">Colab 3</option>
            <option value="Colab 4">Colab 4</option>
            <option value="Colab 5">Colab 5</option>
            <option value="Colab 6">Colab 6</option>
            <option value="Podcast">Podcast Room</option>
          </select>
        </div>
        {/* Start Date, End Date Side by Side */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="startDate" className="text-sm">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded mt-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="endDate" className="text-sm">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded mt-1"
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
}