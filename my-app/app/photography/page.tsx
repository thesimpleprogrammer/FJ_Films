import Hero from "./Hero"
import About from "./About"
import Workflow from "./Workflow"
import Projects from "./Projects"
import ContactUs from "../src/components/Contact"

export default function Photography () {
    return(
        <>
            <Hero />
            <About />
            <Workflow />
            <Projects />
            <ContactUs />
        </>
    )
}