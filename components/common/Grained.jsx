"use client"
import React, { useEffect } from 'react'

const Data = () => {
  useEffect(() => {
    var options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1
    };
      grained('#wrapper', options);
  }, [])
  return (
    <>
        <div id="wrapper"></div>
    </>
  )
}

export default Data