import { Button, Paper, TextField } from "@mui/material"
import { useEffect, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react"
import { type Student } from "../utils/data";



interface Props {
    students: Student[],
    setStudents: Dispatch<SetStateAction<Student[]>>
}

const initialData = { id: 124, fullName: "", age: "", email: "", class: "" };
// data arr ---- e.target.value 
export const AddStudent = ({ students, setStudents }: Props) => {


    /**
     * change formdata to be a state
     */

    const [formData, setFormData] = useState(initialData);
    //let formData = { id: 124, name: "", age: 0, email: "", class: "" };

    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // const emailRef = useRef<HTMLInputElement>(null);
    // const classRef = useRef<HTMLInputElement>(null);

    // const handelChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.name = e.target.value;
    // }

    // const handelChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.age = parseInt(e.target.value);
    // }

    // const handelChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.email = e.target.value;
    // }
    // const handelChangeClass = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.class = e.target.value;
    // }

    // now we can use just one handler for our logic --------------
    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handelSubmit = () => {
        setStudents([...students, formData]);
        setFormData(initialData);
        // if (nameRef.current) {
        //     nameRef.current.value = ""
        // }
        // if (ageRef.current) {
        //     ageRef.current.value = ""
        // }
        // if (emailRef.current) {
        //     emailRef.current.value = ""
        // }
        // if (classRef.current) {
        //     classRef.current.value = ""
        // }
        //data.push(formData);
        //console.log(data);
        //console.log(formData);

        //note
        // the data will push to the array but will not be updated in table until using usestate hook from react ------------
    }
    //useEffect do not respect useRef
    //why?
    //useRef not a state or act as a state
    //stop form entering admin user
    useEffect(() => {
        console.log("fire");

        if (formData.fullName === "Admin") {
            alert("Can not enter admin")
        }
    }, [formData.fullName]);


    return (
        <Paper sx={{ width: 300, padding: 5, marginTop: 1, gap: 1, display: "flex", flexDirection: "column" }}>
            <TextField value={formData.fullName} onChange={handelChange} id="outlined-basic" label="Full Name" name="fullName" variant="outlined" />
            <TextField value={formData.age} onChange={handelChange} id="outlined-basic" label="Age" name="age" variant="outlined" />
            <TextField value={formData.email} onChange={handelChange} id="outlined-basic" label="Email" name="email" variant="outlined" />
            <TextField value={formData.class} onChange={handelChange} id="outlined-basic" label="Class" name="class" variant="outlined" />
            <Button onClick={handelSubmit} variant="contained">Submit</Button>
        </Paper>
    )
}

