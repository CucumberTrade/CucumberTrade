// src/App.tsx

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black px-4">
      <h1 className="flex flex-col sm:flex-row items-center justify-center text-center">
        <img
          src="CucumberTrade_Logo.png"
          alt="Cucumber Trade Logo"
          className="w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem]"
        />
        <div className="mt-4 sm:mt-0 sm:ml-4">
          <span className="text-[3rem] sm:text-[5rem] font-bold text-[#ffffff]">
            Cucumber
          </span>
          <span className="text-[3rem] sm:text-[5rem] font-bold text-[#93FF11] ml-1">
            Trade
          </span>
        </div>
      </h1>
      <p className="mt-6 text-[#cccccc] text-[1rem] sm:text-[1.5rem]">
        Coming Soon
      </p>
    </div>
  );
}
