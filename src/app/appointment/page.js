"use client";
import { db } from "@/firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import uniqid from "uniqid";

const AppointmentPage = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const appointmentId = uniqid();
    const appointmentData = {
      id: appointmentId,
      name: e.target.name.value,
      email: e.target.email.value,
      symptoms: e.target.symptoms.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      medication: e.target.medication.value,
      gender: e.target.gender.value,
    };
    console.log(appointmentData);
    addDoc(collection(db, "appointments"), appointmentData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Appointment booked successfully!");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error booking appointment!");
      });
  };

  return (
    <div className={"gap-5 px-4 py-10 w-full"}>
      <h1 className="text-center text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Book an <span className="underline decoration-blue-500">Appointment</span>
      </h1>

      <section className="max-w-4xl p-6 mt-10 mx-auto bg-white rounded-md dark:bg-gray-800">
        <form onSubmit={(e) => onFormSubmit(e)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="email@gmail.com"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="symptoms">
                Symptoms
              </label>
              <input
                id="symptoms"
                type="text"
                name="symptoms"
                required
                placeholder="Enter your symptoms here"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="+91 xxxx xxx xxx"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="date">
                Date of Appointment
              </label>
              <input
                id="date"
                type="date"
                name="date"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="medication">
                Taking any medication currently?
              </label>
              <div className="flex items-center mt-2">
                <input
                  id="medication-yes"
                  type="radio"
                  name="medication"
                  value="yes"
                  required
                  className="text-gray-700 dark:text-gray-200 mr-2"
                />
                <label htmlFor="medication-yes" className="text-gray-700 dark:text-gray-200 mr-4">
                  Yes
                </label>
                <input
                  id="medication-no"
                  type="radio"
                  name="medication"
                  value="no"
                  required
                  className="text-gray-700 dark:text-gray-200 mr-2"
                />
                <label htmlFor="medication-no" className="text-gray-700 dark:text-gray-200">
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="symptoms">
                Consultation Type
              </label>
              <input
                id="Consultation Type"
                type="text"
                name="consuntation"
                required
                placeholder="eg. cardiologist, dermatologist, etc."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="symptoms">
                Patient's Health Issues
              </label>
              <textarea
                id="Issues"
                name="Issues"
                required
                placeholder="Enter your issues here"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Book
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AppointmentPage;
