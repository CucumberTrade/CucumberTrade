// src/App.tsx

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="flex items-center text-[5rem] font-bold">
        <img
          src="CucumberTrade_Logo.png"
          alt="Cucumber Trade Logo"
          className="w-[5rem] h-[5rem] mr-4"
        />
        <span className="text-[#ffffff]">Cucumber</span>
        <span className="text-[#93FF11]">Trade</span>
      </h1>
      <p className="mt-4 text-[#cccccc] text-[1.5rem]">
        Coming Soon
      </p>
    </div>
  );
}
