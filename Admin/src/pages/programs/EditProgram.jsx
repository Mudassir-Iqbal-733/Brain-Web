import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ProgramForm from "./ProgramForm";

const initialPrograms = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&h=100&fit=crop",
    title: "ADP CS",
    shortTitle: "ADP CS",
    duration: "4 Semesters (2 Years)",
    award: "N/A",
    eligibility: "FSc Pre-Medical or equivalent",
    affiliation: "University of Sargodha",
    recognition: "Allied Health Professional Council",
    ageLimit: "No Age Limit",
    pathway: "Transfer to BS program",
    fee: "PKR 50,000/semester",
    overview: "ADP CS is a 2-year program...",
    whyStudy: "Learn modern computer science...",
    whatYouWillStudy: "Programming, databases, web development...",
    careerOpportunities: "Software developer, web developer...",
    specializations: "Web Development, Mobile Apps",
    admissionInfo: "Merit-based admissions...",
    seoTitle: "ADP CS - AIRS",
    seoDescription: "Associate Degree in Computer Science at AIRS",
    seoKeywords: "ADP CS, computer science, AIRS",
    status: "Active",
    featured: false,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
    title: "ADP IT",
    shortTitle: "ADP IT",
    duration: "4 Semesters (2 Years)",
    award: "N/A",
    eligibility: "FSc Pre-Medical or equivalent",
    affiliation: "University of Sargodha",
    recognition: "Allied Health Professional Council",
    ageLimit: "No Age Limit",
    pathway: "Transfer to BS program",
    fee: "PKR 50,000/semester",
    overview: "ADP IT is a 2-year program...",
    whyStudy: "Learn modern information technology...",
    whatYouWillStudy: "Networking, databases, IT support...",
    careerOpportunities: "IT support, network admin...",
    specializations: "Networking, Cybersecurity",
    admissionInfo: "Merit-based admissions...",
    seoTitle: "ADP IT - AIRS",
    seoDescription: "Associate Degree in Information Technology at AIRS",
    seoKeywords: "ADP IT, information technology, AIRS",
    status: "Active",
    featured: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    title: "Doctor of Physical Therapy (DPT)",
    shortTitle: "DPT",
    duration: "10 Semesters (5 Years)",
    award: "Doctor of Physical Therapy (DPT)",
    eligibility: "FSc Pre-Medical or equivalent",
    affiliation: "University of Sargodha",
    recognition: "Allied Health Professional Council",
    ageLimit: "No Age Limit",
    pathway: "Transfer to BS program",
    fee: "PKR 80,000/semester",
    overview: "DPT is a 5-year professional degree...",
    whyStudy: "Help patients recover from injuries...",
    whatYouWillStudy: "Anatomy, physiology, rehabilitation...",
    careerOpportunities: "Hospitals, clinics, sports teams...",
    specializations: "Orthopedic, Neurological, Pediatric",
    admissionInfo: "Merit-based admissions with entry test...",
    seoTitle: "DPT - AIRS",
    seoDescription: "Doctor of Physical Therapy at AIRS",
    seoKeywords: "DPT, physical therapy, AIRS",
    status: "Active",
    featured: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop",
    title: "Pharmacy Technician",
    shortTitle: "Pharm Tech",
    duration: "2 Years",
    award: "Pharmacy Technician Diploma",
    eligibility: "FSc Pre-Medical or equivalent",
    affiliation: "University of Sargodha",
    recognition: "Pharmacy Council",
    ageLimit: "No Age Limit",
    pathway: "Transfer to Pharm-D",
    fee: "PKR 40,000/semester",
    overview: "Pharmacy Technician program...",
    whyStudy: "Work in pharmacies and hospitals...",
    whatYouWillStudy: "Pharmacology, dispensing, patient care...",
    careerOpportunities: "Pharmacies, hospitals, pharmaceutical companies...",
    specializations: "Hospital Pharmacy, Community Pharmacy",
    admissionInfo: "Merit-based admissions...",
    seoTitle: "Pharmacy Technician - AIRS",
    seoDescription: "Pharmacy Technician program at AIRS",
    seoKeywords: "Pharmacy Technician, pharmacy, AIRS",
    status: "Active",
    featured: false,
  },
];

const EditProgram = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const program = initialPrograms.find((p) => p.id === Number(id));

  if (!program) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
        <h2 className="text-xl font-bold text-slate-800">Program not found</h2>
        <p className="mt-2 text-sm text-slate-500">
          The program you're trying to edit doesn't exist.
        </p>
      </div>
    );
  }

  const handleUpdate = (formData) => {
    console.log("Updated Program:", formData);

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Program updated successfully",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    navigate("/admin/programs");
  };

  return <ProgramForm mode="edit" initialData={program} onSubmit={handleUpdate} />;
};

export default EditProgram;