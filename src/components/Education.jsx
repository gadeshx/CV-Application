import { useState } from "react"

export default function Education() {
    const emptyDraft = {
        schoolName: "",
        studyTitle: "",
        startDate: "",
        endDate: ""
    }
    const [entries, setEntries] = useState([])
    const [draftData, setDraftData] = useState(emptyDraft);
    const [editingId, setEditingId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setDraftData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (editingId) {
            setEntries((prev) => prev.map((item) => item.id === editingId ? { ...item, ...draftData } : item))
        }
        else {
            setEntries((prev) => [...prev, { ...draftData, id: crypto.randomUUID() }])
        }
        setIsEditing(false)
    }

    function handleAdd() {
        setDraftData(emptyDraft)
        setEditingId(null)
        setIsEditing(true)
    }

    function handleEdit(item) {
        setDraftData(item)
        setEditingId(item.id)
        setIsEditing(true)
    }

    function handleDelete(id) {
        setEntries((prev) => prev.filter((item) => item.id !== id))
    }

    if (isEditing) {
        return (
            <section>
                <h1>
                    Education:
                </h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="schoolName">School Name:</label>
                    <input type="text" id="schoolName" name="schoolName" onChange={handleChange} value={draftData.schoolName} />

                    <label htmlFor="studyTitle">Study Title:</label>
                    <input type="text" id="studyTitle" name="studyTitle" onChange={handleChange} value={draftData.studyTitle} />

                    <label htmlFor="startDate">Start study date:</label>
                    <input type="date" id="startDate" name="startDate" onChange={handleChange} value={draftData.startDate} />

                    <label htmlFor="endDate">End study date:</label>
                    <input type="date" id="endDate" name="endDate" onChange={handleChange} value={draftData.endDate} />

                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)} type="button">Cancel</button>
                </form>
            </section >
        )
    }

    return (
        <section>
            <h1>
                Education:
            </h1>
            <ul>
                {entries.map((education) => (
                    <li key={education.id}>
                        {education.schoolName} - {education.studyTitle}{" "}
                        {education.startDate} - {education.endDate}
                        <button onClick={() => { handleEdit(education) }} type="button">Edit</button>
                        <button className="danger" onClick={() => { handleDelete(education.id) }} type="button">Delete</button>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={handleAdd}>Add Education</button>
        </section >
    )
}