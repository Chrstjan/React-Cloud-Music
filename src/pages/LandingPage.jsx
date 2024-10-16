import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../supabaseClient";

export const LandingPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const { data, error } = await supabase.from("artists").select("*");
      setArtists(data);

      if (error) {
        console.error(`Error in fetching artists: ${error.message}`);
      }
    };

    getArtists();
  }, []);

  useEffect(() => {
    console.log(artists);
  }, [artists]);
  return (
    <>
      <h2>Artists:</h2>
      {artists?.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.artist_name}</h3>
            <p>{item.artist_description}</p>
          </div>
        );
      })}
    </>
  );
};
