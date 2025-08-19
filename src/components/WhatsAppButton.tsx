import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber"
      className="fixed bottom-5 right-5 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
