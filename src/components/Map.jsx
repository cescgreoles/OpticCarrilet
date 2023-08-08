import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 41.36506,
      lng: 2.12534,
    },
    zoom: 20,
  };

  return (
    // Important! Always set the container height explicitly

    <div
      style={{
        height: "50vh",
        width: "50%",
        margin: "2em",
        border: "3px solid",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={41.36506} lng={2.12534} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
