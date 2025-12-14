import { useState } from "react";

function Education() {
  const [education, setEducation] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); 
  };

  return (
    <div className="general-info-section">
      <h2>Education Information</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            School Name:
            <input type="text" name="schoolName" value={education.schoolName} onChange={handleChange} />
          </label>
          <label>
            Title of Study:
            <input type="email" name="titleOfStudy" value={education.titleOfStudy} onChange={handleChange} />
          </label>
          <label>
            Date of Study:
            <input type="tel" name="dateOfStudy" value={education.dateOfStudy} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="view-mode">
          <p>
            <strong>School Name:</strong> {education.schoolName}
          </p>
          <p>
            <strong>Title of study:</strong> {education.titleOfStudy}
          </p>
          <p>
            <strong>Date of Study:</strong> {education.dateOfStudy}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
