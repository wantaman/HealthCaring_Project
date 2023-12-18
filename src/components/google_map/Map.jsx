import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Map = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getMap = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/hospital/${id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMap();
  }, [id]);
  return (
    <div className=" container-fluid w-100">
    {data ? (
        <>
          <h1 className="text-center my-5 fw-bolder">{data.name_hos}</h1>
          <iframe
            src={data.location[0].embed}
            style={{ width: "100%", height: "800px", border: "none" }}
            frameBorder="0"
          ></iframe>
          <footer className="container-fluid bg-dark text-light text-center p-2">
            <p className="">Copyright@by HealtCare</p>
          </footer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Map;
