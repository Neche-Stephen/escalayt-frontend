import React, {useState, useEffect} from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({sidebarBlur, sidebarRef, handleCloseOffcanvas, isOffcanvasOpen}) {


  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the width state when the window is resized
    const handleResize = () => setWidth(window.innerWidth);

    if (width > 639){
      addSidebar();
      removeBlur();
    }
    
    // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addSidebar = ()=>{
      sidebarRef.current.style.display = "block";
  }

  const removeBlur = ()=> {
    sidebarBlur.current.style.display = "none";
  }

  return (

    <>
        <div ref={sidebarBlur}  className='hidden fixed inset-0'  onClick={handleCloseOffcanvas}></div>
        <div ref={sidebarRef} className={`${styles.sidebar} border fixed sm:w-2/12  sm:static`} >
      mm
      </div>
    </>
  )
}

{/* <div className='fixed sm:w-2/12  sm:static'>
         <div onClick={handleCloseOffcanvas} ref={sidebarRef} className={`${styles.sidebar} border`} >
        mm
        </div>
   </div> */}

{/* <div onClick={handleCloseOffcanvas} ref={sidebarRef} className={`${styles.sidebar} border sm:w-2/12 fixed sm:static`} >
mm
</div> */}