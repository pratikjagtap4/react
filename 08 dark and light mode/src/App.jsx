import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  function lightMode() {
    setThemeMode("light")
  }

  function darkMode() {
    setThemeMode("dark")
  }

  useEffect(() => {
    let container = document.querySelector('html')
    container.classList.remove("light", "dark");

    container.classList.add(themeMode)
  }, [themeMode])
  
  return (
    <>
      <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
