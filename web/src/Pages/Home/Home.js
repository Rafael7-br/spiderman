import React from 'react'
import ImageSlider from '../../components/slide/ImageSlider'
import { SliderData } from '../../components/slide/SliderData'

export const Home = () => {
  return (
    <>
      <ImageSlider slides={SliderData} />
    </>
  )
}


