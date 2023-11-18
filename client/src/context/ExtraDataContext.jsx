import { createContext, useState, useEffect, useContext } from "react";

export const ExtraDataContext = createContext();

export const useExtaData = () => {
  const context = useContext(ExtraDataContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function ExtraDataContextProvider(props) {
  const [isLogin, setIsLogin, ] = useState(true);

  function changeIsLogin(value) {
    setIsLogin(value);
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 890);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ExtraDataContext.Provider
      value={{
        isLogin,
        changeIsLogin,
        isMobile,
      }}
    >
      {props.children}
    </ExtraDataContext.Provider>
  );
}