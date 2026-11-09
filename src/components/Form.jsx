import Info from "./Info"
import Education from "./Education"
import Experience from "./Experience"
import "../styles/form.css"
export default function Form() {
    return (
        <div className="cv-form">
            <h1>Create your CV now</h1>
            <Info />
            <Experience />
            <Education />
        </div>
    )
}