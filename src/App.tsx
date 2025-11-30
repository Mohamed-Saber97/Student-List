import { useEffect, useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { StudentTable } from "./components/StudentTable";
import type { Student } from "./utils/data";
import { fetchStudents } from "./api/students";
//import { data } from "./utils/data";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    
    fetchStudents().then((data) => setStudents(data));
  }, []);

  return (
    <>
      <StudentTable students={students} />
      <AddStudent students={students} setStudents={setStudents} />
    </>
  );
}

export default App;
