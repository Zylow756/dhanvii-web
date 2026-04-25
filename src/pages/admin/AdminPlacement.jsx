import { useEffect, useState } from "react";
import AdminNav from '../../components/AdminNav/AdminNav';
import styles from '../../assets/css/Admin.module.css';
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function AdminPlacement() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 10;
  
      const totalPages = Math.ceil(data.length / itemsPerPage);
  
  
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
      const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const fetchData = () => {
    fetch("http://localhost:5000/api/placement/all")
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        if (Array.isArray(resData)) {
          setData(resData);
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/placement/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      console.log(data);

      fetchData(); // refresh table
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    // Format data for Excel
    const mainData = data.map(item => ({
      Name: item.name,
      Mobile: item.mobile,
      Address: item.address,
      DOB: item.dob,
      Gender: item.gender,
      Language: item.language,
      JobTitle: item.jobTitle,
      ExpectedSalary: item.expectedSalary,
      JobLocation: item.jobLocation
    }));

    // Convert to worksheet
    const mainSheet = XLSX.utils.json_to_sheet(mainData);
    XLSX.utils.book_append_sheet(workbook, mainSheet, "Basic Info");

    // Create workbook
    XLSX.utils.book_append_sheet(workbook, mainSheet, "Placements");

    // ✅ FAMILY SHEET
    const familyData = [];
    data.forEach(item => {
      item.family?.forEach(f => {
        familyData.push({
          Name: item.name,
          Relation: f.relation,
          FamilyName: f.name,
          Education: f.education,
          Working: f.working
        });
      });
    });

    const familySheet = XLSX.utils.json_to_sheet(familyData);
    XLSX.utils.book_append_sheet(workbook, familySheet, "Family");

    // ✅ ACADEMIC SHEET
    const academicData = [];
    data.forEach(item => {
      item.academic?.forEach(a => {
        academicData.push({
          Name: item.name,
          Qualification: a.qualification,
          Stream: a.stream,
          Board: a.board,
          Year: a.year,
          Percentage: a.percentage
        });
      });
    });

    const academicSheet = XLSX.utils.json_to_sheet(academicData);
    XLSX.utils.book_append_sheet(workbook, academicSheet, "Academic");

    // ✅ PROFESSIONAL SHEET
    const professionalData = [];
    data.forEach(item => {
      item.professional?.forEach(p => {
        professionalData.push({
          Name: item.name,
          Course: p.course,
          Institute: p.institute,
          Duration: p.duration,
          Remark: p.remark
        });
      });
    });

    const professionalSheet = XLSX.utils.json_to_sheet(professionalData);
    XLSX.utils.book_append_sheet(workbook, professionalSheet, "Professional");

    // ✅ EXPERIENCE SHEET
    const experienceData = [];
    data.forEach(item => {
      item.experience?.forEach(e => {
        experienceData.push({
          Name: item.name,
          Company: e.company,
          Post: e.post,
          Type: e.type,
          From: e.from,
          To: e.to,
          Salary: e.salary
        });
      });
    });

    const experienceSheet = XLSX.utils.json_to_sheet(experienceData);
    XLSX.utils.book_append_sheet(workbook, experienceSheet, "Experience");

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const fileData = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(fileData, "placement_data.xlsx");
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className={styles.root}>
      <AdminNav />
      <div className={styles.cardContainer}>
        <h1>Admin Career Dashboard</h1>
        <span className={styles.exportBtn} onClick={exportToExcel}>
          📥  Export to Excel
        </span>
        {/* TABLE */}
         <div className={styles.card}>
        <table border="1">
          <thead className={styles.thead}>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Job Title</th>
              <th>Expected Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
             {currentData.map((item, index) => (
                            <tr key={item._id}>
                                <td>{indexOfFirstItem + index + 1}</td>
                <td className={styles.thStyle}>{item.name}</td>
                <td className={styles.thStyle}>{item.mobile}</td>
                <td className={styles.thStyle}>{item.jobTitle}</td>
                <td className={styles.thStyle}>{item.expectedSalary}</td>

                <td className={styles.thStyle}>
                  <button className={styles.viewBtn} onClick={() => setSelected(item)}>View</button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            <div className={styles.pagination}>
                <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        style={currentPage === i + 1 ? styles.active : ""}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
</div>
        {/* FULL DETAILS MODAL */}
        {selected && (
          <div className={styles.overlayStyle}>
            <div className={styles.modalStyle}>
              <div className={styles.headerSty}>
                <h2>{selected.name}</h2>
              </div>
              <div className={styles.bodyStyle}>
                <p><b>Mobile:</b> {selected.mobile}</p>
                <p><b>Address:</b> {selected.address}</p>
                <p><b>DOB:</b> {selected.dob}</p>
                <p><b>Gender:</b> {selected.gender}</p>
                <p><b>Language:</b> {selected.language}</p>
                <p><b>Job Title:</b> {selected.jobTitle}</p>
                <p><b>Expected Salary:</b> {selected.expectedSalary}</p>
                <p><b>Job Location:</b> {selected.jobLocation}</p>

                <h3>Family Details</h3>
                {selected.family.map((f, i) => (
                  <p key={i}>{f.relation} - {f.name} - {f.education} - {f.working}</p>
                ))}

                <h3>Academic Qualification</h3>
                {selected.academic.map((a, i) => (
                  <p key={i}>{a.qualification} - {a.stream} - {a.board} - {a.year} - {a.percentage}%</p>
                ))}

                <h3>Professional Qualification</h3>
                {selected.professional.map((b, i) => (
                  <p key={i}>{b.course} - {b.institute} - {b.duration} - {b.remark}</p>
                ))}

                <h3>Work Experience</h3>
                {selected.experience.map((c, i) => (
                  <p key={i}>{c.company} - {c.post} - {c.type} - {c.from} - {c.to} - {c.salary}</p>
                ))}
                <button className={styles.closeBtn} onClick={() => setSelected(null)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
