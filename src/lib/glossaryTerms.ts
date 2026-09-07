export type GlossaryTerm = {
  slug: string;
  term: string;
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
  {
    slug: "arbitration-clause",
    term: "Arbitration Clause",
    shortDefinition: "A provision that requires disputes to be settled by a private arbitrator instead of in court.",
    title: "What Is an Arbitration Clause? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'arbitration clause' mean? Plain-language definition with real examples. Learn how arbitration clauses affect your rights in contracts and terms of service.",
    definition:
      "An arbitration clause (also called a mandatory arbitration provision or dispute resolution clause) is a contractual term that requires both parties to resolve any disputes through private arbitration rather than through the court system. Arbitration is a private, out-of-court process in which a neutral third party (an arbitrator, or a panel of arbitrators) hears both sides and issues a binding decision.",
    plainEnglish:
      "This clause means that if you ever have a dispute with the company — they overcharged you, you were harmed by their product, they broke the contract — you can't sue them in regular court. Instead, you have to go through a private arbitration process. Arbitration is faster and cheaper than court, but it's generally less favorable to consumers because arbitrators regularly decide cases involving the same companies and want to keep getting hired. The arbitration decision is usually final and very difficult to appeal.",
    example:
      "Almost every major app and platform has this clause. When you click 'I Agree' to Uber, DoorDash, Airbnb, or most credit card agreements, you're agreeing that any disputes — even about serious harm — must go to arbitration. This is why you rarely see class-action lawsuits succeed against major tech platforms.",
    relatedTerms: ["liability-waiver", "indemnity", "liquidated-damages"],
    relatedDocTypes: ["terms-and-conditions", "employment-contract", "rental-agreement"],
  },
  {
    slug: "deductible",
    term: "Deductible",
    shortDefinition: "The amount you pay out of pocket before your insurance company starts paying.",
    title: "What Is a Deductible? Plain English Insurance Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'deductible' mean in insurance? Simple explanation with examples for health, car, and home insurance. Understand your deductible before filing a claim.",
    definition:
      "A deductible is the amount of money you are required to pay out of your own pocket toward a covered loss or claim before your insurance policy begins to pay. Deductibles are a form of risk-sharing between you and the insurer. They exist to discourage small, frequent claims and to lower the cost of premiums.",
    plainEnglish:
      "Think of the deductible as the threshold you must cross before insurance kicks in. If your health insurance has a $2,000 deductible, you pay the first $2,000 of medical bills each year. After that, your insurance starts contributing. If your car insurance has a $500 deductible and you have a $1,500 accident, you pay $500 and the insurer pays $1,000. Choosing a higher deductible lowers your monthly premium (what you pay for the insurance itself) but means more out-of-pocket cost if something goes wrong.",
    example:
      "Maria has a health insurance plan with a $3,000 deductible. In January, she needs emergency surgery that costs $15,000. She pays the first $3,000 (the deductible), then her insurance pays the remaining $12,000 (subject to co-insurance). If Maria had another health expense in October, her deductible is already met for the year, so insurance starts paying from dollar one.",
    relatedTerms: ["subrogation", "indemnity", "grace-period"],
    relatedDocTypes: ["insurance-policy", "medical-bill"],
  },
  {
    slug: "indemnity",
    term: "Indemnity",
    shortDefinition: "A promise to compensate another party for losses, damages, or legal costs.",
    title: "What Does Indemnity Mean? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'indemnity' mean in a contract? Plain-language explanation with examples. Common in rental agreements, employment contracts, and insurance policies.",
    definition:
      "Indemnity is a contractual obligation in which one party agrees to protect another party from financial loss, legal liability, or other harm arising from specific events or actions. An indemnity clause (also called an indemnification clause or 'hold harmless' clause) defines who is responsible for paying costs if something goes wrong. The party who provides the indemnity is the 'indemnitor'; the party who receives protection is the 'indemnitee.'",
    plainEnglish:
      "An indemnity clause is essentially a promise: 'If things go wrong in this specific way, I'll cover your costs.' It's used to shift financial risk from one party to another. In a rental agreement, a tenant might indemnify the landlord against claims from the tenant's guests — meaning if your friend gets injured in the apartment and sues, you (not the landlord) are responsible for the landlord's legal costs. In employment contracts, companies often ask employees to indemnify them against actions the employee takes outside the scope of their job.",
    example:
      "James signs a commercial lease that includes an indemnification clause saying he'll indemnify the landlord against 'any and all claims arising from James's use of the premises.' One of James's employees slips and falls in the rented office. The employee sues the landlord. Because of the indemnity clause, James (not the landlord) is responsible for the landlord's legal defense costs and any settlement.",
    relatedTerms: ["liability-waiver", "arbitration-clause", "subrogation"],
    relatedDocTypes: ["rental-agreement", "employment-contract", "insurance-policy"],
  },
  {
    slug: "liability-waiver",
    term: "Liability Waiver",
    shortDefinition: "A legal agreement in which you give up your right to sue for injuries or damages.",
    title: "What Is a Liability Waiver? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does a liability waiver or 'hold harmless' agreement actually mean? Simple explanation with examples. Know what rights you're signing away.",
    definition:
      "A liability waiver (also called a release of liability, hold harmless agreement, or exculpatory clause) is a legal document or clause in which one party waives the right to hold another party legally responsible for injuries, losses, or damages. By signing a waiver, you typically give up your right to sue the other party if something goes wrong, even if it was the result of their negligence. The enforceability of waivers varies significantly by jurisdiction and context.",
    plainEnglish:
      "When you sign a liability waiver, you're agreeing not to sue. Gyms, recreational companies, medical offices, and many service providers ask you to sign these before you participate or receive services. The idea is that you accept the known risks of an activity and won't hold the company responsible if you're hurt. However, waivers don't protect companies from gross negligence (extreme carelessness) or intentional harm — those can still be sued over in most jurisdictions. Courts also scrutinize waivers that try to waive rights that public policy considers non-waivable, such as the right to a safe workplace.",
    example:
      "Sarah signs up for a skydiving experience and is handed a multi-page liability waiver before jumping. The waiver states that she releases the company from any claims for injury or death, even due to the company's negligence. If the equipment fails due to poor maintenance and Sarah is injured, she may be legally barred from suing because she signed the waiver — though she might have a claim if she can prove gross negligence.",
    relatedTerms: ["indemnity", "arbitration-clause", "liquidated-damages"],
    relatedDocTypes: ["terms-and-conditions", "rental-agreement", "employment-contract"],
  },
  {
    slug: "force-majeure",
    term: "Force Majeure",
    shortDefinition: "A clause that excuses a party from fulfilling contract obligations due to extraordinary events beyond their control.",
    title: "What Is Force Majeure? Plain English Contract Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'force majeure' mean in a contract? Plain-language explanation with examples. Common in rental agreements, commercial leases, and business contracts.",
    definition:
      "Force majeure (French for 'superior force') is a contract provision that excuses one or both parties from performing their contractual obligations when an extraordinary event — beyond their reasonable control — makes performance impossible or impractical. Common force majeure events include natural disasters (earthquakes, floods, hurricanes), acts of war, government actions, strikes, pandemics, and terrorist attacks. The clause typically specifies what events qualify, how notice must be given, and what happens to the contract during and after the force majeure event.",
    plainEnglish:
      "Force majeure is essentially a 'get out of jail free' card for situations you couldn't have planned for. If a hurricane destroys your rented office and you can't pay rent, a force majeure clause might excuse you from that obligation temporarily. If a pandemic forces business closures and you can't fulfill a commercial lease, force majeure is the clause you'd invoke. Not all force majeure clauses are equal — some are narrow (only 'acts of God') and some are broad. What triggers the clause, how you invoke it, and what it actually excuses all depend on the specific language.",
    example:
      "A wedding venue's commercial lease has a force majeure clause listing 'government mandates' as a trigger. When COVID-19 lockdowns shut down events for six months, the venue invoked force majeure to suspend rent payments during the closure period. The landlord contested whether the clause applied to pandemics, leading to one of the most common categories of litigation in 2020–2021.",
    relatedTerms: ["liquidated-damages", "indemnity", "arbitration-clause"],
    relatedDocTypes: ["rental-agreement", "loan-agreement", "employment-contract"],
  },
  {
    slug: "grace-period",
    term: "Grace Period",
    shortDefinition: "A set amount of time after a deadline during which you can fulfill an obligation without penalty.",
    title: "What Is a Grace Period? Plain English Financial Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'grace period' mean in loans, insurance, and contracts? Simple explanation with examples. Know how much time you have before a penalty or lapse.",
    definition:
      "A grace period is a defined period of time after a payment or performance deadline during which the obligation can still be fulfilled without triggering a penalty, late fee, or default. Grace periods are common in loan agreements (a window after the payment due date before a late fee is charged), insurance policies (a period after a premium due date before the policy lapses), credit card agreements, and some rental agreements.",
    plainEnglish:
      "The grace period is your buffer zone. If your loan payment is due on the 1st and you have a 10-day grace period, you can pay any time between the 1st and the 10th without being charged a late fee or being marked delinquent. After the grace period ends, consequences kick in. For insurance, a lapse after the grace period means your coverage disappears — any claim you file during the lapsed period won't be paid. Always know exactly how long your grace period is and mark it in your calendar.",
    example:
      "Tom's mortgage payment is due on the 1st of each month with a 15-day grace period. He pays on the 12th without any penalty. If he paid on the 17th (after the grace period), he would be charged a late fee (commonly 3–5% of the payment amount) and the delinquency might be reported to the credit bureaus, depending on the loan terms.",
    relatedTerms: ["deductible", "liquidated-damages", "lien"],
    relatedDocTypes: ["loan-agreement", "insurance-policy", "rental-agreement"],
  },
  {
    slug: "lien",
    term: "Lien",
    shortDefinition: "A legal claim on a property or asset as security for a debt or obligation.",
    title: "What Is a Lien? Plain English Property Law Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'lien' mean in a contract or property transaction? Plain-language explanation with examples. Understand liens on homes, vehicles, and business assets.",
    definition:
      "A lien is a legal right or claim that a creditor has over a debtor's property as security for a debt or other obligation. If the debtor doesn't repay the debt, the lienholder can force the sale of the property to recover what's owed. Liens can be voluntary (like a mortgage, which you agree to when you take out a home loan) or involuntary (like a tax lien or mechanic's lien, which can be placed without your consent). A clear title — meaning no liens — is usually required to sell real estate.",
    plainEnglish:
      "A lien is basically a legal sticky note on your property that says 'this asset is promised as collateral for a debt.' The most common lien most people know is a mortgage — the bank lends you money to buy a house and places a lien on it. You can live in and use the house, but you can't sell it or refinance it without satisfying the lien. If you don't pay, the lienholder can foreclose. Other liens can be placed involuntarily: if you don't pay your contractor, they can file a mechanic's lien on your property. Unpaid taxes result in a tax lien.",
    example:
      "David hires a roofing company to replace his roof for $15,000 and fails to pay the final $5,000. The roofing company files a mechanic's lien against his home. When David tries to sell his house six months later, the title company discovers the lien. The sale cannot close until the lien is resolved — meaning David must pay the roofing company (or contest the lien in court) before he can transfer a clean title to the buyer.",
    relatedTerms: ["indemnity", "subrogation", "grace-period"],
    relatedDocTypes: ["loan-agreement", "rental-agreement"],
  },
  {
    slug: "subrogation",
    term: "Subrogation",
    shortDefinition: "An insurer's right to pursue a third party that caused an insurance loss, after paying the insured's claim.",
    title: "What Is Subrogation? Plain English Insurance Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'subrogation' mean in insurance? Simple explanation with examples. Learn how subrogation rights affect your insurance claim and any settlement you receive.",
    definition:
      "Subrogation is the legal process by which an insurance company, after paying a claim to its insured, steps into the shoes of the insured to pursue a third party that may have caused the loss. Essentially, once the insurer pays you, they acquire the right to sue whoever was responsible for the damage to recover their payout. This prevents people from collecting both an insurance payout and a settlement from the at-fault party (a 'double recovery').",
    plainEnglish:
      "Here's the scenario: Someone crashes into your parked car. Your own insurance pays for the repairs, then turns around and goes after the other driver's insurance to get their money back. That's subrogation in action. The practical implication for you: your insurance policy likely requires you to cooperate with the insurer's subrogation efforts and not do anything to impair their right — like signing a settlement with the at-fault party that releases them from liability. If you accept a settlement that waives subrogation rights without your insurer's consent, they may be able to deny your claim or recover money they paid you.",
    example:
      "Lisa's health insurer pays $50,000 for her medical bills after she's injured in a slip-and-fall accident at a store. The store's negligence caused the accident. Lisa's insurer then asserts its subrogation rights — it files a claim against the store's liability insurance to recover the $50,000. If Lisa also receives a personal injury settlement from the store, her insurer typically has a right to be reimbursed from that settlement for the amount it paid on her behalf.",
    relatedTerms: ["indemnity", "deductible", "lien"],
    relatedDocTypes: ["insurance-policy", "medical-bill"],
  },
  {
    slug: "liquidated-damages",
    term: "Liquidated Damages",
    shortDefinition: "A pre-agreed amount specified in a contract as compensation for a specific breach.",
    title: "What Are Liquidated Damages? Plain English Contract Definition – PlainDoc Glossary",
    metaDescription:
      "What do 'liquidated damages' mean in a contract? Plain-language explanation with examples. Common in employment, rental, and construction contracts.",
    definition:
      "Liquidated damages are a predetermined, fixed amount of money that the parties to a contract agree, in advance, shall be paid as compensation if a specific breach occurs. Unlike general damages (which a court determines after a breach), liquidated damages are set in the contract itself. Courts enforce liquidated damages clauses if two conditions are met: (1) actual damages from the breach would be difficult to calculate at the time the contract was signed, and (2) the amount agreed upon is a reasonable estimate of the anticipated harm, not a penalty designed to punish.",
    plainEnglish:
      "Liquidated damages are essentially the parties agreeing upfront: 'If you break the contract in this specific way, you owe this specific amount — no need to argue about how much the damage was.' You'll see them in employment contracts (breaking a non-compete costs $50,000), construction contracts (every day a project is late costs $5,000 per day), and lease agreements (breaking a lease early costs two months' rent). Courts will strike down a liquidated damages clause if the amount is grossly disproportionate to actual harm — at that point, it's considered an unenforceable penalty clause.",
    example:
      "A construction company signs a contract to complete a bridge by June 1st. The contract includes a liquidated damages clause of $10,000 per day of delay, because the city estimated that traffic disruption from delays costs about that much. The company finishes three weeks late. Without needing to prove exact damages, the city deducts $210,000 ($10,000 × 21 days) from the final payment under the liquidated damages clause.",
    relatedTerms: ["force-majeure", "indemnity", "arbitration-clause", "liability-waiver"],
    relatedDocTypes: ["employment-contract", "rental-agreement", "loan-agreement"],
  },
  {
    slug: "right-of-first-refusal",
    term: "Right of First Refusal",
    shortDefinition: "A contractual right to match any offer before the owner accepts it from a third party.",
    title: "What Is Right of First Refusal? Plain English Definition – PlainDoc Glossary",
    metaDescription:
      "What does 'right of first refusal' mean in a contract? Simple plain-language explanation with examples. Common in real estate, business, and employment contracts.",
    definition:
      "A right of first refusal (ROFR) is a contractual right that gives the holder the opportunity to match a third-party offer before the owner is allowed to accept it. It's essentially a priority right to transact — before the owner can sell to someone else, they must first offer the same deal to the holder of the ROFR. If the holder declines or fails to act within the specified time, the owner is free to proceed with the third party. ROFR is common in real estate, shareholder agreements, franchise agreements, and content licensing deals.",
    plainEnglish:
      "Right of first refusal is a 'you have to offer it to me first' clause. If you have a ROFR on a piece of real estate and the owner gets an offer from a buyer, the owner must come to you first and say 'here's the offer I received — do you want to match it?' You have a set window (say 10 days) to decide. If you match it, you get the property. If you pass or don't respond in time, the owner can proceed with the other buyer. It's different from an option to purchase, which is a right to buy at a fixed price regardless of outside offers.",
    example:
      "Priya rents a commercial space and negotiates a right of first refusal clause in her lease. Two years later, her landlord decides to sell the building. The landlord receives an offer of $800,000 from an outside investor. Before accepting, the landlord must notify Priya and give her the opportunity to purchase the property for $800,000 (the same terms). Priya has 14 days to respond. She decides not to buy, so the landlord is now free to proceed with the other buyer.",
    relatedTerms: ["arbitration-clause", "force-majeure", "lien"],
    relatedDocTypes: ["rental-agreement", "employment-contract", "loan-agreement"],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getAllGlossaryTermSlugs(): string[] {
  return glossaryTerms.map((t) => t.slug);
}
