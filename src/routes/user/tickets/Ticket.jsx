import React, { useState } from "react";
import RateTicket from "../../../components/modals/rateTicket/RateTicket";
// import Notification from "../../../components/modals/notification/Notification";
//import AssignTicket from "../../../components/modals/assignTicket/AssignTicket";

export default function Ticket() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticketId, setTickets] = useState(1);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      The User ticket Board
      {/* This button would be in the ticket detail page not here..  */}
      <div className={`relative ${isModalOpen ? "filter-blurred" : ""}`}>
        <p>.</p>
        <br />
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Rate Ticket
        </button>
        {isModalOpen && (
          <RateTicket onClose={handleCloseModal} ticketId={ticketId} />
        )}
      </div>
      
    </div>
  );
}
