import browser from "webextension-polyfill";

function handleClick () {
  browser.runtime.sendMessage({ action: 'Hi from content script 👋' });
}

function App() {
  return (
    <div className="App flex flex-col gap-4 h-screen items-center justify-center">
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          This is My First Browser Extensions!
        </span>
      </div>
      <div className='text-2xl text-gray-800'>
        Powered by Vite, React, TypeScript, and TailwindCSS
      </div>
      <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm" onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default App;
