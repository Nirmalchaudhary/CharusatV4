import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";


const CourseList = [
  {
    courseName:"Bachelor of Business Administration (BBA)",
    faculty:"Faculty of Management Studies",
    Institute:"Indukaka Ipcowala Institute of Management(I2IM)",
    CourseDuration: "03 Years",
    Intake:"180",
    Fees:"Rs 50,000/-",
    Eligibility:"CBSE/ISCE/State Board Minimum 50% required in Commerce Stream / Art Stream (with English as a subject)Student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/i2im/",
  },
  {
    courseName:"Master of Business Administration (MBA)",
    faculty:"Faculty of Management Studies",
    Institute:"Indukaka Ipcowala Institute of Management(I2IM)",
    CourseDuration: "02 Years",
    Intake:"120",
    Fees:"Rs 1,29,000/-",
    Eligibility:"Any Graduate with 50% marks in BBA, B.Tech, B.Com, B.Pharm, BE,Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/i2im/",
  },
  {
    courseName:"Bachelor of Computer Application (BCA)",
    faculty:"Faculty of Computer Science and Applications",
    Institute:"Smt.Chandaben Mohanbhai Patel Institute of Computer Application(CMPICA)",
    CourseDuration: "03 Years",
    Intake:"180",
    Fees:"Rs 40,000/-",
    Eligibility:"CBSE/ISCE/State Board/Commerce Stream with minimum 50% required & Science Stream minimum 45% required, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cmpica/",
  },
  {
    courseName:"Master of Computer Application (MCA)",
    faculty:"Faculty of Computer Science and Applications",
    Institute:"Smt.Chandaben Mohanbhai Patel Institute of Computer Application(CMPICA)",
    CourseDuration: "02 Years",
    Intake:"120",
    Fees:"Rs 1,11,000/-",
    Eligibility:"Any Graduate with 50% marks in BCA, B.Sc (IT), B.Tech Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cmpica/",
  },
  {
    courseName:"Bachelor of Pharmacy(B.Pharm.)",
    faculty:"Faculty of Pharmacy",
    Institute:"Ramanbhai Patel College of Pharmacy",
    CourseDuration: "04 Years",
    Intake:"100",
    Fees:"Rs 1,30,000/-",
    Eligibility:"CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per PCI), Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"#",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/rpcp/",
  },
  {
    courseName:"Master of Pharmacy (Pharmaceutical Technology)",
    faculty:"Faculty of Pharmacy",
    Institute:"Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake:"15",
    Fees:"Rs 1,89,000/-",
    Eligibility:"B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"#",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/rpcp/",
  },
  {
    courseName:"Master of Pharmacy (Pharmaceutical Quality Assurance)",
    faculty:"Faculty of Pharmacy",
    Institute:"Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake:"15",
    Fees:"Rs 1,89,000/-",
    Eligibility:"B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"#",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/rpcp/",
  },
  {
    courseName:"Master of Pharmacy (Pharmacology)",
    faculty:"Faculty of Pharmacy",
    Institute:"Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake:"9",
    Fees:"Rs 1,89,000/-",
    Eligibility:"B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"#",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/rpcp/",
  },
  {
    courseName:"Master of Pharmacy (Pharmacy Practice)",
    faculty:"Faculty of Pharmacy",
    Institute:"Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake:"3",
    Fees:"Rs 1,89,000/-",
    Eligibility:"B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"#",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/rpcp/",
  },
  {
    courseName:"Master of Pharmacy (Regulatory Affairs)",
    faculty:"Faculty of Pharmacy",
    Institute:"Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake:"15",
    Fees:"Rs 1,89,000/-",
    Eligibility:"B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"#",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/rpcp/",
  },
  {
    courseName:"Bachelor of Physiotherapy (BPT)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Ashok & Rita Patel Institute of Physiotherapy",
    CourseDuration: "4.5 Years",
    Intake:"100",
    Fees:"Rs 1,65,000/-",
    Eligibility:"CBSE/ISCE/State board Minimum 35% in PCB subjects Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/arip/",
  },
  {
    courseName:"Master of Physiotherapy (Musculoskeletal Science)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Ashok & Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake:"06",
    Fees:"Rs 2,00,000/-",
    Eligibility:"A degree in BPT minimum 50 % or equivalent grade point& compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/arip/",
  },
  {
    courseName:"Master of Physiotherapy (Neurological Science)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Ashok & Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake:"06",
    Fees:"Rs 2,00,000/-",
    Eligibility:"A degree in BPT minimum 50 % or equivalent grade point& compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/arip/",
  },
  {
    courseName:"Master of Physiotherapy (Cardiopulmonary Science)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Ashok & Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake:"03",
    Fees:"Rs 2,00,000/-",
    Eligibility:"A degree in BPT minimum 50 % or equivalent grade point& compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/arip/",
  },
  {
    courseName:"Master of Physiotherapy (Pediatrics)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Ashok & Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake:"03",
    Fees:"Rs 2,00,000/-",
    Eligibility:"A degree in BPT minimum 50 % or equivalent grade point& compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/arip/",
  },
  {
    courseName:"Master of Physiotherapy (Rehabilitation)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Ashok & Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake:"03",
    Fees:"Rs 2,00,000/-",
    Eligibility:"A degree in BPT minimum 50 % or equivalent grade point& compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/arip/",
  },
  {
    courseName:"Bachelor of Science (Physics)",
    faculty:"Faculty of Sciences",
    Institute:"P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "03 Years",
    Intake:"30",
    Fees:"Rs 49,000/-",
    Eligibility:"CBSE/ISCE/State board Minimum 55% in PCM/B subject, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Physics/",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/pdpias/",
  },
  {
    courseName:"Bachelor of Science (Biological Sciences) (Microbiology/Biochemistry/Biotechnology)",
    faculty:"Faculty of Sciences",
    Institute:"P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "03 Years",
    Intake:"120",
    Fees:"Rs 49,000/-",
    Eligibility:"CBSE/ISCE/State board Minimum 55% in PCM/B subject, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/pdpias/",
  },
  {
    courseName:"Master of Science (Microbiology)",
    faculty:"Faculty of Sciences",
    Institute:"P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake:"30",
    Fees:"Rs 80,000/-",
    Eligibility:"B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/pdpias/",
  },
  {
    courseName:"Master of Science (Biochemistry)",
    faculty:"Faculty of Sciences",
    Institute:"P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake:"30",
    Fees:"Rs 80,000/-",
    Eligibility:"B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/pdpias/",
  },
  {
    courseName:"Master of Science (Biotechnology)",
    faculty:"Faculty of Sciences",
    Institute:"P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake:"30",
    Fees:"Rs 80,000/-",
    Eligibility:"B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/pdpias/",
  },
  {
    courseName:"Master of Science (Advance Organic Chemistry)",
    faculty:"Faculty of Sciences",
    Institute:"P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake:"40",
    Fees:"Rs 70,000/-",
    Eligibility:"B.Sc(Chemistry) minimum 50% required, Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Chemistry/",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/pdpias/",
  },
  {
    courseName:"Bachelor of Technology (Civil Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake:"90",
    Fees:"1,28,000/-",
    Eligibility:"CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CL/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://cspitcivil.com/",
  },
  {
    courseName:"Bachelor of Technology (Computer Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake:"CSPIT-120 | DEPSTAR-120",
    Fees:"CSPIT-Rs 1,28,000/- | DEPSTAR-Rs 98,000/-",
    Eligibility:"CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CE/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit CSPIT",
    linkbtn3:"https://charusat.ac.in/cspit/ce/",
    txtBtn4:"Visit DEPSTAR",
    linkbtn4:"https://charusat.ac.in/depstar/ce/",
    showLinkBtn4: true,
  },
  {
    courseName:"Bachelor of Technology (Computer Science & Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake:"CSPIT-60 | DEPSTAR-120",
    Fees:"CSPIT-Rs 1,28,000/- | DEPSTAR-Rs 98,000/-",
    Eligibility:"CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CSE/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit CSPIT",
    linkbtn3:"https://charusat.ac.in/cspit/ce/",
    txtBtn4:"Visit DEPSTAR",
    linkbtn4:"https://charusat.ac.in/depstar/cse/",
    showLinkBtn4: true,
  },
  {
    courseName:"Bachelor of Technology (Electrical Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake:"60",
    Fees:"Rs 1,28,000/-",
    Eligibility:"CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EE/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cspit/ee/",
  },
  {
    courseName:"Bachelor of Technology (Electronics & Communication Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake:"60",
    Fees:"Rs 1,28,000/-",
    Eligibility:"CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EC/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cspit/ec/",
  },
  {
    courseName:"Bachelor of Technology (Information Technology)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake:"CSPIT-120 | DEPSTAR-60",
    Fees:"CSPIT-Rs 1,28,000/- | DEPSTAR-Rs 98,000/-",
    Eligibility:"CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/IT/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit CSPIT",
    linkbtn3:"https://charusat.ac.in/cspit/it/",
    txtBtn4:"Visit DEPSTAR",
    linkbtn4:"https://charusat.ac.in/depstar/it/",
    showLinkBtn4: true,
  },
  {
    courseName:"Bachelor of Technology (Mechanical Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake:"60",
    Fees:"Rs 1,28,000/-",
    Eligibility:"CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cspit/me/",
  },
  {
    courseName:"Master of Technology (Embedded System & VLSI Design)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake:"18",
    Fees:"Rs 1,59,000/-",
    Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % & should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EC/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cspit/ec/",
  },
  {
    courseName:"Master of Technology (Structural Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake:"18",
    Fees:"Rs 1,59,000/-",
    Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % & should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CL/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://cspitcivil.com",
  },
  {
    courseName:"Master of Technology (Computer Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake:"18",
    Fees:"Rs 1,59,000/-",
    Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % & should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CE/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cspit/ce/",
  },
  {
    courseName:"Master of Technology (Electrical Power System)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake:"18",
    Fees:"Rs 1,59,000/-",
    Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % & should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EE/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cspit/ee/",
  },
  {
    courseName:"Master of Technology (Advanced Manufacturing Technology)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake:"18",
    Fees:"Rs 1,59,000/-",
    Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % & should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cspit/me/",
  },
  {
    courseName:"Master of Technology (Thermal Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake:"18",
    Fees:"Rs 1,59,000/-",
    Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % & should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME/",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cspit/me/",
  },
  {
    courseName:"Post Graduate Diploma in Medical Laboratory Technology (PGDMLT)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Bapubhai Desaibhai Patel Institute of Paramedical Sciences(BDPIPS)",
    CourseDuration: "01 Years",
    Intake:"20",
    Fees:"Rs 20,000/-",
    Eligibility:"B.Sc (Micro/Bio Technology/Chemistry DMLT)minimum 50% required,Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"#",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cips/",
  },
  {
    courseName:"Post Graduate Diploma in Clinical Hypnosis (PGDCH)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Bapubhai Desaibhai Patel Institute of Paramedical Sciences(BDPIPS)",
    CourseDuration: "01 Years",
    Intake:"30",
    Fees:"Rs 45,000/-",
    Eligibility:"B.Sc (Micro/Bio Technology/Chemistry DMLT)minimum 50% required,Any student within/outside Gujarat",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/cips/",
  },
  {
    courseName:"Post Graduate Diploma in Cyber Security (PGDCS)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Institute of Technology (CSPIT)",
    CourseDuration: "01 Years",
    Intake:"15",
    Fees:"Rs 1,50,000/-",
    Eligibility:"Graduate in any discipline",
    txtBtn1:"View Syllabus",
    linkbtn1:"https://pgdcs.charusat.ac.in/",
    txtBtn2:"Download Brochure",
    linkbtn2:"#",
    txtBtn3:"Visit Website",
    linkbtn3:"https://pgdcs.charusat.ac.in/",
  },
  {
    courseName:"General Nursing Midwifery (GNM)",
    faculty:"Faculty of Medical Sciences",
    Institute:"Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "03 Years",
    Intake:"40",
    Fees:"Rs 1,10,000/-",
    Eligibility:"HSC or Equivalent examination with Science Stream, General Stream,Vyavsaylakshi stream,Uchchatar Uttar Buniyadi Pravah Stream with English subject Minimum 40% required",
    txtBtn1:"View Syllabus",
    linkbtn1:"#",
    txtBtn2:"Download Brochure",
    linkbtn2:"https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    txtBtn3:"Visit Website",
    linkbtn3:"https://charusat.ac.in/mtin",
  },
  

];

const Transport = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
            {CourseList.map((val, i) => (
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h4>{val.courseName}</h4>
                            <div className="meta-post">
                              {/* <h2>{val.courseName}</h2> */}
                              <p><b>Faculty:</b> {val.faculty}</p>
                              <p><b>Institute:</b>{val.Institute}</p>
                              <p><b>Course Duration:</b> {val.CourseDuration}</p>
                              <p><b>Intake:</b> {val.Intake}</p>
                              <p><b>Fees:</b> Rs. {val.Fees}</p>
                              <p><b>Eligibility:</b> {val.Eligibility}</p>
                              <a class="lab-btn" href={val.linkbtn1}><span>{val.txtBtn1}</span></a>{"    "}
                              <a class="lab-btn" href={val.linkbtn2}><span>{val.txtBtn2}</span></a>{" "}
                              <a class="lab-btn" href={val.linkbtn3}><span>{val.txtBtn3}</span></a>{" "}
                              {val.showLinkBtn4 ? (
                                <a class="lab-btn" href={val.linkbtn4}><span>{val.txtBtn4}</span></a>
                                ) : (
                                 <span></span>
                              )}
                              
                            </div>
                           
                            {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
              </article>
              
               ))}
            </div>
            {/* <Contact
                name="Dr Swayamprakash Patel"
                email="swayamprakash.patel@charusat.ac.in"
                phone="+91-1234567890"
              /> */}
          </div>
        </div>
      </div>

      {/* <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Sr No.</th>
                    <th className="cat-product">Route</th>
                    <th className="cat-price">Transporters' Name</th>
                    <th className="cat-toprice">Contact Person</th>
                    <th className="cat-edit">Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {transporterList.map((val, i) => (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        {val.srNo}
                      </td>
                      <td className="cat-product">{val.route}</td>
                      <td className="cat-price">{val.transporterName}</td>
                      <td className="cat-toprice">{val.contactPerson}</td>
                      <td className="cat-edit">{val.contactNo}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Transport;
