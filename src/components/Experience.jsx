import { useState } from "react"

export default function Experience() {
    const emptyDraft = { companyName: "", positionTitle: "", startDate: "", endDate: "" }
    const [entries, setEntries] = useState([])

    const [draftData, setDraftData] = useState(emptyDraft)
    const [editingId, setEditingId] = useState(null)
    const [isEditing, setIsEditing] = useState(false)


    function handleChange(e) {
        const { name, value } = e.target;
        setDraftData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (editingId) {
            setEntries((prev) => prev.map(item => item.id === editingId ? { ...item, ...draftData } : item))
        }
        else {
            setEntries((prev) => [...prev, { ...draftData, id: crypto.randomUUID() }])
        }
        setIsEditing(false);
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
                <h2>
                    Experience:
                </h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="companyName" > Company Name:</label>
                    <input type="text" id="companyName" name="companyName" onChange={handleChange} value={draftData.companyName} />

                    <label htmlFor="positionTitle">Position Title:</label>
                    <input type="text" id="positionTitle" name="positionTitle" onChange={handleChange} value={draftData.positionTitle} />

                    <label htmlFor="startDate">Start working date:</label>
                    <input type="date" id="startDate" name="startDate" onChange={handleChange} value={draftData.startDate} />

                    <label htmlFor="endDate">End working date:</label>
                    <input type="date" id="endDate" name="endDate" onChange={handleChange} value={draftData.endDate} />

                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)} type="button">Cancel</button>
                </form>
            </section>
        )
    }

    return (
        <section>
            <h2>
                Experience:
            </h2>
            <ul>
                {entries.map((experience) => (
                    <li key={experience.id}>
                        {experience.companyName}: {experience.positionTitle}{" "}
                        {experience.startDate} - {experience.endDate}
                        <button onClick={() => { handleEdit(experience) }} type="button">Edit</button>
                        <button className="danger" onClick={() => { handleDelete(experience.id) }} type="button">Delete</button>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={handleAdd}>Add experience</button>
        </section >
    )
}