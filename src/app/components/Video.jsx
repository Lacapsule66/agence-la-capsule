"use client"
import Image from 'next/legacy/image'
import React, { useRef, useState, useEffect } from 'react'
import { playVideo } from '../anim/anim'

export default function Video() {
  const videoRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const videoElement = videoRef.current

    if (isIntersecting && videoElement) {
      videoElement.play()
    }

    return () => {
      if (videoElement) {
        videoElement.pause()
        videoElement.currentTime = 0
      }
    }
  }, [isIntersecting])

  return (
    <div className='mb-52 bg-slate-950 h-full lg:h-[600px] flex justify-center'>
      <video
        id='video'
        ref={videoRef}
        className='lg:w-[20%]  h-auto m-auto'
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}