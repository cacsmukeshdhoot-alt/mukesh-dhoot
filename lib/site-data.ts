import type { LucideIcon } from "lucide-react"
import {
  Globe,
  Handshake,
  Ship,
  CreditCard,
  FileCheck,
  Users,
  Rocket,
  Landmark,
} from "lucide-react"

export const CONTACT = {
  email: "mukesh@mukeshdhoot.com",
  phone: "+91 9769257670",
  linkedin: "https://www.linkedin.com/in/mukesh-dhoot-3727a03",
  location: "Goregaon West, Mumbai",
}

export type Service = {
  slug: string
  title: string
  icon: LucideIcon
  tagline: string
  summary: string
  points: string[]
}

export const services: Service[] = [
  {
    slug: "fema-advisory",
    title: "FEMA Advisory",
    icon: Globe,
    tagline: "Advice on inbound and outbound investment matters",
    summary:
      "Advice on FEMA-regulated transactions, including FDI, overseas investment, capital restructuring and RBI applications where applicable.",
    points: [
      "Inbound Investments (FDI)",
      "Outbound Investments (ODI)",
      "Share transfers",
      "Capital restructuring",
      "Rights issues",
      "ESOPs",
      "Buyback",
      "Pricing guidelines",
      "Compounding",
      "RBI applications",
      "Regulatory opinions",
    ],
  },
  {
    slug: "cross-border-ma",
    title: "Cross-Border M&A",
    icon: Handshake,
    tagline: "Advice on inbound and outbound acquisitions",
    summary:
      "Advice on transaction structuring for inbound and outbound acquisitions, subject to the agreed scope.",
    points: [
      "Inbound acquisitions",
      "Outbound acquisitions",
      "Transaction structuring",
      "Funding structures",
      "Deferred consideration",
      "Escrow",
      "Share swaps",
      "Regulatory advisory",
      "Deal execution support",
    ],
  },
  {
    slug: "international-trade-advisory",
    title: "International Trade Advisory",
    icon: Ship,
    tagline: "Advice on international trade matters",
    summary:
      "Advice on import-export, merchant trade, documentation, remittances and applicable trade requirements.",
    points: [
      "Import-export advisory",
      "Trade transactions",
      "Merchant Trade Transactions",
      "Bill of Entry matters",
      "Shipping documents",
      "Trade documentation",
      "Export proceeds",
      "Import remittances",
      "Advance remittances",
      "Trade compliance",
      "Supply chain advisory",
      "Trade risk management",
    ],
  },
  {
    slug: "cross-border-payments",
    title: "Cross-Border Payments",
    icon: CreditCard,
    tagline: "Advice on cross-border payments",
    summary:
      "Payment and collection architecture for global operations — virtual accounts, escrow and cross-border payment flows.",
    points: [
      "International remittances",
      "Payment structuring",
      "Collection structures",
      "Virtual accounts",
      "Escrow solutions",
      "Cross-border payment optimisation",
      "Digital payment advisory",
    ],
  },
  {
    slug: "rbi-compliance",
    title: "RBI Compliance",
    icon: FileCheck,
    tagline: "Assistance with RBI filings and submissions",
    summary:
      "Assistance with RBI filings and submissions, including eligible compounding or regularisation matters, subject to requirements and RBI processes.",
    points: [
      "FC-GPR",
      "FC-TRS",
      "FLA",
      "APR",
      "ODI filings",
      "ECB reporting",
      "LRS advisory",
      "Compounding applications",
      "RBI representation",
      "Regularisation",
    ],
  },
  {
    slug: "nri-advisory",
    title: "NRI Advisory",
    icon: Users,
    tagline: "Advice on cross-border matters for NRIs",
    summary:
      "Advisory for non-resident individuals and families on accounts, repatriation, investments, property and inter-generational transfers.",
    points: [
      "NRE",
      "NRO",
      "FCNR",
      "Repatriation",
      "Investments",
      "Property transactions",
      "Gift transactions",
      "Inheritance",
    ],
  },
  {
    slug: "startup-investor-advisory",
    title: "Startup & Investor Advisory",
    icon: Rocket,
    tagline: "Advice on fundraising and structuring matters",
    summary:
      "Support for founders and investors on foreign investment, instrument structuring, holding structures and exit planning.",
    points: [
      "Fund raising",
      "Foreign investment",
      "SAFE",
      "CCPS",
      "Convertible Notes",
      "ESOP",
      "Holding structures",
      "Exit planning",
      "Investor onboarding",
    ],
  },
  {
    slug: "banking-advisory",
    title: "Banking Advisory",
    icon: Landmark,
    tagline: "Advice on banking facilities and related documentation",
    summary:
      "Advice on banking facilities, products and documentation for global operations.",
    points: [
      "Banking facilities",
      "Trade facilities",
      "Cross-border transaction support",
      "Regulatory documentation",
    ],
  },
]

export const audiences = [
  "Indian Corporates",
  "Multinational Companies",
  "Startups",
  "Global Capability Centres",
  "Exporters & Importers",
  "Private Equity & VC Funds",
  "Family Offices",
  "NRIs",
  "Foreign Investors",
  "Banks",
  "Law Firms",
  "Chartered Accountants",
  "Company Secretaries",
]

export const industries = [
  "Manufacturing",
  "Technology",
  "SaaS",
  "FinTech",
  "Healthcare",
  "Pharmaceuticals",
  "Renewable Energy",
  "Infrastructure",
  "Automobile",
  "Retail",
  "Logistics",
  "Chemicals",
  "Financial Services",
  "Private Equity",
  "Venture Capital",
  "Family Offices",
]

export const whyChooseUs = [
  {
    title: "Founder experience",
    body: "Founder Mukesh Dhoot has more than 20 years of banking and cross-border transaction experience, including roles at Citibank, ICICI Bank and YES BANK.",
  },
  {
    title: "Bank and transaction coordination",
    body: "Experience coordinating with banks and trade teams, where relevant.",
  },
  {
    title: "Advice on transaction structures",
    body: "Advice on structures that consider applicable requirements and commercial objectives.",
  },
]

export const approach = [
  {
    step: "01",
    title: "Understand the business",
    body: "We start with your commercial objectives and the wider context of the transaction.",
  },
  {
    step: "02",
    title: "Identify regulatory implications",
    body: "We assess relevant FEMA, RBI and trade implications before a structure is proposed.",
  },
  {
    step: "03",
    title: "Design practical structures",
    body: "Advice on structures that consider applicable requirements and commercial objectives.",
  },
  {
    step: "04",
    title: "Coordinate with stakeholders",
    body: "Coordination with banks, lawyers, auditors and counterparties may form part of an agreed engagement.",
  },
  {
    step: "05",
    title: "Support execution",
    body: "Support with documentation, filings and transaction processes may form part of an agreed engagement.",
  },
  {
    step: "06",
    title: "Ongoing reporting assistance",
    body: "Assistance with applicable reporting and periodic reviews, subject to requirements.",
  },
]

export type Insight = {
  title: string
  category: string
  excerpt: string
  date: string
  readTime: string
  referenceUrl: string
  referenceLabel: string
}

export const insights: Insight[] = [
  {
    title: "Outbound Investment Under FEMA: Key Considerations",
    category: "FEMA & ODI",
    excerpt:
      "A practical walk-through of the Overseas Investment Rules and how they reshape holding structures for Indian companies going global.",
    date: "Jun 2026",
    readTime: "8 min read",
    referenceUrl: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12380",
    referenceLabel: "RBI Overseas Investment Regulations",
  },
  {
    title: "FDI Into India: Automatic and Approval Routes",
    category: "FDI",
    excerpt:
      "Sector caps, pricing guidelines and reporting — a decision framework for foreign investors entering the Indian market.",
    date: "May 2026",
    readTime: "6 min read",
    referenceUrl: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11200",
    referenceLabel: "RBI Foreign Investment Direction",
  },
  {
    title: "External Commercial Borrowings: Eligibility and Requirements",
    category: "ECB",
    excerpt:
      "Eligible borrowers, all-in-cost ceilings and end-use restrictions for raising foreign debt.",
    date: "May 2026",
    readTime: "7 min read",
    referenceUrl: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11510",
    referenceLabel: "RBI ECB and Trade Credits Direction",
  },
  {
    title: "Merchant Trade Transactions: RBI Requirements and Documents",
    category: "International Trade",
    excerpt:
      "How to run legitimate merchanting trade while staying inside RBI timelines and documentation requirements.",
    date: "Apr 2026",
    readTime: "5 min read",
    referenceUrl: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10395",
    referenceLabel: "RBI Export Direction",
  },
  {
    title: "Cross-Border M&A: FEMA Considerations",
    category: "M&A",
    excerpt:
      "Deferred consideration, escrows and share swaps — the FEMA touchpoints that most often delay a close.",
    date: "Apr 2026",
    readTime: "9 min read",
    referenceUrl: "https://m.rbi.org.in/scripts/Bs_FemaNotifications.aspx",
    referenceLabel: "RBI FEMA notifications and amendments",
  },
  {
    title: "FEMA Compounding: Process and Considerations",
    category: "RBI",
    excerpt:
      "When to file, what to expect and how to present a compounding application that resolves past contraventions.",
    date: "Mar 2026",
    readTime: "7 min read",
    referenceUrl: "https://www.rbi.org.in/scripts/BS_CircularIndexDisplay.aspx?Id=12838",
    referenceLabel: "RBI compounding circular",
  },
  {
    title: "Setting Up a GCC in India: Cross-Border Considerations",
    category: "GCC",
    excerpt:
      "Entity structure, inbound funding and governance considerations for multinationals building capability centres.",
    date: "Feb 2026",
    readTime: "8 min read",
    referenceUrl: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11200",
    referenceLabel: "RBI Foreign Investment Direction",
  },
  {
    title: "NRI Repatriation: Accounts and Documentation",
    category: "NRI",
    excerpt:
      "NRE, NRO and FCNR accounts, the USD 1 million scheme and the documentation that keeps repatriation smooth.",
    date: "Feb 2026",
    readTime: "5 min read",
    referenceUrl: "https://m.rbi.org.in/commonman/English/Scripts/FAQs.aspx?Id=3",
    referenceLabel: "RBI accounts FAQ for non-residents",
  },
]

export const insightCategories = [
  "Articles",
  "Blogs",
  "Case Studies",
  "Regulatory Updates",
  "RBI Circulars",
  "FEMA Updates",
  "International Trade Insights",
  "Cross-border Trends",
  "M&A Insights",
]

export type Faq = { q: string; a: string; group: string }

export const faqs: Faq[] = [
  // FDI
  { group: "FDI", q: "What is FDI and who regulates it in India?", a: "Foreign Direct Investment is investment by a non-resident into an Indian company. It is governed by FEMA and the FDI Policy, administered by the RBI and the Government of India, with sector-specific caps and conditions." },
  { group: "FDI", q: "What is the difference between the automatic and approval routes?", a: "Under the automatic route no prior government approval is required, only post-investment reporting. The approval route requires prior clearance from the relevant administrative ministry before the investment is made." },
  { group: "FDI", q: "What are pricing guidelines for FDI?", a: "Shares issued or transferred between residents and non-residents must comply with RBI pricing guidelines, which set a floor or cap based on a valuation by a registered valuer or internationally accepted methodology." },
  { group: "FDI", q: "Which reporting is required after receiving FDI?", a: "Form FC-GPR must be filed on the RBI FIRMS portal for allotment of shares, and Form FC-TRS for transfers between residents and non-residents, within prescribed timelines." },
  { group: "FDI", q: "Can a foreign investor invest in any sector?", a: "Most sectors are open, but some are prohibited (such as lottery and chit funds) and others are capped or conditional. The target sector can be assessed against current FDI policy before investment." },

  // ODI
  { group: "ODI", q: "What is ODI?", a: "Overseas Direct Investment is investment by an Indian entity or resident individual in a foreign entity, through equity, loans or guarantees, governed by the Overseas Investment Rules and Regulations." },
  { group: "ODI", q: "What is the difference between ODI and OPI?", a: "ODI generally involves control or an investment in an unlisted foreign entity, while Overseas Portfolio Investment (OPI) covers specified investments without control. The route and reporting differ for each." },
  { group: "ODI", q: "What approvals are needed for outbound investment?", a: "Most ODI is under the automatic route within financial commitment limits. Approval route transactions and certain structures require prior RBI approval, depending on current requirements and the transaction structure." },
  { group: "ODI", q: "What is the Annual Performance Report (APR)?", a: "The APR is an annual filing that Indian investors must submit for each foreign entity in which they hold ODI, based on audited financials, reporting performance and repatriations." },
  { group: "ODI", q: "Can an Indian resident individual make ODI?", a: "Yes, resident individuals can make ODI within the Liberalised Remittance Scheme limit, subject to conditions on the nature of the foreign entity and its activities." },

  // ECB
  { group: "ECB", q: "What is an External Commercial Borrowing (ECB)?", a: "ECBs are commercial loans raised by eligible resident entities from recognised non-resident lenders, subject to conditions on minimum maturity, all-in-cost and end-use." },
  { group: "ECB", q: "Who can raise ECBs?", a: "Eligible borrowers include companies and certain other entities as specified by the RBI. Eligibility depends on the borrower's sector and the recognised lender relationship." },
  { group: "ECB", q: "What can ECB proceeds be used for?", a: "End-use is regulated — permitted uses include capital expenditure and specified working capital purposes, while several uses such as certain real estate activities are restricted." },
  { group: "ECB", q: "What reporting applies to ECBs?", a: "Borrowers must obtain a Loan Registration Number and file monthly ECB-2 returns with the RBI through their designated bank until the loan is fully repaid." },

  // FEMA
  { group: "FEMA", q: "What is FEMA?", a: "The Foreign Exchange Management Act, 1999 is the framework governing foreign exchange transactions, cross-border investment, trade and payments in India." },
  { group: "FEMA", q: "What is the difference between a current and capital account transaction?", a: "Current account transactions relate to trade and services and are generally permitted, while capital account transactions affect assets and liabilities and are permitted only as specified under FEMA." },
  { group: "FEMA", q: "What happens if there is a FEMA contravention?", a: "Contraventions can be regularised through compounding with the RBI, which involves an application, a hearing and payment of a compounding amount. Compounding is subject to the RBI process and applicable requirements." },
  { group: "FEMA", q: "Do I need a FEMA advisor if my CA already files returns?", a: "Filings are one part of the picture. Advice may cover transaction structuring and coordination with CA or CS professionals, depending on the agreed scope." },

  // Trade
  { group: "Trade", q: "What documents are essential for cross-border trade?", a: "Typical documents include the commercial invoice, packing list, bill of lading or airway bill, bill of entry or shipping bill, and any regulatory certificates relevant to the goods." },
  { group: "Trade", q: "What is trade compliance?", a: "Trade compliance is ensuring every import and export follows applicable customs, FEMA and RBI requirements, including timely realisation of export proceeds and correct remittance of import payments." },
  { group: "Trade", q: "How do I manage trade risk?", a: "Through a combination of instrument selection (such as letters of credit), counterparty due diligence, insurance and FX hedging, all structured to your trade cycle." },

  // Merchant Trade
  { group: "Merchant Trade", q: "What is a Merchant Trade Transaction?", a: "A merchanting trade transaction involves goods purchased from one foreign country and sold to another, without the goods entering India, subject to RBI guidelines on timelines and payment flows." },
  { group: "Merchant Trade", q: "What are the key rules for merchanting trade?", a: "The transaction must be completed within a defined period, payments must route appropriately through banks, and the trade must be in permissible goods with proper documentation." },

  // Export
  { group: "Export", q: "What is the timeline for realising export proceeds?", a: "Export proceeds must generally be realised and repatriated within the period prescribed by the RBI from the date of export, unless a specific extension applies." },
  { group: "Export", q: "What is an EEFC account?", a: "An Exchange Earners' Foreign Currency account lets exporters retain a portion of foreign exchange earnings in foreign currency, reducing conversion costs and FX risk." },
  { group: "Export", q: "Can I receive advance payment for exports?", a: "Yes, advance remittances against exports are permitted subject to conditions on shipment timelines and, in some cases, on providing a guarantee for large advances." },

  // Import
  { group: "Import", q: "What are the rules for import remittances?", a: "Import payments must be supported by the bill of entry or equivalent evidence of import and remitted within the timelines specified by the RBI." },
  { group: "Import", q: "Can I make advance payment for imports?", a: "Advance import remittances are permitted subject to limits and documentation, and typically require evidence of import within a stipulated period, with a guarantee for larger advances." },

  // Cross-border payments
  { group: "Cross-Border Payments", q: "How can I optimise cross-border payments?", a: "By consolidating flows, using virtual accounts and appropriate collection structures, and timing conversions to reduce cost and FX exposure — all within regulatory limits." },
  { group: "Cross-Border Payments", q: "What is a virtual account and how does it help?", a: "Virtual accounts are reference accounts that help identify and reconcile incoming international payments automatically for businesses with many counterparties." },
  { group: "Cross-Border Payments", q: "Can escrow be used in cross-border deals?", a: "Yes, escrow arrangements are commonly used in M&A and trade to secure deferred consideration and performance obligations, subject to FEMA conditions on the escrow structure." },

  // NRI
  { group: "NRI", q: "What is the difference between NRE and NRO accounts?", a: "NRE accounts hold foreign earnings, are fully repatriable and tax-free in India, while NRO accounts hold income earned in India, are subject to Indian tax and have repatriation limits." },
  { group: "NRI", q: "How much can an NRI repatriate from India?", a: "NRIs can repatriate up to USD 1 million per financial year from their NRO account balances, subject to documentation and tax compliance, in addition to freely repatriable NRE funds." },
  { group: "NRI", q: "Can NRIs invest in Indian property and businesses?", a: "NRIs can invest in most residential and commercial property and in Indian companies under FEMA, subject to applicable sectoral and repatriation conditions." },
  { group: "NRI", q: "How are gifts and inheritance handled for NRIs?", a: "Gifts and inheritances involving non-residents are permitted under FEMA within specified conditions, and require careful structuring to manage repatriation and tax outcomes." },

  // RBI approvals
  { group: "RBI Approvals", q: "When is prior RBI approval required?", a: "Prior approval is needed for transactions outside the automatic route — certain ODI structures, specific FDI cases, and transactions that fall outside prescribed limits or conditions." },
  { group: "RBI Approvals", q: "How long does an RBI approval take?", a: "Timelines depend on the matter, application details and RBI processes." },
  { group: "RBI Approvals", q: "What is a regulatory opinion and when do I need one?", a: "A regulatory opinion is a written assessment of whether and how a transaction can be structured under FEMA. It is valuable before large or novel transactions to de-risk execution." },

  // Compounding
  { group: "Compounding", q: "What is compounding under FEMA?", a: "Compounding is a voluntary process to regularise a contravention of FEMA by applying to the RBI, admitting the contravention and paying a compounding amount to settle it." },
  { group: "Compounding", q: "When should I apply for compounding?", a: "As soon as a contravention is identified. Voluntary, prompt disclosure generally leads to a smoother process than waiting for the issue to be raised during a review or filing." },
  { group: "Compounding", q: "How is the compounding amount determined?", a: "The RBI applies a published matrix based on the nature and amount of the contravention and the period involved. The applicable amount depends on the facts and RBI process." },

  // Reporting
  { group: "Reporting", q: "What is Form FC-GPR?", a: "FC-GPR reports the issue of shares by an Indian company to a non-resident and must be filed on the RBI FIRMS portal within the prescribed period from allotment." },
  { group: "Reporting", q: "What is Form FC-TRS?", a: "FC-TRS reports the transfer of shares between a resident and a non-resident, and is filed on the FIRMS portal within the prescribed timeline from the transfer." },
  { group: "Reporting", q: "What is the FLA return?", a: "The Foreign Liabilities and Assets return is an annual filing by entities that have received FDI or made ODI, reporting their foreign assets and liabilities to the RBI." },
  { group: "Reporting", q: "What happens if I miss a reporting deadline?", a: "Late or missed filings can amount to a FEMA contravention, which may need to be regularised through compounding. Available options depend on current requirements and the facts." },
  { group: "Reporting", q: "Do startups have special reporting considerations?", a: "Startups raising foreign investment through instruments such as CCPS or convertible notes have specific reporting and pricing considerations that depend on the transaction and current requirements." },
]

export const faqGroups = Array.from(new Set(faqs.map((f) => f.group)))
