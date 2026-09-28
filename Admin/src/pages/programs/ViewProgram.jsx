import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiEdit,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

const initialPrograms = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
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
    overview:
      "ADP CS is a 2-year Associate Degree program designed to provide students with strong foundations in computer science, programming, and modern software development.",
    whyStudy:
      "Learn modern computer science concepts, gain practical coding skills, and prepare for a successful career in the tech industry.",
    whatYouWillStudy:
      "Programming Fundamentals, Object-Oriented Programming, Data Structures, Databases, Web Development, Mobile App Development.",
    careerOpportunities:
      "Software Developer, Web Developer, Mobile App Developer, Database Administrator, IT Support Specialist.",
    specializations: "Web Development, Mobile Apps, Database Systems",
    admissionInfo:
      "Merit-based admissions. Candidates must pass the entry test and interview.",
    seoTitle: "ADP CS - AIRS",
    seoDescription:
      "Associate Degree in Computer Science at Agile Institute of Rehabilitation Sciences.",
    seoKeywords: "ADP CS, computer science, AIRS, associate degree",
    status: "Active",
    featured: false,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
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
    overview:
      "ADP IT is a 2-year Associate Degree program focused on information technology, networking, and modern IT infrastructure.",
    whyStudy:
      "Gain hands-on experience with networking, servers, and IT support systems to build a strong career in IT.",
    whatYouWillStudy:
      "Networking Fundamentals, Server Administration, Cybersecurity Basics, Database Management, IT Support.",
    careerOpportunities:
      "IT Support Specialist, Network Administrator, Systems Analyst, Cybersecurity Analyst.",
    specializations: "Networking, Cybersecurity, Cloud Computing",
    admissionInfo:
      "Merit-based admissions. Candidates must pass the entry test and interview.",
    seoTitle: "ADP IT - AIRS",
    seoDescription:
      "Associate Degree in Information Technology at Agile Institute of Rehabilitation Sciences.",
    seoKeywords: "ADP IT, information technology, AIRS, associate degree",
    status: "Active",
    featured: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
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
    overview:
      "DPT is a 5-year professional degree program that prepares students to become licensed physical therapists capable of diagnosing and treating movement dysfunctions.",
    whyStudy:
      "Help patients recover from injuries, improve mobility, and enhance their quality of life through physical therapy.",
    whatYouWillStudy:
      "Anatomy, Physiology, Kinesiology, Biomechanics, Rehabilitation Techniques, Clinical Practice, Orthopedics, Neurology.",
    careerOpportunities:
      "Hospitals, Rehabilitation Centers, Sports Teams, Private Clinics, Academic Institutions.",
    specializations: "Orthopedic, Neurological, Pediatric, Sports Physiotherapy",
    admissionInfo:
      "Merit-based admissions with entry test. Candidates must have FSc Pre-Medical with minimum 60% marks.",
    seoTitle: "DPT - AIRS",
    seoDescription:
      "Doctor of Physical Therapy at Agile Institute of Rehabilitation Sciences.",
    seoKeywords: "DPT, physical therapy, AIRS, doctor of physical therapy",
    status: "Active",
    featured: true,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=400&fit=crop",
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
    overview:
      "Pharmacy Technician is a 2-year diploma program that trains students to assist pharmacists in dispensing medications and providing patient care.",
    whyStudy:
      "Work in pharmacies, hospitals, and pharmaceutical companies with practical skills in medication management.",
    whatYouWillStudy:
      "Pharmacology, Pharmaceutics, Dispensing Techniques, Patient Care, Pharmacy Law, Inventory Management.",
    careerOpportunities:
      "Community Pharmacies, Hospital Pharmacies, Pharmaceutical Companies, Clinical Research.",
    specializations: "Hospital Pharmacy, Community Pharmacy",
    admissionInfo:
      "Merit-based admissions. Candidates must have FSc Pre-Medical or equivalent.",
    seoTitle: "Pharmacy Technician - AIRS",
    seoDescription:
      "Pharmacy Technician program at Agile Institute of Rehabilitation Sciences.",
    seoKeywords: "Pharmacy Technician, pharmacy, AIRS",
    status: "Active",
    featured: false,
  },
];

const InfoRow = ({ label, value }) => {
  if (!value) return null;

  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 py-3 last:border-b-0 sm:flex-row sm:items-start sm:gap-4">
      <span className="w-full text-sm font-semibold text-slate-500 sm:w-48 sm:shrink-0">
        {label}
      </span>

      <span className="text-sm text-slate-800">{value}</span>
    </div>
  );
};

const ContentBlock = ({ title, content }) => {
  if (!content) return null;

  return (
    <div>
      <h3 className="mb-2 text-base font-bold text-slate-800">{title}</h3>
      <p className="text-sm leading-7 text-slate-600">{content}</p>
    </div>
  );
};

const ViewProgram = () => {
  const { id } = useParams();

  const program = initialPrograms.find((p) => p.id === Number(id));

  if (!program) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
        <h2 className="text-xl font-bold text-slate-800">Program Not Found</h2>

        <p className="mt-2 text-sm text-slate-500">
          The program you're looking for doesn't exist.
        </p>

        <Link
          to="/admin/programs"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b7d72]"
        >
          <FiArrowLeft size={16} />
          Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/programs"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100"
          >
            <FiArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {program.title}
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Program Details
            </p>
          </div>
        </div>

        <Link
          to={`/admin/programs/edit/${program.id}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition hover:bg-[#0b7d72]"
        >
          <FiEdit size={16} />
          Edit Program
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="relative h-56 w-full sm:h-72">
          <img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                  program.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {program.status === "Active" ? (
                  <FiCheckCircle size={12} />
                ) : (
                  <FiXCircle size={12} />
                )}
                {program.status}
              </span>

              {program.featured && (
                <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                  Featured
                </span>
              )}
            </div>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              {program.title}
            </h2>

            {program.shortTitle && program.shortTitle !== program.title && (
              <p className="mt-1 text-sm text-slate-200">
                Short Title: {program.shortTitle}
              </p>
            )}
          </div>
        </div>

        <div className="p-6">

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-bold text-slate-800">
              Basic Information
            </h3>

            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">
              <InfoRow label="Duration" value={program.duration} />
              <InfoRow label="Award" value={program.award} />
              <InfoRow label="Eligibility" value={program.eligibility} />
              <InfoRow label="Affiliation" value={program.affiliation} />
              <InfoRow label="Recognition" value={program.recognition} />
              <InfoRow label="Age Limit" value={program.ageLimit} />
              <InfoRow label="Pathway" value={program.pathway} />
              <InfoRow label="Fee" value={program.fee} />
            </div>
          </div>

          <div className="mb-6 space-y-5">
            <h3 className="text-lg font-bold text-slate-800">
              Program Content
            </h3>

            <ContentBlock title="Overview" content={program.overview} />
            <ContentBlock
              title="Why Study This Program"
              content={program.whyStudy}
            />
            <ContentBlock
              title="What You'll Study"
              content={program.whatYouWillStudy}
            />
            <ContentBlock
              title="Career Opportunities"
              content={program.careerOpportunities}
            />
            <ContentBlock
              title="Specializations"
              content={program.specializations}
            />
            <ContentBlock
              title="Admission Information"
              content={program.admissionInfo}
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-slate-800">
              SEO Information
            </h3>

            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">
              <InfoRow label="SEO Title" value={program.seoTitle} />
              <InfoRow label="SEO Description" value={program.seoDescription} />
              <InfoRow label="SEO Keywords" value={program.seoKeywords} />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ViewProgram;