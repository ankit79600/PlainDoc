export type DocumentSection = {
  heading: string;
  body: string;
};

export type DocumentFaq = {
  question: string;
  answer: string;
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
  faqs: DocumentFaq[];
  howToSteps: string[];
  relatedGlossaryTerms: string[];
  relatedDocTypes: string[];
};

export const documentTypes: DocumentType[] = [
  {
    slug: "rental-agreement",
    name: "Rental Agreement",
    emoji: "🏠",
    h1: "Explain My Rental Agreement in Plain English",
    title: "Explain My Rental Agreement | Plain Language Lease Explainer – PlainDoc",
    metaDescription:
      "Paste your rental or lease agreement and get a plain-language, clause-by-clause explanation. Understand exactly what you're signing before you move in. Free tool.",
    intro: `Signing a rental agreement is one of the biggest commitments most people make, yet the legal language can feel like it's written to confuse rather than inform. PlainDoc's free rental agreement explainer breaks down every clause — from security deposits and maintenance obligations to early-termination fees and notice periods — so you know exactly what you're agreeing to before you hand over a single dollar.`,
    sections: [
      {
        heading: "What Is a Rental Agreement?",
        body: `A rental agreement (also called a lease) is a legally binding contract between a landlord and a tenant. It defines the rules of your tenancy: how much rent you'll pay, when it's due, how long you'll stay, and what happens if something goes wrong. There are two common types: a fixed-term lease, which locks you in for a set period (usually 6 or 12 months), and a month-to-month rental agreement, which renews automatically each month. Both carry serious legal weight.`,
      },
      {
        heading: "Common Clauses You Should Understand",
        body: `Most rental agreements contain roughly the same set of clauses, even if the wording varies. The rent clause spells out the monthly amount, the due date, and any late fees. The security deposit clause explains how much you must pay upfront, under what conditions the landlord can keep it, and how long they have to return it after you move out. The maintenance and repairs clause defines who is responsible for what — typically the landlord handles structural issues while the tenant handles minor upkeep. The subletting clause tells you whether you're allowed to rent out part of the unit to someone else. The termination and notice clause outlines how much advance notice either party must give to end the lease early. Pay close attention to any automatic renewal language, which can silently extend your lease if you don't act in time.`,
      },
      {
        heading: "Red Flags to Watch For",
        body: `Not every rental agreement is written in good faith. Watch out for clauses that waive the landlord's duty to maintain a habitable property — these are often unenforceable but worth flagging. Be wary of unusually high late fees (many jurisdictions cap these). An extremely broad damage clause that holds you responsible for normal wear and tear should be challenged in writing before you sign. If the agreement forbids you from having guests overnight, check your local tenant-rights laws. And always read the early termination clause carefully: some leases charge two or three months' rent as a penalty for breaking the lease early.`,
      },
      {
        heading: "Why Plain-Language Explanations Matter",
        body: `Research shows that most tenants sign rental agreements without fully reading them. This leads to surprise charges, disputes about security deposit returns, and confusion about maintenance duties. Understanding your lease before signing gives you negotiating power, helps you avoid unpleasant surprises, and protects you legally if a dispute reaches court. PlainDoc's AI-powered explainer translates dense legalese into short, plain-English summaries for every section of your lease, so you can read it in minutes, not hours.`,
      },
      {
        heading: "How to Use PlainDoc to Explain Your Lease",
        body: `Simply paste the text of your rental agreement into the tool above, or upload the PDF your landlord sent you. PlainDoc will identify each major clause, summarize what it means in plain language, flag anything that looks unusual, and explain the practical implications for you as a tenant. The tool processes your document in memory and does not store any content after returning your explanation. Your privacy is protected by design.`,
      },
      {
        heading: "Know Your Tenant Rights",
        body: `After understanding your lease, it helps to know what state or local tenant-protection laws apply to you. Many provisions that seem harsh in a lease are either unenforceable or limited by law. For example, most U.S. states require landlords to return a security deposit within 14–30 days of move-out and provide an itemized list of deductions. Many cities also have rent-control or rent-stabilization ordinances that cap how much a landlord can increase rent. PlainDoc helps you understand what the lease says; knowing your local rights tells you how much of it actually applies.`,
      },
    ],
    faqs: [
      {
        question: "Is a verbal rental agreement legally binding?",
        answer:
          "In most jurisdictions, verbal rental agreements are legally binding for short-term (month-to-month) tenancies, but they're extremely difficult to enforce because there's no written record. A written lease is always safer for both parties.",
      },
      {
        question: "Can a landlord change the terms of my lease mid-tenancy?",
        answer:
          "No. A signed fixed-term lease locks in terms for both parties. A landlord cannot raise rent or change rules mid-lease unless both parties agree in writing. For month-to-month agreements, landlords can usually change terms with proper written notice (typically 30 days).",
      },
      {
        question: "What happens if I break my lease early?",
        answer:
          "The consequences depend on your lease's early termination clause. Typical penalties include forfeiting your security deposit, paying a set number of months' rent as a fee, or remaining liable for rent until the unit is re-rented. Some leases include a legal early-termination option with a defined buyout fee.",
      },
      {
        question: "What is a security deposit, and can the landlord keep it all?",
        answer:
          "A security deposit is money held by the landlord to cover unpaid rent or damages beyond normal wear and tear. The landlord can only keep amounts that correspond to actual documented damages. They must typically return the rest within 14–30 days after you move out, along with an itemized statement.",
      },
    ],
    howToSteps: [
      "Copy the full text of your rental agreement, or upload the PDF file.",
      "Paste or upload it into the PlainDoc tool above.",
      "Select 'Rental Agreement' as the document type (auto-detected if you upload a file).",
      "Click 'Explain My Document' and wait a few seconds.",
      "Review the clause-by-clause plain-language summary.",
      "Note any flagged clauses and ask your landlord to clarify before signing.",
    ],
    relatedGlossaryTerms: [
      "arbitration-clause",
      "indemnity",
      "force-majeure",
      "liquidated-damages",
    ],
    relatedDocTypes: ["employment-contract", "loan-agreement"],
  },
  {
    slug: "medical-bill",
    name: "Medical Bill",
    emoji: "🏥",
    h1: "Explain My Medical Bill in Plain English",
    title: "Explain My Medical Bill | Understand Medical Billing Codes – PlainDoc",
    metaDescription:
      "Confused by your medical bill? Paste it into PlainDoc and get a plain-language explanation of every charge, code, and balance. Free medical bill decoder.",
    intro: `A hospital bill can arrive weeks after treatment and run dozens of pages. Between EOBs (Explanation of Benefits), CPT codes, ICD-10 codes, co-pays, co-insurance, deductibles, and balance billing, it's nearly impossible for most patients to know what they actually owe — or whether the bill is even correct. PlainDoc's free medical bill explainer decodes every line item so you can verify charges, dispute errors, and understand your real financial obligation.`,
    sections: [
      {
        heading: "Why Medical Bills Are So Confusing",
        body: `Medical billing uses two parallel systems simultaneously. Providers bill using CPT codes (Current Procedural Terminology) to describe the services performed, and ICD-10 codes to describe your diagnosis. Insurance companies process these codes against your policy and produce an EOB — a separate document that isn't actually a bill, but looks like one. Then the provider sends a bill for the remaining balance after the insurer pays. The gap between what providers charge (the "chargemaster" rate), what insurance actually pays (the "allowed amount"), and what you owe can be enormous and confusing.`,
      },
      {
        heading: "Understanding an Explanation of Benefits (EOB)",
        body: `Your EOB is not a bill — it's a statement from your insurance company explaining how they processed a claim. It shows the amount billed, the amount the insurer paid, the amount written off (the discount your insurer negotiated with the provider), and the amount you're responsible for. The patient responsibility column is what you should compare to the actual bill from your provider. If the two numbers don't match, you may have been billed incorrectly.`,
      },
      {
        heading: "Common Medical Billing Errors",
        body: `Studies consistently find that the majority of medical bills contain at least one error. Common mistakes include duplicate billing (being charged twice for the same service), upcoding (billing for a more expensive service than was provided), unbundling (billing separately for services that should be bundled together at a lower rate), wrong patient information, services marked as out-of-network when they were in-network, and charges for services not actually performed. Always ask for an itemized bill and compare it to your EOB.`,
      },
      {
        heading: "Deductibles, Co-pays, and Co-insurance Explained",
        body: `These three terms are the source of most patient confusion. A deductible is the amount you pay each year before your insurance starts contributing. A co-pay is a fixed dollar amount you pay per visit (for example, $30 for a primary care visit). Co-insurance is a percentage you pay after meeting your deductible — for example, if your co-insurance is 20%, you pay 20% of the allowed amount and your insurer pays 80%. Your out-of-pocket maximum is the ceiling: once you reach it, the insurer pays 100% for the rest of the year.`,
      },
      {
        heading: "How to Dispute a Medical Bill",
        body: `If you believe a charge is incorrect, you have every right to dispute it. Start by requesting an itemized bill from the provider's billing department. Compare each line item to your EOB. If you find an error, call the billing department with the specific CPT code in question and explain the discrepancy. If the dispute is with how your insurer processed the claim, file an appeal with your insurance company. You typically have 30–180 days to appeal, depending on your plan. Many billing errors are corrected simply by asking.`,
      },
      {
        heading: "Financial Assistance and Negotiation",
        body: `If you can't afford a medical bill, you have more options than most patients realize. Nonprofit hospitals are legally required to offer charity care programs for patients below certain income levels. For-profit hospitals often have financial assistance too — ask to speak with the billing department's financial counselor. Bills are almost always negotiable, especially if you offer to pay a lump sum. Medical billing advocates can also negotiate on your behalf, usually for a percentage of what they save you.`,
      },
    ],
    faqs: [
      {
        question: "What is an EOB and should I wait for it before paying a bill?",
        answer:
          "An Explanation of Benefits (EOB) is a statement from your insurer, not a bill. Always wait for your EOB before paying a medical bill. The EOB shows how your insurer processed the claim and what you actually owe, which may differ from what the provider initially billed.",
      },
      {
        question: "What does 'balance billing' mean?",
        answer:
          "Balance billing is when a provider bills you for the difference between their full charge and what your insurance paid. Out-of-network providers can legally do this in most states, but surprise balance billing for emergency services is now restricted by federal law (the No Surprises Act, effective 2022).",
      },
      {
        question: "Can I negotiate my medical bill?",
        answer:
          "Yes. Providers frequently accept less than the billed amount, especially if you're paying out of pocket or can pay a lump sum. Ask for the 'cash pay' rate, request financial assistance, or offer a settlement. Hospital billing departments have significant discretion to adjust bills.",
      },
      {
        question: "How long do I have to pay a medical bill?",
        answer:
          "There's no universal rule, but most providers give 30–90 days before sending an account to collections. Medical debt typically has a statute of limitations of 3–6 years depending on your state. Unpaid medical debt can affect your credit score, though recent rules have changed how medical debt is reported.",
      },
    ],
    howToSteps: [
      "Gather your medical bill and, if available, your Explanation of Benefits (EOB).",
      "Paste the text of your bill or upload a PDF/image to PlainDoc.",
      "Select 'Medical Bill' as the document type.",
      "Click 'Explain My Document'.",
      "Review the plain-language explanation of each charge and what it means.",
      "Compare the explained charges against your EOB to spot any discrepancies.",
    ],
    relatedGlossaryTerms: ["deductible", "subrogation", "indemnity"],
    relatedDocTypes: ["insurance-policy", "terms-and-conditions"],
  },
  {
    slug: "terms-and-conditions",
    name: "Terms & Conditions",
    emoji: "📋",
    h1: "Explain Terms and Conditions in Plain English",
    title: "Explain Terms and Conditions | T&C Plain Language Summary – PlainDoc",
    metaDescription:
      "Paste any Terms of Service or Terms and Conditions and get a plain-language, clause-by-clause summary. Know what you're agreeing to before you click 'I Agree'. Free.",
    intro: `Nobody reads Terms and Conditions — and companies know it. The average ToS document is 5,000–10,000 words long, written in dense legalese specifically designed to protect the company while burying what you give up. PlainDoc's free T&C explainer summarizes every significant clause so you can understand what data the company collects, how disputes are resolved, what your cancellation rights are, and what you're actually agreeing to before you click "I Agree."`,
    sections: [
      {
        heading: "Why You Should Read Terms and Conditions",
        body: `Terms and Conditions (also called Terms of Service or ToS) form a legally binding contract between you and a service provider the moment you create an account or use the service. They govern what the company can do with your data, how they can change the service without notice, what happens if you want to cancel, and how disputes are resolved. In an age of data breaches and class-action lawsuits, these clauses have real financial and privacy consequences for you.`,
      },
      {
        heading: "The Most Important Clauses in Any ToS",
        body: `Every ToS is different, but most contain several categories of clauses you must understand. The data and privacy clause (often cross-referenced with a separate Privacy Policy) tells you what personal data the service collects, how it's used, and whether it's shared with or sold to third parties. The arbitration clause (or mandatory arbitration provision) typically requires you to give up your right to sue in court and instead resolve disputes through private arbitration — often in a location and with a process that favors the company. The class-action waiver prevents you from joining or bringing a class-action lawsuit. The account termination clause spells out when and how the company can delete your account, often with no notice. The intellectual property clause may claim broad rights to content you create or upload. The limitation of liability clause caps how much the company can owe you if something goes wrong, often to near zero.`,
      },
      {
        heading: "Common Tricks Hidden in Terms and Conditions",
        body: `Companies use several techniques to bury unfavorable terms. They split key information across multiple linked documents (ToS, Privacy Policy, Acceptable Use Policy, Cookie Policy) so you'd have to read tens of thousands of words to get the full picture. They use vague language like "we may share your information with partners" without defining what partners means. They include unilateral modification clauses that allow them to change the ToS at any time with minimal notice — and by continuing to use the service, you automatically agree. Watch for phrases like "at our sole discretion" and "without notice."`,
      },
      {
        heading: "Arbitration Clauses and Class-Action Waivers",
        body: `The arbitration clause is arguably the most consequential clause in any consumer ToS. By agreeing to mandatory arbitration, you waive your right to a jury trial and to court proceedings if you have a dispute with the company. Arbitration is private, faster, and generally less favorable to consumers. Coupled with a class-action waiver, this means that even if thousands of customers are harmed in the same way, each one would have to pursue their individual claim separately — making it economically impractical to pursue small-value claims at all. Some jurisdictions limit the enforceability of these clauses; PlainDoc will flag them clearly.`,
      },
      {
        heading: "Auto-Renewal and Cancellation Terms",
        body: `Subscription services often include auto-renewal clauses that are easy to miss. These provisions automatically charge your payment method at the end of each billing period unless you actively cancel. Look for how much notice you must give before cancellation, whether cancellation takes effect immediately or at the end of the billing period, and whether you're entitled to a refund for unused time. Some ToS documents require cancellations in writing, through a specific channel, by a specific deadline.`,
      },
      {
        heading: "Intellectual Property: Who Owns What You Create?",
        body: `If you upload photos, write reviews, create content, or post any material to a platform, the ToS likely includes an intellectual property license. This clause grants the company the right to use your content. The scope of that license varies enormously — from a narrow license to host and display your content, all the way to a broad, sublicensable, irrevocable worldwide license to use, modify, and monetize your content in any way, forever. PlainDoc highlights exactly what rights you're granting so there are no surprises.`,
      },
    ],
    faqs: [
      {
        question: "Are Terms and Conditions legally enforceable?",
        answer:
          "Generally yes, but not always. Courts have struck down ToS clauses that are unconscionable, that were not clearly presented (hidden in fine print), or that violate consumer protection laws. Arbitration clauses and class-action waivers are increasingly scrutinized. That said, you should treat ToS as fully enforceable unless you know otherwise.",
      },
      {
        question: "Can a company change its ToS without telling me?",
        answer:
          "Most ToS include a unilateral modification clause that lets the company change terms at any time. They're usually required to give notice (email or in-app banner), but if you continue using the service after the change takes effect, you're typically deemed to have accepted the new terms.",
      },
      {
        question: "What is a clickwrap agreement?",
        answer:
          "A clickwrap agreement is formed when you check a box or click 'I Agree' to indicate acceptance. Courts generally enforce clickwrap agreements if the terms were reasonably visible and the user had a meaningful opportunity to review them. Browsewrap agreements (where terms apply just by using the site) are less reliably enforced.",
      },
      {
        question: "Can I negotiate Terms and Conditions with a company?",
        answer:
          "For consumer products, typically no — they're take-it-or-leave-it. For enterprise software and B2B contracts, negotiation is standard. If a company's ToS is a dealbreaker, the real choice is whether to use the service at all.",
      },
    ],
    howToSteps: [
      "Navigate to the Terms of Service or Terms and Conditions page of the service.",
      "Select all the text (Ctrl+A, then Ctrl+C) or use a browser extension to save the page as text.",
      "Paste the text into PlainDoc, or link to the page if supported.",
      "Select 'Terms & Conditions' as the document type.",
      "Click 'Explain My Document' and review the clause-by-clause summary.",
      "Pay special attention to flagged clauses (arbitration, data sharing, auto-renewal).",
    ],
    relatedGlossaryTerms: [
      "arbitration-clause",
      "indemnity",
      "liability-waiver",
      "liquidated-damages",
    ],
    relatedDocTypes: ["privacy-policy", "employment-contract"],
  },
  {
    slug: "employment-contract",
    name: "Employment Contract",
    emoji: "💼",
    h1: "Explain My Employment Contract in Plain English",
    title: "Explain My Employment Contract | Job Offer Letter Explainer – PlainDoc",
    metaDescription:
      "Paste your employment contract or job offer letter and get a plain-language explanation of every clause — compensation, non-compete, IP assignment, and more. Free.",
    intro: `Before you sign an employment contract, you should understand every clause — not just your salary. Non-compete clauses, intellectual property assignment agreements, at-will provisions, and severance terms can have lasting effects on your career long after you leave the job. PlainDoc's free employment contract explainer breaks down what each clause means for you in plain language so you can negotiate from knowledge.`,
    sections: [
      {
        heading: "What Is an Employment Contract?",
        body: `An employment contract is a legally binding agreement between you and your employer that establishes the terms of your employment. It may be a formal multi-page document, or it may be embedded in an offer letter. Either way, it governs your compensation, your duties, your benefits, and — critically — what happens when employment ends. Many employees focus on salary and title and overlook clauses that restrict their future employment opportunities or claim ownership of their work.`,
      },
      {
        heading: "Compensation, Benefits, and Bonus Structure",
        body: `The compensation section should clearly state your base salary, pay frequency, and any bonus or variable compensation. If you have a bonus, look for how it's calculated, when it's paid, and whether you must be employed on the payment date to receive it. Equity (stock options or RSUs) should be defined in a separate equity agreement, but the employment contract may reference vesting schedules. Watch for language that describes bonuses as "discretionary" — this means the company can withhold them without breaching the contract.`,
      },
      {
        heading: "Non-Compete Clauses",
        body: `A non-compete clause restricts you from working for a competitor or starting a competing business for a defined period after leaving. Courts have widely varying attitudes toward non-competes: California effectively bans them; other states enforce them if they're reasonable in scope, geography, and duration. Before signing, understand the geographic scope (local? national? global?), the duration (6 months? 2 years?), the definition of "competitor," and what constitutes a breach. Even if a non-compete is unenforceable in your state, the threat of litigation can chill your job search.`,
      },
      {
        heading: "Intellectual Property Assignment",
        body: `IP assignment clauses are among the most important and most overlooked parts of an employment contract. These clauses typically assign to the employer all inventions, code, writings, and other intellectual property you create during your employment — and sometimes before or after it. Some clauses are extraordinarily broad, claiming ownership of anything you create on your own time, with your own equipment, if it relates to the company's business (which may be defined broadly). Many states limit these clauses for personal projects, but you must specifically protect yourself by carving out pre-existing projects in writing.`,
      },
      {
        heading: "At-Will Employment and Termination",
        body: `Most U.S. employees are employed "at will," meaning either party can end the relationship at any time for any legal reason. The employment contract should make clear whether this is the case or whether you have a fixed-term contract. Look for the notice period required to resign or terminate, any severance provisions (what you'll receive if terminated without cause), and any conditions that constitute "cause" for termination (which typically eliminate severance). If a severance package is important to you, it should be explicitly written into the contract.`,
      },
      {
        heading: "Confidentiality and Non-Solicitation",
        body: `Confidentiality agreements (also called NDAs) require you to keep company information private during and after employment. This is standard and generally enforceable. Non-solicitation clauses prevent you from recruiting colleagues or soliciting customers after you leave. These are separate from non-competes but similarly restrict your post-employment activities. The scope matters: "you cannot contact clients you personally worked with" is much narrower than "you cannot contact anyone on our client list."`,
      },
    ],
    faqs: [
      {
        question: "Can I negotiate an employment contract?",
        answer:
          "Yes, almost always. Salary is obviously negotiable, but so are bonus targets, equity, title, start date, remote-work provisions, non-compete scope, and sometimes even IP carve-outs for personal projects. Most employers expect some negotiation. The key is to know what's standard in your industry and geography.",
      },
      {
        question: "What does 'at-will employment' mean?",
        answer:
          "At-will employment means either party — you or your employer — can end the employment relationship at any time, for any legal reason, without notice (unless a notice period is specified). Most U.S. states are at-will by default. It protects employers from wrongful termination suits in most circumstances, but you also retain the right to leave at any time.",
      },
      {
        question: "Are non-compete agreements enforceable?",
        answer:
          "It depends heavily on your state. California, North Dakota, Minnesota, and Oklahoma effectively ban non-competes. Other states enforce them if they're reasonable in time, geography, and scope. The FTC has proposed a rule broadly banning non-competes, but enforcement is ongoing. Regardless of enforceability, a signed non-compete can still create costly legal threats.",
      },
      {
        question: "What is an IP assignment agreement?",
        answer:
          "An IP assignment agreement transfers ownership of intellectual property you create to your employer. In an employment context, this means inventions, code, designs, and other creative work you produce during (and sometimes outside of) your employment belongs to the company. Some states (including California and Delaware) limit these clauses for work done on your own time without company resources.",
      },
    ],
    howToSteps: [
      "Obtain the full text of your employment contract or offer letter.",
      "Paste or upload it into PlainDoc.",
      "Select 'Employment Contract' as the document type.",
      "Click 'Explain My Document'.",
      "Review the plain-language summary, paying close attention to non-compete, IP, and termination clauses.",
      "Identify any clauses you want to negotiate before your start date.",
    ],
    relatedGlossaryTerms: [
      "arbitration-clause",
      "indemnity",
      "liquidated-damages",
      "right-of-first-refusal",
    ],
    relatedDocTypes: ["terms-and-conditions", "rental-agreement"],
  },
  {
    slug: "loan-agreement",
    name: "Loan Agreement",
    emoji: "💰",
    h1: "Explain My Loan Agreement in Plain English",
    title: "Explain My Loan Agreement | Loan Contract Plain Language – PlainDoc",
    metaDescription:
      "Paste your loan agreement and get a plain-language explanation of interest rates, prepayment penalties, default clauses, and more. Understand your loan before you sign. Free.",
    intro: `A loan agreement is a complex legal document that governs exactly how much you'll pay, when you'll pay it, and what happens if you can't. Whether it's a personal loan, auto loan, small business loan, or mortgage, the fine print can contain prepayment penalties, variable interest triggers, default clauses, and cross-collateralization provisions that can cost you thousands of dollars. PlainDoc's free loan agreement explainer translates the legalese into plain English so you borrow with complete understanding.`,
    sections: [
      {
        heading: "Key Components of Any Loan Agreement",
        body: `Every loan agreement has the same core components, even if the terminology varies. The principal is the amount you're borrowing. The interest rate may be fixed (stays the same throughout the loan) or variable (tied to an index like SOFR or Prime Rate and can change). The APR (Annual Percentage Rate) includes both the interest rate and any fees, giving you the true cost of borrowing. The repayment schedule shows when payments are due, how they're applied (first to interest, then to principal), and the total amount you'll repay over the loan term. The maturity date is when the loan must be fully repaid.`,
      },
      {
        heading: "Interest Rates: Fixed vs. Variable",
        body: `A fixed interest rate stays the same for the life of the loan, giving you predictable payments. A variable rate loan includes a rate that adjusts periodically based on an external benchmark index. The agreement should specify the benchmark index, the adjustment frequency, the margin added to the index, and any rate caps (the maximum the rate can increase per adjustment period and over the life of the loan). Variable rate loans can be advantageous when rates fall, but they create uncertainty and potential payment shock if rates rise sharply.`,
      },
      {
        heading: "Prepayment Penalties and Fees",
        body: `Many loans, particularly mortgages and auto loans, include prepayment penalties — fees charged if you pay off the loan early. These protect the lender's interest income. The penalty may be a flat fee, a percentage of the remaining balance, or a yield-maintenance formula. Some loans have a prepayment penalty only for the first few years. If you're planning to refinance or pay off a loan early, a prepayment penalty can significantly reduce or eliminate the financial benefit. Always read this clause carefully.`,
      },
      {
        heading: "Default and Acceleration Clauses",
        body: `A default occurs when you breach the loan agreement — most commonly by missing payments. An acceleration clause, found in most loan agreements, allows the lender to demand the entire remaining balance immediately upon default. This can turn a missed payment into a demand for tens of thousands of dollars within days. Cross-default clauses go further: they trigger a default on one loan if you default on any other loan with the same lender. The cure period specifies how long you have to fix a default before the lender can take action.`,
      },
      {
        heading: "Collateral and Security Agreements",
        body: `Secured loans require you to pledge collateral — an asset the lender can seize if you default. For mortgages, the collateral is the home. For auto loans, it's the vehicle. For business loans, collateral may be equipment, inventory, or even accounts receivable. The security agreement describes exactly what assets are pledged and under what conditions the lender can claim them. Cross-collateralization clauses connect multiple loans, allowing a lender to apply the collateral from one loan to cover a default on another — even if the individual loan you're reviewing is current.`,
      },
      {
        heading: "Covenants: What You Promise to Do or Avoid",
        body: `Business loan agreements often include covenants — ongoing obligations you must meet throughout the loan term. Affirmative covenants require you to do things: maintain certain financial ratios, provide regular financial statements, keep the collateral insured. Negative covenants restrict what you can do: taking on additional debt, making large capital expenditures, paying dividends, or selling significant assets. Violating a covenant is a default, even if you haven't missed a payment. Consumer loans have fewer covenants, but they may still require you to maintain insurance on collateral or keep it in a certain location.`,
      },
    ],
    faqs: [
      {
        question: "What is the difference between APR and interest rate?",
        answer:
          "The interest rate is the annual cost of borrowing the principal. APR (Annual Percentage Rate) adds in fees and other loan costs and expresses them as an annual rate, giving you a more complete picture of the loan's true cost. For comparing loans, always compare APR, not just the stated interest rate.",
      },
      {
        question: "What happens if I miss a loan payment?",
        answer:
          "A missed payment typically triggers a late fee and starts the default clock. After the cure period (commonly 10–30 days), the lender can begin collection actions, report the delinquency to credit bureaus, and if the loan is accelerated, demand full repayment. For secured loans, the lender may eventually repossess or foreclose on the collateral.",
      },
      {
        question: "Can I pay off a loan early?",
        answer:
          "Yes, unless there's a prepayment prohibition (rare). However, your loan may include a prepayment penalty — a fee for paying off early. Check the prepayment clause before making extra payments or paying off the loan in full. Some loans have simple interest calculations where extra payments directly reduce the principal balance and total interest owed.",
      },
      {
        question: "What is a personal guarantee in a business loan?",
        answer:
          "A personal guarantee is a clause in which a business owner personally agrees to repay the loan if the business cannot. This pierces the corporate veil and makes you personally liable — meaning the lender can come after your personal assets if the business defaults. Almost all SBA loans and many bank business loans require personal guarantees.",
      },
    ],
    howToSteps: [
      "Obtain the full loan agreement document from your lender.",
      "Paste the text or upload the PDF to PlainDoc.",
      "Select 'Loan Agreement' as the document type.",
      "Click 'Explain My Document'.",
      "Review the plain-language explanation, focusing on interest rate type, prepayment penalties, and default clauses.",
      "Calculate the total cost of the loan over its full term before signing.",
    ],
    relatedGlossaryTerms: [
      "grace-period",
      "lien",
      "indemnity",
      "liquidated-damages",
    ],
    relatedDocTypes: ["rental-agreement", "insurance-policy"],
  },
  {
    slug: "insurance-policy",
    name: "Insurance Policy",
    emoji: "🛡️",
    h1: "Explain My Insurance Policy in Plain English",
    title: "Explain My Insurance Policy | Insurance Document Explainer – PlainDoc",
    metaDescription:
      "Paste your insurance policy and get a plain-language explanation of coverage, exclusions, deductibles, and claims process. Understand what you're covered for. Free tool.",
    intro: `Most people only read their insurance policy after a claim is denied — at which point it's too late. Insurance policies are dense, exception-filled documents designed to precisely define what is and is not covered. PlainDoc's free insurance policy explainer walks through your declarations page, coverage sections, exclusions, conditions, and endorsements in plain English so you know exactly what you're protected against and where the gaps are.`,
    sections: [
      {
        heading: "Anatomy of an Insurance Policy",
        body: `Every insurance policy has the same basic structure. The declarations page (the "dec page") is a one- or two-page summary at the front showing your name, policy number, coverage period, coverage amounts, deductibles, and premium. The insuring agreement is the core promise — what the insurer agrees to pay for. The exclusions section lists what is not covered — this is often where claims get denied. The conditions section lists the obligations of both parties: what you must do to keep the policy in force and to file a valid claim. Endorsements (also called riders) are add-ons that modify the base policy, either adding coverage or restricting it.`,
      },
      {
        heading: "Deductibles, Coverage Limits, and Co-insurance",
        body: `Your deductible is the amount you pay before insurance kicks in. Higher deductibles lower your premium but increase your out-of-pocket exposure per claim. Coverage limits are the maximum the insurer will pay per occurrence, per person, or per year. For health insurance, the out-of-pocket maximum is the ceiling on your annual spending — after you reach it, the insurer pays 100%. Co-insurance in property insurance is different from health insurance: it requires you to insure your property for at least a certain percentage of its value; if you're underinsured, the insurer can proportionally reduce your claim payout.`,
      },
      {
        heading: "Reading the Exclusions Section Carefully",
        body: `The exclusions section is where insurance companies limit their risk. Common home insurance exclusions include flood, earthquake, and sewer backup — each requires a separate policy or rider. Life insurance policies often exclude suicide within the first two years, death during illegal activities, or war. Health insurance may exclude experimental treatments, certain specialists without referrals, or out-of-network care. Understanding your exclusions tells you where you're exposed and what additional coverage you might need.`,
      },
      {
        heading: "Claims Process and Duties After a Loss",
        body: `Insurance policies contain specific requirements for how and when you must report a claim. Most require "prompt" or "timely" notice — typically within days to weeks of a covered event. Failing to report promptly can void your claim. You're also usually required to take reasonable steps to prevent further damage, document losses, cooperate with the insurer's investigation, and not make any admissions of liability. The conditions section outlines all of these duties precisely. PlainDoc flags any time-sensitive requirements so you know what to do if something happens.`,
      },
      {
        heading: "Subrogation Rights",
        body: `Subrogation is the insurer's right to pursue a third party that caused an insurance loss. If your car is totaled by someone else's negligence and your insurer pays out your claim, your insurer can then sue the at-fault driver to recover what it paid. This is why you're typically required to cooperate with your insurer and not settle with the at-fault party directly without the insurer's consent — doing so can waive the insurer's subrogation rights and give them grounds to deny your claim.`,
      },
      {
        heading: "Endorsements and Riders That Change Your Coverage",
        body: `Endorsements are modifications to the base policy, attached as separate pages. They're easy to overlook but critical to understand. An endorsement might add flood coverage to a homeowners policy, add a specific piece of jewelry to a renter's policy, or restrict coverage in important ways. Always read every endorsement. If you purchased any riders (such as an accidental death rider on a life insurance policy), verify the conditions under which they pay out, as they often have narrow definitions.`,
      },
    ],
    faqs: [
      {
        question: "What is a deductible and how does it work?",
        answer:
          "A deductible is the amount you pay out of pocket before your insurance pays anything. If your deductible is $1,000 and you have a $3,500 claim, you pay $1,000 and your insurer pays $2,500 (subject to your policy limits). Higher deductibles generally mean lower premiums. Some policies have per-occurrence deductibles; others have annual deductibles.",
      },
      {
        question: "Why was my insurance claim denied?",
        answer:
          "Common reasons for denial include the event falling under an exclusion, failure to give timely notice, the claim being below the deductible, the damage being caused by wear and tear or neglect (not a covered peril), or misrepresentation on the original application. You have the right to appeal a denied claim and request a written explanation.",
      },
      {
        question: "What is the difference between actual cash value and replacement cost?",
        answer:
          "Actual cash value (ACV) pays what your property was worth at the time of loss, accounting for depreciation. Replacement cost value (RCV) pays what it costs to replace the property with a new equivalent item today, without deducting for depreciation. RCV coverage has higher premiums but provides much better protection.",
      },
      {
        question: "Can my insurance company drop me?",
        answer:
          "Yes. Insurers can cancel a policy mid-term for serious reasons (non-payment, fraud, material misrepresentation) and must give notice, typically 10–30 days. At renewal, they can decline to renew for many reasons, including too many claims. Some states have consumer protection rules limiting non-renewal.",
      },
    ],
    howToSteps: [
      "Locate your insurance policy document (usually emailed as a PDF or mailed).",
      "Upload the PDF or paste the text into PlainDoc.",
      "Select 'Insurance Policy' as the document type.",
      "Click 'Explain My Document'.",
      "Review the plain-language summary of your coverage, exclusions, and conditions.",
      "Note any gaps in coverage or exclusions that might leave you exposed.",
    ],
    relatedGlossaryTerms: [
      "deductible",
      "subrogation",
      "indemnity",
      "force-majeure",
    ],
    relatedDocTypes: ["medical-bill", "loan-agreement"],
  },
  {
    slug: "privacy-policy",
    name: "Privacy Policy",
    emoji: "🔒",
    h1: "Explain Any Privacy Policy in Plain English",
    title: "Explain Privacy Policy | Data Collection Plain Language Summary – PlainDoc",
    metaDescription:
      "Paste any Privacy Policy and get a plain-language summary of what data is collected, how it's used, and your rights. Know who has your data. Free privacy policy explainer.",
    intro: `Privacy policies tell you exactly how companies collect, use, share, and protect your personal data — but they're written in legalese so dense that most people click past without reading. Given data breaches, targeted advertising, and data broker markets, this is information you can no longer afford to ignore. PlainDoc's free privacy policy explainer summarizes what data you're handing over, who it's shared with, how long it's kept, and what rights you have to control it.`,
    sections: [
      {
        heading: "What a Privacy Policy Must Tell You",
        body: `Modern privacy laws — including GDPR (in the EU), CCPA (in California), and PIPEDA (in Canada) — require companies to disclose specific information in their privacy policies. These include what categories of personal data are collected, the legal basis for processing that data, how it's used, who it's shared with and why, how long it's retained, whether it's transferred internationally, and what rights you have. Despite these requirements, privacy policies are often written in a way that technically satisfies legal requirements while obscuring the practical reality of how your data is used.`,
      },
      {
        heading: "Categories of Data Companies Collect",
        body: `Companies collect more data than most users realize. Identity data includes your name, email, date of birth, and address. Contact data includes your phone number and mailing address. Transactional data includes purchase history and payment information. Behavioral data includes website browsing patterns, search history within the app, time on page, and click patterns. Location data may be precise GPS coordinates or coarse IP-based location. Device data includes your browser type, OS, screen resolution, and device identifiers. Inferred data includes personality profiles, purchasing propensity scores, and interest categories derived from behavioral data. Communications data includes emails, chat logs, and support tickets. PlainDoc identifies which categories apply to the specific policy you're reviewing.`,
      },
      {
        heading: "Third-Party Data Sharing: The Fine Print",
        body: `The most consequential part of most privacy policies is the data-sharing section. Companies typically share data with three types of parties: service providers (vendors like cloud hosts and analytics platforms who process data on the company's behalf), business partners (other companies the platform integrates with for features or joint marketing), and data brokers or advertisers (companies that pay for access to your data to serve you targeted ads). "We do not sell your data" has a technical definition that many companies exploit — they may "share" data for advertising purposes without technically "selling" it, depending on how the law defines these terms.`,
      },
      {
        heading: "Your Privacy Rights and How to Exercise Them",
        body: `Depending on where you live, you may have significant rights over your personal data. The right to access means you can request a copy of all the data a company holds about you. The right to deletion (or "right to be forgotten") lets you request that a company erase your personal data. The right to correction lets you fix inaccurate data. The right to data portability means you can request your data in a machine-readable format to transfer to another service. The right to opt out of data sales or certain uses is guaranteed under CCPA for California residents. The right to restrict processing means you can limit how your data is used in certain circumstances.`,
      },
      {
        heading: "Cookies, Tracking, and Advertising",
        body: `Most privacy policies include a section on cookies and tracking technologies. These may include session cookies (temporary, deleted when you close your browser), persistent cookies (remain on your device for a set period), third-party cookies (placed by advertising networks to track you across multiple sites), pixels (small images that track email opens), and fingerprinting (building a unique profile of your device to identify you without cookies). After recent legal changes, companies are required to obtain consent for non-essential cookies in many jurisdictions, though many still use dark patterns to make opting out difficult.`,
      },
      {
        heading: "Data Retention: How Long They Keep Your Information",
        body: `Legitimate privacy policies specify how long different categories of data are retained. Account data is often kept until you delete your account plus some period afterward. Transactional data may be kept for years for legal and tax compliance. Log data (technical records of your sessions) may be kept for months. Marketing data may be retained indefinitely unless you opt out. After a retention period, data should be deleted or anonymized. If a policy says data is retained "as long as necessary" without specifics, that's a red flag indicating potentially indefinite retention.`,
      },
    ],
    faqs: [
      {
        question: "Is a privacy policy legally required?",
        answer:
          "Yes, in most jurisdictions. GDPR requires privacy policies for any company that processes EU residents' data. CCPA requires them for companies that serve California residents above certain thresholds. COPPA requires them for sites that collect data from children under 13. Many state laws and app store policies also mandate them.",
      },
      {
        question: "What does 'we do not sell your data' actually mean?",
        answer:
          "It depends on the jurisdiction's definition of 'sell.' Some companies share data with advertising partners in ways that are functionally indistinguishable from selling but don't technically meet the legal definition. Under CCPA, 'selling' has a specific legal meaning; companies may share data for ad targeting without it qualifying as a 'sale' under that definition.",
      },
      {
        question: "How do I request deletion of my data?",
        answer:
          "Under GDPR (for EU residents) and CCPA (for California residents), you can submit a deletion request to the company. The privacy policy should explain how to do this — typically via email, an in-app setting, or a web form. The company must comply within 30 days (GDPR) or 45 days (CCPA) and confirm deletion.",
      },
      {
        question: "Can a company change its privacy policy after I sign up?",
        answer:
          "Yes, but they're usually required to notify you and obtain fresh consent for material changes that affect how your data is used. Some changes — like adding new data collection categories — may require active opt-in consent under GDPR. Others require only notice. After a change, you typically have the right to delete your account and data if you don't accept the new policy.",
      },
    ],
    howToSteps: [
      "Navigate to the Privacy Policy page of the service.",
      "Select all the text and copy it, or note the URL if PlainDoc supports URL input.",
      "Paste the text into PlainDoc.",
      "Select 'Privacy Policy' as the document type.",
      "Click 'Explain My Document'.",
      "Review data collection categories, sharing practices, and your rights at a glance.",
    ],
    relatedGlossaryTerms: [
      "arbitration-clause",
      "indemnity",
      "liability-waiver",
    ],
    relatedDocTypes: ["terms-and-conditions", "employment-contract"],
  },
];

export function getDocumentType(slug: string): DocumentType | undefined {
  return documentTypes.find((dt) => dt.slug === slug);
}

export function getAllDocumentTypeSlugs(): string[] {
  return documentTypes.map((dt) => dt.slug);
}
