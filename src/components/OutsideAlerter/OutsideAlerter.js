import React, { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setShowElement, searchRef) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (searchRef !== undefined && searchRef !== null) {
          if (!searchRef.current.contains(event.target)) setShowElement(false);
        } else {
          setShowElement(false);
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter({ setShowElement, children, searchRef }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowElement, searchRef);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideAlerter;
