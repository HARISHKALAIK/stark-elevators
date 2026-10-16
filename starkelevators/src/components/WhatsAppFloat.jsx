
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  const phoneNumber = "919535977898";

  const message = encodeURIComponent(
    "Hi STARK Next Gen Elevators, I would like to know more about your elevator services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-float"
    >
      <FaWhatsapp className="whatsapp-icon" size={26} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}

export default WhatsAppFloat;
