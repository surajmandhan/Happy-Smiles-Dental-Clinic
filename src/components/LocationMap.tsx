import React from "react";

const LocationMap = () => {
  return (
    <section className="relative py-10">
      <span className="blob size-1/2 absolute bottom-0 right-0 blur-[100px] -z-10" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="show-map">
          <div className="paper-map">
            <div className="map-side"></div>
            <div className="map-side"></div>
            <div className="map-side"></div>
            <div className="map-side"></div>
          </div>
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13865.780220130648!2d76.97490158715819!3d29.677873900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e71e13a90ceab%3A0x7fa0f683e44566af!2sHappy%20Smiles%20Dental%20Clinic%20and%20Implant%20centre!5e0!3m2!1sen!2sin!4v1774815739600!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;