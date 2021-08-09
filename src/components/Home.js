import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
            title="Model S"
            description = "order online for touchless delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText = "Custom order"
            rightBtnText="Existing inventory"
            />
            <Section/>
            <Section/>
            <Section/>
            Home
        </Container>
    )
}

export default Home
const Container = styled.div`
heigh:100vh; `