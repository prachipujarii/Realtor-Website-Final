import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [isMessageSent, setIsMessageSent] = useState(false); // New state to track if message has been sent
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchLandlord();
      } else {
        setUser(null);
        toast.error("Please log in to send a message.");
        navigate("/sign-in")
      }
    });

    return () => unsubscribe();
  }, []);

  async function fetchLandlord() {
    const docRef = doc(db, "users", listing.userRef);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setLandlord(docSnap.data());
    } else {
      toast.error("Could not get landlord data");
    }
  }

  function onChange(e) {
    setMessage(e.target.value);
  }

  function handleSendMessage(e) {
    if (isMessageSent) {
      e.preventDefault(); // Prevent link action
      toast.info("Message already sent."); // Optionally inform user the message was already sent
    } else {
      setIsMessageSent(true); // Mark message as sent
      toast.success("Message sent successfully."); // Display success toast
    }
  }

  if (!user) {
    return <div>Please log in to send a message.</div>;
  }

  return (
    <div className="flex flex-col w-full">
      {landlord && (
        <>
          <p>Contact {landlord.name} for the {listing.name.toLowerCase()}</p>
          <div className="mt-3 mb-6">
            <textarea
              name="message"
              id="message"
              rows="3"
              value={message}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
            ></textarea>
          </div>
          <a href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
             onClick={handleSendMessage}
             className={`px-7 py-3 ${isMessageSent ? 'bg-gray-400' : 'bg-blue-600'} text-white rounded text-sm uppercase shadow-md hover:${isMessageSent ? '' : 'bg-blue-700'} hover:shadow-lg focus:${isMessageSent ? '' : 'bg-blue-700'} focus:shadow-lg active:${isMessageSent ? '' : 'bg-blue-800'} active:shadow-lg transition duration-150 ease-in-out w-full text-center mb-6`}
             style={{ pointerEvents: isMessageSent ? 'none' : 'auto' }}>
            Send Message
          </a>
        </>
      )}
    </div>
  );
}
