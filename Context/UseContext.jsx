import { useState, createContext } from 'react';

export const UserContext = createContext();

export default function ContextProvider(props){
    const [students, setStudents] = useState([
        {
            student_id: 151515,
            first_name: "Yael",
            last_name: "Lampert Naor",
            email: "y@y.com",
            password: "abc123",
            studies_code: 1,
            profession_code: 1,
            year_code: 1,
            class_name: "NZ1",
            is_active: 1
        }
    ])

    const [currentStudent, setCurrentStudent] = useState(null);
    
}