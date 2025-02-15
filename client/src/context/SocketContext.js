// SocketContext is needed when using routing in the index.js file
// so you don't need to set up sockets for every page (component)
// separately, you set it here and SocketProvider initializes it
// for all children components (for example RaceFlags, RaceControl etc...)

import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
