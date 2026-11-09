import Info from "./Info"
import Education from "./Education"
import Experience from "./Experience"
import "../styles/form.css"
export default function Form() {
    return (
        <div className="cv-form">
            <Info />
            <Experience />
            <Education />
        </div>
    )
}