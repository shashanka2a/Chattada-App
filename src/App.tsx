\"use client\";

import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Onboarding } from "./components/Onboarding";
import { Auth } from "./components/Auth";
import { MainApp } from "./components/MainApp";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    "splash" | "onboarding" | "auth" | "app"
  >("splash");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen("onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOnboardingComplete = () => {
    setCurrentScreen("auth");
  };

  const handleAuthComplete = (userData: any) => {
    setUser(userData);
    setCurrentScreen("app");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen("auth");
  };

  return (
    <div className="min-h-screen bg-white">
      {currentScreen === "splash" && <SplashScreen />}
      {currentScreen === "onboarding" && (
        <Onboarding onComplete={handleOnboardingComplete} />
      )}
      {currentScreen === "auth" && (
        <Auth onAuthComplete={handleAuthComplete} />
      )}
      {currentScreen === "app" && (
        <MainApp user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

