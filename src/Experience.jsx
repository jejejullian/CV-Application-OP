import { useState } from "react";

function Experience() {
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    descJob: "",
    dateFrom: "",
    dateUntil: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target

    setExperience({...experience, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  return(
    <div className="general-info-section">
        <h2>Experience Information</h2>

        {isEditing ? (
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name:
                    <input type="text" name='companyName' value={experience.companyName} onChange={handleChange} />
                </label>

                <label>
                    Position Title:
                    <input type="text" name="positionTitle" value={experience.positionTitle} onChange={handleChange} />
                </label>

                <label>
                    Description Job:
                    <textarea name="descJob" value={experience.descJob} onChange={handleChange}></textarea>
                </label>
                <label>
                    Date From:
                    <input type="date" name="dateFrom" value={experience.dateFrom} onChange={handleChange} />
                </label>
                <label>
                    Date Until:
                    <input type="date" name="dateUntil" value={experience.dateUntil} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        ) : (
            <div className="view-mode">
                <p>
                    <strong>Company Name:</strong> {experience.companyName}
                </p>

                <p>
                    <strong>Position Title:</strong> {experience.positionTitle}
                </p>

                <p>
                    <strong>Description Job:</strong> {experience.descJob}
                </p>

                <p>
                    <strong>Date From:</strong> {experience.dateFrom}
                </p>

                <p>
                    <strong>Date Until:</strong> {experience.dateUntil}
                </p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        )}
    </div>
  )
}

export default Experience;
