/**
 * RACI MATRIX CONFIGURATION DATA
 * 
 * Instructions:
 * - To add a section: Add a new object to the 'sections' array.
 * - To add a row: Add a new object to the 'items' array inside a section.
 * - To change a role: Update the 'roles' array. The 'id' must match the key used in 'items'.
 * - Note: There should be only ONE "A" (Accountable) per row.
 */

const RACI_DATA = {
  legend: [
    { key: "R", name: "Responsible", description: "Executes the work" },
    { key: "A", name: "Accountable", description: "Final decision authority / signs off" },
    { key: "C", name: "Consulted", description: "Provides input" },
    { key: "I", name: "Informed", description: "Kept aware" }
  ],
  roles: [
    { id: "ia", name: "IA", fullName: "Integration Architect" },
    { id: "sfsa", name: "SF SA", fullName: "SuccessFactors Solution Architect" },
    { id: "sffc", name: "SF FC", fullName: "SuccessFactors Functional Consultant" },
    { id: "inttc", name: "INT TC", fullName: "Integration Technical Consultant" },
    { id: "pm", name: "PM", fullName: "Project Manager" }
  ],
  sections: [
    {
      title: "Overview",
      footnote: "PM is accountable for document baseline completeness.",
      items: [
        { task: "Interface Title", ia: "R", sfsa: "C", sffc: "I", inttc: "I", pm: "A" },
        { task: "Project Information", ia: "R", sfsa: "I", sffc: "I", inttc: "I", pm: "A" },
        { task: "Project Members", ia: "R", sfsa: "I", sffc: "I", inttc: "I", pm: "A" }
      ]
    },
    {
      title: "EXPLORE – FS",
      items: [
        { task: "Overview", ia: "R", sfsa: "C", sffc: "C", inttc: "I", pm: "A" },
        { task: "Process Description", ia: "C", sfsa: "R", sffc: "R", inttc: "I", pm: "A" },
        { task: "Process Flow", ia: "C", sfsa: "R", sffc: "C", inttc: "I", pm: "A" },
        { task: "Assumptions", ia: "C", sfsa: "R", sffc: "C", inttc: "I", pm: "A" },
        { task: "Dependencies", ia: "C", sfsa: "R", sffc: "C", inttc: "I", pm: "A" },
        { task: "Mapping Logic (Summary)", ia: "C", sfsa: "R", sffc: "R", inttc: "I", pm: "A" },
        { task: "Monitoring Strategy", ia: "R", sfsa: "I", sffc: "I", inttc: "C", pm: "A" },
        { task: "Error Handling", ia: "R", sfsa: "I", sffc: "I", inttc: "C", pm: "A" },
        { task: "Connectivity Settings", ia: "R", sfsa: "C", sffc: "I", inttc: "C", pm: "A" },
        { task: "Appendix", ia: "C", sfsa: "C", sffc: "C", inttc: "R", pm: "A" }
      ]
    },
    {
      title: "EXPLORE – Mapping",
      footnote: "Functional owns business correctness. PM accountable for sign-off before Realize.",
      items: [
        { task: "Field Mapping Table", ia: "C", sfsa: "R", sffc: "R", inttc: "C", pm: "A" }
      ]
    },
    {
      title: "EXPLORE – Value Mappings",
      items: [
        { task: "Value Mapping Table", ia: "C", sfsa: "R", sffc: "R", inttc: "I", pm: "A" }
      ]
    },
    {
      title: "EXPLORE – Test Scenarios",
      items: [
        { task: "Testing Scenarios", ia: "C", sfsa: "R", sffc: "R", inttc: "C", pm: "A" }
      ]
    },
    {
      title: "REALIZE – Interface Checklist",
      footnote: "Architecture owns compliance quality gate.",
      items: [
        { task: "Compliance Checklist", ia: "R", sfsa: "C", sffc: "C", inttc: "C", pm: "A" }
      ]
    },
    {
      title: "REALIZE – CPI Details",
      footnote: "Build team responsible; PM accountable for delivery.",
      items: [
        { task: "Technical Objects", ia: "C", sfsa: "I", sffc: "I", inttc: "R", pm: "A" },
        { task: "CPI Objects Description", ia: "C", sfsa: "I", sffc: "I", inttc: "R", pm: "A" }
      ]
    },
    {
      title: "REALIZE – ABAP Details",
      items: [
        { task: "Technical Objects", ia: "C", sfsa: "I", sffc: "I", inttc: "R", pm: "A" },
        { task: "ABAP Objects Created", ia: "C", sfsa: "I", sffc: "I", inttc: "R", pm: "A" }
      ]
    },
    {
      title: "REALIZE – Error Logs",
      items: [
        { task: "Error Log Register", ia: "I", sfsa: "I", sffc: "I", inttc: "R", pm: "A" }
      ]
    },
    {
      title: "Testing Results",
      items: [
        { task: "Technical Testing Results", ia: "I", sfsa: "I", sffc: "I", inttc: "R", pm: "A" },
        { task: "Functional Testing Results", ia: "I", sfsa: "R", sffc: "R", inttc: "C", pm: "A" },
        { task: "UAT Testing Results", ia: "I", sfsa: "R", sffc: "R", inttc: "C", pm: "A" }
      ]
    },
    {
      title: "CLOUD CARE",
      items: [
        { task: "Cloud Care Log", ia: "C", sfsa: "I", sffc: "I", inttc: "R", pm: "A" }
      ]
    }
  ],
  observations: [
    "If PM is not “A” for Explore approval → Build starts too early.",
    "If IA is not “R” for Error Handling & Monitoring → Operations suffers.",
    "If SF SA is not “R” for mapping → Data defects appear in UAT.",
    "If INT TC is not “R” for testing evidence → Audit risk increases."
  ]
};
