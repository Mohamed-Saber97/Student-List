import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { StudentTable } from "./components/StudentTable";
import { data } from "./utils/data";



function App() {
  const [students, studentList] = useState(data);
  return (
    <>
      <StudentTable students={students} />
      <AddStudent students={students} setStudents={studentList} />
    </>

  )

}

export default App
