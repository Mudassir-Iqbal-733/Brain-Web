import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ProgramForm from "./ProgramForm";

const AddProgram = () => {
  const navigate = useNavigate();

  const handleAdd = (formData) => {
    console.log("New Program:", formData);

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Program created successfully",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    navigate("/admin/dashboard/programs");
  };

  return <ProgramForm mode="add" onSubmit={handleAdd} />;
};

export default AddProgram;