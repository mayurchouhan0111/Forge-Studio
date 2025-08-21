import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916263850508"
      className="fixed top-5 left-5 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-colors z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
