import React, { useEffect, useState } from 'react'

const useTheamSwitcher = () => {
  
    const preferDarkQuery = "(prefer-colour-scheame: dark)";
     const [mode,setMode] = useState("");

     useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem("theme");


        const handleChange = () => {
            if(usePref){
                let check = usePref === "dark" ? "dark" : "light";
                setMode(check);
                if(check === "dark"){
                    document.documentElement.classList.add(dark)
                }else{
                    document.documentElement.classList.remove(dark)
                }
            }else{
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);

                if(check === "dark"){
                    document.documentElement.classList.add(dark)
                }else{
                    document.documentElement.classList.remove(dark)
                }
                
            }
        }
            mediaQuery.addEventListener("change", handleChange)

            return () => mediaQuery.removeEventListener("change", handleChange)
     },[])

    useEffect(() => {
        if(mode === "darak"){
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark")
        }else{
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark")
        }

    },[mode])






     return [mode,setMode]
}

export default useTheamSwitcher
