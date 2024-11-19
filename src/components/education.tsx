
import "../style/education.css";
function Education() {
    return(
        <main className="edu-main">
            <div className="edu-text">
                <h1>Education</h1>

            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">College</h1>
                    <span>Completed</span>
                </div>
                <div className="Medical">
                <h1>Inter In Pre-Medical</h1>
                <p> I have done intermediate in pre-medical in 2024.
                </p>
                </div>
            </div>
            {/*box 2 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Governor IT Initiative</h1>
                    <span>Student</span>
                </div>
                <div className="Medical">
                <h1>Certified Web 3.0 and Metaverse</h1>
                <p>I am pursing web-development course with the passion of learning new and advance AI.
                </p>
                </div>
            </div>
        </main>
    )
}
export default Education