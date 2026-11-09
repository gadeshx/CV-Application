import { useState } from "react"

export default function Info() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const [draftData, setDraftData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const [isEditing, setIsEditing] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setDraftData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setFormData(draftData)
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            < section >
                <h2>
                    Personal Information:
                </h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} value={draftData.name} />

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" onChange={handleChange} value={draftData.email} />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" onChange={handleChange} value={draftData.phone} />
                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)} type="button">Cancel</button>
                </form>
            </section >
        )
    }
    return (
        < section >
            <h2>
                Personal Information:
            </h2>

            <h2>Full Name:</h2>
            <p>{formData.name}</p>

            <h2>Email:</h2>
            <p>{formData.email}</p>

            <h2>Phone Number:</h2>
            <p>{formData.phone}</p>
            <button onClick={() => { setDraftData(formData); setIsEditing(true) }} type="button">Edit</button>
        </section >
    )
}