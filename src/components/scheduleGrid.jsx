import React, { useState } from "react";

const ScheduleGrid = () => {
  const [schedules, setSchedules] = useState([
    {
      group: "7mo-8",
      monday: [
        { subject: "Matemáticas", time: "8:00 AM" },
        { subject: "Historia", time: "9:00 AM" },
        { subject: "Física", time: "10:00 AM" },
        { subject: "Lenguaje", time: "11:00 AM" },
        { subject: "Biología", time: "12:00 PM" },
        { subject: "Química", time: "1:00 PM" },
      ],
      tuesday: [
        { subject: "Lenguaje", time: "8:00 AM" },
        { subject: "Física", time: "9:00 AM" },
        { subject: "Matemáticas", time: "10:00 AM" },
        { subject: "Historia", time: "11:00 AM" },
        { subject: "Geografía", time: "12:00 PM" },
        { subject: "Arte", time: "1:00 PM" },
      ],
      wednesday: [
        { subject: "Ciencias Sociales", time: "8:00 AM" },
        { subject: "Lenguaje", time: "9:00 AM" },
        { subject: "Biología", time: "10:00 AM" },
        { subject: "Matemáticas", time: "11:00 AM" },
        { subject: "Inglés", time: "12:00 PM" },
        { subject: "Física", time: "1:00 PM" },
      ],
      thursday: [
        { subject: "Historia", time: "8:00 AM" },
        { subject: "Geografía", time: "9:00 AM" },
        { subject: "Arte", time: "10:00 AM" },
        { subject: "Ciencias", time: "11:00 AM" },
        { subject: "Matemáticas", time: "12:00 PM" },
        { subject: "Lenguaje", time: "1:00 PM" },
      ],
      friday: [
        { subject: "Inglés", time: "8:00 AM" },
        { subject: "Matemáticas", time: "9:00 AM" },
        { subject: "Biología", time: "10:00 AM" },
        { subject: "Física", time: "11:00 AM" },
        { subject: "Lenguaje", time: "12:00 PM" },
        { subject: "Historia", time: "1:00 PM" },
      ],
    },
    {
      group: "1B",
      monday: [
        { subject: "Matemáticas", time: "8:00 AM" },
        { subject: "Historia", time: "9:00 AM" },
        { subject: "Física", time: "10:00 AM" },
        { subject: "Lenguaje", time: "11:00 AM" },
        { subject: "Biología", time: "12:00 PM" },
        { subject: "Química", time: "1:00 PM" },
      ],
      tuesday: [
        { subject: "Lenguaje", time: "8:00 AM" },
        { subject: "Física", time: "9:00 AM" },
        { subject: "Matemáticas", time: "10:00 AM" },
        { subject: "Historia", time: "11:00 AM" },
        { subject: "Geografía", time: "12:00 PM" },
        { subject: "Arte", time: "1:00 PM" },
      ],
      wednesday: [
        { subject: "Ciencias Sociales", time: "8:00 AM" },
        { subject: "Lenguaje", time: "9:00 AM" },
        { subject: "Biología", time: "10:00 AM" },
        { subject: "Matemáticas", time: "11:00 AM" },
        { subject: "Inglés", time: "12:00 PM" },
        { subject: "Física", time: "1:00 PM" },
      ],
      thursday: [
        { subject: "Historia", time: "8:00 AM" },
        { subject: "Geografía", time: "9:00 AM" },
        { subject: "Arte", time: "10:00 AM" },
        { subject: "Ciencias", time: "11:00 AM" },
        { subject: "Matemáticas", time: "12:00 PM" },
        { subject: "Lenguaje", time: "1:00 PM" },
      ],
      friday: [
        { subject: "Inglés", time: "8:00 AM" },
        { subject: "Matemáticas", time: "9:00 AM" },
        { subject: "Biología", time: "10:00 AM" },
        { subject: "Física", time: "11:00 AM" },
        { subject: "Lenguaje", time: "12:00 PM" },
        { subject: "Historia", time: "1:00 PM" },
      ],
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState("7mo-8");
  const [selectedDay, setSelectedDay] = useState("monday");

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const selectedSchedule = schedules.find(
    (schedule) => schedule.group === selectedGroup
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto dark:bg-dark dark:text-foreground">
      <div className="mb-6">
        <img src="/logo.png" alt="Logo de materias" className="mb-6 m-auto" />
      </div>

      <h1 className="text-3xl font-semibold text-center mb-6 text-primary dark:text-red-500">
        Horarios
      </h1>

      {/* Dropdown for Group */}
      <div className="mb-6">
        <label
          htmlFor="group"
          className="block text-lg font-medium text-primary dark:text-red-500 mb-2"
        >
          Elige el grupo
        </label>
        <select
          id="group"
          className="text-foreground mt-1 block w-full px-4 py-2 border border-primary dark:border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-primary transition duration-200 dark:bg-dark dark:text-foreground dark:ring-accent dark:focus:ring-accent"
          value={selectedGroup}
          onChange={handleGroupChange}
        >
          {schedules.map((schedule) => (
            <option key={schedule.group} value={schedule.group}>
              {schedule.group}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown for Day */}
      <div className="mb-6">
        <label
          htmlFor="day"
          className="block text-lg font-medium text-primary dark:text-red-500 mb-2"
        >
          Elige el día
        </label>
        <select
          id="day"
          className="text-foreground mt-1 block w-full px-4 py-2 border border-primary dark:border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-primary transition duration-200 dark:bg-dark dark:text-foreground dark:ring-accent dark:focus:ring-accent"
          value={selectedDay}
          onChange={handleDayChange}
        >
          <option value="monday">Lunes</option>
          <option value="tuesday">Martes</option>
          <option value="wednesday">Miércoles</option>
          <option value="thursday">Jueves</option>
          <option value="friday">Viernes</option>
        </select>
      </div>

      {/* Displaying the schedule for the selected group and day */}
      <div className="overflow-x-auto rounded-lg shadow-md dark:bg-dark-600 dark:border-dark-400">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-lg font-semibold text-primary dark:text-red-500 border-b border-primary-500 dark:border-dark-400">
                Materia
              </th>
              <th className="py-3 px-6 text-left text-lg font-semibold text-primary dark:text-red-500 border-b border-primary-500 dark:border-dark-400">
                Horario
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedSchedule[selectedDay].map((item, index) => (
              <tr
                key={index}
                className="hover:bg-accent-200 dark:hover:bg-accent-400 transition duration-200"
              >
                <td className="py-3 px-6 border-b text-left text-foreground dark:text-foreground">
                  {item.subject}
                </td>
                <td className="py-3 px-6 border-b text-left text-foreground dark:text-foreground">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty schedule state */}
      {selectedSchedule[selectedDay].length === 0 && (
        <p className="text-center mt-4 text-gray-500">
          No hay clases para este día.
        </p>
      )}
    </div>
  );
};

export default ScheduleGrid;