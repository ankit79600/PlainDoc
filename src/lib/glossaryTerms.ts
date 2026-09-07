export type GlossaryCategory = "legal" | "financial" | "medical" | "rental";

export type GlossaryTerm = {
  slug: string;
  term: string;
  category: GlossaryCategory;
  shortDefinition: string;
  title: string;
  metaDescription: string;
  definition: string;
  plainEnglish: string;
  example: string;
  relatedTerms: string[];
  relatedDocTypes: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  // ── LEGAL ──────────────────────────────────────────────────────
  {
    slug: "arbitration-clause",
    term: "Arbitration Clause",
    category: "legal",
    shortDefinition: "A provision that requires disputes to be settled by a private arbitrator instead of in court.",
    title: "What Is an Arbitration Clause? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'arbitration clause' mean? Plain-language definition with real examples. Learn how arbitration clauses affect your rights in contracts and terms of service.",
    definition:
      "An arbitration clause (also called a mandatory arbitration provision or dispute resolution clause) is a contractual term that requires both parties to resolve any disputes through private arbitration rather than through the public court system. Arbitration is a private, out-of-court process in which a neutral third party — an arbitrator, or a panel — hears arguments from both sides and issues a binding decision. By signing a contract with an arbitration clause, you waive your constitutional right to a jury trial for any covered dispute.",
    plainEnglish:
      "This clause means that if you ever have a dispute with the company — they overcharged you, their product harmed you, they violated the contract — you can't take them to regular court. Instead, you must go through a private arbitration process chosen and often administered by organizations the company regularly uses. Arbitration is generally faster than court, but critics argue it's systematically less favorable to individual consumers because arbitrators who repeatedly rule against businesses risk losing future referrals. The arbitration decision is binding and nearly impossible to appeal, even if the arbitrator made a legal error.",
    example:
      "Almost every major app, platform, and financial product uses this clause. When you click 'I Agree' on Uber, DoorDash, Airbnb, or most credit card agreements, you agree that any disputes — including serious harms — must go to arbitration. This is why consumer class-action lawsuits against major platforms are so rare: the class-action waiver paired with arbitration makes them legally impossible for most users to pursue.",
    relatedTerms: ["liability-waiver", "indemnity", "liquidated-damages", "governing-law"],
    relatedDocTypes: ["terms-and-conditions", "employment-contract", "credit-card-agreement", "nda"],
  },
  {
    slug: "indemnity",
    term: "Indemnity",
    category: "legal",
    shortDefinition: "A promise to compensate another party for losses, damages, or legal costs they incur.",
    title: "What Does Indemnity Mean in a Contract? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'indemnity' mean in a contract? Plain-language explanation with real examples. Common in rental agreements, employment contracts, and insurance policies.",
    definition:
      "Indemnity is a contractual obligation in which one party (the indemnitor) agrees to protect another party (the indemnitee) from financial loss, legal liability, or other harm arising from specific events or actions. An indemnification clause defines who is responsible for paying costs if something goes wrong. In practice, indemnity clauses shift financial risk — the party who agrees to indemnify essentially agrees to pick up the other party's tab for covered losses, including legal fees, settlements, and damages.",
    plainEnglish:
      "An indemnity clause is essentially a written promise: 'If things go wrong in this specific way, I'll cover your costs.' It's used to shift financial risk from one party to another. In a rental agreement, a tenant might indemnify the landlord against claims from the tenant's guests — meaning if your friend is injured in your apartment and sues, you (not the landlord) are responsible for the landlord's legal costs. In employment contracts, employers often indemnify employees for actions taken within the scope of their job. In service contracts, vendors often indemnify clients against IP infringement claims. The direction of the indemnity matters enormously.",
    example:
      "James signs a commercial lease that includes an indemnification clause requiring him to indemnify the landlord against 'any and all claims arising from James's use of the premises.' One of James's employees slips on a wet floor in the rented office and sues the landlord for negligence. Because of the indemnity clause, James — not the landlord — is responsible for the landlord's legal defense costs and any settlement paid to the employee. James then has the right to fight his employee's claim directly.",
    relatedTerms: ["liability-waiver", "arbitration-clause", "subrogation", "liquidated-damages"],
    relatedDocTypes: ["rental-agreement", "employment-contract", "insurance-policy", "nda"],
  },
  {
    slug: "liability-waiver",
    term: "Liability Waiver",
    category: "legal",
    shortDefinition: "A legal agreement in which you give up your right to sue for injuries or damages.",
    title: "What Is a Liability Waiver? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does a liability waiver or 'hold harmless' agreement actually mean? Simple explanation with examples. Know what rights you're signing away.",
    definition:
      "A liability waiver (also called a release of liability, hold harmless agreement, or exculpatory clause) is a legal document or contractual clause in which one party waives the right to hold another party legally responsible for injuries, losses, or damages. By signing a waiver, you typically give up your right to sue the other party if something goes wrong, even if it was the result of their ordinary negligence. The enforceability of waivers varies significantly by jurisdiction and context.",
    plainEnglish:
      "When you sign a liability waiver, you're agreeing not to sue. Gyms, recreational activity companies, medical offices, and many service providers use waivers before you participate or receive services. The rationale is that you accept the known risks of the activity and won't hold the company responsible if you're hurt. However, waivers have important limits: they don't protect companies from gross negligence (extreme carelessness) or intentional harm in most jurisdictions. Courts also scrutinize waivers that attempt to waive rights that public policy considers non-waivable, such as workplace safety rights or consumer protection rights.",
    example:
      "Sarah signs a liability waiver before a skydiving experience. The waiver states she releases the company from any claims for injury or death, even due to the company's negligence. Later, improperly maintained equipment fails. Whether Sarah can sue depends on whether the failure constitutes ordinary negligence (potentially waived) or gross negligence (likely not waived, even with a signed waiver). Courts in many states will not enforce waivers for gross negligence regardless of what the document says.",
    relatedTerms: ["indemnity", "arbitration-clause", "liquidated-damages", "governing-law"],
    relatedDocTypes: ["terms-and-conditions", "rental-agreement", "employment-contract"],
  },
  {
    slug: "force-majeure",
    term: "Force Majeure",
    category: "legal",
    shortDefinition: "A clause that excuses a party from fulfilling contract obligations due to extraordinary, unforeseeable events beyond their control.",
    title: "What Is Force Majeure? Plain English Contract Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'force majeure' mean in a contract? Plain-language explanation with examples. Common in rental agreements, commercial leases, and business contracts.",
    definition:
      "Force majeure (French for 'superior force') is a contract provision that excuses one or both parties from performing their contractual obligations when an extraordinary event — beyond their reasonable control — makes performance impossible or commercially impractical. Common force majeure events include natural disasters (earthquakes, floods, hurricanes), acts of war, government actions or regulations, strikes, pandemics, and terrorist attacks. The clause typically specifies what events qualify, how notice must be given to invoke the clause, and what happens to the contract during and after the force majeure event.",
    plainEnglish:
      "Force majeure is essentially a 'get out of your obligations' clause for situations nobody could have planned for. If a hurricane destroys your rented office, a force majeure clause might excuse you from paying rent during the closure. If a pandemic forces government-mandated business closures, force majeure is the clause parties invoke to suspend performance. The catch: not all force majeure clauses are equal. Some are narrow (only literal 'acts of God' — natural disasters). Others are broad (including government actions, market disruptions, or supply chain failures). Whether the clause is triggered, how quickly you must give notice, and what it actually excuses all depend on the exact wording.",
    example:
      "A wedding venue has a commercial lease with a force majeure clause listing 'government-mandated closures' as a trigger event. COVID-19 lockdowns shut down events for months. The venue invokes force majeure to suspend rent payments during the closure. The landlord contests whether a pandemic qualifies under the clause's specific language. This exact scenario generated massive litigation in 2020–2021, with courts reaching different conclusions based on the precise wording of each individual force majeure clause.",
    relatedTerms: ["liquidated-damages", "indemnity", "termination-clause", "governing-law"],
    relatedDocTypes: ["rental-agreement", "loan-agreement", "employment-contract", "nda"],
  },
  {
    slug: "liquidated-damages",
    term: "Liquidated Damages",
    category: "legal",
    shortDefinition: "A pre-agreed amount specified in a contract as compensation for a specific breach, eliminating the need to prove actual losses.",
    title: "What Are Liquidated Damages? Plain English Contract Definition – PlainDoc Glossary",
    metaDescription:
      "What do 'liquidated damages' mean in a contract? Plain-language explanation with examples. Common in employment, rental, and construction contracts.",
    definition:
      "Liquidated damages are a predetermined, fixed amount of money that the parties to a contract agree, in advance, shall be paid as compensation if a specific type of breach occurs. Unlike general damages — which a court determines after evaluating actual losses — liquidated damages are set in the contract itself. Courts enforce liquidated damages clauses when two conditions are met: the actual damages from the breach would be genuinely difficult to calculate at the time the contract was signed, and the pre-agreed amount represents a reasonable estimate of anticipated harm rather than a punitive penalty.",
    plainEnglish:
      "Liquidated damages are a pre-set 'if you break the contract this way, you owe this amount' clause. Both parties agree upfront — before any breach happens — what the consequences will be if a specific thing goes wrong. You'll see them in employment contracts (breaking a non-compete costs $50,000), construction contracts ($5,000 per day of delay), and lease agreements (breaking a lease early costs two months' rent). Courts will throw out a liquidated damages clause if the amount is wildly disproportionate to actual harm — at that point, it's classified as an unenforceable penalty clause rather than a legitimate estimate of damages.",
    example:
      "A city hires a construction company to build a bridge by June 1st. The contract includes a liquidated damages clause of $10,000 per calendar day of delay, because traffic disruption was estimated to cost approximately that amount. The company finishes 21 days late. The city deducts $210,000 from the final payment under the liquidated damages clause — no need to calculate actual traffic losses, because the parties agreed on the formula upfront.",
    relatedTerms: ["force-majeure", "indemnity", "arbitration-clause", "termination-clause"],
    relatedDocTypes: ["employment-contract", "rental-agreement", "loan-agreement", "nda"],
  },
  {
    slug: "termination-clause",
    term: "Termination Clause",
    category: "legal",
    shortDefinition: "The section of a contract defining the conditions under which either party can end the agreement and the consequences of doing so.",
    title: "What Is a Termination Clause? Plain English Contract Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'termination clause' mean in a contract? Plain-language explanation of how contracts end, notice periods, and termination for cause vs. convenience. Free glossary.",
    definition:
      "A termination clause (also called an exit clause or cancellation clause) defines the circumstances under which a contract can be ended before its natural expiration, the process required to terminate, and the consequences of termination. It specifies who may terminate, under what conditions, what notice must be provided, and what rights and obligations survive after the contract ends. Termination clauses address three scenarios: termination for cause (one party breaches), termination for convenience (a party chooses to exit without breach), and automatic termination (the contract ends upon a specified event).",
    plainEnglish:
      "The termination clause answers the question: 'How do I (or they) get out of this contract, and what happens when we do?' Key things to look for: the notice period required (how many days' written notice must be given), whether either party can exit for convenience (no fault) or only for cause (breach), any fees or penalties for early exit, what happens to work already in progress or payments already made, and which clauses survive termination (confidentiality and indemnity usually do). A contract with no clear termination clause — or one that only allows exit for breach — can trap you in an indefinite obligation.",
    example:
      "Maria signs a 12-month SaaS contract with a termination clause saying she can cancel 'at any time with 30 days written notice.' Three months in, she decides the software isn't meeting her needs. She sends written notice on March 1st. The clause means her contract ends on March 31st — she owes one final month of payment, and her data must be exported before the termination date. Without this clause, she might have been locked into paying for the remaining 9 months.",
    relatedTerms: ["force-majeure", "liquidated-damages", "non-compete-clause", "governing-law"],
    relatedDocTypes: ["employment-contract", "rental-agreement", "nda", "terms-and-conditions"],
  },
  {
    slug: "non-compete-clause",
    term: "Non-Compete Clause",
    category: "legal",
    shortDefinition: "A contract provision that restricts you from working for competitors or starting a competing business for a set period after leaving.",
    title: "What Is a Non-Compete Clause? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'non-compete clause' mean? Plain-language explanation with examples. Learn when non-competes are enforceable and what rights you have as an employee.",
    definition:
      "A non-compete clause (also called a restrictive covenant or non-competition agreement) is a contractual provision that restricts one party — typically an employee or contractor — from engaging in business activities that compete with the other party for a defined period, within a defined geographic area, after the contract ends. Non-compete clauses are designed to protect a company's business relationships, trade secrets, and investment in employee training. Their enforceability varies dramatically by jurisdiction: some states ban them outright, others enforce them when 'reasonable' in scope.",
    plainEnglish:
      "A non-compete is a promise not to work for your employer's competitors or start a competing business for a certain amount of time after you leave. If your employment contract has a two-year non-compete in the tech industry within 50 miles, you're agreeing not to work for any tech company in that radius for two years after quitting. Whether this is enforceable depends entirely on your state. California bans non-competes for employees almost entirely. Minnesota, Oklahoma, and North Dakota also effectively ban them. Other states enforce 'reasonable' ones — but reasonableness is litigated constantly. Even in states that don't enforce non-competes, a signed agreement can still generate costly legal threats that make employers hesitant to hire you.",
    example:
      "Daniel works as a senior engineer at a software company in Texas. His employment contract includes a non-compete: he cannot work for any direct competitor within Texas for 18 months after leaving. He's offered a great job at a competing startup. Texas courts do enforce reasonable non-competes, so Daniel must evaluate whether the new employer would defend him against potential litigation, try to negotiate out of the clause before leaving, or wait out the 18-month period. This is a common and costly situation for skilled employees in states that enforce non-competes.",
    relatedTerms: ["termination-clause", "indemnity", "arbitration-clause", "liquidated-damages"],
    relatedDocTypes: ["employment-contract", "nda"],
  },
  {
    slug: "governing-law",
    term: "Governing Law",
    category: "legal",
    shortDefinition: "The clause specifying which state's or country's laws will be used to interpret and enforce the contract.",
    title: "What Is Governing Law in a Contract? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'governing law' mean in a contract? Simple explanation with examples. Understand which state's laws apply to your contract and why it matters.",
    definition:
      "A governing law clause (also called a choice of law clause) specifies which jurisdiction's legal system will apply to the interpretation and enforcement of a contract. It may also specify the exclusive jurisdiction and venue — meaning disputes must be filed in courts in a particular location. Governing law clauses are standard in contracts where the parties are in different states or countries, because different legal systems have significantly different rules for how contracts are interpreted, what remedies are available, and which clauses are enforceable.",
    plainEnglish:
      "The governing law clause answers: 'Whose rules do we play by?' If your employment contract says 'governed by the laws of Delaware,' then Delaware courts apply Delaware contract law to any dispute — even if you work in California. This can matter enormously: a non-compete that's unenforceable in California might be enforced in Delaware. An arbitration clause might have different rules under Delaware law. Consumer protections that exist in your home state may not apply if the governing law is elsewhere. Always check what state's law governs your contract — and look up whether that state's laws are more or less favorable for the specific clause you're concerned about.",
    example:
      "Sofia lives in California and signs a remote work employment contract with a company headquartered in Texas. The governing law clause says: 'This agreement shall be governed by the laws of the State of Texas.' Sofia's employment contract includes a non-compete. Under California law, non-competes for employees are essentially banned. Under Texas law, reasonable non-competes are enforceable. The governing law clause could determine whether Sofia's non-compete is enforceable when she leaves — which is exactly why companies in non-compete-friendly states choose their home state as governing law.",
    relatedTerms: ["arbitration-clause", "termination-clause", "liability-waiver", "non-compete-clause"],
    relatedDocTypes: ["employment-contract", "terms-and-conditions", "nda", "loan-agreement"],
  },
  {
    slug: "right-of-first-refusal",
    term: "Right of First Refusal",
    category: "legal",
    shortDefinition: "A contractual right to match any offer a third party makes before the owner accepts it.",
    title: "What Is Right of First Refusal? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'right of first refusal' mean in a contract? Simple plain-language explanation with examples. Common in real estate, business, and employment contracts.",
    definition:
      "A right of first refusal (ROFR) is a contractual right giving the holder the opportunity to enter into a transaction on the same terms as those offered by a third party, before the owner is allowed to accept the third-party offer. The holder doesn't set the terms — a third party does — but the ROFR holder has the right to step in and match the deal. If the holder declines or doesn't respond within the specified time, the owner is free to proceed with the third party. ROFR is common in real estate, shareholder agreements, franchise agreements, and content licensing deals.",
    plainEnglish:
      "Right of first refusal is a 'you must come to me first' clause. If you have a ROFR on a piece of real estate and the owner receives an offer, the owner must tell you: 'I got an offer for $800,000 — do you want to match it?' You have a set window (say, 14 days) to decide. If you match it, you get the property. If you pass or don't respond in time, the owner can proceed with the original buyer. It's different from an option to purchase (which lets you buy at a predetermined price) — with ROFR, the price is set by the third-party market, not pre-agreed.",
    example:
      "Priya rents a commercial space and negotiates a right of first refusal clause into her lease. Two years later, her landlord decides to sell the building. An outside investor offers $850,000. Before accepting, the landlord must notify Priya and give her 14 days to purchase the building on the same terms. Priya has the opportunity but decides not to buy. The landlord can now proceed with the investor. If the landlord had sold to the investor without notifying Priya first, she could sue for breach of the ROFR clause.",
    relatedTerms: ["arbitration-clause", "force-majeure", "lien"],
    relatedDocTypes: ["rental-agreement", "employment-contract", "loan-agreement"],
  },

  // ── FINANCIAL ─────────────────────────────────────────────────
  {
    slug: "deductible",
    term: "Deductible",
    category: "financial",
    shortDefinition: "The amount you pay out of pocket before your insurance company starts paying.",
    title: "What Is a Deductible? Plain English Insurance Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'deductible' mean in insurance? Simple explanation with examples for health, car, and home insurance. Understand your deductible before filing a claim.",
    definition:
      "A deductible is the amount of money you are required to pay out of your own pocket toward a covered loss or claim before your insurance policy begins to pay. Deductibles are a form of risk-sharing between you and the insurer. They exist to discourage small, frequent claims and to lower the cost of premiums by ensuring the insured shares in the cost of each loss.",
    plainEnglish:
      "Think of the deductible as the threshold you must cross before insurance kicks in. If your health insurance has a $2,000 deductible, you pay the first $2,000 of medical bills each year entirely out of pocket. After that, your insurance starts contributing (typically through co-insurance). If your car insurance has a $500 deductible and you have a $1,500 accident, you pay $500 and your insurer pays $1,000. Choosing a higher deductible lowers your monthly premium, but means more out-of-pocket cost if something goes wrong. The right deductible balances what you can afford as a monthly expense against what you can afford to pay in an emergency.",
    example:
      "Maria has health insurance with a $3,000 annual deductible. In January, she has emergency surgery that costs $15,000. She pays the first $3,000 (her deductible), and her insurance pays the remaining $12,000 (subject to her co-insurance). When Maria has a follow-up procedure in September costing $2,000, her deductible is already met for the year — insurance pays from the first dollar (subject to co-insurance), because she's already spent her $3,000 threshold.",
    relatedTerms: ["copay", "out-of-pocket-maximum", "subrogation", "indemnity"],
    relatedDocTypes: ["insurance-policy", "medical-bill"],
  },
  {
    slug: "subrogation",
    term: "Subrogation",
    category: "financial",
    shortDefinition: "An insurer's right to pursue a third party that caused an insurance loss, after paying the insured's claim.",
    title: "What Is Subrogation? Plain English Insurance Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'subrogation' mean in insurance? Simple explanation with examples. Learn how subrogation rights affect your claim and any settlement you receive from a third party.",
    definition:
      "Subrogation is the legal process by which an insurance company, after paying a claim to its insured, steps into the shoes of the insured to pursue a third party that caused or contributed to the loss. Once the insurer pays the insured's claim, the insurer acquires the legal right to sue the responsible party for reimbursement. Subrogation prevents double recovery — situations where an insured would collect both an insurance payout and a settlement from the at-fault party for the same loss.",
    plainEnglish:
      "Here's how it works: someone crashes into your parked car. Your own insurance pays for the repairs ($8,000). Your insurer then goes after the other driver's insurance company to recover that $8,000. That's subrogation. For you, the main implication is this: if you settle with the at-fault party on your own — accepting their payment and releasing them from liability — you may have waived your insurer's subrogation rights. That can give your insurer grounds to reduce or deny your claim, because you've blocked their ability to recover what they paid. Always notify your insurer before settling any claim involving a third party.",
    example:
      "Lisa's health insurer pays $50,000 for her medical bills after she's injured in a slip-and-fall at a grocery store. The store's negligence caused the accident. Lisa's insurer asserts its subrogation rights and files a claim against the store's liability insurer to recover the $50,000. Later, Lisa also receives a $120,000 personal injury settlement from the store. Under most health plans, Lisa must reimburse her insurer the $50,000 out of that settlement — she can keep the remaining $70,000 for her pain and suffering, lost wages, and other damages not covered by insurance.",
    relatedTerms: ["indemnity", "deductible", "lien"],
    relatedDocTypes: ["insurance-policy", "medical-bill"],
  },
  {
    slug: "grace-period",
    term: "Grace Period",
    category: "financial",
    shortDefinition: "A defined window after a payment deadline during which you can pay without penalty or default.",
    title: "What Is a Grace Period? Plain English Financial Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'grace period' mean in loans, insurance, and contracts? Simple explanation with examples. Know how long you have before a penalty or policy lapse.",
    definition:
      "A grace period is a defined period of time after a payment or performance deadline during which the obligation can still be fulfilled without triggering a penalty, late fee, or default. Grace periods are common in loan agreements (a window after the payment due date before a late fee is charged), insurance policies (a period after a premium is due before the policy lapses), credit card agreements, and some rental agreements. The length and terms of the grace period are specified in the contract — there is no universal standard.",
    plainEnglish:
      "The grace period is your buffer zone. If your loan payment is due on the 1st and you have a 10-day grace period, you can pay any time between the 1st and the 10th without being charged a late fee or being reported as delinquent. After the grace period ends, consequences kick in. For insurance, a lapse after the grace period means your coverage disappears — any claim you file during the lapsed period won't be paid. The grace period is not the same as a deferment or forbearance, which are separate agreements to postpone payments entirely.",
    example:
      "Tom's mortgage payment is due on the 1st of each month with a 15-day grace period. He pays on the 12th without any penalty or negative credit reporting. If he had paid on the 17th (two days after the grace period ended), he would be charged a late fee (typically 3–5% of the payment) and the delinquency could be reported to credit bureaus — potentially damaging his credit score for years.",
    relatedTerms: ["late-payment-penalty", "prepayment-penalty", "lien"],
    relatedDocTypes: ["loan-agreement", "insurance-policy", "rental-agreement", "credit-card-agreement"],
  },
  {
    slug: "lien",
    term: "Lien",
    category: "financial",
    shortDefinition: "A legal claim on a property or asset as security for a debt, preventing the owner from transferring clear title until the debt is paid.",
    title: "What Is a Lien? Plain English Property and Finance Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'lien' mean in a contract or property transaction? Plain-language explanation with examples. Understand liens on homes, vehicles, and business assets.",
    definition:
      "A lien is a legal right or claim that a creditor holds over a debtor's property as security for a debt or obligation. If the debtor fails to repay the debt, the lienholder can force the sale of the property to recover what's owed. Liens can be voluntary — like a mortgage, which you agree to when borrowing to buy a home — or involuntary, such as a tax lien placed by the government for unpaid taxes or a mechanic's lien filed by a contractor who wasn't paid. A property with an outstanding lien cannot be sold or refinanced until the lien is satisfied or released.",
    plainEnglish:
      "A lien is a legal sticky note on your property that says 'this asset is promised as collateral for a debt.' The most common lien most people encounter is a mortgage — the bank lends you money to buy a house and places a lien on the title. You can live in and use the house freely, but you can't sell it without satisfying the mortgage and getting the lien released. If you stop paying, the lienholder can foreclose. Other liens can be placed without your agreement: if you don't pay your contractor, they can file a mechanic's lien. Unpaid federal or state taxes result in a tax lien. An IRS lien attaches to everything you own and severely limits your financial options until resolved.",
    example:
      "David hires a roofing company for $15,000 and pays only $10,000, leaving $5,000 unpaid. The roofing company files a mechanic's lien on his home. Six months later, David tries to sell. The title company discovers the lien — the sale cannot close with a lien outstanding. David must either pay the roofing company the $5,000 (releasing the lien) or dispute it in court before the property can be transferred. The lien effectively blocks the sale until the debt is resolved.",
    relatedTerms: ["indemnity", "subrogation", "grace-period", "prepayment-penalty"],
    relatedDocTypes: ["loan-agreement", "rental-agreement", "car-loan-emi"],
  },
  {
    slug: "interest-rate-apr",
    term: "Interest Rate / APR",
    category: "financial",
    shortDefinition: "The interest rate is the annual cost of borrowing money; APR (Annual Percentage Rate) is the total yearly cost including fees.",
    title: "What Is APR vs. Interest Rate? Plain English Financial Definition – PlainDoc Glossary",
    metaDescription:
      "What is the difference between an interest rate and APR? Plain-language explanation with examples. Use APR to compare the true cost of loans and credit cards.",
    definition:
      "The interest rate is the annual percentage of the principal that a lender charges for the use of borrowed money, expressed as a percentage of the outstanding balance. The Annual Percentage Rate (APR) is a broader measure that includes the interest rate plus other loan costs — origination fees, points, broker fees, mortgage insurance, and other charges — expressed as a single annual percentage. APR enables apples-to-apples comparison between loan offers that may have different fee structures. By law (Truth in Lending Act in the U.S.), lenders must disclose APR alongside the interest rate on consumer loan offers.",
    plainEnglish:
      "The interest rate tells you what it costs to borrow the money itself. The APR tells you what the loan actually costs in total, per year, after you account for all the fees associated with getting it. A loan with a 6% interest rate and $3,000 in origination fees on a $100,000 loan might have an APR of 6.4% — the APR reflects the true cost after the fees are factored in. When comparing loan offers, always compare APRs, not just interest rates. A loan with a lower interest rate but high origination fees may be more expensive than a loan with a slightly higher rate but lower fees — the APR reveals this.",
    example:
      "Lisa is comparing two personal loan offers: Lender A offers 8% interest rate with a $500 origination fee on a $10,000 loan. Lender B offers 8.5% interest rate with no fees. Lender A's APR (after factoring in the $500 fee) works out to about 9.1%. Lender B's APR is 8.5% (no fees to add). Despite Lender A's lower stated interest rate, Lender B is actually the cheaper loan — something only visible when comparing APRs.",
    relatedTerms: ["prepayment-penalty", "grace-period", "late-payment-penalty"],
    relatedDocTypes: ["loan-agreement", "credit-card-agreement", "car-loan-emi"],
  },
  {
    slug: "late-payment-penalty",
    term: "Late Payment Penalty",
    category: "financial",
    shortDefinition: "A fee charged when you don't make a required payment by the due date or end of the grace period.",
    title: "What Is a Late Payment Penalty? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What is a late payment penalty? Simple plain-language explanation with examples. Know how late fees work in loans, leases, and credit cards before you sign.",
    definition:
      "A late payment penalty (also called a late fee or default interest) is a contractual charge triggered when a required payment is not made by the agreed deadline — or, in contracts with a grace period, by the end of that grace period. Late payment penalties can take several forms: a flat fee per late payment, a percentage of the amount due, an increase in the applicable interest rate (a penalty rate or default rate), or any combination of these. Consumer protection laws in many jurisdictions cap late fees for specific types of contracts, particularly credit cards, mortgages, and residential leases.",
    plainEnglish:
      "A late payment penalty is exactly what it sounds like: you pay extra when you pay late. How much extra — and when the clock starts — depends on your specific contract and your jurisdiction. For credit cards, the CARD Act caps late fees at around $30–$41. For mortgages, a typical late fee is 3–5% of the missed payment. For leases, late fees must often comply with state caps (some states limit them to 5–10% of monthly rent). The serious risk in loan agreements is not just the flat late fee, but the penalty interest rate — some agreements raise your interest rate on all balances when you miss a payment, significantly increasing your total cost of borrowing.",
    example:
      "Kevin has a personal loan with a $1,200 monthly payment due on the 15th and a 10-day grace period. He pays on the 27th — 12 days after the due date, two days past the grace period. His loan agreement specifies a late fee of 5% of the monthly payment, so he's charged $60 in addition to his regular payment. On his credit card, a payment due on March 20th that he pays on March 22nd triggers a late fee of $29 (within the CARD Act limit) and the risk of triggering the penalty APR of 29.99%.",
    relatedTerms: ["grace-period", "prepayment-penalty", "interest-rate-apr"],
    relatedDocTypes: ["loan-agreement", "credit-card-agreement", "rental-agreement", "car-loan-emi"],
  },
  {
    slug: "prepayment-penalty",
    term: "Prepayment Penalty",
    category: "financial",
    shortDefinition: "A fee charged by a lender when you pay off a loan earlier than the agreed repayment schedule.",
    title: "What Is a Prepayment Penalty? Plain English Loan Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'prepayment penalty' mean? Simple explanation with examples. Know whether your loan charges you for paying off early — and how to calculate if it's worth it.",
    definition:
      "A prepayment penalty is a fee charged by a lender when a borrower repays a loan before the scheduled maturity date or pays off more than a specified portion of the principal in a given period. Prepayment penalties are designed to compensate lenders for the loss of expected interest income that results from early repayment. They are most common in mortgages, auto loans, and some personal and business loans. The penalty may be structured as a flat fee, a percentage of the remaining balance, a declining fee (higher in early years, phasing out), or a yield-maintenance formula calculating the present value of lost future interest.",
    plainEnglish:
      "A prepayment penalty means the lender charges you money for paying them back ahead of schedule. Lenders profit from the interest you pay over the loan term — if you pay early, they lose that income. The penalty compensates for that loss. Before paying off a loan early or refinancing (which effectively pays off the original loan), check your agreement for a prepayment clause. If the penalty exceeds your projected interest savings, early payoff is financially harmful. Many consumer loans — especially after recent regulatory changes — have no prepayment penalty. Federal rules limit prepayment penalties on most residential mortgages to the first three years.",
    example:
      "Emma has a 5-year personal loan with a prepayment penalty of 2% of the remaining balance. After 2 years, she has $15,000 remaining and wants to pay it off to save on interest. The prepayment penalty is $300 (2% × $15,000). She calculates that paying off the loan now saves $1,400 in future interest. The savings ($1,400) exceed the penalty ($300), so paying off early still makes financial sense. If the penalty had been 10% ($1,500), paying early would have cost her more than she saved.",
    relatedTerms: ["grace-period", "late-payment-penalty", "interest-rate-apr", "lien"],
    relatedDocTypes: ["loan-agreement", "car-loan-emi"],
  },
  {
    slug: "auto-renewal-clause",
    term: "Auto-Renewal Clause",
    category: "financial",
    shortDefinition: "A provision that automatically extends a contract or subscription for another term unless you actively cancel before the deadline.",
    title: "What Is an Auto-Renewal Clause? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'auto-renewal clause' mean in a contract or subscription? Plain-language explanation with examples. Know the cancellation deadline before you're charged again.",
    definition:
      "An auto-renewal clause (also called an automatic renewal clause or evergreen clause) is a contractual provision that automatically extends the contract for an additional term — usually the same length as the original term — at the end of each contract period, unless one or both parties give written notice of non-renewal before a specified deadline. Auto-renewal clauses are common in subscription software agreements, gym memberships, service contracts, magazine subscriptions, leases, and insurance policies. The FTC and several state regulators have increased enforcement against auto-renewal clauses that make cancellation unnecessarily difficult.",
    plainEnglish:
      "An auto-renewal clause means your contract keeps going — and keeps charging you — automatically at the end of each period, until you actively stop it. The danger is the cancellation deadline: you must give notice by a specific date before the renewal kicks in, not just at the renewal date. Some contracts require 30–90 days' advance notice. Miss that window and you're locked in for another full term and billed accordingly. Many people discover auto-renewal clauses only after they're charged for another year of service they meant to cancel. Look for the cancellation deadline when you sign any subscription or service contract — calendar it immediately.",
    example:
      "James signs a 12-month software-as-a-service contract at $500/month. The auto-renewal clause requires 60 days' written notice before the contract end date to prevent renewal. The contract ends on December 31st. If James doesn't send written cancellation notice by November 1st (60 days before December 31st), the contract automatically renews for another 12 months — committing him to $6,000 more in fees. He forgets, the contract renews in January, and he's legally obligated to pay for the full new year.",
    relatedTerms: ["termination-clause", "governing-law", "liquidated-damages"],
    relatedDocTypes: ["terms-and-conditions", "credit-card-agreement", "insurance-policy"],
  },

  // ── MEDICAL ──────────────────────────────────────────────────
  {
    slug: "copay",
    term: "Co-pay (Copayment)",
    category: "medical",
    shortDefinition: "A fixed dollar amount you pay for a covered healthcare service at the time of the visit, separate from your deductible.",
    title: "What Is a Co-pay (Copayment)? Plain English Health Insurance Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'co-pay' or 'copayment' mean in health insurance? Plain-language explanation with examples. Understand how co-pays work and when you have to pay them.",
    definition:
      "A copayment (commonly called a co-pay) is a fixed, predetermined dollar amount that an insured person pays for a covered healthcare service at the time the service is received — regardless of the total cost of the service. Co-pays are separate from and in addition to your deductible and co-insurance. They're commonly used for primary care visits, specialist appointments, urgent care, emergency room visits, mental health visits, and prescription drugs. The specific co-pay amounts are specified in your insurance plan's Summary of Benefits and Coverage (SBC).",
    plainEnglish:
      "A co-pay is the flat fee you pay at the doctor's office. If your insurance has a $30 co-pay for primary care visits, you pay $30 every time you see your primary care doctor — regardless of what the doctor actually charges. Your insurance pays the rest (after any deductible, if applicable). Co-pays for specialist visits are usually higher than for primary care; emergency room co-pays are usually the highest. Importantly, co-pays don't always count toward your deductible — check whether your plan has 'deductible-first' requirements for certain services, which means you pay the full allowed amount for that service until your deductible is met, with the co-pay applying only after.",
    example:
      "Tom's health insurance plan has these co-pays: $25 for primary care, $50 for specialist visits, $100 for urgent care, and $350 for emergency room. When he visits his primary care doctor for a cold, he pays $25 at the front desk — that's his co-pay. When he's referred to a cardiologist, he pays $50 at that visit. These co-pays are fixed and predictable regardless of how much the visit actually costs the doctor to perform.",
    relatedTerms: ["deductible", "out-of-pocket-maximum", "subrogation"],
    relatedDocTypes: ["insurance-policy", "medical-bill"],
  },
  {
    slug: "out-of-pocket-maximum",
    term: "Out-of-Pocket Maximum",
    category: "medical",
    shortDefinition: "The most you'll pay for covered healthcare in a plan year; after reaching it, your insurer pays 100% of covered costs.",
    title: "What Is Out-of-Pocket Maximum? Plain English Health Insurance Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'out-of-pocket maximum' mean in health insurance? Simple explanation with examples. Know your annual spending cap before you need expensive care.",
    definition:
      "The out-of-pocket maximum (also called the out-of-pocket limit) is the highest amount you will be required to pay for covered healthcare services in a single plan year. Once you've paid this amount — through a combination of your deductible, co-pays, and co-insurance — your health insurance plan pays 100% of all covered services for the remainder of the year. The ACA (Affordable Care Act) sets annual limits on out-of-pocket maximums for qualifying health plans. For 2024, the federal limits are $9,450 for individual coverage and $18,900 for family coverage.",
    plainEnglish:
      "Your out-of-pocket maximum is the worst-case annual cost cap on your healthcare spending. No matter how much medical care you need in a year, once you've paid your out-of-pocket maximum in covered costs, insurance covers everything else at 100% for the rest of that year. This protects you from catastrophic medical bills. The key is understanding what counts toward the maximum: your deductible, co-pays, and co-insurance for covered in-network services usually count. Premiums, out-of-network costs, and non-covered services typically don't count — meaning you might spend more than the out-of-pocket maximum in a year of serious illness.",
    example:
      "Andrea has health insurance with a $2,000 deductible and a $7,000 out-of-pocket maximum. She's diagnosed with a condition requiring $80,000 in treatment. She pays the first $2,000 (her deductible). After that, she pays 20% co-insurance. At some point in the year, her cumulative payments — deductible plus co-insurance — reach $7,000 (her out-of-pocket max). From that point forward, every covered medical expense for the rest of the year is paid at 100% by insurance. Without the out-of-pocket maximum, 20% co-insurance on an $80,000 bill would have been $16,000 — far more than the $7,000 cap.",
    relatedTerms: ["deductible", "copay", "subrogation"],
    relatedDocTypes: ["insurance-policy", "medical-bill"],
  },

  // ── RENTAL ──────────────────────────────────────────────────
  {
    slug: "security-deposit",
    term: "Security Deposit",
    category: "rental",
    shortDefinition: "Money paid to a landlord before moving in, held as protection against unpaid rent or damage beyond normal wear and tear.",
    title: "What Is a Security Deposit? Plain English Rental Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'security deposit' mean in a lease? Plain-language explanation with examples. Know your rights and what landlords can and cannot deduct from your deposit.",
    definition:
      "A security deposit is a sum of money paid by a tenant to a landlord at the start of a tenancy, held by the landlord as financial protection against unpaid rent, damage to the property beyond normal wear and tear, or other lease violations. At the end of the tenancy, the landlord must return the security deposit within a legally defined period (usually 14–30 days, varying by state), minus any documented, legitimate deductions. Many states require the deposit to be held in a separate escrow account and prohibit landlords from using it during the tenancy.",
    plainEnglish:
      "A security deposit is money you give your landlord when you move in, held 'just in case' something goes wrong — you damage the apartment, miss rent, or violate the lease. The deposit is yours: the landlord holds it temporarily, not as income. When you move out, they must return it minus any legitimate deductions. What's legitimate: actual damage you caused (beyond normal wear and tear). What's not legitimate: routine cleaning, carpet replacement from normal use, paint touch-ups from ordinary scuffs. Many landlords abuse security deposits — knowing your state's rules (how long they have to return it, what they can deduct, what's required in the itemized statement) is essential to getting your money back.",
    example:
      "Lisa pays a $2,400 security deposit when she rents an apartment. When she moves out after 18 months, the landlord deducts $400 for a broken window she caused and $150 for a large stain on the carpet. The deductions are legitimate. The landlord must return the remaining $1,850 within the state-mandated period (in California, 21 days). If the landlord misses the deadline or makes deductions for normal wear and tear (like minor scuffs on walls), Lisa may be entitled to the full deposit plus additional damages under state law.",
    relatedTerms: ["lien", "indemnity", "late-payment-penalty", "termination-clause"],
    relatedDocTypes: ["rental-agreement"],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getAllGlossaryTermSlugs(): string[] {
  return glossaryTerms.map((t) => t.slug);
}

export function getTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export const CATEGORY_LABELS: Record<GlossaryCategory, { label: string; description: string; emoji: string }> = {
  legal: {
    label: "Legal Terms",
    description: "Contract clauses, rights, and legal mechanisms that appear in most agreements",
    emoji: "⚖️",
  },
  financial: {
    label: "Financial Terms",
    description: "Rates, fees, penalties, and financial mechanisms in loans, insurance, and credit",
    emoji: "💰",
  },
  medical: {
    label: "Medical & Insurance Terms",
    description: "Health insurance and medical billing terminology",
    emoji: "🏥",
  },
  rental: {
    label: "Rental & Property Terms",
    description: "Terms specific to leases, rental agreements, and property transactions",
    emoji: "🏠",
  },
};
