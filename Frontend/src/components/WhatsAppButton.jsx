import whatsappLogo from "../assets/WhatsAppButton.png";

const WhatsAppButton = () => {
  const phoneNumber = "923001234567";
  const message = "Hello, I would like to get more information about AIRS.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-2 right-5 z-[9999] sm:right-6"
    >
      <span className="relative flex h-24 w-24 items-center justify-center">
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="h-24 w-24 object-contain transition-transform duration-300 hover:scale-110"
        />

        <span className="absolute right-4 top-4 h-4 w-4 rounded-full bg-blue-500 ring-2 ring-white">
          <span className="absolute inset-0 animate-ping rounded-full bg-blue-500" />
        </span>
      </span>
    </a>
  );
};

export default WhatsAppButton;