'use client'

import { useState } from "react";
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast
} from '@chakra-ui/react'

export default function AddRequest() {
  // Modal Management
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Form State
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [mail, setMail] = useState("");
  const [roomName, setRoomName] = useState("");
  const [startSession, setStartSession] = useState("");
  const [startDate, setStartDate] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email address (must contain an @student or @gmail domain)
    const emailRegex = /@student|@gmail\.com/;
    if (!emailRegex.test(mail)) {
      alert("Email must contain @student or @gmail domain");
      return;
    } else {
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
          startSession: startSession,
          // Convert date to ISO string
          startDate: new Date(startDate).toISOString(),
        })
      }).then((res) => {
        if (res.ok) {
          toast({
            title: 'Request Accepted',
            description: "Request will be reviewed by admin. Please wait for the confirmation via email.",
            status: 'success',
            duration: 9000,
            position: 'top-right',
            isClosable: true,
          })
        } else{
          toast({
            title: 'Request failed',
            description: "Date already booked, Please choose another date or room.",
            status: 'error',
            duration: 9000,
            position: 'top-right',
            isClosable: true,
          })
        }
      })
      }catch(error){
        console.error('Error:', error);
      } finally {
        // Close modal
        onClose();
      }
    }

    // Reset form
    setName("");
    setNim("");
    setMail("");
    setRoomName("");
    setStartSession("");
    setStartDate("");
  };

  return (
    <ChakraProvider>
      {/* FORM */}
      <section className="w-full min-h-screen bg-library bg-center bg-cover">
        <div className="w-full min-h-screen p-8 flex items-center justify-evenly  bg-black/50">
          <div className="w-2/4 text-center text-white">
            <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">
              Form Peminjaman Ruangan
            </h1>
            <p className=" mb-6">
              Silahkan isi form untuk melakukan peminjaman ruangan
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-4 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Request Form</h1>
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
                placeholder="Your Email"
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
                  Session
                </label>
                <select
                  name="startSession"
                  id="startSession"
                  value={startSession}
                  onChange={(e) => setStartSession(e.target.value)}
                  className="w-full p-2 border border-gray-400 rounded mt-1"
                  required
                >
                  <option value="">Select Session</option>
                  <option value="07.00 - 9.00">07.00 - 9.00</option>
                  <option value="09.00 - 11.00">09.00 - 11.00</option>
                  <option value="11.00 - 13.00">11.00 - 13.00</option>
                  <option value="13.00 - 15.00">13.00 - 15.00</option>
                  <option value="15.00 - 17.00">15.00 - 17.00</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="endDate" className="text-sm">
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
            </div>
            {/* Submit Button */}
            <p
              onClick={onOpen}
              className="w-full cursor-pointer text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 rounded mt-4"
            >
              Submit
            </p>
          </form>
        </div>
      </section>

      {/* MODAL FOR CONFIRMATION*/}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request Confirmation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>
                Are you sure your data is correct?
              </p>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' type="submit" onClick={handleSubmit}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* MODAL FOR ERROR */}
        
    </ChakraProvider>
  );
}