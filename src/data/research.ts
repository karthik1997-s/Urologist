export const researchFilters = [
  "All",
  "TAPASUCON",
  "USICON",
  "SZUSICON",
  "UAA",
] as const;

export type ResearchFilter = (typeof researchFilters)[number];

export type ResearchItem = {
  slug: string;
  title: string;
  conference: string;
  year: string;
  filter: Exclude<ResearchFilter, "All">;
  category: string;
  studyType?: string;
  award?: string;
  presenter: string;
  specialty: string;
  intro: string;
  focus: string;
  points: string[];
  details: { label: string; value: string }[];
};

export const researchItems: ResearchItem[] = [
  {
    slug: "faecaluria-or-funguria",
    title: "Faecaluria or Funguria",
    conference: "TAPASUCON 23",
    year: "2023",
    filter: "TAPASUCON",
    category: "Moderated Paper Presentation",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "Dr. Suryaram Aravind presented the moderated paper “Faecaluria or Funguria” at TAPASUCON 23, highlighting an unusual and diagnostically challenging urological presentation.",
    focus:
      "The presentation focused on careful clinical evaluation and differential diagnosis when unusual findings such as fecaluria or fungal elements are encountered in the urinary tract. Detailed assessment, appropriate investigations and timely diagnosis matter in complex urological conditions.",
    points: [
      "Unusual urinary findings need a structured differential diagnosis",
      "Fecaluria and funguria can be confused without careful evaluation",
      "Investigations should match the clinical picture",
      "Timely diagnosis supports safer management",
    ],
    details: [
      { label: "Conference", value: "TAPASUCON 23" },
      { label: "Presentation", value: "Faecaluria or Funguria" },
      { label: "Category", value: "Moderated Paper" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Academic area", value: "Urology" },
    ],
  },
  {
    slug: "urosepsis-following-urs",
    title: "Urosepsis Following URS: Predictors",
    conference: "TAPASUCON 23",
    year: "2023",
    filter: "TAPASUCON",
    category: "Moderated Poster Presentation",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "A moderated poster at TAPASUCON 23 on an important clinical concern in endourological practice: urosepsis after ureteroscopy.",
    focus:
      "Ureteroscopy (URS) is widely used for urinary tract stones. Although generally safe, urosepsis after URS can be a serious complication. The presentation looked at predictors of post-URS urosepsis and the value of recognising high-risk patients early.",
    points: [
      "Early identification of high-risk patients",
      "Better preoperative assessment and planning",
      "Appropriate infection-control measures",
      "Closer postoperative monitoring",
      "Timely recognition and management of sepsis",
    ],
    details: [
      { label: "Conference", value: "TAPASUCON 23" },
      { label: "Presentation", value: "Urosepsis Following URS: Predictors" },
      { label: "Category", value: "Moderated Poster Presentation" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
  {
    slug: "funguria-masquerading-faecaluria",
    title: "Funguria Masquerading as Faecaluria",
    conference: "USICON 24",
    year: "2024",
    filter: "USICON",
    category: "Unmoderated E-Poster Presentation",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "An unmoderated e-poster at USICON 24 on an unusual presentation in which fungal material in the urine can resemble faecaluria.",
    focus:
      "Faecaluria can raise suspicion of an enterovesical fistula, while funguria is the presence of fungal elements in the urinary tract. When fungal material looks like faecal matter, distinguishing the two needs careful evaluation and the right investigations.",
    points: [
      "Uncommon causes of unusual urinary findings should stay on the list",
      "A broad differential diagnosis avoids premature conclusions",
      "Microbiological and imaging tests help separate the two pictures",
      "Targeted management follows an accurate diagnosis",
    ],
    details: [
      { label: "Conference", value: "USICON 24" },
      { label: "Presentation", value: "Funguria Masquerading as Faecaluria" },
      { label: "Category", value: "Unmoderated E-Poster Presentation" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
  {
    slug: "left-radical-nephrectomy-complexity",
    title: "Surgical Complexity and Prognostic Outcome of Patients Undergoing Left Radical Nephrectomy",
    conference: "SZUSICON 24",
    year: "2024",
    filter: "SZUSICON",
    category: "Moderated Poster Presentation",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "A moderated poster at SZUSICON 24 on the relationship between surgical complexity and outcomes after left radical nephrectomy.",
    focus:
      "Radical nephrectomy is an established option for selected renal tumours and other complex renal conditions. Complexity varies with tumour features, anatomy and the extent of surgery. The work examined how that complexity relates to prognostic outcomes and why preoperative assessment should be individualised.",
    points: [
      "Better preoperative risk assessment",
      "Individualised surgical planning",
      "Anticipation of perioperative challenges",
      "Appropriate postoperative monitoring",
      "Clearer counselling about expected outcomes",
    ],
    details: [
      { label: "Conference", value: "SZUSICON 24" },
      { label: "Presentation", value: "Surgical Complexity and Prognostic Outcome of Patients Undergoing Left Radical Nephrectomy" },
      { label: "Category", value: "Moderated Poster Presentation" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
  {
    slug: "supra-10-11-punctures",
    title: "Supra 10 and 11 Punctures for Staghorn and Upper Calyceal Stones: Higher Morbidity",
    conference: "SZUSICON 24",
    year: "2024",
    filter: "SZUSICON",
    category: "Moderated Paper Presentation",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "A moderated paper at SZUSICON 24 on surgical considerations and morbidity of higher renal access during percutaneous stone surgery.",
    focus:
      "PCNL is an established treatment for complex renal stones, including staghorn and upper-calyceal stones. Optimal access sometimes needs higher punctures, including supracostal supra-10 and supra-11 tracks. The paper discussed planning, patient selection and the morbidity that can accompany these higher punctures.",
    points: [
      "Careful preoperative imaging and access planning",
      "Appropriate selection of puncture site",
      "Anatomical considerations of supracostal access",
      "Anticipation of perioperative complications",
      "Balancing stone clearance with procedural safety",
    ],
    details: [
      { label: "Conference", value: "SZUSICON 24" },
      { label: "Presentation", value: "Supra 10 and 11 Punctures for Staghorn and Upper Calyceal Stones Which Carries a Higher Morbidity" },
      { label: "Category", value: "Moderated Paper Presentation" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
  {
    slug: "flexi-urs-papillary-necrosis",
    title: "The Need for Flexible URS in Renal Papillary Necrosis",
    conference: "TAPASUCON 24",
    year: "2024",
    filter: "TAPASUCON",
    category: "Moderated Paper Presentation",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "A moderated paper at TAPASUCON 24 on the role of flexible ureteroscopy in evaluating and managing renal papillary necrosis.",
    focus:
      "Renal papillary necrosis involves damage to the renal papillae and may present with haematuria, flank pain, obstruction or other urinary symptoms. In selected cases, direct visualisation of the collecting system with flexible URS can add diagnostic and therapeutic value.",
    points: [
      "Detailed evaluation of the renal collecting system",
      "Direct endoscopic visualisation when indicated",
      "Appropriate use of flexible ureteroscopy",
      "Identification of obstructive or associated pathology",
      "Individualised treatment based on the presentation",
    ],
    details: [
      { label: "Conference", value: "TAPASUCON 24" },
      { label: "Presentation", value: "The Need for Flexi URS in Renal Papillary Necrosis" },
      { label: "Category", value: "Moderated Paper Presentation" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
  {
    slug: "relook-urs-diabetics-pyelonephritis",
    title: "The Need for Re-look Flexible URS in Diabetics with Acute Pyelonephritis",
    conference: "USICON 25",
    year: "2025",
    filter: "USICON",
    category: "Unmoderated E-Poster Presentation",
    studyType: "Prospective Observational Study",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "An unmoderated e-poster at USICON 25 on whether re-look flexible ureteroscopy has a role in selected diabetic patients after acute pyelonephritis.",
    focus:
      "Acute pyelonephritis can be more complex in diabetes because of a higher risk of complications and persistent infection. This prospective observational study explored the rationale for reassessing the collecting system with re-look Flexi URS when residual or persistent pathology is a concern.",
    points: [
      "Careful evaluation of diabetic patients with acute pyelonephritis",
      "Assessment of treatment response",
      "Identification of residual renal pathology",
      "Re-look Flexi URS in selected cases",
      "Decisions based on the individual clinical findings",
    ],
    details: [
      { label: "Conference", value: "USICON 25" },
      { label: "Presentation", value: "The Need for Re-look Flexi URS in Diabetics for Acute Pyelonephritis" },
      { label: "Study type", value: "Prospective Observational Study" },
      { label: "Category", value: "Unmoderated E-Poster Presentation" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
  {
    slug: "tracing-the-storm-epn",
    title: "Tracing the Storm: A Prospective Evaluation of Clinical Trajectories and Outcome Predictors in Emphysematous Pyelonephritis",
    conference: "SZUSICON 25",
    year: "2025",
    filter: "SZUSICON",
    category: "Moderated Paper Presentation",
    studyType: "Prospective Evaluation",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "A moderated paper at SZUSICON 25 on disease progression, clinical trajectories and outcome predictors in emphysematous pyelonephritis.",
    focus:
      "EPN is a severe, potentially life-threatening renal infection with gas in the parenchyma or collecting system. This prospective evaluation followed the clinical course of patients and assessed predictors of outcome, with attention to how patients progress during treatment.",
    points: [
      "Early recognition of severe EPN",
      "Comprehensive clinical and radiological assessment",
      "Factors associated with disease progression",
      "Risk stratification and close monitoring",
      "Timely, individualised intervention",
      "Using clinical trajectories to support decisions",
    ],
    details: [
      { label: "Conference", value: "SZUSICON 25" },
      { label: "Presentation", value: "Tracing the Storm: A Prospective Evaluation of Clinical Trajectories and Outcome Predictors in Emphysematous Pyelonephritis" },
      { label: "Study type", value: "Prospective Evaluation" },
      { label: "Category", value: "Moderated Paper Presentation" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
  {
    slug: "stones-spark-sepsis-rirs",
    title: "When Stones Spark Sepsis: Insights from RIRS Outcomes",
    conference: "SZUSICON 25",
    year: "2025",
    filter: "SZUSICON",
    category: "Moderated Paper Presentation",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "A moderated paper at SZUSICON 25 on stone-associated infection and sepsis after retrograde intrarenal surgery (RIRS).",
    focus:
      "RIRS is a widely used, minimally invasive option for renal stones. Infectious complications, including sepsis, can still occur in susceptible patients. The presentation examined RIRS outcomes in the setting of stone-related infection and the value of identifying risk and optimising perioperative care.",
    points: [
      "Comprehensive preoperative evaluation",
      "Assessment of infection and stone-related risk",
      "Appropriate patient selection for RIRS",
      "Infection control before intervention",
      "Close postoperative monitoring",
      "Early recognition of infectious complications",
    ],
    details: [
      { label: "Conference", value: "SZUSICON 25" },
      { label: "Presentation", value: "When Stones Spark Sepsis: Insights from RIRS Outcomes" },
      { label: "Category", value: "Moderated Paper Presentation" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
  {
    slug: "relook-urs-post-stenting-uaa",
    title: "Role of Re-look Flexible Ureteroscopy in Post-Stenting Management of Acute Pyelonephritis: Where We Miss the Boat",
    conference: "UAA 25, Taiwan",
    year: "2025",
    filter: "UAA",
    category: "Podium Presentation",
    award: "Best Paper Award",
    presenter: "Dr. Suryaram Aravind",
    specialty: "Urology",
    intro:
      "A podium presentation at UAA 25 in Taiwan, awarded Best Paper, on re-look flexible ureteroscopy after stenting for acute pyelonephritis.",
    focus:
      "When obstruction and infection coexist, ureteral stenting relieves drainage. The work explored whether re-look Flexi URS after stenting can identify persistent or underlying pathology that would otherwise be missed, and how that reassessment can improve the overall pathway.",
    points: [
      "Appropriate initial management of obstructed, infected systems",
      "Timely reassessment after ureteral stenting",
      "Identification of persistent urinary-tract pathology",
      "Re-look flexible ureteroscopy in selected patients",
      "Individualised decisions from clinical and endoscopic findings",
      "A more complete management pathway for acute pyelonephritis",
    ],
    details: [
      { label: "Conference", value: "UAA 25, Taiwan" },
      { label: "Presentation", value: "Role of Re-look Flexible Ureteroscopy in Post-Stenting Management of Acute Pyelonephritis: Where We Miss the Boat" },
      { label: "Category", value: "Podium Presentation" },
      { label: "Recognition", value: "Best Paper Award" },
      { label: "Presenter", value: "Dr. Suryaram Aravind" },
      { label: "Speciality", value: "Urology" },
    ],
  },
];
