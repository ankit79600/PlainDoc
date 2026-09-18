export type DocumentSection = {
  heading: string;
  body: string;
};

export type DocumentFaq = {
  question: string;
  answer: string;
};

export type ConfusingClause = {
  clause: string;
  meaning: string;
};

export type DocumentType = {
  slug: string;
  name: string;
  emoji: string;
  h1: string;
  title: string;
  metaDescription: string;
  intro: string;
  sections: DocumentSection[];
  confusingClauses: ConfusingClause[];
  faqs: DocumentFaq[];
  howToSteps: string[];
  relatedGlossaryTerms: string[];
  relatedDocTypes: string[];
};

export const documentTypes: DocumentType[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. RENTAL AGREEMENT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "rental-agreement",
    name: "Rental Agreement",
    emoji: "🏠",
    h1: "Understand My Rental Agreement — Explain Lease Terms in Plain English",
    title: "Understand My Rental Agreement | Lease Explainer in Plain English – PlainDoc",
    metaDescription:
      "Paste your rental or lease agreement and get a plain-language, clause-by-clause explanation. Understand security deposits, early termination, and what you're signing. Free.",
    intro: `Signing a rental agreement is one of the biggest commitments most people make, yet the legal language feels like it was written to confuse rather than inform. PlainDoc's free rental agreement explainer breaks down every clause — from security deposits and maintenance obligations to early-termination fees and automatic renewal traps — so you know exactly what you're agreeing to before you hand over a single dollar.`,
    sections: [
      {
        heading: "What Is a Rental Agreement?",
        body: `A rental agreement (also called a lease) is a legally binding contract between a landlord and a tenant. It defines the rules of your tenancy: how much rent you'll pay, when it's due, how long you'll stay, and what happens if something goes wrong. There are two common types: a fixed-term lease, which locks you in for a set period (usually 6 or 12 months), and a month-to-month rental agreement, which renews automatically each month. Both carry serious legal weight — a signed lease is a contract a court will enforce.`,
      },
      {
        heading: "Security Deposit: What the Lease Actually Says",
        body: `The security deposit clause is the most fought-over part of any rental agreement. It specifies the deposit amount (often one to two months' rent), the conditions under which the landlord can make deductions, and the timeline for returning it. In most U.S. states, landlords must return your deposit within 14–30 days of move-out and provide an itemized list of any deductions. The lease may try to expand what counts as a valid deduction — "professional cleaning fees" charged regardless of the unit's condition are a common example. Many states limit deductions to actual damages beyond normal wear and tear, regardless of what the lease says.`,
      },
      {
        heading: "Rent, Late Fees, and Grace Periods",
        body: `The rent clause specifies the monthly amount, the due date, and any grace period before late fees apply. Understand when the grace period ends and exactly what the late fee is — many jurisdictions cap late fees at 3–10% of monthly rent or a flat dollar amount. Watch for language like "time is of the essence" which eliminates any implied grace period. If you mail checks, understand when a payment is considered "received." Some landlords only accept electronic payment; the clause should specify accepted payment methods to avoid disputes.`,
      },
      {
        heading: "Early Termination: The Clause That Can Cost You Thousands",
        body: `If life circumstances force you to leave before your lease ends, the early termination clause governs what you owe. Common penalties include paying one to two months' additional rent, forfeiting your security deposit, or remaining liable for rent until the unit is re-rented. Some leases require a combination. A few leases include a buyout option — a defined fee that lets you terminate cleanly. Landlords in most states are also required to "mitigate damages" by making reasonable efforts to re-rent the unit quickly; you should only owe rent for as long as the unit sits vacant due to their failure to advertise, not indefinitely.`,
      },
      {
        heading: "Maintenance, Repairs, and Habitability",
        body: `Most rental agreements divide responsibility: the landlord handles structural repairs, major appliances, plumbing, electrical, and heating systems; the tenant handles minor upkeep like replacing light bulbs or keeping the unit clean. However, the implied warranty of habitability — your right to a safe, livable home — cannot be waived even if the lease tries. If your landlord fails to make essential repairs, many states allow you to withhold rent, repair-and-deduct, or break the lease without penalty. The lease should also specify how to submit repair requests and how long the landlord has to respond.`,
      },
      {
        heading: "Automatic Renewal, Notice Periods, and Move-Out Rules",
        body: `One of the most expensive surprises in a rental agreement is the automatic renewal clause. If you don't give written notice to leave by a specified deadline — sometimes 60 to 90 days before your lease ends — the lease automatically renews for another full term. Mark this date in your calendar the day you sign. The move-out notice section explains how, in what form (often written), and to whom notice must be delivered. Some leases require certified mail; others accept email. Following the exact process matters — an improperly delivered notice may not count, and you could be held to another term.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Security Deposit Non-Refundable Fee",
        meaning:
          "Some leases split the security deposit into a 'refundable' portion and a flat 'non-refundable cleaning fee.' The non-refundable portion is charged regardless of how clean you leave the unit. In many states, calling a security deposit 'non-refundable' is illegal — the landlord must still document actual damages. Check your state's rules before accepting this language.",
      },
      {
        clause: "Joint and Several Liability",
        meaning:
          "If you have roommates, this clause makes each of you individually responsible for the entire rent — not just your share. If your roommate stops paying, the landlord can pursue you for the full amount. You can then try to recover from your roommate separately, but the landlord has no obligation to chase them first.",
      },
      {
        clause: "Automatic Lease Renewal",
        meaning:
          "If you don't send written notice to vacate by a specific deadline (often 60–90 days before your lease ends), the lease automatically renews for another full term at whatever rent the landlord names. Many tenants discover this only after they've already moved out and find themselves on the hook for another year's rent.",
      },
      {
        clause: "Landlord's Right to Enter",
        meaning:
          "Defines when the landlord can enter your home. Most states require 24–48 hours advance notice except for genuine emergencies. A lease that says the landlord may enter 'at any time' or 'with reasonable notice' may contradict your state's minimum notice law, which takes precedence regardless of what you signed.",
      },
      {
        clause: "Lease Modification by Written Addendum Only",
        meaning:
          "Means any verbal agreements you make with your landlord — 'you can have a dog,' 'I'll fix the heating by Tuesday' — are legally meaningless unless put in writing and signed by both parties. Always get promises in writing and attach them as a signed addendum.",
      },
      {
        clause: "Subletting Prohibition",
        meaning:
          "Prohibits you from renting your unit (or a room in it) to anyone else without the landlord's written approval. Violating this can be grounds for eviction. If you plan to have a long-term guest, sublet during travel, or list on Airbnb, confirm what the lease allows before signing.",
      },
    ],
    faqs: [
      {
        question: "Can a landlord keep my entire security deposit?",
        answer:
          "Only if you caused damages beyond normal wear and tear, left unpaid rent, or violated specific lease terms that justify deductions. The landlord must provide an itemized deduction list within the state-mandated timeframe (usually 14–30 days). Deductions for 'normal wear and tear' — minor scuffs, carpet wear from use, faded paint — are not legally valid in most states.",
      },
      {
        question: "What happens if I break my lease early?",
        answer:
          "You'll owe whatever the early termination clause specifies — commonly one to two months' additional rent or liability until the unit is re-rented. Most states require landlords to 'mitigate damages' by actively trying to re-rent, so your liability ends when a new tenant moves in. Document everything: give written notice and keep records of your move-out condition.",
      },
      {
        question: "Is a verbal agreement with my landlord legally binding?",
        answer:
          "Technically yes in some jurisdictions, but nearly impossible to prove. If your lease says modifications require a written addendum (most do), a verbal agreement is overridden by the written lease. Always get any promises or changes in writing, signed by the landlord.",
      },
      {
        question: "Can my landlord raise my rent mid-lease?",
        answer:
          "No — a signed fixed-term lease locks in the rent for that period. However, on month-to-month agreements, landlords can raise rent with proper written notice (typically 30 days, or 60–90 days in some jurisdictions). If your city has rent control, the increase may also be capped by ordinance regardless of the lease.",
      },
      {
        question: "What does 'normal wear and tear' mean?",
        answer:
          "Normal wear and tear refers to the gradual, unavoidable deterioration that occurs from ordinary use of a rental unit — faded paint, minor scuffs on walls, carpet worn from walking. It does NOT include holes in walls, large stains, broken fixtures, or damage from negligence. Landlords cannot charge you for normal wear and tear.",
      },
    ],
    howToSteps: [
      "Copy the full text of your rental agreement, or upload the PDF your landlord sent you.",
      "Paste or upload it into the PlainDoc tool on this page.",
      "Select 'Rental Agreement' as the document type (auto-detected if you upload).",
      "Click 'Explain My Document' and wait a few seconds.",
      "Review the clause-by-clause plain-language summary.",
      "Pay special attention to any flagged clauses — security deposit conditions, early termination penalties, and automatic renewal deadlines.",
      "Note any questions to raise with your landlord before signing.",
    ],
    relatedGlossaryTerms: [
      "security-deposit",
      "force-majeure",
      "liquidated-damages",
      "late-payment-penalty",
      "auto-renewal-clause",
      "termination-clause",
    ],
    relatedDocTypes: ["employment-contract", "loan-agreement", "insurance-policy"],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. MEDICAL BILL
  // ─────────────────────────────────────────────────────────────
  {
    slug: "medical-bill",
    name: "Medical Bill",
    emoji: "🏥",
    h1: "Understand My Medical Bill — What Do These Charges Actually Mean?",
    title: "What Does My Medical Bill Mean? Medical Bill Explainer in Plain English – PlainDoc",
    metaDescription:
      "Confused by your medical bill? Paste it into PlainDoc and get a plain-language explanation of every charge, code, and balance — including what you actually owe. Free medical bill decoder.",
    intro: `A hospital bill can arrive weeks after your treatment, run dozens of pages, and be filled with codes, adjustments, and line items that seem designed to be unreadable. Between EOBs, CPT codes, deductibles, co-insurance, and balance billing, it's nearly impossible for most patients to know what they actually owe — or whether the bill is even correct. Studies consistently show that the majority of medical bills contain at least one error. PlainDoc's free medical bill explainer decodes every line item so you can verify charges, catch errors, and dispute what you shouldn't have to pay.`,
    sections: [
      {
        heading: "The Anatomy of a Medical Bill",
        body: `Medical billing operates on two parallel tracks that most patients never see. Providers bill using CPT codes (Current Procedural Terminology) that describe the specific service performed, and ICD-10 codes that describe your diagnosis. Your insurance company receives these codes, processes them against your policy, and pays the negotiated rate — then sends you an Explanation of Benefits (EOB). Separately, the provider sends you a bill for what remains after insurance pays. The EOB and the bill must align; if they don't, you may have been overbilled.`,
      },
      {
        heading: "EOB vs. Bill: A Critical Distinction",
        body: `The single most common source of confusion: your Explanation of Benefits (EOB) is not a bill. It is a statement from your insurer explaining how they processed the claim. It shows the amount billed, the amount the insurer paid, the amount written off (the discount your insurer negotiated), and the patient responsibility — what you owe. Always wait for your EOB before paying any medical bill, and compare the "patient responsibility" line on your EOB to the provider's bill. Discrepancies are common and worth investigating before you pay.`,
      },
      {
        heading: "Common Medical Billing Errors to Look For",
        body: `Research finds billing errors in a significant majority of hospital bills. The most frequent include: duplicate billing (the same service billed twice); upcoding (billing for a more expensive procedure than was performed); unbundling (billing separately for services that should be grouped at a lower bundled rate); wrong diagnosis codes that lead to incorrect coverage determinations; services marked out-of-network when they were in-network; charges for services not performed; and incorrect patient information. Always request a fully itemized bill — not just the summary — and verify each line item against your records and EOB.`,
      },
      {
        heading: "Deductibles, Co-pays, and Co-insurance: The Real Cost Breakdown",
        body: `Three terms determine most of your out-of-pocket cost. Your deductible is the annual amount you must pay before insurance contributes — if your deductible is $3,000, you pay the first $3,000 of covered medical costs each year. A co-pay is a fixed dollar amount per visit (e.g., $30 for a primary care visit), separate from your deductible. Co-insurance is a percentage you pay after your deductible is met (e.g., 20% of the allowed amount). Your out-of-pocket maximum caps your annual spending — once you reach it, your insurer pays 100% of covered costs for the rest of the year.`,
      },
      {
        heading: "Surprise Billing and the No Surprises Act",
        body: `Balance billing occurs when an out-of-network provider bills you for the difference between their charge and what your insurer paid. The No Surprises Act (effective January 2022) restricts surprise billing for emergency services and for certain scheduled services at in-network facilities. Even if you went to an in-network hospital, anesthesiologists, radiologists, or other specialists involved in your care may be out-of-network without your knowledge. Under the new law, you generally cannot be billed more than your in-network cost-sharing amount for these situations.`,
      },
      {
        heading: "How to Dispute a Medical Bill and Get Financial Help",
        body: `If you believe a charge is wrong, start by requesting an itemized bill from the provider's billing department. Compare it to your EOB line by line. If you find an error, call the billing department, reference the specific CPT code, and explain the discrepancy in writing. For insurance disputes, file a formal appeal with your insurer; you have 30–180 days depending on your plan. If you can't afford the bill even after errors are corrected, ask about financial assistance programs — nonprofit hospitals are legally required to offer charity care, and most for-profit hospitals do too. Bills are negotiable, especially for a lump-sum payment.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Allowed Amount / Contractual Adjustment",
        meaning:
          "The 'allowed amount' is the rate your insurer has negotiated with the provider — not the amount initially billed. The 'contractual adjustment' is the difference between the billed amount and the allowed amount, which the provider agrees to write off. You do NOT owe the written-off portion. Your responsibility is calculated from the allowed amount, not the original billed charge.",
      },
      {
        clause: "Patient Responsibility",
        meaning:
          "This is the amount your insurer says you owe after they have paid their portion. It reflects your deductible applied, co-pay, and co-insurance — all calculated against the allowed amount, not the full billed amount. Compare this number to what the provider's bill actually charges you. If the provider is billing you more than your EOB's patient responsibility, that's a red flag.",
      },
      {
        clause: "Out-of-Network Adjustment",
        meaning:
          "When you use a provider outside your insurance network, your insurer pays a lower rate (or nothing at all). The out-of-network adjustment is the additional amount the provider may then bill you. After the No Surprises Act, many out-of-network surprise bills for emergency or hospital-based care are now capped at your in-network rate.",
      },
      {
        clause: "Observation Status vs. Inpatient Admission",
        meaning:
          "If you stayed in a hospital but were classified as 'under observation' rather than formally admitted, your stay is billed as outpatient — which can result in dramatically higher cost-sharing under Medicare and some private plans. You can receive a notice of your classification status and request reclassification. This distinction is not clinical — it's administrative.",
      },
      {
        clause: "Revenue Codes and CPT Codes",
        meaning:
          "CPT codes describe what service was performed (e.g., 99213 = standard office visit); revenue codes identify the billing department. Errors in either code result in incorrect billing. A CPT code one digit off can change a routine visit into a surgical procedure in the billing system. Always get an itemized bill listing these codes and verify them against your recollection of the services you received.",
      },
      {
        clause: "Coordination of Benefits (COB)",
        meaning:
          "If you're covered by two insurance plans (e.g., both spouses have employer coverage), COB determines which insurer pays first (primary) and which pays second (secondary). Errors in COB setup can result in you being billed for amounts that should have been covered by the secondary insurer. Make sure your providers have both insurance cards on file.",
      },
    ],
    faqs: [
      {
        question: "What is an EOB and is it the same as my bill?",
        answer:
          "No. An Explanation of Benefits (EOB) is a document from your insurer explaining how they processed a claim — it is not a bill. It shows what was billed, what was written off, what the insurer paid, and what you owe. Always wait for your EOB before paying a provider's bill, and compare the two.",
      },
      {
        question: "Can I negotiate a medical bill?",
        answer:
          "Yes. Providers frequently accept less than the billed amount, especially for patients paying out-of-pocket or offering a lump-sum settlement. Ask for the 'cash pay' rate, apply for financial assistance programs, or offer a payment plan. Hospital billing departments have significant discretion to reduce bills, and it's worth asking directly.",
      },
      {
        question: "What is balance billing and can I refuse to pay it?",
        answer:
          "Balance billing is when a provider bills you for the difference between their full charge and what your insurer paid. The No Surprises Act (effective 2022) restricts this for emergency services and certain scheduled services at in-network facilities. If you receive a surprise bill you believe violates the Act, you can dispute it through your insurer or file a complaint with federal regulators.",
      },
      {
        question: "How long do I have to pay a medical bill?",
        answer:
          "There's no universal rule, but most providers give 30–90 days before sending an account to collections. Medical debt has a statute of limitations of 3–6 years depending on your state. Since 2023, major credit bureaus have removed most medical debt under $500 from credit reports and extended the reporting timeline, reducing the credit impact of unpaid medical bills.",
      },
      {
        question: "What if I can't afford my medical bill?",
        answer:
          "Ask about financial assistance (charity care) programs — nonprofit hospitals are legally required to offer them for patients below certain income thresholds. You can also negotiate a payment plan, offer a partial lump-sum settlement, or work with a medical billing advocate who negotiates on your behalf (typically for a percentage of what they save you).",
      },
    ],
    howToSteps: [
      "Gather your medical bill and, if available, your Explanation of Benefits (EOB) from your insurer.",
      "Request an itemized bill from the provider if you only have a summary bill.",
      "Paste the text of your bill or upload a PDF/image to PlainDoc.",
      "Select 'Medical Bill' as the document type.",
      "Click 'Explain My Document'.",
      "Compare the explained charges to your EOB patient responsibility line.",
      "Flag any discrepancies and contact the billing department with specific line items.",
    ],
    relatedGlossaryTerms: [
      "deductible",
      "copay",
      "out-of-pocket-maximum",
      "subrogation",
      "indemnity",
    ],
    relatedDocTypes: ["insurance-policy", "terms-and-conditions"],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. TERMS & CONDITIONS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "terms-and-conditions",
    name: "Terms & Conditions",
    emoji: "📋",
    h1: "Explain Terms and Conditions — What Am I Actually Agreeing To?",
    title: "Explain Terms and Conditions in Plain English | What Am I Agreeing To – PlainDoc",
    metaDescription:
      "Paste any Terms of Service or Terms and Conditions and get a plain-language, clause-by-clause summary. Know what you're agreeing to before you click 'I Agree'. Free.",
    intro: `Nobody reads Terms and Conditions — and companies know it. The average ToS document is 5,000–10,000 words of dense legalese specifically designed to protect the company while burying what you give up. PlainDoc's free T&C explainer summarizes every significant clause so you understand what data the company collects, how disputes are handled, what your cancellation rights are, and exactly what you're agreeing to before you click "I Agree."`,
    sections: [
      {
        heading: "Why Terms and Conditions Actually Matter",
        body: `Terms and Conditions (also called Terms of Service or ToS) form a legally binding contract between you and a service provider. Courts have consistently upheld ToS agreements, including the fine print, as enforceable contracts — even when users clearly didn't read them. The clauses in a ToS govern what the company can do with your data, how they can change the service without notice, your rights if you're harmed, and how disputes are resolved. In an era of data breaches, subscription traps, and class-action waivers, these clauses carry real financial and legal consequences.`,
      },
      {
        heading: "The Arbitration Clause: Your Most Important Rights Are Here",
        body: `The mandatory arbitration clause is arguably the most consequential clause in any consumer ToS. By agreeing to it, you waive your right to a jury trial and to court proceedings for any dispute with the company. Arbitration is a private process in which an arbitrator — often from a pool that frequently hears cases for the same company — issues a binding decision. This decision is nearly impossible to appeal. Paired with a class-action waiver, these two clauses together mean that even if thousands of users are harmed in the same way, each must pursue an individual arbitration claim — making small-value claims economically impractical to pursue.`,
      },
      {
        heading: "Unilateral Modification: They Can Change the Rules",
        body: `Most ToS documents include a clause allowing the company to change terms at any time with minimal notice — and by continuing to use the service after the change takes effect, you automatically accept the new terms. This means the contract you agreed to when you signed up may look nothing like the one that governs you today. Watch for language like "we reserve the right to modify these terms at any time" or "your continued use of the service constitutes acceptance." Some jurisdictions require companies to obtain fresh consent for material changes, but enforcement varies.`,
      },
      {
        heading: "Intellectual Property: Who Owns Your Content?",
        body: `If you upload photos, write reviews, create content, or post any material, the ToS includes an intellectual property license. The scope of this license varies enormously. A narrow license lets the company host and display your content. A broad license grants the company a "worldwide, irrevocable, royalty-free, sublicensable" right to use, modify, distribute, and monetize your content — forever. The second version is common on major platforms and means your photos, posts, or reviews can be used in the company's advertising, sold to partners, or modified without your ongoing consent.`,
      },
      {
        heading: "Auto-Renewal and Cancellation: The Subscription Trap",
        body: `Subscription services rely heavily on auto-renewal clauses. Your subscription renews automatically at the end of each billing period unless you cancel before a specific deadline. Look for: how far in advance you must cancel (sometimes 48 hours before renewal, sometimes 30 days); whether cancellation takes effect immediately or at the end of the period; whether you're entitled to a refund for unused time; and through which channel you must cancel (many services require account settings cancellation — phone calls or emails don't count). The FTC has increased enforcement against subscriptions that make cancellation difficult.`,
      },
      {
        heading: "Data Collection and Privacy: What ToS Doesn't Tell You",
        body: `Most ToS documents cross-reference a separate Privacy Policy for data collection details — which means you'd need to read two documents (often 10,000+ words combined) to understand the full picture. The ToS may also include provisions about sharing data with "affiliates," "business partners," or "service providers" — terms that can be defined so broadly they encompass virtually anyone. Understand that accepting a ToS is often also accepting ongoing surveillance of your behavior, monetization of your data, and potential sharing with third parties whose identities are not disclosed.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Mandatory Binding Arbitration",
        meaning:
          "By accepting this, you waive your right to sue in court or have a jury decide your dispute. Any claim — overcharge, data breach harm, product defect — must go through private arbitration. The arbitrator's decision is usually final with extremely limited appeal rights.",
      },
      {
        clause: "Class Action Waiver",
        meaning:
          "Even if thousands of users are harmed in the same way, you cannot join or bring a class action lawsuit. Every user must pursue their claim individually, making it financially impractical to pursue small-dollar harms. This protects the company from the most effective form of consumer accountability.",
      },
      {
        clause: "Unilateral Modification Clause",
        meaning:
          "'We can change these terms at any time. By continuing to use the service, you accept the changes.' The company can rewrite the contract you agreed to — adjusting fees, changing dispute processes, or expanding data use — with minimal notice and no fresh consent from you.",
      },
      {
        clause: "Limitation of Liability",
        meaning:
          "Caps how much the company owes you if something goes wrong — often to the amount you paid them in the past 12 months, or a flat $100. In practice, this means even significant harm (data breach, financial loss, service failure) results in near-zero compensation.",
      },
      {
        clause: "Broad IP License",
        meaning:
          "When you upload content, you grant the platform a license to use it. 'Worldwide, irrevocable, royalty-free, sublicensable' means the company can use your photos, posts, or reviews in advertising, sell them to partners, or modify them — indefinitely, without paying you or asking again.",
      },
      {
        clause: "Auto-Renewal of Subscription",
        meaning:
          "Your subscription silently charges your card at the end of each billing period unless you actively cancel by a specific deadline. The cancellation method and deadline vary — read this section carefully so you're not charged for a service you meant to stop.",
      },
    ],
    faqs: [
      {
        question: "Are Terms and Conditions legally enforceable even if I didn't read them?",
        answer:
          "Generally yes — courts have consistently enforced ToS agreements when the user had a reasonable opportunity to read them and affirmatively agreed (by clicking 'I Agree'). Exceptions exist for unconscionable clauses, terms that violate consumer protection laws, or terms that were not clearly presented. But you should treat any ToS you agree to as fully binding.",
      },
      {
        question: "What is a clickwrap agreement?",
        answer:
          "A clickwrap agreement is formed when you actively click a button ('I Agree,' 'Accept,' 'Continue') to indicate acceptance of the terms. Courts regularly enforce clickwrap agreements. Browsewrap agreements — where terms apply just by using the site, with no active acceptance required — are less reliably enforced and are increasingly challenged by regulators.",
      },
      {
        question: "Can a company change its ToS without telling me?",
        answer:
          "Most ToS include a unilateral modification clause allowing changes at any time. Companies are usually required to give some notice (email or in-app notification), but continued use after the effective date is typically treated as acceptance. GDPR requires fresh consent for material changes affecting EU users; other jurisdictions have weaker protections.",
      },
      {
        question: "What does 'we may share information with our partners' actually mean?",
        answer:
          "In most ToS, 'partners' is either undefined or defined so broadly it covers advertising networks, data brokers, joint marketing companies, analytics providers, and more. Without a specific list of named partners, this phrase essentially permits sharing your behavioral and personal data with unknown third parties for unknown purposes.",
      },
      {
        question: "Can I negotiate Terms and Conditions?",
        answer:
          "For consumer products, almost never — they're take-it-or-leave-it. For enterprise software and B2B contracts, negotiation is standard. If a ToS contains terms that are dealbreakers for you and the company won't modify them, the real choice is whether to use the service at all. Document any representations made by sales staff in writing, as verbal promises rarely override the written ToS.",
      },
    ],
    howToSteps: [
      "Navigate to the Terms of Service page of the product or service.",
      "Select all the text (Ctrl+A, then Ctrl+C) to copy the full document.",
      "Paste the text into PlainDoc on this page.",
      "Select 'Terms & Conditions' as the document type.",
      "Click 'Explain My Document' and review the clause-by-clause summary.",
      "Pay close attention to flagged clauses: arbitration, class-action waiver, IP license, and auto-renewal.",
      "If any clause is unacceptable, evaluate whether the service is worth agreeing to.",
    ],
    relatedGlossaryTerms: [
      "arbitration-clause",
      "liability-waiver",
      "indemnity",
      "auto-renewal-clause",
      "governing-law",
      "termination-clause",
    ],
    relatedDocTypes: ["privacy-policy", "employment-contract", "credit-card-agreement"],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. EMPLOYMENT CONTRACT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "employment-contract",
    name: "Employment Contract",
    emoji: "💼",
    h1: "Understand My Employment Contract and Job Offer in Plain English",
    title: "Understand My Employment Contract | Job Offer Explainer in Plain English – PlainDoc",
    metaDescription:
      "Paste your employment contract or job offer letter and get a plain-language explanation of compensation, non-compete, IP assignment, termination, and more. Free.",
    intro: `Before you sign an employment contract, you should understand every clause — not just your salary. Non-compete clauses, intellectual property assignment agreements, at-will provisions, arbitration clauses, and severance terms can have lasting effects on your career, your side projects, and your ability to leave. PlainDoc's free employment contract explainer breaks down what each clause means so you can negotiate from a position of knowledge rather than guesswork.`,
    sections: [
      {
        heading: "What an Employment Contract Actually Covers",
        body: `An employment contract is a legally binding agreement establishing the terms of your employment. It may be a formal multi-page document or embedded in an offer letter. Either way, it governs your compensation, your duties, any restrictions on what you can do during and after employment, and — critically — what happens when the relationship ends. Most employees focus on title and salary and overlook clauses that restrict their future career options or claim ownership of work they create on their own time. These clauses are often buried in pages 4–7 and written in the densest legal language in the document.`,
      },
      {
        heading: "Compensation Structure: Salary, Bonus, and Equity",
        body: `The compensation section should clearly state your base salary, pay frequency, and how any variable compensation is calculated and paid. Bonus language deserves close attention: look for whether the bonus is "target" (you could earn more or less) or "guaranteed" (rare), whether you must be employed on the payment date to receive it, and whether it's "at the discretion of the company" (meaning they can withhold it without breaching the contract). If you're receiving equity (stock options or RSUs), the grant details and vesting schedule are typically in a separate equity agreement — the employment contract may just reference it.`,
      },
      {
        heading: "Non-Compete Clauses: What You Can and Can't Do After You Leave",
        body: `A non-compete clause restricts you from working for a competitor or starting a competing business for a defined period and geographic area after employment ends. Enforceability varies dramatically by state: California, North Dakota, Minnesota, and Oklahoma effectively ban non-competes; other states enforce them if "reasonable" in scope, geography, and duration. The FTC proposed a near-total ban in 2024 that is subject to legal challenges. Even in states that don't enforce non-competes, a signed agreement can still generate costly litigation threats. Know your state's law, and if possible, negotiate to narrow the competitor definition, shorten the term, or add a severance payment during the restricted period.`,
      },
      {
        heading: "IP Assignment: Who Owns What You Create?",
        body: `Intellectual property assignment clauses are among the most overlooked and consequential parts of any employment contract. These clauses transfer ownership of inventions, code, designs, writings, and other creative work you produce during your employment — and sometimes beyond — to the employer. Some clauses are extraordinarily broad, claiming ownership of anything you create on your own time with your own equipment if it "relates to the company's business" — which may be defined to cover almost everything. Several states (California, Delaware, and others) limit these clauses for work done entirely on personal time without company resources. If you have side projects or pre-existing IP you want to protect, add a written carve-out to the contract before signing.`,
      },
      {
        heading: "Termination, Severance, and What Happens When You Leave",
        body: `Most U.S. employees are "at will," meaning either party can end the relationship at any time for any legal reason. The contract should make clear whether this is the case or whether you have a fixed-term agreement. Look for: the notice period required to resign or be terminated (typically 2 weeks to 90 days); severance provisions (amount, conditions, any release of claims you must sign); and what constitutes "cause" for termination (which typically eliminates severance). If severance matters to you, it must be explicitly written into the contract — a promise of severance made verbally or in an offer email is not enforceable if the contract doesn't include it.`,
      },
      {
        heading: "Arbitration and Non-Solicitation: The Hidden Restrictions",
        body: `Many employment contracts include mandatory arbitration clauses requiring employment disputes (wrongful termination, discrimination, unpaid wages) to go to private arbitration rather than court. This waives your right to a jury trial and class-action participation for employment claims. Non-solicitation clauses — separate from non-competes — prevent you from recruiting colleagues or soliciting customers for a period after leaving. The scope varies widely: "clients you personally worked with" is far narrower than "anyone on our client list." Both restrictions deserve careful reading and negotiation.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Intellectual Property Assignment (Work Made for Hire)",
        meaning:
          "All inventions, code, designs, writings, and other work you create during employment belong to the company — even if created on your own time, using your own equipment. Some states limit this for work done without company resources on unrelated projects, but the burden is on you to prove the work qualifies for protection. Carve out your pre-existing projects in writing before signing.",
      },
      {
        clause: "Discretionary Bonus",
        meaning:
          "A 'discretionary' bonus means the company can pay it or not pay it at their sole judgment — agreeing to a 'target bonus' of 20% does not obligate the company to pay any bonus at all. If a bonus is important to you, push for 'guaranteed' or 'earned upon achievement of defined metrics' language instead.",
      },
      {
        clause: "Clawback Provision",
        meaning:
          "Requires you to return previously paid compensation — sign-on bonus, commissions, or equity — if you leave before a specified date or if certain financial conditions occur (e.g., earnings restatement). Know the clawback period and conditions before counting on sign-on pay as permanent income.",
      },
      {
        clause: "Garden Leave / Paid Notice Period",
        meaning:
          "Requires you to give substantial advance notice (30–90 days) before leaving, during which you remain an employee but may be asked not to come to work or contact clients. This protects the employer's interests but delays your start date at a new job. Common in finance, sales, and senior executive roles.",
      },
      {
        clause: "At-Will Employment Clause",
        meaning:
          "Either party can end the employment at any time, for any legal reason (or no reason), without notice unless the contract specifies a notice period. It also means promises made during hiring — 'this is a long-term role,' 'we rarely let people go' — are not enforceable unless written into the contract.",
      },
      {
        clause: "Arbitration for Employment Disputes",
        meaning:
          "Any claim you have against the employer — wrongful termination, discrimination, harassment, unpaid wages — must go to private arbitration rather than court. You waive your right to a jury and to join a class action. Critics argue this systematically disadvantages employees who have individual claims against repeat-player employers.",
      },
    ],
    faqs: [
      {
        question: "Can I negotiate an employment contract?",
        answer:
          "Yes, almost always. Salary is obviously negotiable, but so are signing bonus, title, equity, start date, remote work, non-compete scope, IP carve-outs for personal projects, and sometimes even arbitration clauses. Most employers expect some negotiation. Identify your priorities, research market rates, and make specific counter-proposals in writing.",
      },
      {
        question: "What does 'at-will employment' really mean?",
        answer:
          "At-will means either party can end the employment relationship at any time, for any legal reason, without cause or notice (unless a notice period is specified in the contract). Most U.S. states are at-will by default. It means you can be let go without warning for almost any reason that isn't legally protected (race, gender, age, disability, retaliation, etc.).",
      },
      {
        question: "Are non-compete agreements enforceable?",
        answer:
          "It depends heavily on your state. California bans them almost entirely. Several other states (Minnesota, Oklahoma, North Dakota) also ban or severely restrict them. Other states enforce 'reasonable' non-competes. The FTC proposed a near-total federal ban in 2024 that is subject to legal challenges. Even if unenforceable, a signed non-compete can generate costly litigation threats that deter job offers.",
      },
      {
        question: "If I build a side project after work, does my employer own it?",
        answer:
          "Possibly — if the employment contract's IP assignment clause is broad enough to cover it. Many contracts claim work that 'relates to the company's business' even if done on personal time. Several states (California, Delaware, Illinois, Minnesota) limit employer IP claims to work done during working hours using company resources. Check your contract's IP clause and your state's law, then add a written carve-out for specific projects if your employer will agree.",
      },
      {
        question: "What is a non-solicitation agreement?",
        answer:
          "A non-solicitation clause restricts you from recruiting former colleagues or soliciting customers for a specified period after leaving. Unlike non-competes (which restrict where you can work), non-solicitation clauses target who you can hire and contact. Courts enforce them more readily than non-competes. Narrow the scope during negotiation: 'clients I personally managed' is much less restrictive than 'any client on the company's list.'",
      },
    ],
    howToSteps: [
      "Obtain the full text of your employment contract or offer letter.",
      "Paste or upload it into PlainDoc on this page.",
      "Select 'Employment Contract' as the document type.",
      "Click 'Explain My Document'.",
      "Review the plain-language summary, paying close attention to non-compete, IP assignment, bonus language, and termination clauses.",
      "Identify clauses you want to negotiate before you sign.",
      "For significant concerns, consult an employment attorney — many offer free 30-minute consultations.",
    ],
    relatedGlossaryTerms: [
      "non-compete-clause",
      "termination-clause",
      "arbitration-clause",
      "indemnity",
      "liquidated-damages",
    ],
    relatedDocTypes: ["nda", "terms-and-conditions", "loan-agreement"],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. LOAN AGREEMENT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "loan-agreement",
    name: "Loan Agreement",
    emoji: "💰",
    h1: "Explain My Loan Agreement Terms in Plain English",
    title: "Explain Loan Agreement Terms in Plain English | Loan Contract Explainer – PlainDoc",
    metaDescription:
      "Paste your loan agreement and get a plain-language explanation of interest rates, prepayment penalties, default clauses, acceleration, and what you're really committing to. Free.",
    intro: `A loan agreement is a complex legal document that governs exactly how much you'll pay, when you'll pay it, and what happens if you can't. Whether it's a personal loan, auto loan, small business loan, or mortgage, the fine print can contain prepayment penalties, variable interest triggers, acceleration clauses, and cross-default provisions that can cost you thousands of dollars. PlainDoc's free loan agreement explainer translates the legalese into plain English so you borrow with complete understanding — not just of the monthly payment, but of the total commitment you're making.`,
    sections: [
      {
        heading: "The Core Components of Any Loan Agreement",
        body: `Every loan agreement has the same fundamental structure, even when terminology varies. The principal is the amount you're borrowing. The interest rate is the annual cost of borrowing that principal. The APR (Annual Percentage Rate) includes both the interest rate and any fees — origination fees, broker fees, points — expressed as a single annual percentage so you can compare loans accurately. The repayment schedule shows when payments are due, how they're applied (almost always interest first, then principal), and the total amount you'll pay over the full loan term. The maturity date is when the final payment is due and the loan is fully repaid.`,
      },
      {
        heading: "Fixed vs. Variable Interest Rates: Which Is in Your Contract?",
        body: `A fixed-rate loan keeps the same interest rate for the entire loan term — your payment is predictable. A variable-rate loan ties your interest rate to an external benchmark index (such as the SOFR or Prime Rate) and adjusts periodically — the agreement specifies how often (monthly, quarterly, annually). Variable rate loans should specify the benchmark index, the margin added to the index, the adjustment frequency, any per-adjustment caps, and the lifetime cap — the maximum the rate can ever reach. Without caps, a variable rate loan on a rising rate environment can make payments unaffordable. Know exactly what you're agreeing to before taking a variable rate.`,
      },
      {
        heading: "Prepayment Penalties: What It Costs to Pay Early",
        body: `Many loans — particularly mortgages and auto loans — include prepayment penalty clauses that charge you a fee for paying off the loan ahead of schedule. These protect the lender's expected interest income. The penalty may be a flat fee, a percentage of the remaining balance, or a yield-maintenance formula that calculates the lender's lost income. Prepayment penalties often apply only during the first few years. If you're planning to refinance or pay off the loan early, a prepayment penalty can eliminate the financial benefit of doing so — or make it actively costly. Always calculate this tradeoff before accepting a loan with a prepayment clause.`,
      },
      {
        heading: "Default, Acceleration, and What Happens When You Can't Pay",
        body: `A default is triggered when you breach the loan agreement — most commonly by missing payments. The cures period specifies how long you have to fix a default before the lender can take action (commonly 10–30 days for consumer loans). An acceleration clause — found in nearly all loan agreements — allows the lender to demand the entire remaining balance immediately upon default. This can turn a single missed payment into a demand for tens of thousands of dollars within days. Cross-default clauses go further: a default on any other loan, even with a different lender, triggers a default on this one — a serious risk for borrowers carrying multiple debts.`,
      },
      {
        heading: "Collateral and Security Agreements",
        body: `Secured loans require you to pledge collateral — an asset the lender can seize if you default. For mortgages, the collateral is the home (governed by a deed of trust or mortgage document). For auto loans, it's the vehicle. For business loans, collateral may be equipment, inventory, accounts receivable, or blanket liens on all business assets. The security agreement describes exactly what assets are pledged and under what conditions the lender can claim them. Cross-collateralization clauses can connect multiple loans, allowing the lender to apply the collateral from one loan toward a default on another — even if the loan you're reviewing is current.`,
      },
      {
        heading: "Covenants: Ongoing Obligations Throughout the Loan",
        body: `Business loan agreements typically include covenants — ongoing obligations you must meet throughout the loan term. Affirmative covenants require you to do things: maintain certain financial ratios, provide quarterly financial statements, keep collateral insured, obtain the lender's consent for major transactions. Negative covenants restrict what you can do: taking on additional debt, making capital expenditures above a threshold, paying dividends, or selling significant assets without lender approval. Violating a covenant is a default — even if every payment is current. Consumer loans have fewer covenants but may still require you to maintain insurance on collateral or keep a vehicle in a specified location.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Prepayment Penalty",
        meaning:
          "Charges you a fee for paying off the loan early. The penalty is designed to compensate the lender for lost interest income. Before making extra payments or paying off early, check whether this clause applies — the penalty can exceed your interest savings, making early payoff financially harmful.",
      },
      {
        clause: "Acceleration Clause",
        meaning:
          "If you miss payments or breach any other term of the agreement, the lender can demand the entire outstanding balance immediately. This turns a monthly default into an immediate demand for thousands of dollars. The acceleration clause is the mechanism through which foreclosure and repossession actions begin.",
      },
      {
        clause: "Cross-Default Clause",
        meaning:
          "A default on any other debt — with any lender — triggers a default on this loan. If you're managing multiple debts and struggle with one, cross-default clauses can cause a cascade of simultaneous defaults across your loans. This is particularly dangerous for business borrowers.",
      },
      {
        clause: "Personal Guarantee",
        meaning:
          "By signing a personal guarantee on a business loan, you as an individual become personally liable for the debt if the business cannot pay. This pierces the corporate protection and means the lender can pursue your personal home, savings, and other assets.",
      },
      {
        clause: "Variable Rate Adjustment and Caps",
        meaning:
          "A variable rate loan will adjust your interest rate periodically. Know the per-adjustment cap (how much it can rise at once), the lifetime cap (the absolute ceiling), and the index it's tied to. Without a lifetime cap, there's no upper limit on how high your rate — and payment — can go.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between APR and the stated interest rate?",
        answer:
          "The interest rate is the annual cost of borrowing the principal. APR (Annual Percentage Rate) includes both the interest rate and associated fees (origination fees, points, mortgage insurance, etc.), expressed as an annual percentage. APR gives you the true cost of the loan for comparison purposes. Always compare APRs, not just interest rates, when shopping for loans.",
      },
      {
        question: "What happens if I miss a loan payment?",
        answer:
          "A missed payment typically triggers a late fee and starts the default clock. After the cure period (commonly 10–30 days), the lender can begin collection actions, report the delinquency to credit bureaus, and — if the loan has an acceleration clause — demand full repayment. For secured loans, prolonged default can lead to repossession or foreclosure.",
      },
      {
        question: "Can I pay off a loan early without penalty?",
        answer:
          "Check the prepayment clause in your agreement. If there's no prepayment penalty (or the penalty period has expired), paying early saves you interest. With a penalty, calculate whether the interest savings exceed the penalty cost before paying off early. Federal law (for most mortgages) limits how long prepayment penalties can apply.",
      },
      {
        question: "What is a personal guarantee and should I sign one?",
        answer:
          "A personal guarantee makes you individually liable for a business loan. If the business defaults, the lender can pursue your personal assets. Most SBA loans and bank business loans require them. If you must sign one, try to negotiate a 'limited' guarantee (covering only your ownership share) rather than an unlimited joint guarantee with business partners.",
      },
      {
        question: "What does 'default' mean in a loan agreement?",
        answer:
          "Default means you've violated the loan agreement — most commonly by missing payments, but also by breaching covenants, letting insurance lapse on collateral, or triggering a cross-default. Most loans give you a cure period (10–30 days) to fix a default before the lender can accelerate or take legal action.",
      },
    ],
    howToSteps: [
      "Obtain the full loan agreement from your lender.",
      "Paste the text or upload the PDF to PlainDoc on this page.",
      "Select 'Loan Agreement' as the document type.",
      "Click 'Explain My Document'.",
      "Review the explanation — focus on interest type, prepayment penalties, default clauses, and covenants.",
      "Calculate the total repayment amount over the full loan term before signing.",
      "Compare APR across multiple lenders, not just the stated interest rate.",
    ],
    relatedGlossaryTerms: [
      "interest-rate-apr",
      "prepayment-penalty",
      "grace-period",
      "lien",
      "indemnity",
    ],
    relatedDocTypes: ["car-loan-emi", "insurance-policy", "rental-agreement"],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. INSURANCE POLICY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "insurance-policy",
    name: "Insurance Policy",
    emoji: "🛡️",
    h1: "Understand My Insurance Policy — What Am I Actually Covered For?",
    title: "Understand My Insurance Policy in Plain English | Coverage Explainer – PlainDoc",
    metaDescription:
      "Paste your insurance policy and get a plain-language explanation of coverage, exclusions, deductibles, and claims process. Know exactly what you're covered for before you need it. Free.",
    intro: `Most people only read their insurance policy after a claim is denied — at which point it's too late. Insurance policies are dense, exception-filled documents that define with surgical precision what is and is not covered. The declarations page tells you what you bought; the exclusions page tells you what you didn't. PlainDoc's free insurance policy explainer walks through your coverage, exclusions, conditions, and endorsements in plain English so you know where your protection ends and where your gaps are — before a loss occurs.`,
    sections: [
      {
        heading: "How Insurance Policies Are Structured",
        body: `Every insurance policy follows the same basic architecture. The declarations page (the "dec page") is a summary at the front showing your name, policy number, coverage period, coverage limits, deductibles, and premium. The insuring agreement is the core promise — what the insurer commits to pay for. The exclusions section is where most claims get denied — it lists what is not covered, often in considerable detail. The conditions section lists mutual obligations: what you must do to keep the policy in force and to file a valid claim. Endorsements (also called riders) are add-ons that modify the base policy. Read every endorsement — they can significantly expand or restrict your coverage.`,
      },
      {
        heading: "Deductibles, Limits, and Out-of-Pocket Exposure",
        body: `Your deductible is the amount you pay before insurance begins to pay. Higher deductibles lower your premium but increase your per-claim exposure. Coverage limits are the maximum the insurer pays per occurrence, per person, or per year. For health insurance, the out-of-pocket maximum is the annual ceiling on your spending — after you reach it, the insurer pays 100% of covered costs. In property insurance, co-insurance clauses require you to insure your property for a minimum percentage of its value; if you're underinsured, the insurer can proportionally reduce your claim payout — a provision that catches many policyholders off guard when they have a partial loss.`,
      },
      {
        heading: "Reading Exclusions: The Most Important Part of Your Policy",
        body: `The exclusions section is where insurance companies limit their risk. Common home insurance exclusions include flood, earthquake, sewer backup, and mold — each requiring a separate policy or endorsement. Life insurance policies often exclude suicide within the first two years, death during war, or participation in illegal activities. Health insurance may exclude experimental treatments, out-of-network care without referrals, or services deemed not "medically necessary." Auto policies often exclude commercial use, racing, or intentional acts. Understanding your exclusions tells you precisely where you need additional coverage or where you're exposed to uninsured losses.`,
      },
      {
        heading: "Your Duties After a Loss: Time-Sensitive Obligations",
        body: `The conditions section of your policy contains time-sensitive requirements that can void your claim if missed. Most policies require you to provide "prompt" notice of a covered event — typically within days to a few weeks, not months. After a loss, you're usually required to take reasonable steps to prevent further damage (board up broken windows, stop a leak), document all losses with photos and receipts, cooperate fully with the insurer's investigation, submit a proof of loss form within a specified period, and not admit liability or make settlements with third parties without the insurer's consent. Review these conditions before a loss occurs so you know exactly what to do in the immediate aftermath.`,
      },
      {
        heading: "Named Perils vs. Open Perils: What Triggers Coverage?",
        body: `Insurance policies come in two fundamental types. A named perils policy covers only the events explicitly listed — such as fire, theft, lightning, and windstorm. If a peril is not on the list, it's not covered, even if it would seem logical to cover it. An open perils (or "all-risk") policy covers all causes of loss except those specifically excluded. Open perils provides broader protection, but the exclusions still matter enormously — flood and earthquake are excluded from virtually all standard open perils homeowners policies regardless of the policy type.`,
      },
      {
        heading: "Endorsements and Riders: The Coverage You Added (or Didn't)",
        body: `Endorsements are amendments attached to your policy that modify coverage — they can add protection not in the base policy (flood, jewelry, home office equipment) or restrict it. Riders on life insurance add features: an accidental death benefit rider, a waiver of premium rider if you become disabled, or a critical illness rider that pays a lump sum on diagnosis. Endorsements are often added during the initial policy setup and forgotten. Pull out every endorsement attached to your policy and understand exactly what each one does — many policyholders discover valuable coverage they didn't know they had, and others find restrictions that significantly limit their protection.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Named Perils vs. Open Perils",
        meaning:
          "A named perils policy only covers events on a specific list. Open perils (all-risk) covers everything not explicitly excluded. The distinction is critical: if water from a burst pipe damages your home, an open perils policy covers it by default; a named perils policy only covers it if 'accidental discharge' is on the list.",
      },
      {
        clause: "Actual Cash Value vs. Replacement Cost",
        meaning:
          "Actual cash value deducts depreciation from your payout. If your 5-year-old roof is destroyed and replacement costs $20,000, ACV might pay $11,000 after depreciation. Replacement cost coverage pays the full $20,000. The premium difference is usually modest — the payout difference can be enormous.",
      },
      {
        clause: "Subrogation Clause",
        meaning:
          "After your insurer pays your claim, they can sue whoever caused the loss to recover what they paid. The clause requires you to cooperate and not settle with the at-fault party in a way that blocks the insurer's recovery. Ignoring this can give the insurer grounds to deny or reduce your claim.",
      },
      {
        clause: "Concurrent Causation",
        meaning:
          "If a loss results from two causes — one covered (wind), one excluded (flood) — a concurrent causation clause may exclude the entire claim if any cause is excluded. This is heavily litigated after hurricanes and storms. Know whether your policy uses an 'efficient proximate cause' or 'anti-concurrent causation' approach, as this determines coverage.",
      },
      {
        clause: "Cooperation Clause",
        meaning:
          "Requires you to cooperate fully with the insurer's investigation — submit to examination under oath, provide all requested records, and not make any admissions of liability without the insurer's consent. Failing to cooperate is a breach of the policy that gives the insurer grounds to deny your claim, even if the underlying loss would otherwise be covered.",
      },
    ],
    faqs: [
      {
        question: "Why was my insurance claim denied?",
        answer:
          "Common reasons include: the event fell under an exclusion; you failed to give timely notice; the damage is below your deductible; the damage was caused by wear and tear or neglect (not a covered peril); you misrepresented information on the application; or the policy lapsed for non-payment. Request a written denial letter specifying the exact policy provision relied upon. You have the right to formally appeal.",
      },
      {
        question: "What is the difference between actual cash value and replacement cost?",
        answer:
          "Actual cash value (ACV) pays what your property was worth at the time of loss after depreciation. Replacement cost value (RCV) pays what it costs to replace the property with a new equivalent today. RCV coverage has higher premiums but provides far better protection. The difference on an older home or vehicle can be tens of thousands of dollars.",
      },
      {
        question: "Can my insurance company cancel my policy?",
        answer:
          "Yes, but the rules differ depending on whether the policy is mid-term or at renewal. Mid-term cancellation is typically limited to serious reasons — non-payment, fraud, material misrepresentation — and requires statutory advance notice (commonly 10–30 days). At renewal, insurers have more latitude but must still provide notice. Some states restrict non-renewal for certain classes of risk.",
      },
      {
        question: "What is a deductible and how do I choose the right amount?",
        answer:
          "The deductible is the amount you pay before insurance pays anything on a claim. A higher deductible lowers your premium but increases your out-of-pocket cost when you have a claim. Choose a deductible you could pay comfortably if a loss occurred tomorrow. A low-deductible policy that creates financial stress on premium payments is worse than a higher-deductible policy with lower premiums you can actually afford.",
      },
      {
        question: "What is subrogation and how does it affect me?",
        answer:
          "Subrogation is your insurer's right to pursue a third party who caused a loss — after paying your claim. If your car is totaled by a negligent driver and your insurer pays, they can then go after the at-fault driver's insurer. For you, the key obligation is not to settle with the at-fault party in a way that releases them from liability — doing so can waive the insurer's subrogation rights and give them grounds to reduce your payout.",
      },
    ],
    howToSteps: [
      "Locate your insurance policy — usually emailed as a PDF or sent by mail.",
      "Upload the PDF or paste the full text into PlainDoc on this page.",
      "Select 'Insurance Policy' as the document type.",
      "Click 'Explain My Document'.",
      "Review the plain-language summary of your coverage, exclusions, and conditions.",
      "Note any gaps in coverage and consider whether additional endorsements are needed.",
      "Mark your policy's claim reporting deadlines in your calendar.",
    ],
    relatedGlossaryTerms: [
      "deductible",
      "copay",
      "out-of-pocket-maximum",
      "subrogation",
      "indemnity",
      "force-majeure",
    ],
    relatedDocTypes: ["medical-bill", "loan-agreement", "car-loan-emi"],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. PRIVACY POLICY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "privacy-policy",
    name: "Privacy Policy",
    emoji: "🔒",
    h1: "What Does This Privacy Policy Mean? Explained in Plain English",
    title: "What Does This Privacy Policy Mean? Plain English Explainer – PlainDoc",
    metaDescription:
      "Paste any Privacy Policy and get a plain-language summary of what data is collected, how it's used, who it's shared with, and your rights. Free privacy policy explainer.",
    intro: `Privacy policies tell you exactly how companies collect, use, share, and protect your personal data — but they're written in legalese so dense that most people click "I Agree" without reading a word. Given data breaches, targeted advertising ecosystems, and data broker markets, this is information you can no longer afford to skip. PlainDoc's free privacy policy explainer summarizes what data you're handing over, who receives it, how long it's kept, and what rights you have to control it — in plain language that takes minutes to read.`,
    sections: [
      {
        heading: "What a Privacy Policy Must Tell You by Law",
        body: `Modern privacy laws require companies to disclose specific information. GDPR (EU) mandates disclosure of data categories collected, the legal basis for processing, retention periods, international transfers, and individual rights. CCPA (California) requires disclosure of what personal information is collected, how it's used, and whether it's sold — plus the right to opt out. COPPA (U.S.) applies to children under 13. Despite these requirements, privacy policies are often written to technically satisfy legal obligations while obscuring the practical reality of how data is used. Key things to look for: which categories of data are collected, the definition of "partners" the data is shared with, and how you can exercise your rights.`,
      },
      {
        heading: "What Data Companies Actually Collect",
        body: `Companies collect more data than most users realize. Identity data includes name, email, date of birth, and address. Contact data includes phone number and mailing address. Transactional data includes purchase history and payment information. Behavioral data includes browsing patterns within the app, search queries, time on page, and click patterns — a detailed map of how you use the service. Location data may be precise GPS coordinates or coarse IP-based location. Device data includes browser type, operating system, screen resolution, and persistent device identifiers. Inferred data is derived from the above — interest profiles, propensity scores, demographic estimates — and is often the most commercially valuable. Many policies describe inferred data vaguely or not at all.`,
      },
      {
        heading: "Third-Party Data Sharing: Read Between the Lines",
        body: `The data-sharing section is where privacy policies get most opaque. Companies typically share data with three types of entities: service providers (vendors who process data on the company's behalf — cloud hosts, analytics platforms, payment processors); business partners (other companies integrated into the platform for features, joint marketing, or promotions); and advertising networks or data brokers (companies that use your data to target ads or resell it to others). "We do not sell your data" is a phrase many companies use while technically exploiting definitional loopholes — under California law, "sell" has a specific legal meaning, and many forms of data-for-advertising exchanges may not legally qualify as a "sale" even though they're functionally similar.`,
      },
      {
        heading: "Your Rights and How to Exercise Them",
        body: `Your privacy rights depend on where you live. GDPR grants EU residents: the right to access (get a copy of your data), the right to erasure (request deletion), the right to portability (receive data in machine-readable format), the right to restrict processing, and the right to object. CCPA gives California residents: the right to know, the right to delete, the right to opt out of sale or sharing, and the right to non-discrimination for exercising these rights. The privacy policy should explain how to submit a request — typically via email, account settings, or a web form. Responses are required within 30 days (GDPR) or 45 days (CCPA).`,
      },
      {
        heading: "Cookies, Tracking Pixels, and Fingerprinting",
        body: `Most privacy policies include a section on cookies and other tracking technologies, often cross-referencing a separate Cookie Policy. Beyond simple cookies, modern tracking includes: persistent cookies that remain on your device for extended periods; third-party cookies placed by advertising networks to track you across multiple websites; tracking pixels (tiny invisible images) that record when emails are opened and what links are clicked; session recording tools that replay your exact mouse movements and keystrokes on web pages; and browser fingerprinting, which builds a unique identifier for your device without cookies — making it resistant to cookie deletion. After GDPR and state-level cookie laws, companies must obtain consent for non-essential cookies in many jurisdictions, though dark patterns that make opting out difficult remain widespread.`,
      },
      {
        heading: "How Long They Keep Your Data",
        body: `Data retention schedules in privacy policies range from specific to deliberately vague. Account data is often retained until you delete your account plus an additional period afterward. Transactional data (purchase history) may be kept for years for legal and tax compliance purposes. Server logs (records of your sessions and IP addresses) may be retained for months. Marketing data may be retained indefinitely unless you opt out. A policy that says data is retained "as long as necessary for legitimate business purposes" with no further specifics is a red flag for potential indefinite retention. After your data is no longer needed, it should be deleted or anonymized — look for language confirming this.`,
      },
    ],
    confusingClauses: [
      {
        clause: '"We may share information with our partners"',
        meaning:
          "'Partners' is almost never defined specifically. In practice, it can include advertising networks, data brokers, marketing companies, analytics platforms, and joint venture participants. Without a list of named partners or a specific description of what 'partner' means, this phrase grants near-unlimited sharing authority.",
      },
      {
        clause: '"We do not sell your personal information"',
        meaning:
          "This phrase has a specific legal meaning under CCPA. Many companies 'share' data for advertising purposes through arrangements that don't technically qualify as a 'sale' under the legal definition. They can truthfully say they don't 'sell' data while still monetizing it through behavioral advertising and data partnerships.",
      },
      {
        clause: "Data Retention: 'As long as necessary'",
        meaning:
          "Without a specific time period, 'as long as necessary for business purposes' means the company retains your data indefinitely, because there's always some plausible business purpose. Legitimate policies specify retention periods by data category — look for specifics, not vague standards.",
      },
      {
        clause: "Consent to Tracking Across Sites",
        meaning:
          "Many privacy policies include consent to third-party cookies and cross-site tracking embedded in your agreement to the overall terms. By accepting the privacy policy without opting out of tracking, you consent to being followed across the internet by advertising networks — often without realizing it.",
      },
      {
        clause: "Material Changes Notice",
        meaning:
          "Companies can update their privacy policy and are usually only required to notify you by email or in-app message before the change takes effect. If you continue using the service after the change, you accept the new terms. This means the privacy terms governing your data can change significantly after you've already shared it.",
      },
    ],
    faqs: [
      {
        question: "Is a privacy policy legally required?",
        answer:
          "Yes, in most jurisdictions. GDPR requires one for any company that processes EU residents' data. CCPA requires disclosure for California businesses above certain size thresholds. COPPA requires privacy policies for services targeting children under 13. App stores (Apple and Google) require privacy policies for all apps. Even without a specific law, most business practices and contracts require them.",
      },
      {
        question: "What does 'we do not sell your data' actually mean?",
        answer:
          "It depends on how the law defines 'sell.' Under California's CCPA, 'sell' has a specific legal definition. Many data practices that are functionally equivalent to selling — sharing data with advertising networks in exchange for value — don't technically meet the legal definition of 'sale.' The phrase can be technically true while still permitting extensive commercial use of your data.",
      },
      {
        question: "How do I request that a company delete my data?",
        answer:
          "Under GDPR (EU residents) and CCPA (California residents), you can submit a deletion request. The privacy policy must explain how — typically by email, account settings, or a web form. The company must respond within 30 days (GDPR) or 45 days (CCPA). If you no longer use the service, delete your account and submit a deletion request simultaneously.",
      },
      {
        question: "Can a company change its privacy policy after I signed up?",
        answer:
          "Yes, and they often do. Companies are typically required to notify you and give a grace period before the change takes effect. Under GDPR, material changes affecting how your data is used may require fresh consent. After a policy change, if you continue using the service, you're typically deemed to accept the new terms.",
      },
      {
        question: "What are my rights under GDPR and CCPA?",
        answer:
          "GDPR (EU): right to access your data, right to deletion, right to portability, right to restrict processing, and right to object. CCPA (California): right to know what's collected and how it's used, right to delete, right to opt out of data sale, and right to non-discrimination. Both require companies to respond to requests within 30–45 days.",
      },
    ],
    howToSteps: [
      "Navigate to the Privacy Policy page of the service you're reviewing.",
      "Select all the text (Ctrl+A, Ctrl+C) or copy the full URL if PlainDoc supports URL input.",
      "Paste the text into PlainDoc on this page.",
      "Select 'Privacy Policy' as the document type.",
      "Click 'Explain My Document'.",
      "Review data collection categories, sharing practices, and retention schedules.",
      "Note any rights you have and the process for exercising them.",
    ],
    relatedGlossaryTerms: [
      "arbitration-clause",
      "governing-law",
      "auto-renewal-clause",
      "liability-waiver",
      "termination-clause",
    ],
    relatedDocTypes: ["terms-and-conditions", "employment-contract"],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. CREDIT CARD AGREEMENT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "credit-card-agreement",
    name: "Credit Card Agreement",
    emoji: "💳",
    h1: "Explain My Credit Card Agreement — Understand Card Terms and Fees in Plain English",
    title: "Explain Credit Card Terms and Fees | Credit Card Agreement in Plain English – PlainDoc",
    metaDescription:
      "Paste your credit card agreement and get a plain-language explanation of APR, penalty rates, fees, grace periods, and arbitration. Understand your card before you use it. Free.",
    intro: `Credit card agreements are among the most consequential financial contracts most people sign — and most never actually read. Buried in the Schumer Box and the pages that follow are interest rates that can exceed 30%, penalty triggers that silently double your rate, automatic arbitration clauses that waive your right to sue, and fee structures that can generate hundreds of dollars in annual charges before you realize what's happening. PlainDoc's free credit card agreement explainer decodes every term so you know exactly what your card costs and what rights you're giving up.`,
    sections: [
      {
        heading: "The Schumer Box: Your Starting Point",
        body: `Federal law requires credit card issuers to include a standardized disclosure table — called the Schumer Box — at the beginning of your card agreement. It lists the key rates and fees in a consistent format: purchase APR, balance transfer APR, cash advance APR, penalty APR, annual fee, late payment fee, returned payment fee, and foreign transaction fee. The Schumer Box is the most honest part of your credit card agreement. Read it first, understand every row, and then read the rest of the agreement to understand the conditions under which those rates and fees apply.`,
      },
      {
        heading: "Purchase APR vs. Penalty APR: The Rate That Can Surprise You",
        body: `Your purchase APR is the annual interest rate applied to balances you carry from month to month. Even one missed payment can trigger the penalty APR — also called the default rate — which can be 5–15 percentage points higher than your regular rate, often reaching 29.99%. Under the CARD Act of 2009, the issuer must give you 45 days' notice before raising your APR, but the penalty APR can be applied immediately to new purchases after a single late payment. Once triggered, you typically must make six consecutive on-time payments to have your regular rate restored. The penalty APR, not the purchase APR, is what makes a single late payment so expensive.`,
      },
      {
        heading: "The Grace Period: How to Pay Zero Interest",
        body: `The grace period is the window between your statement closing date and your payment due date — typically 21–25 days — during which you can pay your balance in full and pay zero interest on purchases. This is the most valuable feature of a credit card, and most cardholders don't know exactly how it works. Critical details: the grace period only applies to purchases, not cash advances or balance transfers (which begin accruing interest immediately). The grace period disappears entirely if you carry a balance from one month to the next — you'll be charged interest on new purchases from the date of the transaction. To always pay zero interest, pay your full statement balance by the due date every month.`,
      },
      {
        heading: "Fees: What You're Actually Paying Beyond Interest",
        body: `Annual fees range from $0 to $700+ for premium rewards cards. Balance transfer fees (3–5% of the amount transferred) apply when you move debt from another card. Cash advance fees (3–5%, often with a $10 minimum) plus the higher cash advance APR make cash advances extremely expensive. Foreign transaction fees (1–3%) are charged on purchases made abroad or in foreign currency. Late payment fees can be up to $41 after the first instance. Returned payment fees (similar amounts) are charged when a payment is rejected. Over-limit fees may apply if you've opted in to over-limit coverage. Over a year, fee exposure can significantly exceed what most cardholders anticipate.`,
      },
      {
        heading: "The CARD Act: Your Rights as a Cardholder",
        body: `The Credit Card Accountability Responsibility and Disclosure Act of 2009 (CARD Act) provides meaningful protections that limit what issuers can do. Key protections: your interest rate cannot be raised on existing balances except after 45 days' notice; payments must be applied to the highest-rate balance first; statements must be sent at least 21 days before the due date; over-limit fees require your opt-in consent; and issuers cannot raise your rate in the first year of the account. These protections do not eliminate the need to read your agreement — they set a floor below which the issuer cannot go, not a ceiling above which the agreement cannot extend.`,
      },
      {
        heading: "Arbitration and Dispute Resolution in Credit Card Agreements",
        body: `Virtually every major credit card agreement contains a mandatory arbitration clause and class-action waiver. If you dispute a charge, allege discriminatory credit practices, or believe the issuer violated the law, these clauses require the dispute to go to private arbitration rather than court. You waive your right to a jury trial and to join any class-action lawsuit. The arbitration provision typically specifies the arbitration company (usually AAA or JAMS), the location (often the issuer's home state), and how fees are allocated. Some issuers have recently removed arbitration clauses under regulatory pressure; check whether yours still includes it.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Purchase APR vs. Penalty APR",
        meaning:
          "Your regular purchase APR applies when you carry a balance. The penalty APR — often 29.99% — kicks in after a single late payment and can apply to all new purchases immediately. To restore your regular rate, you typically must make six consecutive on-time payments. One late payment can effectively double your interest rate.",
      },
      {
        clause: "Cash Advance APR and Fee",
        meaning:
          "Cash advances are treated differently from purchases: a higher APR (usually 25–30%), a fee of 3–5% (often with a $10 minimum), and no grace period — interest starts accruing from the day you take the advance. ATM withdrawals, convenience checks, and casino chips all typically count as cash advances.",
      },
      {
        clause: "Grace Period Conditions",
        meaning:
          "The grace period only applies to purchases, not cash advances or balance transfers. More importantly, the grace period disappears if you're carrying any balance from the prior month. If you carried a balance, you'll be charged interest on new purchases from the transaction date — not from the statement date. The only way to restore the grace period is to pay your full balance for two consecutive months.",
      },
      {
        clause: "Balance Transfer Fee",
        meaning:
          "Moving debt from another card to take advantage of a 0% promotional rate typically costs 3–5% of the transferred amount upfront. On a $10,000 transfer, that's $300–$500 in fees immediately. Calculate whether the interest savings during the promotional period exceed this upfront fee before transferring.",
      },
      {
        clause: "Minimum Payment Warning",
        meaning:
          "Credit card statements are legally required to show how long it takes to pay off your balance making only minimum payments. The number is often shocking — many balances take 10–20 years to repay at minimum payment, with total interest exceeding the original purchase amount several times over.",
      },
      {
        clause: "Mandatory Arbitration / Class Action Waiver",
        meaning:
          "Any dispute with the card issuer — billing error, discriminatory practice, illegal rate increase — must go to private arbitration. You cannot sue in court or join a class-action lawsuit. The arbitration clause typically designates the arbitration provider, the applicable rules, and how costs are allocated.",
      },
    ],
    faqs: [
      {
        question: "What is an APR and how does it affect my monthly bill?",
        answer:
          "APR (Annual Percentage Rate) is your interest rate expressed as an annual figure. To find your daily rate, divide it by 365. If you carry a balance, the issuer calculates interest daily on your average daily balance and adds it to your statement. A 24% APR means roughly 2% per month on carried balances. On a $5,000 balance, that's $100 in interest charges each month you don't pay it off.",
      },
      {
        question: "What happens if I only pay the minimum payment?",
        answer:
          "Minimum payments are typically 1–3% of your balance or $25, whichever is greater. Paying only minimums means the vast majority of each payment goes to interest, not principal. Credit card statements are required to show how long it takes to pay off your balance at minimum payments — check that number. It's often 10–20+ years, with total interest paid exceeding the original balance.",
      },
      {
        question: "Can my credit card company raise my interest rate?",
        answer:
          "Under the CARD Act, issuers must give 45 days' notice before raising your APR. However, they can raise your rate after 45 days for any reason (including just choosing to). The penalty APR can be applied immediately after a late payment. Promotional rates (0% intro APR) revert to the regular rate after the promotional period, which is not a rate increase requiring notice — it's a pre-disclosed rate change.",
      },
      {
        question: "What is a penalty APR and how do I get my regular rate back?",
        answer:
          "The penalty APR is a higher interest rate (often 29.99%) that the issuer applies after a late payment. It can apply to new purchases immediately. Under the CARD Act, issuers must review penalty APR applications every six months. After six consecutive on-time minimum payments, the issuer must restore your regular rate on existing balances — though the penalty APR may still apply to new purchases.",
      },
      {
        question: "What is a foreign transaction fee and which cards don't charge it?",
        answer:
          "A foreign transaction fee (typically 1–3% of the transaction amount) is charged when you make a purchase in a foreign currency or through a foreign bank — even online. Travel-focused credit cards (Chase Sapphire, Capital One Venture, American Express Gold) typically have no foreign transaction fee. If you travel internationally even occasionally, this fee is worth avoiding.",
      },
    ],
    howToSteps: [
      "Locate your credit card agreement — typically found in your online account or the mailer you received when approved.",
      "Paste the text or upload the PDF to PlainDoc on this page.",
      "Select 'Credit Card Agreement' as the document type.",
      "Click 'Explain My Document'.",
      "Review the plain-language breakdown of your APRs, fees, grace period conditions, and dispute resolution terms.",
      "Calculate what carrying a balance would cost you annually at your current APR.",
      "Note the penalty APR trigger and make sure you never miss a payment.",
    ],
    relatedGlossaryTerms: [
      "interest-rate-apr",
      "late-payment-penalty",
      "auto-renewal-clause",
      "arbitration-clause",
      "grace-period",
    ],
    relatedDocTypes: ["loan-agreement", "terms-and-conditions", "car-loan-emi"],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. NDA (NON-DISCLOSURE AGREEMENT)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "nda",
    name: "Non-Disclosure Agreement (NDA)",
    emoji: "🤫",
    h1: "What Does My NDA Mean? Non-Disclosure Agreement Explained in Plain English",
    title: "What Does My NDA Mean? Non-Disclosure Agreement Explained – PlainDoc",
    metaDescription:
      "Paste your NDA (non-disclosure agreement) and get a plain-language explanation of what's confidential, what you can say, penalty clauses, and duration. Free NDA explainer.",
    intro: `Non-disclosure agreements are signed in almost every business context — before a job interview, at the start of a contract negotiation, before a startup pitches investors, or as part of an employment offer. They can be one page or twenty. They can be mutual (both sides keep secrets) or one-way (only you do). And while NDAs look straightforward, the definition of "confidential information," the permitted disclosure carve-outs, and the penalty clauses can have significant consequences if you don't read them carefully. PlainDoc's free NDA explainer tells you exactly what you're agreeing to protect — and what happens if you don't.`,
    sections: [
      {
        heading: "What Is an NDA and When Should You Sign One?",
        body: `A non-disclosure agreement (NDA) is a legal contract that obligates one or both parties to keep specified information confidential and not disclose it to third parties without authorization. NDAs are used to protect trade secrets, business plans, product designs, client lists, financial information, and any other information that has commercial value precisely because it isn't publicly known. They're common before business negotiations (so you can speak freely without the other party walking away and using your ideas), in employment (so employees don't share company secrets), and in settlement agreements (so both parties stay quiet about what happened). Whether to sign one depends on what information you'll be exposed to and how broad the obligations are.`,
      },
      {
        heading: "One-Way vs. Mutual NDAs: Who Is Bound?",
        body: `A one-way (or unilateral) NDA obligates only one party — typically the person receiving confidential information — to keep secrets. The disclosing party has no corresponding obligation. A mutual (or bilateral) NDA binds both parties to protect each other's confidential information. This is more appropriate when two companies are considering a partnership and will share sensitive information in both directions. The designation matters: if you sign a one-way NDA as the receiving party, you have confidentiality obligations; the other party does not. If you're the one sharing valuable information, a mutual NDA or a one-way NDA in your favor provides more protection.`,
      },
      {
        heading: "Defining 'Confidential Information': The Most Critical Clause",
        body: `The definition of "confidential information" is the most important clause in any NDA, and it varies enormously. A narrow definition specifies particular categories: trade secrets, customer lists, financial projections, source code. A broad definition covers "all information disclosed by one party to the other, whether orally or in writing, regardless of whether it's marked confidential." An extremely broad definition can cover every conversation you ever have with the company — including things you'd consider ordinary industry knowledge. The broader the definition, the more you're restricted from discussing publicly, the harder it is to know what's covered, and the higher your risk of accidentally breaching the agreement.`,
      },
      {
        heading: "Standard Carve-Outs: What Is NOT Confidential",
        body: `Most well-drafted NDAs include standard carve-outs — categories of information that are expressly excluded from the confidentiality obligation even if they fit the broad definition. Standard carve-outs include: information that is already publicly known at the time of disclosure; information that becomes public through no fault of the receiving party; information the receiving party independently developed without reference to the disclosed information; information received from a third party with no confidentiality restriction; and information required to be disclosed by law or court order. If an NDA lacks these carve-outs, be cautious — you could be obligated to keep confidential information that is already public knowledge.`,
      },
      {
        heading: "Duration: When Does the Obligation End?",
        body: `NDAs should specify a term — the period during which the confidentiality obligation applies. Common terms range from one to five years for general business NDAs; employment NDAs may last until the information is no longer a trade secret. Some NDAs attempt to make confidentiality obligations perpetual ("for as long as the information remains confidential"). While this sounds logical for genuine trade secrets (which can have indefinite value), perpetual obligations are difficult to enforce and create ongoing compliance uncertainty. Trade secret law provides separate legal protection for genuine secrets regardless of whether an NDA is in place; a finite NDA term with appropriate trade secret carve-outs is generally preferable for both parties.`,
      },
      {
        heading: "Remedies and Penalties for Breach: What's at Stake",
        body: `If you breach an NDA, the disclosing party has several potential remedies. Injunctive relief — a court order stopping you from continuing the disclosure — is the most immediate and is specifically mentioned in most NDAs because breach is considered irreparable harm that money alone can't remedy. Actual damages compensate for proven financial losses caused by the breach. Liquidated damages clauses (if included) specify a pre-agreed penalty amount without requiring proof of actual losses. Legal fees provisions determine whether the prevailing party can recover attorney's fees. The combination of injunctive relief availability and fee-shifting can make defending an NDA breach accusation extremely expensive, even if you ultimately prevail.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Definition of Confidential Information",
        meaning:
          "The scope of what you must keep secret. A narrow definition lists specific categories; a broad definition covers 'all information disclosed, whether oral or written.' The broader the definition, the harder it is to know what you can and can't say — and the higher your risk of an accidental breach.",
      },
      {
        clause: "Residuals Clause",
        meaning:
          "A residuals clause allows the receiving party to use information that is retained in the 'unaided memory' of personnel who were exposed to confidential information. It's a carve-out that protects employees who naturally internalize knowledge. Look for it in tech NDAs — its absence means you theoretically can't use anything you remember from a confidential briefing.",
      },
      {
        clause: "Non-Circumvention Clause",
        meaning:
          "Prohibits the receiving party from using the disclosed information to bypass the disclosing party and deal directly with their clients, partners, or suppliers. Common in business brokerage, investment banking, and M&A contexts. Violating this can expose you to damages even if you technically didn't disclose any confidential information.",
      },
      {
        clause: "Return or Destruction of Confidential Materials",
        meaning:
          "Requires you to return or certifiably destroy all received confidential materials (documents, files, copies) at the end of the NDA term or upon request. With modern digital files, 'destruction' is often defined to include secure deletion and a written certification. Failure to comply is itself a breach.",
      },
      {
        clause: "Injunctive Relief Clause",
        meaning:
          "States that breach of the NDA will cause irreparable harm entitling the disclosing party to seek a court injunction without needing to post a bond. This waives your right to argue that money damages would be sufficient — it pre-authorizes the disclosing party to get an immediate court order stopping you, before a full trial.",
      },
    ],
    faqs: [
      {
        question: "Do I have to sign an NDA before a job interview?",
        answer:
          "You don't have to sign anything, but refusing may end the opportunity. Pre-interview NDAs are common when discussing proprietary technology, business models, or sensitive projects. Before signing, review the definition of confidential information, the duration, and any non-compete language — some pre-interview NDAs include restrictions beyond confidentiality.",
      },
      {
        question: "What happens if I accidentally breach an NDA?",
        answer:
          "An accidental breach (e.g., mentioning a confidential project casually in conversation) can still expose you to liability if it resulted in actual harm. In practice, the disclosing party must prove both breach and damages. Document any accidental disclosures immediately and notify the other party — proactive disclosure often results in better outcomes than discovery by the other party.",
      },
      {
        question: "Can an NDA prevent me from reporting illegal activity?",
        answer:
          "No. NDAs cannot legally prevent you from reporting illegal conduct to law enforcement or regulatory agencies. NDAs that attempt to prohibit whistleblower disclosures are void and unenforceable under federal and most state laws. The Defend Trade Secrets Act (DTSA) specifically protects employees who disclose trade secrets to attorneys or government officials in connection with reporting suspected legal violations.",
      },
      {
        question: "What is the difference between an NDA and a non-compete?",
        answer:
          "An NDA restricts you from disclosing specific information. A non-compete restricts where you can work and who you can work for. They're different obligations with different enforceability standards. Non-competes are far more scrutinized by courts and often unenforceable. NDAs are generally more readily enforced as long as the information being protected is genuinely confidential.",
      },
      {
        question: "How long does an NDA last?",
        answer:
          "The term varies. Business NDAs for negotiations typically run 1–3 years. Employment NDAs may last 2–5 years after termination for most information and indefinitely for genuine trade secrets. Some NDAs attempt perpetual obligations. Courts generally enforce finite terms; perpetual obligations for non-trade-secret information are sometimes not enforced or are limited to a reasonable period.",
      },
    ],
    howToSteps: [
      "Obtain the full text of the NDA you've been asked to sign.",
      "Paste or upload it into PlainDoc on this page.",
      "Select 'Non-Disclosure Agreement (NDA)' as the document type.",
      "Click 'Explain My Document'.",
      "Review the definition of confidential information, the duration, and the penalty clauses.",
      "Note whether the NDA includes non-compete or non-solicitation provisions beyond confidentiality.",
      "If the NDA is for a significant business relationship, have an attorney review it before signing.",
    ],
    relatedGlossaryTerms: [
      "governing-law",
      "indemnity",
      "termination-clause",
      "arbitration-clause",
      "non-compete-clause",
      "liquidated-damages",
    ],
    relatedDocTypes: ["employment-contract", "terms-and-conditions", "loan-agreement"],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. CAR LOAN / EMI AGREEMENT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "car-loan-emi",
    name: "Car Loan / EMI Agreement",
    emoji: "🚗",
    h1: "Understand My Car Loan and EMI Agreement in Plain English",
    title: "Understand Car Loan and EMI Agreement | Auto Loan Explainer – PlainDoc",
    metaDescription:
      "Paste your car loan or EMI agreement and get a plain-language explanation of interest, total repayment, prepayment penalties, repossession terms, and your rights. Free auto loan explainer.",
    intro: `A car loan agreement is often signed in a dealer's finance office, under time pressure, after hours of negotiation — not the ideal conditions for reading a multi-page legal document. But the terms you agree to in that room determine how much you'll really pay for the vehicle, what happens if you miss a payment, whether you can sell the car before the loan is paid off, and how quickly the lender can repossess it if you fall behind. PlainDoc's free car loan explainer walks through every clause so you understand your EMI agreement before you drive off the lot.`,
    sections: [
      {
        heading: "What a Car Loan Agreement Actually Contains",
        body: `A car loan or auto finance agreement is a secured loan contract in which the vehicle is the collateral. It specifies the amount financed (the loan principal), the interest rate (expressed as both a simple rate and the APR, which includes fees), the number of monthly payments, the amount of each payment (your EMI — Equated Monthly Installment), and the total amount you'll repay over the loan term. It also specifies the lender's rights if you default, your obligations regarding insurance and care of the vehicle, and any additional products (extended warranties, GAP insurance) that were financed into the loan. Review each of these elements carefully — they collectively determine your total cost of ownership.`,
      },
      {
        heading: "How Your Monthly EMI Is Calculated",
        body: `Your EMI (monthly payment) is calculated based on the principal amount, the interest rate, and the loan term. Most auto loans use simple interest (also called actuarial interest), where interest is calculated on the current outstanding balance and decreases as you pay down the principal. Early payments are mostly interest; later payments are mostly principal — this is called amortization. Some dealerships offer pre-computed interest loans where the total interest is calculated upfront and added to the principal — here, paying off early doesn't save as much interest. Your loan agreement should specify which method applies. Request a full amortization schedule to see exactly how much of each payment goes to interest vs. principal.`,
      },
      {
        heading: "The True Cost: APR, Add-Ons, and What You Actually Pay",
        body: `The sticker price and loan principal are not the whole story. Dealer add-ons — extended warranties, paint protection, fabric protection, tire and wheel coverage — are often rolled into the loan principal, increasing both the amount financed and the total interest you pay over the loan term. GAP insurance is another common add-on; it covers the difference between what you owe on the loan and what the car is worth if it's totaled. GAP insurance can be valuable, but it's also frequently overpriced at the dealership — you can usually buy it more cheaply through your auto insurer. Calculate the all-in cost by adding your total payments over the full loan term; that number reveals what you actually pay for the vehicle.`,
      },
      {
        heading: "Default and Repossession: What Happens If You Miss Payments",
        body: `Auto loans are secured by the vehicle. If you default — typically by missing one or two payments — the lender has the right to repossess the vehicle, often without advance notice (as long as they don't breach the peace in doing so). Repossession can happen quickly: in some states, a lender can legally repossess a vehicle the day after a missed payment, though most wait 30–90 days and attempt to contact you first. After repossession, the lender typically auctions the vehicle. If the auction proceeds don't cover your outstanding loan balance, fees, and repossession costs, you owe the difference — called the deficiency balance. Even after losing your car, you can still owe thousands of dollars.`,
      },
      {
        heading: "GAP Insurance: Do You Need It and What Does It Cover?",
        body: `A new car can lose 10–20% of its value the moment it leaves the dealership. If the vehicle is totaled or stolen in the first few years, your insurance payout (based on the car's current market value) may be thousands of dollars less than what you still owe on the loan. GAP (Guaranteed Asset Protection) insurance covers this "gap" — paying off the difference between the insurance settlement and your remaining loan balance. It's most valuable when you made a small down payment, have a long loan term (72 or 84 months), or bought a vehicle that depreciates quickly. However, GAP insurance from a dealership often costs $400–$900 added to your loan; your own auto insurer typically offers it for $20–$40 per year.`,
      },
      {
        heading: "Your Rights: Prepayment, Refinancing, and Selling the Car",
        body: `If you want to pay off your car loan early, check whether your agreement includes a prepayment penalty — most auto loans don't, but some pre-computed interest loans do. Refinancing your auto loan is typically allowed and can significantly reduce your monthly payment or total interest if rates have fallen since you originated the loan. However, refinancing resets your loan term — if you refinance a 3-year-old 60-month loan into a new 60-month loan, you'll be making payments for 8 years total on a depreciating asset. Selling the car while the loan is outstanding requires paying off the lender's lien first — you'll need a payoff amount from the lender, which may differ from your remaining balance by a few days' interest.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Simple Interest vs. Pre-Computed Interest",
        meaning:
          "Simple (actuarial) interest is calculated on your current outstanding balance — paying early saves money because your balance drops faster. Pre-computed interest calculates the total interest upfront and adds it to the principal, so paying early saves less. Most modern auto loans use simple interest, but verify in your agreement.",
      },
      {
        clause: "GAP Waiver / GAP Insurance",
        meaning:
          "Covers the difference between your loan payoff amount and your car's actual cash value if it's totaled or stolen. Without it, you might pay off a car you no longer have for months or years. Dealership GAP is often expensive — compare with your auto insurer's GAP coverage before financing it into your loan.",
      },
      {
        clause: "Title and Lien",
        meaning:
          "The lender places a lien on the vehicle's title, meaning they're the legal owner until you fully repay the loan. You cannot legally sell or transfer the car without the lender's involvement. The lender's name appears on your insurance policy and on the title until the loan is paid off.",
      },
      {
        clause: "Right to Repossess Without Notice",
        meaning:
          "Most auto loan agreements authorize repossession without advance notice after default — no court order required, as long as the repossessor doesn't 'breach the peace.' Your car can be towed from your driveway, parking lot, or street. The only legal requirement is that the repossession must not involve physical confrontation or locked barriers.",
      },
      {
        clause: "Deficiency Balance After Repossession",
        meaning:
          "If your repossessed car sells at auction for less than your loan balance plus repossession costs, you owe the difference. On a $20,000 loan balance, a vehicle auctioned for $14,000 with $2,000 in fees leaves you owing $8,000 on a car you no longer have. This debt is collectible like any other.",
      },
      {
        clause: "Mandatory Insurance Requirements",
        meaning:
          "Auto loan agreements require you to maintain comprehensive and collision insurance on the vehicle — not just liability. The lender is listed as a loss payee. If you drop comprehensive/collision to save on premiums, the lender can force-place their own insurance at a much higher cost and add it to your loan balance.",
      },
    ],
    faqs: [
      {
        question: "What is an EMI and how is it calculated?",
        answer:
          "EMI (Equated Monthly Installment) is your fixed monthly car loan payment. It's calculated using the loan principal, the annual interest rate, and the number of payments. Early payments in the schedule are mostly interest; later payments are mostly principal. Your loan agreement should include an amortization table showing this breakdown for every payment.",
      },
      {
        question: "What happens if I miss a car payment?",
        answer:
          "Most lenders won't report a single missed payment to credit bureaus until it's 30 days late, but they will charge a late fee. After 30–90 days, repossession becomes a real risk depending on your lender and state laws. If you know you'll miss a payment, call your lender proactively — many offer temporary deferments or payment plans that are far better than letting the account go delinquent.",
      },
      {
        question: "Can I pay off my car loan early?",
        answer:
          "Usually yes. Most simple-interest auto loans allow early payoff without penalty, and you save the remaining interest. Request a payoff amount from your lender — this is the exact amount to send to close the loan, including any interest accrued through your target payoff date. Confirm the lien is released and your title is updated after payoff.",
      },
      {
        question: "What is a deficiency balance and do I have to pay it?",
        answer:
          "If your repossessed vehicle sells for less than what you owe (plus fees), the remaining balance is the deficiency. Yes, you generally must pay it — the lender can sue you and pursue standard debt collection. Some states have laws limiting deficiency balances or requiring the lender to sell the vehicle in a 'commercially reasonable manner' before pursuing you.",
      },
      {
        question: "Can I sell my car if I still have a loan on it?",
        answer:
          "Yes, but you must pay off the loan before or at the time of transfer. The cleanest way is to request a payoff amount from your lender, have the buyer's funds pay off the lender directly (or through escrow), and then have the lien released so a clean title can be issued to the buyer. Private sales of loan-encumbered vehicles are more complex than dealer trades but are entirely legal.",
      },
    ],
    howToSteps: [
      "Obtain your car loan or EMI agreement from your lender or dealer's finance office.",
      "Paste the text or upload the PDF to PlainDoc on this page.",
      "Select 'Car Loan / EMI Agreement' as the document type.",
      "Click 'Explain My Document'.",
      "Review the total repayment amount, your EMI breakdown, and the default/repossession terms.",
      "Calculate the all-in cost: total payments over the full term minus the vehicle's purchase price = total interest paid.",
      "If GAP insurance was included, compare its cost to what your auto insurer charges.",
    ],
    relatedGlossaryTerms: [
      "interest-rate-apr",
      "prepayment-penalty",
      "lien",
      "grace-period",
      "late-payment-penalty",
    ],
    relatedDocTypes: ["loan-agreement", "insurance-policy", "credit-card-agreement"],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. MORTGAGE AGREEMENT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "mortgage-agreement",
    name: "Mortgage Agreement",
    emoji: "🏡",
    h1: "Understand My Mortgage Agreement — Home Loan Terms Explained in Plain English",
    title: "Understand My Mortgage Agreement | Home Loan Terms in Plain English – PlainDoc",
    metaDescription:
      "Paste your mortgage agreement and get a plain-language explanation of interest rate, amortization, escrow, PMI, prepayment penalties, and what happens if you default. Free.",
    intro: `A mortgage is probably the largest financial commitment you'll ever make — and the agreement that governs it runs 40 to 80 pages of dense legal language. Buried in the fine print are details about how your interest rate can change, when the bank can call the entire loan due, what happens to your escrow account, and what rights you have before foreclosure. PlainDoc's free mortgage agreement explainer breaks down every significant clause so you understand exactly what you're signing before you hand over a 30-year commitment.`,
    sections: [
      {
        heading: "The Two Documents That Make Up Your Mortgage",
        body: `Most homebuyers don't realize they're signing two separate legal instruments at closing. The promissory note is your personal promise to repay the loan — it specifies the loan amount, interest rate, repayment schedule, and your personal liability for the debt. The mortgage (or deed of trust in many states) is the security instrument that creates the lender's lien on the property — giving the lender the right to foreclose if you default. The note is the debt; the mortgage is the collateral agreement securing that debt. When your loan is sold to another servicer, your payment address changes but the terms don't — both documents remain fully in effect.`,
      },
      {
        heading: "Fixed Rate vs. Adjustable Rate: What Your Agreement Locks In",
        body: `Fixed-rate mortgages maintain the same interest rate and monthly payment for the entire loan term — typically 15 or 30 years. Adjustable-rate mortgages (ARMs) start with a fixed period (typically 5, 7, or 10 years), then adjust periodically based on a benchmark index. ARM agreements specify the index (SOFR is now common), the margin (a fixed percentage added to the index), the adjustment frequency, the per-adjustment cap, and the lifetime cap. A 5/1 ARM with a 2/6 cap structure means fixed for 5 years, then annual adjustments capped at 2% per adjustment and 6% over the life of the loan. Always calculate your maximum possible payment before taking an ARM.`,
      },
      {
        heading: "Escrow: Why Your Payment Is Higher Than You Expected",
        body: `Most mortgages require an escrow account — a separate account managed by the lender that collects a portion of your monthly payment to cover property taxes and homeowners insurance when they come due. Your monthly payment is typically PITI: Principal, Interest, Taxes, and Insurance. The tax and insurance portions go into escrow; the lender pays the bills when due. The escrow amount adjusts annually based on actual tax and insurance bills. If your escrow is underfunded — because taxes or insurance increased — the lender may require a lump-sum catch-up payment or increase your monthly payment. PMI, required when your down payment is below 20%, may also be collected through escrow.`,
      },
      {
        heading: "Default, Acceleration, and Foreclosure: Your Rights Before You Lose the Home",
        body: `Mortgage default typically begins with missed payments. After 30 days, the delinquency is reported to credit bureaus. Most mortgages have an acceleration clause: after a specified period of default (typically 90–120 days), the lender can declare the entire outstanding balance immediately due. Federal law requires lenders to wait until you're 120 days delinquent before initiating foreclosure and to offer loss mitigation options first — loan modifications, repayment plans, forbearance, or a short sale. Foreclosure timelines vary dramatically by state: judicial foreclosure takes 12–36 months in many states; non-judicial foreclosure can happen in as little as 90–120 days in others.`,
      },
      {
        heading: "Due-on-Sale Clause: Why You Can't Transfer a Mortgage",
        body: `Nearly all modern mortgages contain a due-on-sale clause, which requires the entire loan balance to be paid immediately if the property is sold or transferred. This prevents buyers from assuming a seller's below-market-rate mortgage without lender approval. The clause is triggered by: selling the property, transferring title, placing the property in a trust (with exceptions for living trusts), and in some cases adding a co-owner to the title. FHA and VA loans are often assumable — conventional mortgages almost never are. Transferring title without paying off the mortgage gives the lender the right to accelerate the loan immediately.`,
      },
      {
        heading: "PMI: When It Applies and How to Remove It",
        body: `PMI (Private Mortgage Insurance) is required by most conventional lenders when your down payment is less than 20%. PMI protects the lender — not you — if you default. It typically costs 0.5–1.5% of the loan amount annually. The Homeowners Protection Act gives you the right to request PMI cancellation when your loan-to-value ratio reaches 80% based on the original purchase price and loan balance. PMI must be automatically terminated when the balance reaches 78% of the original purchase price. If your home's value has increased significantly, you may be able to request a new appraisal to terminate PMI sooner, though lender rules vary.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Acceleration Clause",
        meaning:
          "After 90–120 days of missed payments, the lender can demand the entire outstanding loan balance immediately. This is the legal mechanism that triggers foreclosure. Federal rules require lenders to wait 120 days before filing and to offer loss mitigation options first.",
      },
      {
        clause: "Due-on-Sale / Alienation Clause",
        meaning:
          "If you sell, transfer, or add someone to the title of your home, the full mortgage balance becomes immediately due. You cannot transfer your below-market-rate mortgage to a buyer without lender approval. Living trust transfers are typically exempt.",
      },
      {
        clause: "Escrow Impound Account",
        meaning:
          "A portion of your monthly payment funds a lender-managed account that pays property taxes and homeowners insurance. If those costs rise annually, your monthly payment increases. An escrow shortage can result in a one-time catch-up payment.",
      },
      {
        clause: "Negative Amortization",
        meaning:
          "Some older payment-option ARMs allowed minimum payments lower than the interest accruing, causing the outstanding balance to grow rather than shrink. Modern mortgages rarely include this, but verify your agreement if your balance seems to be increasing despite regular payments.",
      },
      {
        clause: "Prepayment Penalty",
        meaning:
          "Most conventional mortgages have no prepayment penalty, but some non-QM products may charge a fee for paying off early or refinancing. Check this clause before making lump-sum principal payments or refinancing.",
      },
      {
        clause: "Private Mortgage Insurance (PMI)",
        meaning:
          "PMI protects the lender, not you. Required when down payment is less than 20%. You can request cancellation at 20% equity based on original purchase price. It's automatically terminated at 22% equity. PMI does not protect you if you default.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a mortgage and a promissory note?",
        answer:
          "The promissory note is your personal promise to repay the debt — it creates your personal liability. The mortgage is the security instrument that gives the lender a lien on your property. The note is the debt; the mortgage is the collateral agreement. You sign both at closing. If you default, the lender can pursue you personally on the note and foreclose on the property through the mortgage.",
      },
      {
        question: "What happens if I miss a mortgage payment?",
        answer:
          "After 30 days: late fee charged, reported to credit bureaus. After 90–120 days: lender may send a breach letter and begin loss mitigation review. Federal law requires lenders to wait 120 days before filing for foreclosure and to offer loss mitigation options. Contact your servicer immediately if you anticipate missing a payment — options are much easier to access before serious delinquency.",
      },
      {
        question: "What is PMI and when can I remove it?",
        answer:
          "PMI is required when your down payment is less than 20%. It protects the lender if you default. You can request cancellation when you reach 20% equity based on the original purchase price. PMI must be automatically terminated at 78% of the original price. If your home has appreciated significantly, ask your lender about appraisal-based cancellation.",
      },
      {
        question: "Can I assume a seller's mortgage?",
        answer:
          "Generally no for conventional loans — the due-on-sale clause makes the full balance due upon transfer. FHA and VA loans are often assumable. If you transfer title without paying off a conventional mortgage, the lender can accelerate the full balance immediately.",
      },
      {
        question: "What is an escrow account and why is my payment higher than expected?",
        answer:
          "Your monthly payment includes 1/12th of your annual property taxes and homeowners insurance, held in escrow. When taxes or insurance increase — which they often do — your monthly payment increases. You'll receive an annual escrow analysis statement explaining any payment changes.",
      },
    ],
    howToSteps: [
      "Locate your mortgage closing documents — the promissory note and the mortgage or deed of trust.",
      "Upload the PDF or paste the text into PlainDoc on this page.",
      "Select 'Mortgage Agreement' as the document type.",
      "Click 'Explain My Document'.",
      "Review the interest rate type (fixed or ARM), escrow requirements, and default/foreclosure provisions.",
      "Note your PMI termination rights and mark when you'll reach 20% equity.",
      "Keep copies of both documents in a secure location for the life of the loan.",
    ],
    relatedGlossaryTerms: [
      "escrow",
      "lien",
      "prepayment-penalty",
      "amortization",
      "grace-period",
      "interest-rate-apr",
    ],
    relatedDocTypes: ["loan-agreement", "insurance-policy", "car-loan-emi"],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. SEVERANCE AGREEMENT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "severance-agreement",
    name: "Severance Agreement",
    emoji: "📋",
    h1: "Understand My Severance Agreement — What You're Signing Away and Getting",
    title: "Understand My Severance Agreement | Severance Package Explainer – PlainDoc",
    metaDescription:
      "Paste your severance agreement and get a plain-language explanation of claims releases, ADEA rights, non-disparagement, non-compete, and what to negotiate. Free severance explainer.",
    intro: `A severance agreement arrives at the worst possible time — you've just lost your job, you're stressed, and someone is handing you a document with a signing deadline. But what looks like a straightforward offer of money in exchange for a signature is actually a legally binding contract that can permanently waive your right to sue your former employer for discrimination, wrongful termination, or other legal violations. Before you sign, you need to understand exactly what claims you're releasing, what restrictions you're accepting, and whether the offer is fair. PlainDoc's free severance agreement explainer breaks it all down in plain English.`,
    sections: [
      {
        heading: "What a Severance Agreement Actually Is",
        body: `A severance agreement is a contract in which you waive legal claims against your employer in exchange for compensation above what you're legally owed. The key phrase is "above what you're legally owed" — most employers have no legal obligation to offer severance unless your employment contract or company policy says otherwise. When they do offer it, they're paying you to sign away rights. The core of any severance agreement is the release of claims — a broad legal waiver in which you give up the right to sue for anything arising out of your employment or termination. This is the most consequential part of the document, and it's rarely the first thing you see.`,
      },
      {
        heading: "The Release of Claims: What You're Giving Up",
        body: `By signing the release, you typically waive all claims related to your employment — including potential discrimination claims (age, race, gender, disability, national origin), wrongful termination claims, breach of contract claims, wage and hour violations, retaliation claims, and claims under Title VII, the ADA, and the FMLA. The language is typically sweeping: "known and unknown claims arising from the beginning of time to the date of this agreement." This means you're waiving claims you may not even know you have. Take the release seriously — consider whether any wrongful conduct occurred before signing it away permanently.`,
      },
      {
        heading: "ADEA Rights: Special Protections for Workers Over 40",
        body: `If you are 40 or older, the Older Workers Benefit Protection Act (OWBPA) gives you specific rights that cannot be waived without compliance with strict requirements. You must be given at least 21 days to consider the agreement (45 days in a group layoff). You have 7 days after signing to revoke. The agreement must specifically mention ADEA claims by name. You must be advised in writing to consult an attorney. If your severance agreement doesn't comply with OWBPA requirements and you're over 40, the ADEA waiver may not be enforceable — though the rest of the agreement may still be.`,
      },
      {
        heading: "Non-Disparagement, Confidentiality, and Cooperation Clauses",
        body: `Beyond the release, severance agreements typically include three additional restrictions. A non-disparagement clause prohibits negative public statements about the company, its leadership, or products — potentially forever. A confidentiality clause keeps the agreement terms (especially the payment amount) and the circumstances of your departure private. A cooperation clause requires you to assist with future litigation or regulatory investigations involving the company, potentially requiring your time and involvement long after you've moved on. Whether these clauses are mutual — restricting both you and the company — is worth scrutinizing. A company that won't include mutual non-disparagement may be planning to characterize your departure negatively.`,
      },
      {
        heading: "Non-Compete and Non-Solicitation: Check If They Appear Here",
        body: `Some severance agreements include non-compete or non-solicitation clauses as conditions of receiving payment — separate from any in your original employment contract. By signing, you may be accepting new post-employment restrictions you didn't have before. Courts scrutinize non-competes in severance agreements more carefully than those in employment contracts because the power imbalance at termination is particularly severe. If a non-compete appears in your severance agreement and wasn't in your original contract, it's worth negotiating to remove or narrow it before signing.`,
      },
      {
        heading: "Negotiating a Severance Agreement",
        body: `Severance offers are almost always negotiable. Leverage comes from the value of what you're signing away — the broader your potential legal claims, the more valuable your release is to the employer. Items worth negotiating: total payment amount (one to two weeks per year of service is common but not required); extension of health insurance coverage; continuation of equity vesting; a neutral reference policy; removal or narrowing of non-compete provisions; and additional time to review beyond the minimum. If you experienced discrimination or harassment, the value of your release is higher — consulting an employment attorney before signing can significantly increase your settlement.`,
      },
    ],
    confusingClauses: [
      {
        clause: "General Release of All Claims",
        meaning:
          "By signing, you permanently waive your right to sue for anything arising from your employment — including discrimination, wrongful termination, and wage claims — even claims you don't know about yet. Understand what claims you might have before signing them away.",
      },
      {
        clause: "Known and Unknown Claims",
        meaning:
          "You're waiving rights to claims you haven't discovered yet, in addition to known claims. Some states (including California) require specific acknowledgment language for unknown claims releases. This is a reason to review the agreement with an attorney before signing.",
      },
      {
        clause: "21-Day / 45-Day Consideration Period (ADEA)",
        meaning:
          "If you're 40 or older, federal law gives you at least 21 days to consider the agreement (45 days in a group layoff). You cannot be pressured to sign faster. Signing before the period expires is your choice.",
      },
      {
        clause: "7-Day Revocation Period",
        meaning:
          "Workers over 40 have 7 days after signing to revoke an ADEA waiver. The agreement isn't final until this period expires. Payments typically begin after the revocation period ends, not on the signature date.",
      },
      {
        clause: "Non-Disparagement Clause",
        meaning:
          "You agree not to make negative public statements about the company indefinitely. Check whether this is mutual. A one-sided clause that restricts you but not the company means they can characterize your departure however they wish while you're legally silenced.",
      },
      {
        clause: "Cooperation Clause",
        meaning:
          "You agree to assist with future litigation or investigations even after leaving — potentially indefinitely. Negotiate to limit the scope, require reasonable advance notice, and ensure compensation for significant time commitments.",
      },
    ],
    faqs: [
      {
        question: "Do I have to sign a severance agreement?",
        answer:
          "No. Severance agreements are voluntary. Your employer is offering money in exchange for a legal waiver — you can decline. If you decline, you don't receive the payment (unless your employment contract guarantees severance), but you retain all legal rights including the right to sue. The decision should be based on whether the offered amount is fair compensation for the claims you're releasing.",
      },
      {
        question: "How long do I have to decide whether to sign?",
        answer:
          "If you're 40 or older, federal law gives you at least 21 days (45 days in a group layoff) and 7 days to revoke after signing. If you're under 40, there's no federally mandated period, but a few days to a week is typical. You can always ask for additional review time — a reasonable employer should accommodate a request for 5–7 business days.",
      },
      {
        question: "What claims am I giving up when I sign?",
        answer:
          "Typically all claims from your employment — discrimination, wrongful termination, retaliation, breach of contract, and wage violations through the signing date. Before signing, consider whether you experienced any discrimination, harassment, or wage violations, because you're permanently waiving those claims.",
      },
      {
        question: "Is severance pay taxable?",
        answer:
          "Yes. Severance is treated as ordinary income and is subject to federal and state income tax, Social Security, and Medicare taxes. Employers are required to withhold taxes. If you're also receiving payments attributed to physical injury or attorney's fees from an embedded legal settlement, different tax treatment may apply.",
      },
      {
        question: "Can I collect unemployment if I sign a severance agreement?",
        answer:
          "In most states, yes — severance generally doesn't disqualify you from unemployment benefits, though some states treat certain severance as wages that delay eligibility. A severance agreement cannot require you to waive unemployment rights, which are established by state law and are non-waivable.",
      },
    ],
    howToSteps: [
      "Obtain the full text of the severance agreement — do not sign anything at the termination meeting.",
      "Paste or upload it into PlainDoc on this page.",
      "Select 'Severance Agreement' as the document type.",
      "Click 'Explain My Document'.",
      "Review the release of claims, non-disparagement, confidentiality, and any non-compete provisions.",
      "Consider consulting an employment attorney — many offer free consultations and can increase your settlement.",
      "Use the full consideration period; do not let the employer pressure you to sign faster.",
    ],
    relatedGlossaryTerms: [
      "non-compete-clause",
      "arbitration-clause",
      "termination-clause",
      "indemnity",
      "liquidated-damages",
      "governing-law",
    ],
    relatedDocTypes: ["employment-contract", "nda", "terms-and-conditions"],
  },

  // ─────────────────────────────────────────────────────────────
  // 13. FREELANCE CONTRACT / SERVICE AGREEMENT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "freelance-contract",
    name: "Freelance Contract / Service Agreement",
    emoji: "💻",
    h1: "Explain My Freelance Contract and Service Agreement in Plain English",
    title: "Explain My Freelance Contract | Service Agreement in Plain English – PlainDoc",
    metaDescription:
      "Paste your freelance contract or service agreement and get a plain-language explanation of payment terms, IP ownership, kill fees, revision limits, and liability caps. Free.",
    intro: `Whether you're a freelancer reviewing a client's contract or a business onboarding a contractor, service agreements determine who owns the work, when payment is due, what happens if the project is cancelled, and who's liable if something goes wrong. Too many freelancers sign client contracts without understanding the IP assignment clauses that transfer all creative work to the client indefinitely, or the limitation of liability provisions that cap the contractor's exposure at amounts that don't reflect the risk. PlainDoc's free freelance contract explainer breaks down every clause so you know exactly what you're agreeing to before the project starts.`,
    sections: [
      {
        heading: "Scope of Work: The Foundation of Every Service Agreement",
        body: `The scope of work (SOW) is the most important section of any service agreement — and the most frequently disputed. It defines exactly what services will be delivered, the specifications for each deliverable, the timeline, and what's excluded. Vague scope language is the root cause of most freelance disputes: "design a website" means different things to different people. A well-drafted SOW specifies the exact deliverables (how many pages, what formats, which features), the number of revision rounds included, what constitutes a revision vs. a new request, approval procedures, and what happens when scope changes are requested mid-project. If the SOW in the contract you're reviewing is vague, request specificity before signing — oral understandings won't override the written contract.`,
      },
      {
        heading: "Payment Terms: When You Get Paid and What Happens If You Don't",
        body: `Payment terms should specify the total amount, the payment schedule (deposit, milestone payments, final payment on delivery), the payment method, the invoice cycle (net-15, net-30, net-60), and what happens when a client pays late. Key provisions: late payment interest (many freelance contracts include 1.5–2% monthly on overdue invoices); the right to pause work until payment is received; a kill fee if the client terminates before completion; and a dispute resolution process for contested invoices. From the client's perspective, ensure milestone payments are tied to specific, measurable deliverables — not vague phase completions — so there's no ambiguity about when each payment obligation is triggered.`,
      },
      {
        heading: "Intellectual Property: Who Owns the Work?",
        body: `IP ownership is where freelance contracts get most consequential and most misunderstood. Under U.S. copyright law, creative work is owned by its creator at the moment of creation — unless a written contract says otherwise. Client contracts typically contain one of three arrangements: work for hire (all work is owned by the client from creation), assignment (ownership transfers to the client upon final payment), or license (the freelancer retains ownership but grants the client a right to use the work in specified ways). "Work for hire" clauses are extremely common in client-provided contracts and transfer not just the final deliverable but also any underlying tools or frameworks you developed — which can affect your ability to reuse your own methods on future projects.`,
      },
      {
        heading: "Revision Limits and Change Orders: Protecting Your Time",
        body: `Scope creep — the gradual expansion of project requirements without additional compensation — is one of the most common problems in freelance work. Service agreements should specify the number of revision rounds included in the base price; how additional revisions are priced; the change order process for scope additions (written, signed, separate from the original agreement); and a deadline for client feedback to prevent projects from being indefinitely open without payment. From the client's perspective, clear revision limits protect budget predictability. From the freelancer's perspective, they protect against unlimited rework. Review whether "revision" is defined — some clients interpret one round as unlimited changes within that round.`,
      },
      {
        heading: "Kill Fee and Cancellation: What Happens If the Project Dies",
        body: `A kill fee is the amount the client owes the freelancer if they terminate before completion. Kill fees are typically structured as a percentage of remaining contract value or a flat fee. A common structure: 25% kill fee if cancelled in the first 25% of the project, 50% in the middle, and 100% if deliverables are complete but the client doesn't proceed. Without a kill fee clause, a freelancer who has completed 80% of the work may receive nothing if the client cancels. If you're a freelancer and the contract doesn't include a kill fee, add one — it's a standard provision.`,
      },
      {
        heading: "Limitation of Liability: How Much You Can Be Sued For",
        body: `Limitation of liability clauses cap how much one party can recover from the other if something goes wrong. Client-provided contracts typically cap the contractor's liability at the amount paid under the contract. Watch for asymmetric clauses that cap only the contractor's exposure. Also review: indemnification clauses requiring the freelancer to cover the client's legal costs if a third party sues over the work (e.g., copyright infringement claims); and consequential damages waivers preventing recovery of lost profits even if the breach caused significant financial harm. Understand your maximum financial exposure from both directions before signing.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Work Made for Hire",
        meaning:
          "All work created under this agreement is owned by the client from the moment of creation — including any tools, code, or processes you develop. You have no right to reuse it, display it in your portfolio, or build upon it without the client's permission. Your creative output belongs entirely to the client.",
      },
      {
        clause: "Kill Fee / Cancellation Clause",
        meaning:
          "The amount owed to the contractor if the client cancels before completion. Without this clause, if the client cancels mid-project, the contractor may have no contractual right to compensation for completed work. Always include a kill fee clause if you're the contractor.",
      },
      {
        clause: "Net-30 / Net-60 Payment Terms",
        meaning:
          "Payment is due 30 or 60 days after the invoice date — not on delivery. Net-60 on a $10,000 project means waiting two months after completing the work to be paid. Understand your cash flow implications and negotiate shorter terms if needed.",
      },
      {
        clause: "Portfolio and Attribution Rights",
        meaning:
          "Specifies whether you can display the work in your portfolio or credit yourself publicly. Some clients require confidentiality about the engagement. If public attribution matters to you, confirm the clause permits it before signing.",
      },
      {
        clause: "Indemnification for Third-Party Claims",
        meaning:
          "Requires you to defend and pay the client's legal costs if a third party sues because of your work — for example, a copyright infringement claim in a design you created. This can create liability far exceeding your contract value. Verify whether your professional liability insurance covers this.",
      },
    ],
    faqs: [
      {
        question: "Who owns the work I create as a freelancer?",
        answer:
          "By default under U.S. copyright law, you do — the creator owns the work. But if the contract includes a 'work for hire' or IP assignment clause, ownership transfers to the client. Most client contracts include one of these. Review the IP section carefully. If you want to retain rights to use the work in your portfolio or reuse underlying tools, negotiate specific carve-outs before signing.",
      },
      {
        question: "What is a kill fee and should I require one?",
        answer:
          "A kill fee is compensation paid when a client cancels before project completion. Yes — if you're a freelancer, require one. It protects you from completing significant work and receiving nothing because a client changes direction. A common structure: 25% of remaining value if cancelled early, 50% at midpoint, 100% if deliverables are complete. Kill fees are standard and a reasonable client will accept them.",
      },
      {
        question: "What does 'net-30' mean in a service agreement?",
        answer:
          "Payment is due 30 days after the invoice date. Net-15 means 15 days; net-60 means 60 days. For a $5,000 project on net-60 terms, you wait 60 days after invoicing — potentially 2–3 months after delivery. Short net terms (net-15 or net-30) are preferable. Many freelancers now require a 25–50% deposit upfront to reduce cash flow risk.",
      },
      {
        question: "Can I put the work in my portfolio if I signed a work-for-hire agreement?",
        answer:
          "Only if the contract specifically allows it. Under work for hire, the client owns the work and controls its use. Many clients permit portfolio display; some in sensitive industries prohibit it. Before signing, confirm whether you have portfolio rights. If the contract is silent, ask for explicit written permission.",
      },
      {
        question: "What is the contractor's liability if the project causes the client a financial loss?",
        answer:
          "Typically limited by the limitation of liability clause to the amount paid under the contract. A well-drafted freelance contract caps your liability at the contract value and disclaims consequential damages. Without this cap, a contractor delivering flawed software could theoretically be liable for the client's entire business loss.",
      },
    ],
    howToSteps: [
      "Obtain the full text of the freelance contract or service agreement.",
      "Paste or upload it into PlainDoc on this page.",
      "Select 'Freelance Contract / Service Agreement' as the document type.",
      "Click 'Explain My Document'.",
      "Review the IP ownership clause, payment terms, kill fee provision, and liability cap.",
      "Note any non-solicitation or non-compete provisions that restrict future work.",
      "If you're the freelancer, ensure a kill fee clause exists before the project begins.",
    ],
    relatedGlossaryTerms: [
      "indemnity",
      "termination-clause",
      "arbitration-clause",
      "liquidated-damages",
      "governing-law",
      "liability-waiver",
    ],
    relatedDocTypes: ["employment-contract", "nda", "terms-and-conditions"],
  },

  // ─────────────────────────────────────────────────────────────
  // 14. POWER OF ATTORNEY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "power-of-attorney",
    name: "Power of Attorney",
    emoji: "⚖️",
    h1: "What Is a Power of Attorney? Understand Your POA Document in Plain English",
    title: "What Is Power of Attorney? POA Document Explained in Plain English – PlainDoc",
    metaDescription:
      "Paste your power of attorney and get a plain-language explanation of the agent's powers, limitations, when it takes effect, and how to revoke it. Free POA explainer.",
    intro: `A power of attorney (POA) is one of the most powerful legal documents you can sign — it authorizes another person to make decisions on your behalf, potentially including control over your finances, property, and healthcare. Yet many people sign POAs prepared by family members or downloaded from the internet without fully understanding what authority they're granting, what limitations exist, or how to revoke the document if circumstances change. PlainDoc's free power of attorney explainer breaks down the types of POA, what each clause actually grants, and what safeguards should be in place to prevent abuse.`,
    sections: [
      {
        heading: "The Different Types of Power of Attorney",
        body: `Not all powers of attorney are the same. A general POA grants broad authority over financial and legal decisions but automatically becomes invalid if you become mentally incapacitated — exactly when it's needed most. A durable POA contains specific statutory language making it remain effective even upon incapacity — this is the standard for estate planning. A limited (or special) POA grants authority for a specific transaction or time period. A springing POA only takes effect upon a triggering event, typically incapacitation certified by one or two physicians. A healthcare POA (or healthcare proxy) specifically authorizes medical decisions — often combined with a living will in a document called an advance directive. Knowing which type you're signing determines what authority you're granting and when.`,
      },
      {
        heading: "What an Agent Can (and Cannot) Do",
        body: `The powers granted to your agent depend entirely on what the POA document says. Broad financial POAs typically authorize: managing bank accounts, paying bills, buying and selling real estate, managing investments, filing taxes, operating a business, and making gifts. Key limits to watch for: some POAs explicitly exclude authority to make gifts (especially to the agent themselves), change beneficiary designations on life insurance or retirement accounts, or amend estate planning documents. An agent who makes gifts to themselves without explicit authorization may be committing financial elder abuse — a prosecutable offense. The POA should be explicit about what the agent cannot do, not just what they can.`,
      },
      {
        heading: "Durability: The Most Important Word in Your POA",
        body: `The most critical distinction in any POA is whether it is "durable." A standard non-durable POA terminates automatically if you become incapacitated. A durable POA contains specific language required by state statute stating the document remains effective despite subsequent incapacity. For estate planning, virtually all financial and healthcare POAs should be durable. The durability language is typically a single sentence, but without it, a POA may be useless in a medical crisis because the agent loses authority precisely when it's needed. Many POAs prepared outside of professional legal guidance omit this language — verify it's present.`,
      },
      {
        heading: "When It Takes Effect and How to Revoke It",
        body: `Most financial POAs take effect immediately upon signing — the agent can act from that day forward. A springing POA requires written certification of incapacity from one or more physicians before it activates. Knowing when a POA takes effect matters: an immediately effective POA creates real, exercisable authority from the moment of signing. To revoke a POA, you must be mentally competent and deliver written notice of revocation to the agent and to any institutions relying on it (banks, brokerages, healthcare providers). Simply telling the agent you've changed your mind is not sufficient. Filing a revocation with the county recorder may be required if the POA was used for real estate transactions.`,
      },
      {
        heading: "Safeguards Against Abuse",
        body: `Financial exploitation through abuse of a POA is one of the most common forms of elder financial abuse. Legitimate POAs include safeguards: a requirement for the agent to keep the principal's funds separate from their own; a duty to maintain detailed transaction records; explicit prohibition on self-dealing without specific authorization; co-agent requirements that force two agents to agree before major transactions; and periodic accounting to a third party. A POA that grants unlimited authority with no oversight or accountability requirements creates significant risk. Review the safeguard provisions as carefully as the grant of authority provisions.`,
      },
      {
        heading: "Healthcare POA vs. Living Will",
        body: `A healthcare POA authorizes someone to make medical decisions on your behalf if you're unable to communicate. A living will documents your specific healthcare preferences — what treatments you do or don't want. Both are important and complementary: the healthcare POA names who decides; the living will tells them what you want. Many states have combined advance directive documents covering both. Without a healthcare POA, family members may disagree about your care with no legal authority to resolve it — and medical providers may be unable to act without a court-appointed guardian. Both documents, properly executed under your state's requirements, provide the clearest protection.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Durable Power of Attorney",
        meaning:
          "Contains specific statutory language stating the POA remains effective even if you become incapacitated. Without durability language, the POA terminates exactly when it's needed most. Look for: 'This power of attorney shall not be affected by subsequent disability, incapacity, or incompetence of the principal.'",
      },
      {
        clause: "Springing Power of Attorney",
        meaning:
          "Only takes effect upon a specified event — typically written physician certification of incapacity. This prevents the agent from acting prematurely, but creates practical delays in emergencies. Ensure your agent knows where the document is and how to activate it.",
      },
      {
        clause: "Gift Authority",
        meaning:
          "Explicitly grants or restricts the agent's ability to make gifts, including gifts to themselves. Without clear gift authority, an agent making gifts may be acting outside the POA's scope. An agent making unauthorized gifts to themselves may be committing financial elder abuse.",
      },
      {
        clause: "Co-Agent or Successor Agent",
        meaning:
          "Names a backup agent if the primary agent is unable to serve, or requires two agents to agree on major decisions. Co-agent requirements add oversight; successor agents provide continuity. Consider naming a successor for any POA that may need to be exercised over a long period.",
      },
      {
        clause: "Accounting and Record-Keeping",
        meaning:
          "Requires the agent to maintain detailed records of all transactions made under the POA. This creates accountability essential for tax and estate purposes. A POA without accounting requirements gives the agent no obligation to document how your assets were managed.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a durable and a regular power of attorney?",
        answer:
          "A regular POA terminates if the principal becomes incapacitated. A durable POA remains in effect — this is essential for estate planning and elder care. For any POA intended to cover incapacity scenarios, it must be durable. Look for the specific statutory language confirming durability in your state.",
      },
      {
        question: "Can my agent use my money for themselves?",
        answer:
          "Only if the POA explicitly authorizes it. An agent has a fiduciary duty to act in the principal's best interests. An agent who transfers assets to themselves without authorization may be liable for breach of fiduciary duty and financial elder abuse, both of which are civilly and criminally actionable.",
      },
      {
        question: "How do I revoke a power of attorney?",
        answer:
          "You must be mentally competent to revoke. Deliver written notice to the agent and to any third parties relying on the POA. Verbal revocation alone is not sufficient. If the POA was recorded for real estate, a revocation should also be recorded with the same county recorder. A new POA that expressly revokes all previous POAs also serves as revocation.",
      },
      {
        question: "What happens if I become incapacitated without a POA?",
        answer:
          "A court must appoint a guardian or conservator to manage your affairs — an expensive, slow process that may not result in the person you would have chosen. Family members cannot simply step in without legal authority. A durable financial POA and healthcare POA together avoid court-supervised guardianship in most circumstances.",
      },
      {
        question: "Does a power of attorney expire?",
        answer:
          "A durable POA remains effective until you die, revoke it, or a court invalidates it. A limited POA may specify an expiration date. The agent's authority terminates automatically upon the principal's death — at that point, the estate executor takes over and the POA has no further legal effect.",
      },
    ],
    howToSteps: [
      "Obtain the full text of the power of attorney document.",
      "Paste or upload it into PlainDoc on this page.",
      "Select 'Power of Attorney' as the document type.",
      "Click 'Explain My Document'.",
      "Confirm whether the POA is durable and what it specifically covers.",
      "Review the scope of the agent's authority — especially gift authority and self-dealing provisions.",
      "For significant POAs, have an estate planning attorney confirm proper execution under your state's requirements.",
    ],
    relatedGlossaryTerms: [
      "termination-clause",
      "governing-law",
      "indemnity",
      "force-majeure",
    ],
    relatedDocTypes: ["loan-agreement", "insurance-policy", "rental-agreement"],
  },

  // ─────────────────────────────────────────────────────────────
  // 15. STUDENT LOAN AGREEMENT
  // ─────────────────────────────────────────────────────────────
  {
    slug: "student-loan-agreement",
    name: "Student Loan Agreement",
    emoji: "🎓",
    h1: "Understand My Student Loan Agreement — Promissory Note and Repayment Terms Explained",
    title: "Understand My Student Loan Agreement | Student Loan Terms in Plain English – PlainDoc",
    metaDescription:
      "Paste your student loan promissory note and get a plain-language explanation of interest capitalization, repayment plans, deferment, forbearance, and forgiveness options. Free.",
    intro: `Most students sign their federal student loan promissory note online in minutes, committing to tens of thousands of dollars in debt without reading a word. The terms governing that debt — how interest capitalizes, what repayment options are available, how deferment and forbearance affect your balance, and what happens if you default — have enormous long-term consequences. Whether you have federal loans, private loans, or both, PlainDoc's free student loan explainer breaks down your promissory note in plain English so you can make informed decisions about repayment, forgiveness eligibility, and refinancing.`,
    sections: [
      {
        heading: "Federal vs. Private Student Loans: Fundamentally Different Contracts",
        body: `The distinction between federal and private student loans is the most important thing to understand. Federal loans (Direct Subsidized, Direct Unsubsidized, PLUS, and Grad PLUS) come with statutory rights private loans don't offer: income-driven repayment (IDR) plans that cap payments as a percentage of income, Public Service Loan Forgiveness (PSLF), deferment and forbearance rights, and the ability to consolidate into federal programs. Private student loans are governed by individual lender contracts and generally offer none of these protections — they behave more like personal loans. Before doing anything with student loans — especially refinancing — determine whether you have federal loans, private loans, or both.`,
      },
      {
        heading: "Interest Rates, Subsidies, and How Your Balance Grows",
        body: `Federal loan interest rates are set by Congress each academic year and fixed for the life of the loan. Subsidized loans have a key benefit: the government pays your interest while you're enrolled at least half-time, during the grace period, and during deferment. Unsubsidized loans accrue interest from disbursement — even while you're in school. Private loan rates may be fixed or variable; variable rates can increase significantly over a long repayment period. Interest capitalization is critical: when accrued interest is added to your principal balance (which occurs when you enter repayment, switch plans, or exit deferment), you then pay interest on the new, larger balance — accelerating the total cost of the debt.`,
      },
      {
        heading: "Repayment Plans: Your Options and Trade-offs",
        body: `Federal loans offer multiple plans. The Standard 10-Year Plan has fixed payments and minimizes total interest. Graduated plans start lower and increase every two years. Extended plans stretch payments up to 25 years. Income-Driven Repayment (IDR) plans — including SAVE, PAYE, IBR, and ICR — cap monthly payments at 5–20% of discretionary income and forgive remaining balances after 20–25 years. For borrowers in public service, IDR combined with PSLF results in forgiveness after 10 years of qualifying payments. The trade-off: lower monthly payments often result in negative amortization (balance growing before payments exceed interest), and forgiven balances under IDR may be taxable income (PSLF forgiveness is currently tax-free).`,
      },
      {
        heading: "Deferment and Forbearance: Pausing Payments Without Default",
        body: `Deferment allows temporary payment suspension without penalty — and for subsidized loans, interest doesn't accrue during deferment. Forbearance also pauses payments, but interest continues to accrue on all loans including subsidized ones. After COVID-19 administrative forbearance, many borrowers found their balances had grown significantly from capitalized interest when repayment resumed. Always use deferment over forbearance when you qualify. Both protect your credit and prevent default, but only deferment protects subsidized borrowers from interest growth. For private loans, deferment and forbearance terms are set by the individual lender and are generally far less favorable.`,
      },
      {
        heading: "Default and Its Consequences",
        body: `Federal loan default occurs after 270 days of non-payment. Consequences are severe: the entire outstanding balance becomes immediately due; the default is reported to credit bureaus; the Department of Education can seize federal tax refunds, garnish wages without a court order (up to 15% of disposable income), and offset Social Security benefits. You become ineligible for additional federal financial aid. Private loan default terms vary by lender but typically occur after 90–180 days; private lenders must sue to garnish wages. If you're struggling, contact your servicer before defaulting — IDR plans can reduce federal payments to $0 if income is low enough.`,
      },
      {
        heading: "Loan Forgiveness Programs: What Actually Qualifies",
        body: `PSLF forgives the remaining balance after 120 qualifying monthly payments while working full-time for a qualifying employer (government or nonprofit), under a qualifying IDR plan, on Direct Loans. IDR forgiveness forgives remaining balances after 20–25 years of payments, regardless of employer. Teacher Loan Forgiveness provides up to $17,500 for teachers in low-income schools after 5 years. Private loans are ineligible for all federal forgiveness programs — this is a critical reason not to refinance federal loans into a private loan. Refinancing permanently converts federal loans to private, forfeiting all forgiveness eligibility. That conversion is irreversible.`,
      },
    ],
    confusingClauses: [
      {
        clause: "Interest Capitalization",
        meaning:
          "When unpaid interest is added to your principal, it becomes part of the base amount on which future interest is calculated — compounding your debt. It occurs when you exit deferment, enter repayment, switch plans, or after forbearance ends. A $15,000 interest balance capitalized onto $50,000 creates a $65,000 base for future interest calculation.",
      },
      {
        clause: "Subsidized vs. Unsubsidized",
        meaning:
          "Subsidized: the government pays your interest while enrolled half-time, during grace period, and eligible deferment. Unsubsidized: interest accrues from disbursement — you owe it even while in school. If you don't pay unsubsidized interest while in school, it capitalizes when you enter repayment.",
      },
      {
        clause: "Income-Driven Repayment (IDR)",
        meaning:
          "Caps your monthly payment as a percentage of discretionary income. Payments can be $0 if income is low enough. $0 payments still count toward IDR and PSLF forgiveness timelines. Balances can grow despite payments if they don't cover monthly interest accrual.",
      },
      {
        clause: "PSLF Qualifying Payment",
        meaning:
          "To count toward PSLF, each payment must be: on time, the full required amount, under a qualifying plan (IDR), on a qualifying loan type (Direct Loan), while working full-time for a qualifying employer. Missing any condition means the payment doesn't count. Track annually using the PSLF Employment Certification Form.",
      },
      {
        clause: "Forbearance vs. Deferment",
        meaning:
          "Both pause payments, but during forbearance, interest accrues on all loans — including subsidized — and capitalizes when forbearance ends. During deferment, the government pays interest on subsidized loans. Always request deferment first if you qualify.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between federal and private student loans?",
        answer:
          "Federal loans offer statutory protections: IDR plans, deferment rights, forgiveness programs, and default resolution options. Private loans are contractual products with lender-specific terms and generally none of these protections. Never refinance federal loans into private unless you have stable high income, no interest in forgiveness programs, and a meaningfully lower rate — refinancing is irreversible.",
      },
      {
        question: "What is interest capitalization and how does it affect my balance?",
        answer:
          "Capitalization is when accumulated unpaid interest is added to your principal. Future interest then accrues on the larger balance. It happens when you exit deferment, enter repayment, change plans, or after forbearance ends. To limit capitalization, make interest payments during in-school periods or deferment if your budget allows.",
      },
      {
        question: "Can my student loan payments be $0 per month?",
        answer:
          "Yes, on IDR plans, if your income is at or below a threshold (150–225% of the federal poverty line depending on the plan), your calculated payment is $0. $0 payments count toward IDR and PSLF forgiveness timelines. You must recertify income annually — failure to recertify can cause payments to jump to the full standard amount.",
      },
      {
        question: "What happens if I default on a federal student loan?",
        answer:
          "After 270 days without payment: entire balance due immediately; tax refunds seized; wages garnished up to 15% without a court order; default reported to credit bureaus; ineligibility for additional federal aid. The Fresh Start program and loan rehabilitation can resolve default, but the damage is significant. Contact your servicer before defaulting — IDR plans can prevent it entirely.",
      },
      {
        question: "Should I refinance my student loans?",
        answer:
          "For private loans, refinancing for a lower rate is often smart. For federal loans, refinancing permanently converts them to private and forfeits IDR, PSLF, deferment, and all federal protections. If you're in public service, work for a nonprofit, or anticipate lower income periods, refinancing federal loans is rarely the right choice. Model your projected forgiveness before deciding.",
      },
    ],
    howToSteps: [
      "Obtain your student loan promissory note from your servicer or studentaid.gov.",
      "Paste or upload it into PlainDoc on this page.",
      "Select 'Student Loan Agreement' as the document type.",
      "Click 'Explain My Document'.",
      "Determine whether your loans are federal or private, the interest rate type, and available repayment options.",
      "Check whether you qualify for IDR, PSLF, or other forgiveness programs before considering refinancing.",
      "Log in to studentaid.gov to see all your federal loans and your PSLF qualifying payment count.",
    ],
    relatedGlossaryTerms: [
      "interest-rate-apr",
      "grace-period",
      "prepayment-penalty",
      "late-payment-penalty",
      "auto-renewal-clause",
    ],
    relatedDocTypes: ["loan-agreement", "credit-card-agreement", "employment-contract"],
  },
];

export function getDocumentType(slug: string): DocumentType | undefined {
  return documentTypes.find((dt) => dt.slug === slug);
}

export function getAllDocumentTypeSlugs(): string[] {
  return documentTypes.map((dt) => dt.slug);
}
