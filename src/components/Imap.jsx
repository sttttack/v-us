const GoogleMapEmbed = () => {
  return (
    <div style={{ width: "100%", height: "280px" }}>
      <iframe
        title="Monument of Heroes"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.3432404177315!2d44.77766700088979!3d41.71311166654104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd4e1ee2169%3A0x476617dfd130be57!2sThe%20Monument%20of%20Heroes!5e0!3m2!1sen!2sge!4v1753291946902!5m2!1sen!2sge"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMapEmbed;
