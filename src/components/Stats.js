import React from "react"
import styled from "styled-components"
import { statsData } from "../data/statsData"

const Stats = () => {
  return (
    <StatsContainer>
      <StatsHeader>Why Choose Us?</StatsHeader>
      <StatsWrapper>
        {statsData.map((item, index) => (
          <StatsBox key={index + "s"}>
            <Icon>{item.icon}</Icon>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
          </StatsBox>
        ))}
      </StatsWrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const StatsHeader = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const StatsBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

const Description = styled.p``
