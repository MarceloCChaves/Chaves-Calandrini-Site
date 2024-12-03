import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {

  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      {backToTopButton && (
        <button className="flex items-center justify-center fixed bottom-16 right-6 h-12 w-12 bg-red cursor-pointer rounded-full" onClick={scrollUp}>
          <FaArrowUp size={20} color='#fff' />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton;