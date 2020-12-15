import React, { useEffect } from 'react'

export const toggleDarkMode = () => {
  if (localStorage.theme === 'dark') {
    localStorage.theme = 'light'
    document.querySelector('html').classList.remove('dark')
  } else {
    localStorage.theme = 'dark'
    document.querySelector('html').classList.add('dark')
  }
}

const useDarkMode = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [])
}

export default useDarkMode
