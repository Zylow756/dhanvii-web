import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const useStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/placementGallery`)
      .then((res) =>
        setStudents(
          Array.isArray(res.data)
            ? res.data
            : res.data.data || []
        )
      )
      .catch(console.error);
  }, []);

  return students;
};