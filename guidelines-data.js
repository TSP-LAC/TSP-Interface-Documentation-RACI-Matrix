/**
 * GUIDELINES CONTENT DATA
 * 
 * This file contains all the content for the design guidelines.
 * You can edit this file to update sections, descriptions, and common mistakes
 * without having to modify the HTML structure.
 */

const GUIDELINES_DATA = {
    introduction: {
        title: "Team-Oriented Completion Guide",
        description: "This guide removes ambiguity during delivery by clearly defining what each section requires. Click any section to expand or collapse. Every section follows the same structure: What it's for → What must be filled → Common mistakes to avoid.",
        subtext: "The tone and depth should be practical and operational, not theoretical."
    },
    sections: [
        {
            title: "Global Sections",
            emoji: "📘",
            guidelines: [
                {
                    id: "document-roles",
                    title: "Document Roles",
                    purpose: "Defines ownership and approval chain for the document.",
                    mustFill: [
                        "Author (who writes it)",
                        "Reviewer (architecture + functional)",
                        "Approver (usually PM or Architecture Lead)",
                        "Date"
                    ],
                    commonMistakes: [
                        "Leaving reviewers blank",
                        "Not updating when ownership changes",
                        "No formal approval before Realize"
                    ]
                },
                {
                    id: "document-status",
                    title: "Document Status",
                    purpose: "Indicates whether the document is ready for build.",
                    mustFill: [
                        "Status (Draft / In Review / Approved)",
                        "Version number",
                        "Approval date"
                    ],
                    commonMistakes: [
                        "Starting development while status is still \"Draft\""
                    ]
                },
                {
                    id: "version-history",
                    title: "Version History",
                    purpose: "Tracks document changes.",
                    mustFill: [
                        "Version",
                        "Date",
                        "Author",
                        "Summary of changes"
                    ],
                    commonMistakes: [
                        "Updating content without updating version history"
                    ]
                }
            ]
        },
        {
            title: "Overview",
            emoji: "📄",
            guidelines: [
                {
                    id: "interface-title",
                    title: "Interface Title",
                    purpose: "Clear identification of the interface.",
                    mustFill: [
                        "Source system",
                        "Target system",
                        "Direction",
                        "Business context"
                    ],
                    example: "SuccessFactors Employee Data → SAP S/4HANA (Outbound, Daily Delta)",
                    commonMistakes: [
                        "Using technical iFlow name only",
                        "Not specifying direction"
                    ]
                },
                {
                    id: "project-information",
                    title: "Project Information",
                    purpose: "Administrative context.",
                    mustFill: [
                        "Project name",
                        "Environment scope",
                        "Integration platform used"
                    ],
                    commonMistakes: [
                        "Not updating when project phase changes"
                    ]
                },
                {
                    id: "project-members",
                    title: "Project Members",
                    purpose: "Clarifies who owns what.",
                    mustFill: [
                        "IA",
                        "SF SA",
                        "SF Functional",
                        "Integration Technical",
                        "PM"
                    ],
                    commonMistakes: [
                        "Not aligning names with actual delivery team"
                    ]
                }
            ]
        },
        {
            title: "EXPLORE – Functional Specification",
            emoji: "🔎",
            guidelines: [
                {
                    id: "fs-overview",
                    title: "Overview",
                    purpose: "Explains why the integration exists.",
                    mustFill: [
                        "Business objective",
                        "Business process impacted",
                        "Expected business outcome"
                    ],
                    commonMistakes: [
                        "Writing technical details instead of business purpose"
                    ]
                },
                {
                    id: "process-description",
                    title: "Process Description",
                    purpose: "Explains the end-to-end business scenario.",
                    mustFill: [
                        "Trigger event",
                        "Data involved",
                        "Expected business behavior",
                        "Exception handling (business level)"
                    ],
                    commonMistakes: [
                        "Not describing exceptions",
                        "Not explaining when integration should NOT trigger"
                    ]
                },
                {
                    id: "process-flow",
                    title: "Process Flow",
                    purpose: "Visual/logical flow of integration steps.",
                    mustFill: [
                        "Source extraction",
                        "Middleware processing",
                        "Target update",
                        "Error path"
                    ],
                    commonMistakes: [
                        "Skipping middleware logic",
                        "No indication of trigger type"
                    ]
                },
                {
                    id: "assumptions",
                    title: "Assumptions",
                    purpose: "Declares conditions that must be true.",
                    mustFill: [
                        "Data readiness",
                        "Required configurations",
                        "Security prerequisites"
                    ],
                    commonMistakes: [
                        "Leaving generic statements like \"standard configuration assumed\""
                    ]
                },
                {
                    id: "dependencies",
                    title: "Dependencies",
                    purpose: "Identifies cross-team impact.",
                    mustFill: [
                        "Other interfaces",
                        "Network/security setup",
                        "Third-party dependencies"
                    ],
                    commonMistakes: [
                        "Not listing dependencies until testing phase"
                    ]
                },
                {
                    id: "mapping-summary",
                    title: "Mapping Logic (Summary)",
                    purpose: "High-level transformation explanation.",
                    mustFill: [
                        "Filtering logic",
                        "Default values",
                        "Mandatory checks",
                        "Delta mechanism"
                    ],
                    commonMistakes: [
                        "Copy-pasting mapping table here",
                        "Not explaining delta logic"
                    ]
                },
                {
                    id: "monitoring-strategy",
                    title: "Monitoring Strategy",
                    purpose: "Defines operational monitoring model.",
                    mustFill: [
                        "Monitoring tool",
                        "Alerting mechanism",
                        "Monitoring frequency",
                        "Responsible team"
                    ],
                    commonMistakes: [
                        "Writing \"CPI monitoring\" without defining ownership"
                    ]
                },
                {
                    id: "error-handling",
                    title: "Error Handling",
                    purpose: "Defines how failures are managed.",
                    mustFill: [
                        "Retry policy",
                        "Business vs technical errors",
                        "Reprocessing method",
                        "Escalation path"
                    ],
                    commonMistakes: [
                        "No retry definition",
                        "No reprocessing strategy"
                    ]
                },
                {
                    id: "connectivity-settings",
                    title: "Connectivity Settings",
                    purpose: "Defines integration security and technical channel.",
                    mustFill: [
                        "Protocol",
                        "Authentication type",
                        "Environment-specific endpoints",
                        "Certificate responsibility"
                    ],
                    commonMistakes: [
                        "Leaving this blank assuming \"standard CPI setup\""
                    ]
                },
                {
                    id: "appendix",
                    title: "Appendix",
                    purpose: "Reference material.",
                    mustFill: [
                        "Sample payload",
                        "API reference",
                        "Screenshots",
                        "Related documents"
                    ],
                    commonMistakes: [
                        "Using it as a dumping ground"
                    ]
                }
            ]
        },
        {
            title: "EXPLORE – Mapping & Testing",
            emoji: "🔢",
            guidelines: [
                {
                    id: "field-mapping",
                    title: "Field Mapping Table",
                    purpose: "Defines detailed field-level transformation.",
                    mustFill: [
                        "Source field",
                        "Target field",
                        "Mandatory flag",
                        "Transformation rule",
                        "Comments"
                    ],
                    commonMistakes: [
                        "Missing transformation explanation",
                        "Missing mandatory indicators"
                    ]
                },
                {
                    id: "value-mapping",
                    title: "Value Mapping Table",
                    purpose: "Defines code conversions.",
                    mustFill: [
                        "Source value",
                        "Target value",
                        "Description if needed"
                    ],
                    commonMistakes: [
                        "Assuming values are identical without validation"
                    ]
                },
                {
                    id: "test-scenarios",
                    title: "Testing Scenarios",
                    purpose: "Defines what will be tested.",
                    mustFill: [
                        "Scenario ID",
                        "Input condition",
                        "Expected result",
                        "Negative test cases"
                    ],
                    commonMistakes: [
                        "Only defining happy path"
                    ]
                }
            ]
        },
        {
            title: "REALIZE – Build & Testing",
            emoji: "🛠",
            guidelines: [
                {
                    id: "compliance-checklist",
                    title: "Compliance Checklist",
                    purpose: "Quality gate before deployment.",
                    mustFill: [
                        "Confirmation mapping approved",
                        "Monitoring implemented",
                        "Security validated",
                        "Transport prepared"
                    ],
                    commonMistakes: [
                        "Filling at end without real validation"
                    ]
                },
                {
                    id: "technical-objects",
                    title: "Technical Objects (CPI/ABAP)",
                    purpose: "Documents built artifacts and their descriptions.",
                    mustFill: [
                        "Package name",
                        "iFlow/Object name",
                        "Artifacts used",
                        "What each object does",
                        "Special configurations"
                    ],
                    commonMistakes: [
                        "Not matching real object names",
                        "Writing \"standard mapping\" without explanation"
                    ]
                },
                {
                    id: "error-log-register",
                    title: "Error Log Register",
                    purpose: "Tracks defects during build and hypercare.",
                    mustFill: [
                        "Error description",
                        "Root cause",
                        "Resolution",
                        "Status"
                    ],
                    commonMistakes: [
                        "Not updating after resolution"
                    ]
                },
                {
                    id: "test-results",
                    title: "Testing Results (Technical, Functional, UAT)",
                    purpose: "Record testing execution evidence and sign-off.",
                    mustFill: [
                        "Technical: Execution evidence",
                        "Functional: Business validation",
                        "UAT: Final sign-off"
                    ]
                },
                {
                    id: "cloud-care",
                    title: "Cloud Care Log",
                    purpose: "Post go-live issue tracking.",
                    mustFill: [
                        "Issue description",
                        "Business impact",
                        "Resolution taken",
                        "Closure date"
                    ]
                }
            ]
        }
    ],
    qualityGate: {
        title: "Final Internal Rule: Quality Gate",
        description: "Before moving from EXPLORE to REALIZE, ALL of these must be complete:",
        rules: [
            "Mapping approved",
            "Error handling defined",
            "Monitoring defined",
            "Connectivity validated",
            "Test scenarios agreed"
        ],
        failureMessage: "If one is incomplete → BUILD MUST NOT START"
    }
};
