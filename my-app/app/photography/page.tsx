import Hero from "./Hero"
// import About from "./About"
// import Workflow from "./Workflow"
import ProjectsContainer from "./ProjectsContainer"
import ContactUs from "../src/components/Contact"
import PricingPlans from "../src/components/Pricing"
import Navbar from "./Navbar"
import AboutContainer from "./AboutContainer"
import WorkflowContainer from "./WorkflowContainer"

export default function Photography () {
    return(
        <>
            <Navbar />
            <Hero />
            <AboutContainer />
            <WorkflowContainer />
            <ProjectsContainer />
            <PricingPlans />
            <ContactUs />
        </>
    )
}