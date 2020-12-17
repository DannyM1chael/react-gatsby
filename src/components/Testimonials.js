import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaRegLightbulb } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline />
            <h3>John Wick</h3>
            <p>"Great trip ever!"</p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb />
            <h3>Kianu Reaves</h3>
            <p>"Great trip ever!"</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>image</ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div``
const TopLine = styled.div``
const Description = styled.div``
const ContentWrapper = styled.div``
const Testimonial = styled.div``
const ColumnOne = styled.div``
const ColumnTwo = styled.div``
