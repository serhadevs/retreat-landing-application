const EventMap = () => {
  return (
    <div className="venue-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.990789828389!2d-77.61426482480925!3d18.4840763826024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda342ce50b6343%3A0x4ea1b336cfcc27bc!2sRoyalton%20Blue%20Waters%2C%20An%20Autograph%20Collection%20All-Inclusive%20Resort!5e0!3m2!1sen!2sjm!4v1700750094180!5m2!1sen!2sjm"
        width="600"
        height="450"
        style={{ border: 0 }}
        // allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EventMap
