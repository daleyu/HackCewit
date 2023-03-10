import SpeechRecognition from "@google-cloud/speech";
import { useState } from "react";
const TextToSpeech = ({
  onTextRecognized,
}: {
  onTextRecognized: (text: string) => void;
}) => {
  const [recognition, setRecognition] = useState<
    typeof SpeechRecognition | null
  >(null);

  // initialize the speech recognition API
  const initRecognition = () => {
    var recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event: { results: string | any[] }) => {
      const text = event.results[event.results.length - 1][0].transcript;
      onTextRecognized(text);
    };

    setRecognition(recognition);
  };

  // start listening for speech
  const startListening = () => {
    if (!recognition) {
      return;
    }

    recognition.start();
  };

  // stop listening for speech
  const stopListening = () => {
    if (!recognition) {
      return;
    }

    recognition.stop();
  };

  return (
    <div>
      <button
        onclick={() => {
          initRecognition, startListening;
        }}
      >
        {" "}
        Start Listening
      </button>
      <button onclick={stopListening}>Stop listening</button>
    </div>
  );
};

export default TextToSpeech;
