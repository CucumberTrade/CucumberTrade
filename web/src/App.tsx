// src/App.tsx

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black px-4">
      <h1 className="flex flex-row flex-wrap items-center justify-center text-[3rem] sm:text-[5rem] font-bold text-center">
        <img
          src="CucumberTrade_Logo.png"
          alt="Cucumber Trade Logo"
          className="w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] mr-4 mb-2 sm:mb-0"
        />
        <span className="text-[#ffffff]">Cucumber</span>
        <span className="text-[#93FF11] ml-2">Trade</span>
      </h1>
      <p className="mt-4 text-[#cccccc] text-[1rem] sm:text-[1.5rem]">
        Coming Soon
      </p>
    </div>
  );
}
