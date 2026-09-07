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
];

export function getDocumentType(slug: string): DocumentType | undefined {
  return documentTypes.find((dt) => dt.slug === slug);
}

export function getAllDocumentTypeSlugs(): string[] {
  return documentTypes.map((dt) => dt.slug);
}
