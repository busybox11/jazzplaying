import { useEffect, useState } from "preact/hooks";

const JAZZ_URL =
  "https://player.shoutcastwidgets.com/v7-HTML5-Player/now-playing-icecast.php?uid=jazzlondonradio&showListeners=show&language=English&ip=radio.canstream.co.uk&port=8075&server=ICECAST&totalFake=0";

export function App() {
  // Fetch the jazz url every 10 seconds
  const [jazzPlaying, setJazzPlaying] = useState("");

  useEffect(() => {
    const fetchJazzPlaying = async () => {
      const res = await fetch(JAZZ_URL);
      const data = await res.text();
      setJazzPlaying(data);
    };

    const interval = setInterval(() => {
      fetchJazzPlaying();
    }, 10000);

    fetchJazzPlaying();

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {jazzPlaying}
      </p>
    </div>
  );
}
