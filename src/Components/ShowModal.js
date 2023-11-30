import { useEffect, useState } from "react"

const MyModal = ({ closeModal }) => {
    const [formData, setFormData] = useState('')
    const [selected, setSelected] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleFormChange = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(formData, "This is form data")
        setFormErrors(validate(formData))
        setIsSubmit(true)
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^[a-zA-z]*[a-zA-Z\d\-_@&$%#\s]{1,50}$/
    }

    const changeFormHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log(formErrors)
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [formErrors])
    return (
        <div>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <form className="modal-container" onSubmit={handleFormSubmit}>
                <h2>Book Demo</h2>
                <input type="text" name="username" placeholder="Your Name" className="form-input" onChange={changeFormHandler}></input>
                <br />
                <input type="text" name="childname" placeholder="Child's Name" className="form-input" onChange={changeFormHandler}></input>
                <br />
                <input type="number" name="age" placeholder="Child's Age" className="form-input" onChange={changeFormHandler}></input>
                <br />
                <input type="text" name="email" placeholder="Email" className="form-input" onChange={changeFormHandler}></input>
                <br />
                <select value={selected} className="form-input" onChange={(e) => handleFormChange(e)}>
                    <option className="form-option">Algebra</option>
                    <option className="form-option">General Topic</option>
                    <option className="form-option">Junior Readers</option>
                    <option className="form-option">Maths</option>
                    <option className="form-option">maths1</option>
                    <option className="form-option">maths2</option>
                    <option className="form-option">maths3</option>
                    <option className="form-option">maths4</option>
                    <option className="form-option">maths5</option>
                </select>
                <br />
                <input type="number" name="mobile" placeholder="Mobile Number" className="form-input" onChange={changeFormHandler}></input>
                <br />
                <div className="last-btns">
                    <button className="form-btn-last-one">Submit</button>
                    <button className="form-btn-last-two" onClick={closeModal}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default MyModal