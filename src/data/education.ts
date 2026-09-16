export const educationCategories = [
  "All",
  "Kidney Stones",
  "UTI",
  "Urethral Stricture",
  "General Urology",
] as const;

export type EducationCategory = (typeof educationCategories)[number];

export type EducationArticle = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  category: Exclude<EducationCategory, "All">;
  date: string;
  readTime: string;
  tag: string;
  journal: string;
  year: string;
  status: string;
  role: string;
  authors: string;
  doi?: string;
  details: { label: string; value: string }[];
  points: string[];
  takeaway: string;
  sections: { title: string; text: string }[];
};

export const educationArticles: EducationArticle[] = [
  {
    slug: "ecirs-cut-to-light",
    title: "Endoscopic Synergy: ECIRS-Guided “Cut-to-Light” Holmium Laser Retrograde Endoureterotomy for Ureteral Stricture Management",
    shortTitle: "ECIRS Cut-to-Light Endoureterotomy",
    description: "A minimally invasive dual-access approach for a complex, long-segment ureteral stricture when major reconstruction was not suitable.",
    intro: "Ureteral strictures can obstruct urine flow and threaten kidney function. This Cureus case report describes how ECIRS and a “cut-to-light” Holmium laser technique were combined when a conventional ureteroscopic approach could not cross the stricture.",
    category: "Urethral Stricture",
    date: "2025-02-27",
    readTime: "8 min read",
    tag: "Endourology",
    journal: "Cureus",
    year: "2025",
    status: "Published",
    role: "First Author",
    authors: "Dr. Suryaram Aravind and colleagues",
    doi: "10.7759/cureus.79758",
    details: [
      { label: "Journal", value: "Cureus" },
      { label: "Date", value: "27 February 2025" },
      { label: "Volume", value: "17(2): e79758" },
      { label: "Type", value: "Case Report" },
      { label: "Role", value: "First Author" },
    ],
    points: [
      "Blind-ending proximal ureteral stricture at the PUJ",
      "PCN drainage first to protect the kidney",
      "ECIRS for visualization from both sides of the obstruction",
      "Holmium:YAG “cut-to-light” endoureterotomy and stent placement",
    ],
    takeaway: "Combining ECIRS, ureteroscopy and Holmium:YAG laser endoureterotomy can offer dual access and targeted treatment in selected high-risk patients. This is a single-case report; larger studies and longer follow-up are needed before it can be considered standard of care.",
    sections: [
      {
        title: "A challenging clinical presentation",
        text: "The case involved a 50-year-old woman with diabetes mellitus and chronic obstructive pulmonary disease who presented with fever, loin pain and vomiting. Imaging revealed a complex right-sided ureteral obstruction at the pelvi-ureteric junction (PUJ). Attempts to place a right-sided ureteral stent were unsuccessful because the ureter was blind-ending at the obstructed segment. A right percutaneous nephrostomy (PCN) was therefore performed to establish drainage and preserve renal function. Further evaluation demonstrated bilateral renal scarring with reduced cortical function, with approximately 48% function in the right kidney and 52% in the left kidney. Because of her multiple comorbidities, major reconstructive surgery was considered unsuitable.",
      },
      {
        title: "Choosing a minimally invasive strategy",
        text: "The initial plan was laser ureterotomy through a conventional ureteroscopic approach. The guidewire could not be advanced across the proximal stricture. Rather than a potentially hazardous blind incision, the approach was modified. Through the existing PCN tract, nephroscopy was performed simultaneously with ureteroscopy, creating an Endoscopic Combined Intrarenal Surgery (ECIRS) approach. This dual-access strategy provided visualization from both sides of the obstructed segment and allowed the team to identify the area requiring incision.",
      },
      {
        title: "The “cut-to-light” technique",
        text: "The distal portion of the stricture was treated with a medial laser ureterotomy. For the proximal portion, the “cut-to-light” technique was used. Simultaneous endoscopic visualization from the opposing access allowed the direction of the laser incision to be guided by the visible endoscopic light. A Holmium:YAG laser performed the endoureterotomy, allowing controlled incision and coagulation. An 8 Fr ureteral stent was then placed to maintain drainage.",
      },
      {
        title: "Recovery and renal preservation",
        text: "The patient recovered well, with improvement in pain and renal parameters. She was discharged on the fifth postoperative day and remained under follow-up for stent removal and assessment of the treated ureter. The case shows how complementary endoscopic approaches can be combined when conventional access to a complex ureteral stricture is difficult or impossible.",
      },
      {
        title: "A new perspective in complex stricture management",
        text: "Treatment of long-segment ureteral strictures can involve extensive reconstruction, including renal descensus, pyeloplasty, transureteroureterostomy, buccal mucosal graft ureteroplasty, Boari flap reconstruction, renal autotransplantation or bowel interposition. These remain important options in selected patients, but they can involve significant complexity and morbidity. The ECIRS-guided approach provides a minimally invasive alternative for carefully selected high-risk patients. The authors report this as the first successful synergistic use of ECIRS with the “cut-to-light” Holmium laser technique for a complex ureteral stricture.",
      },
    ],
  },
  {
    slug: "emphysematous-pyelonephritis-management",
    title: "From Mortality to Morbidity Control: A Paradigm Shift in Emphysematous Pyelonephritis Management",
    shortTitle: "Emphysematous Pyelonephritis Management",
    description: "A staged, minimally invasive pathway for Class IIIA emphysematous pyelonephritis that prioritized drainage, survival and kidney preservation.",
    intro: "Emphysematous pyelonephritis is a rare, potentially life-threatening kidney infection, most often linked with poorly controlled diabetes. This Cureus case report describes successful staged management in a high-risk patient, shifting the aim from survival alone to also reducing morbidity and avoiding unnecessary kidney loss.",
    category: "UTI",
    date: "2025-07-28",
    readTime: "7 min read",
    tag: "Kidney Infection",
    journal: "Cureus",
    year: "2025",
    status: "Published",
    role: "First Author",
    authors: "Dr. Suryaram Aravind and colleagues",
    doi: "10.7759/cureus.88901",
    details: [
      { label: "Journal", value: "Cureus" },
      { label: "Date", value: "28 July 2025" },
      { label: "Volume", value: "17(7): e88901" },
      { label: "Type", value: "Case Report" },
      { label: "Role", value: "First Author" },
    ],
    points: [
      "Class IIIA EPN with severe sepsis and cardiac comorbidity",
      "CT-guided PCN first for source control and stabilization",
      "Later DJ stent for definitive internal drainage",
      "Infection resolved with preserved renal function",
    ],
    takeaway: "In selected high-risk patients, timely minimally invasive drainage can control infection, allow recovery and preserve the kidney, rather than moving immediately to emergency radical surgery.",
    sections: [
      {
        title: "A stepwise approach to a high-risk patient",
        text: "The report describes a 51-year-old woman with uncontrolled diabetes, severe sepsis and Class IIIA emphysematous pyelonephritis. Cardiac comorbidities made immediate definitive surgery particularly challenging. A staged, minimally invasive strategy was used. CT-guided percutaneous nephrostomy (PCN) was performed first to achieve drainage and source control. This helped stabilize the patient and created time for her condition to improve. A double-J (DJ) ureteral stent was then placed for definitive internal drainage. The infection resolved, and follow-up showed preservation of renal function.",
      },
      {
        title: "Moving beyond mortality reduction",
        text: "Historically, severe EPN carried high mortality, and nephrectomy was often considered when conservative measures were unlikely to control infection. This report reflects a change in thinking: treatment is no longer focused only on survival, but also on reducing morbidity, preserving renal function and avoiding unnecessary organ loss when it is safely possible. Treatment is tailored to the patient’s condition rather than applying one intervention to every case.",
      },
      {
        title: "The role of multidisciplinary decision-making",
        text: "Successful management of severe EPN needs rapid diagnosis, imaging, infection control, assessment of comorbidities and coordinated decisions. Timely minimally invasive drainage can provide source control while the patient stabilizes. Percutaneous nephrostomy can be a temporary bridge and, in selected patients, an important part of definitive management.",
      },
      {
        title: "Preserving the kidney, preserving the future",
        text: "The outcome supports organ-preserving strategies in complex urological infections. Early recognition, imaging, individualized planning and staged minimally invasive intervention can shift high-risk EPN care from emergency radical surgery toward an approach that values both survival and renal function.",
      },
    ],
  },
  {
    slug: "fungal-renal-cyst",
    title: "Renal Cyst’s Dark Secret: A Rare Case of Fungal-Infested Necrotizing Granulomatous Inflammation in a Renal Cyst",
    shortTitle: "Fungal Infection in a Renal Cyst",
    description: "A persistent infected renal cyst in an immunocompetent man, where cultures were negative and histopathology revealed Candida.",
    intro: "Renal cysts are often silent. When infection persists and routine cultures stay negative, the cause may still be hidden in the cyst wall. This Cureus report, with Dr. Suryaram Aravind as second author, shows why fungal infection should stay on the differential even in an immunocompetent patient.",
    category: "General Urology",
    date: "2025-06-10",
    readTime: "7 min read",
    tag: "Unusual Diagnoses",
    journal: "Cureus",
    year: "2025",
    status: "Published",
    role: "Second Author",
    authors: "Dr. Suryaram Aravind (second author)",
    doi: "10.7759/cureus.85686",
    details: [
      { label: "Journal", value: "Cureus" },
      { label: "Date", value: "10 June 2025" },
      { label: "Volume", value: "17(6): e85686" },
      { label: "Type", value: "Case Report" },
      { label: "Role", value: "Second Author" },
    ],
    points: [
      "Recurrent infected lower-pole cyst after prior drainage",
      "Bacterial and fungal cultures remained negative",
      "Decortication showed necrotizing granulomas with Candida hyphae",
      "Oral fluconazole for six weeks; no recurrence at two months",
    ],
    takeaway: "A negative culture does not exclude fungal infection. Persistent or recurrent cyst infection needs imaging, histopathology and, when required, surgery plus targeted antifungal treatment.",
    sections: [
      {
        title: "An unusual clinical presentation",
        text: "The report describes a 49-year-old immunocompetent man with right loin pain and fever. He had previously had an infected renal cyst managed with percutaneous catheter drainage. Imaging later showed a large, thick-walled cyst in the lower pole of the right kidney, about 247 cc, with internal echoes, cortical thinning and features of chronic obstruction. Broad-spectrum antibiotics and ultrasound-guided aspiration with a pigtail catheter drained about 180 mL of turbid fluid. Bacterial and fungal cultures remained negative.",
      },
      {
        title: "When routine cultures do not tell the full story",
        text: "Despite drainage and treatment, drainage persisted and a residual cavity remained. Fungal organisms may stay confined within the cyst wall, so urine, blood or cyst-fluid cultures can be negative despite infection. Because the lesion did not resolve, definitive surgery was undertaken.",
      },
      {
        title: "Histopathology reveals the hidden diagnosis",
        text: "The patient underwent open right renal cyst decortication with removal of the double-J stent. Histopathology showed necrotizing granulomatous inflammation with fungal hyphae, consistent with Candida. He received oral fluconazole for six weeks. At two-month follow-up he was asymptomatic, with no recurrence.",
      },
      {
        title: "A multimodal approach to definitive treatment",
        text: "Initial drainage gave temporary source control. Surgery allowed removal and examination of the abnormal cyst wall. Once fungus was identified, targeted antifungal therapy completed treatment. This combination achieved clinical resolution. The case is a reminder that an apparently routine renal cyst can conceal unusual infectious pathology.",
      },
    ],
  },
  {
    slug: "news2-qsofa-pyelonephritis",
    title: "Dual-Score Framework: NEWS2 and qSOFA in Acute Pyelonephritis",
    shortTitle: "NEWS2 and qSOFA in Pyelonephritis",
    description: "A prospective study showing how NEWS2 and qSOFA play complementary roles in ICU triage and mortality risk in acute pyelonephritis.",
    intro: "Acute pyelonephritis can deteriorate quickly. This World Journal of Nephrology study evaluated NEWS2 and qSOFA for risk stratification in adults with non-obstructive, non-emphysematous infection. Dr. Suryaram Aravind contributed as second author.",
    category: "UTI",
    date: "2026-03-25",
    readTime: "8 min read",
    tag: "Clinical Research",
    journal: "World Journal of Nephrology",
    year: "2026",
    status: "Published",
    role: "Second Author",
    authors: "Punith R Jain; Dr. Suryaram Aravind (second author)",
    doi: "10.5527/wjn.v15.i1.114165",
    details: [
      { label: "Journal", value: "World Journal of Nephrology" },
      { label: "Date", value: "25 March 2026" },
      { label: "Volume", value: "15(1): 114165" },
      { label: "Type", value: "Prospective Study" },
      { label: "Role", value: "Second Author" },
      { label: "Institution", value: "Sri Ramachandra Institute of Higher Education and Research, Chennai" },
    ],
    points: [
      "Two-year prospective study at a South Indian tertiary centre",
      "NEWS2 â‰¥5: 98.1% sensitivity for ICU admission (AUC 0.977)",
      "NEWS2 also predicted need for urological intervention (AUC 0.823)",
      "qSOFA â‰¥2 stronger for in-hospital mortality (AUC 0.839)",
    ],
    takeaway: "NEWS2 and qSOFA are complementary, not competing. NEWS2 â‰¥5 supports early ICU triage and intervention planning; qSOFA â‰¥2 adds mortality prognosis. Both support, and do not replace, clinical judgement.",
    sections: [
      {
        title: "Understanding the clinical challenge",
        text: "Acute pyelonephritis may start with nonspecific symptoms, yet a subset of patients progress to severe systemic illness. The study focused on non-obstructive, non-emphysematous acute pyelonephritis — a group less often studied with early warning scores. Researchers ran a prospective observational study over two years at a tertiary centre in South India, recording clinical, laboratory and imaging findings and relating them to ICU admission, mortality and the need for urological intervention.",
      },
      {
        title: "NEWS2: identifying patients who need escalated care",
        text: "NEWS2 was particularly useful for early triage. A score of â‰¥5 had 98.1% sensitivity for ICU admission, with an AUC of 0.977. It also predicted the need for urological intervention (AUC 0.823). NEWS2 can give an objective early signal that closer monitoring or faster escalation may be required.",
      },
      {
        title: "qSOFA: a stronger signal for mortality risk",
        text: "While NEWS2 performed strongly for ICU triage, qSOFA was more useful for mortality prognostication. A qSOFA score of â‰¥2 showed an AUC of 0.839 for in-hospital mortality and outperformed NEWS2 in that role. Patients who later needed ICU care already had elevated NEWS2 values at baseline, suggesting warning signs can appear before deterioration is obvious.",
      },
      {
        title: "Two scores with complementary roles",
        text: "NEWS2 and qSOFA should not be treated as rivals. NEWS2 â‰¥5 supports early ICU triage and identification of patients who need expedited care. qSOFA â‰¥2 adds information about in-hospital mortality risk. Used together with clinical assessment, they give a broader picture of deterioration and help timely decisions in busy emergency and urology settings.",
      },
    ],
  },
  {
    slug: "two-step-pyelonephritis",
    title: "Two-Step Strategy for Redefining Management of Pyelonephritis: A Prospective Observational Study",
    shortTitle: "Two-Step Strategy for Pyelonephritis",
    description: "A structured early-risk-assessment and targeted-escalation pathway for acute pyelonephritis, currently awaiting publication.",
    intro: "Acute pyelonephritis ranges from straightforward infection to illness that needs hospital care, intensive monitoring and urgent urological intervention. This prospective study, with Dr. Suryaram Aravind as first author, examines a two-step framework for earlier risk assessment and more systematic escalation.",
    category: "UTI",
    date: "Upcoming",
    readTime: "6 min read",
    tag: "Clinical Research",
    journal: "Awaiting publication",
    year: "Upcoming",
    status: "Awaiting publication",
    role: "First Author",
    authors: "Dr. Suryaram Aravind (first author)",
    details: [
      { label: "Status", value: "Awaiting publication" },
      { label: "Design", value: "Prospective observational study" },
      { label: "Area", value: "Urology / acute pyelonephritis" },
      { label: "Role", value: "First Author" },
    ],
    points: [
      "Step one: structured early risk assessment",
      "Step two: targeted escalation of care",
      "Aims to separate medical management from early intervention",
      "Journal, DOI and full results to follow publication",
    ],
    takeaway: "A two-step pathway aims to move pyelonephritis care from a one-size-fits-all model to risk-based decisions. Full journal details will be added after publication.",
    sections: [
      {
        title: "Rethinking the conventional approach",
        text: "Management of pyelonephritis often needs a rapid view of infection severity, complications, kidney function and whether a procedure is required. A central challenge is distinguishing patients who can be treated medically from those who need closer monitoring or early intervention. This study examines a systematic approach to those decisions. Dr. Suryaram Aravind contributed to the concept, clinical evaluation, data collection, analysis and development of the proposed strategy.",
      },
      {
        title: "Step one — early risk assessment",
        text: "Patients are assessed using clinical findings, physiological parameters, laboratory tests and imaging where appropriate. The aim is to identify those at higher risk of deterioration and to choose the right level of care early.",
      },
      {
        title: "Step two — targeted escalation of management",
        text: "Based on clinical status and risk profile, treatment can be escalated. Patients who need extra monitoring, specialist review or a urological procedure can be identified sooner, while lower-risk patients continue appropriate conservative care. The framework aims to replace a one-size-fits-all model with individualized, risk-based management.",
      },
      {
        title: "Looking ahead",
        text: "Effective care extends beyond antibiotics alone. Early recognition of deterioration, appropriate imaging, assessment of urinary-tract complications and timely intervention can help prevent progression. As the study moves toward publication, its findings may support more systematic clinical pathways. Journal, date, DOI and full results will be updated after publication.",
      },
    ],
  },
  {
    slug: "delayed-pcnl-hemorrhage-ssae",
    title: "Delayed Post-PCNL Hemorrhage Managed with Super-Selective Renal Artery Embolization (SSAE): A Nephron-Sparing Therapeutic Approach",
    shortTitle: "Delayed Post-PCNL Hemorrhage (SSAE)",
    description: "How delayed bleeding after PCNL can be controlled with super-selective embolization while protecting remaining kidney tissue.",
    intro: "PCNL is a standard option for large or complex kidney stones. Delayed hemorrhage is uncommon but serious. This work, with Dr. Suryaram Aravind as first author, describes super-selective renal artery embolization as a targeted, nephron-sparing way to stop bleeding.",
    category: "Kidney Stones",
    date: "Research",
    readTime: "7 min read",
    tag: "Endourology",
    journal: "Research publication",
    year: "Research",
    status: "Research publication",
    role: "First Author",
    authors: "Dr. Suryaram Aravind (first author)",
    details: [
      { label: "Area", value: "Urology & endourology" },
      { label: "Focus", value: "PCNL complications • delayed hemorrhage • SSAE" },
      { label: "Type", value: "Nephron-sparing case discussion" },
      { label: "Role", value: "First Author" },
    ],
    points: [
      "Delayed bleeding can appear after an uneventful early recovery",
      "Imaging looks for pseudoaneurysm or arterial extravasation",
      "SSAE treats the bleeding branch under angiographic guidance",
      "Aim is hemostasis with as little loss of healthy kidney as possible",
    ],
    takeaway: "Delayed post-PCNL hemorrhage needs early recognition. Super-selective embolization can stop arterial bleeding in a precise, minimally invasive way and prioritize kidney preservation.",
    sections: [
      {
        title: "Delayed hemorrhage: a serious post-PCNL complication",
        text: "Bleeding after PCNL may occur immediately or several days later. Delayed hemorrhage is challenging because the first postoperative days can look uneventful. Persistent or worsening blood in the urine, a fall in hemoglobin, flank pain, hypotension or other signs of blood loss should prompt evaluation for a vascular complication. Imaging helps identify the source, including renal arterial pseudoaneurysm or active extravasation.",
      },
      {
        title: "Precision through super-selective embolization",
        text: "When a specific arterial branch is the source, Super-Selective Renal Artery Embolization (SSAE) offers targeted endovascular treatment. Under angiographic guidance the responsible branch is catheterized and embolized. Bleeding can be controlled while limiting ischemia of nearby normal tissue, as an alternative to more invasive surgery in suitable patients.",
      },
      {
        title: "Preserving renal function",
        text: "A major advantage of super-selective embolization is its nephron-sparing potential. Treatment is focused on the abnormal vessel rather than sacrificing a large portion of the kidney. For patients treated for stone disease, protecting remaining function is part of long-term success.",
      },
      {
        title: "From bleeding control to nephron preservation",
        text: "Management should go beyond stopping blood loss. When appropriate, the plan should also protect parenchyma and long-term kidney function. SSAE combines effective hemostasis with targeted preservation of unaffected tissue, reflecting a wider move in endourology toward precision-based, organ-preserving care.",
      },
    ],
  },
];

export const educationGroups = [
  {
    number: "01",
    title: "Case Reports",
    slugs: [
      "ecirs-cut-to-light",
      "emphysematous-pyelonephritis-management",
      "fungal-renal-cyst",
      "delayed-pcnl-hemorrhage-ssae",
    ],
  },
  {
    number: "02",
    title: "Prospective Studies",
    slugs: ["news2-qsofa-pyelonephritis", "two-step-pyelonephritis"],
  },
];

export const featuredEducation = [
  "ecirs-cut-to-light",
  "emphysematous-pyelonephritis-management",
  "news2-qsofa-pyelonephritis",
  "delayed-pcnl-hemorrhage-ssae",
];

export function getEducationImage(slug: string) {
  return `/assets/education/${slug}.jpg`;
}

export const educationBySlug: Record<string, EducationArticle> = Object.fromEntries(
  educationArticles.map((article) => [article.slug, article]),
);
