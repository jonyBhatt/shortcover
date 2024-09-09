import { ScrollArea } from "../ui/scroll-area";

export const AcceptanceCriteria = () => {
  return (
    <div className="flex justify-center items-center">
      <ScrollArea className="h-[400px] w-full rounded-md border p-4 flex justify-center items-center pb-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Allianz Car Insurance Policy Terms and Conditions
          </h2>
          <p>
            Welcome to <strong>Shorcover</strong>. By purchasing and holding an
            insurance policy with us, you agree to the following terms and
            conditions. These terms outline the obligations, rights, and
            responsibilities of both the policyholder and the insurance company.
            Please read them carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Policyholder:</strong> The person who owns the insurance
              policy.
            </li>
            <li>
              <strong>Insured Vehicle:</strong> The vehicle specified in the
              insurance policy.
            </li>
            <li>
              <strong>Premium:</strong> The amount paid by the policyholder to
              maintain the insurance coverage.
            </li>
            <li>
              <strong>Claim:</strong> A request made by the policyholder to the
              insurance company for coverage or compensation under the terms of
              the policy.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Coverage</h2>
          <p>The policy includes the following coverage options:</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Comprehensive Coverage:</strong> Covers damages to the
              insured vehicle, theft, fire, and damage caused by third parties,
              as well as personal injuries resulting from an accident.
            </li>
            <li>
              <strong>Third-Party Liability:</strong> Covers legal liability for
              injury to others and damage to third-party property caused by the
              insured vehicle.
            </li>
            <li>
              <strong>Collision Coverage:</strong> Covers damages to the insured
              vehicle resulting from a collision with another vehicle or object.
            </li>
            <li>
              <strong>Personal Injury Protection (PIP):</strong> Covers medical
              expenses and lost wages for the policyholder and passengers in the
              insured vehicle.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Exclusions</h2>
          <p>The insurance policy does not cover:</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Damages caused by intentional acts or illegal activities.</li>
            <li>Normal wear and tear, mechanical or electrical breakdowns.</li>
            <li>
              Driving under the influence of alcohol, drugs, or any illegal
              substances.
            </li>
            <li>
              Using the insured vehicle for commercial purposes unless specified
              in the policy.
            </li>
            <li>
              Any modifications made to the vehicle that were not declared at
              the time of policy issuance.
            </li>
            <li>War, terrorism, or nuclear risks.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. Premiums and Payments
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              The policyholder agrees to pay the premium in full or in
              agreed-upon installments by the due date specified in the policy.
            </li>
            <li>
              Failure to pay premiums on time may result in the suspension or
              cancellation of the insurance policy.
            </li>
            <li>
              Any changes in the policy that result in a premium adjustment will
              be communicated to the policyholder, and the policyholder agrees
              to pay the adjusted premium.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            6. Policy Renewal and Cancellation
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              The policy will automatically renew unless canceled by either the
              policyholder or the insurance company.
            </li>
            <li>
              The policyholder may cancel the policy at any time by providing
              written notice. The refund of premiums, if applicable, will be
              based on the policy’s terms.
            </li>
            <li>
              The insurance company reserves the right to cancel the policy with
              prior notice for reasons such as non-payment of premiums,
              misrepresentation, or fraud.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Claims Procedure</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              In the event of an accident or loss, the policyholder must notify
              the insurance company as soon as possible.
            </li>
            <li>
              The policyholder must provide all necessary documentation,
              including a completed claim form, police report (if applicable),
              and proof of loss or damage.
            </li>
            <li>
              The insurance company will assess the claim and, if approved,
              provide compensation as per the terms of the policy.
            </li>
            <li>
              Any false or fraudulent claims will result in denial of the claim
              and possible legal action.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Dispute Resolution</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Any disputes arising from the terms and conditions of this policy
              will be resolved through arbitration, mediation, or litigation, as
              per the laws governing the policy.
            </li>
            <li>
              The policyholder agrees to resolve disputes in the jurisdiction
              specified in the policy.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            9. Amendments to Terms
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              The insurance company reserves the right to amend or update these
              terms and conditions at any time. Any changes will be communicated
              to the policyholder in writing.
            </li>
            <li>
              Continued use of the policy after amendments constitutes
              acceptance of the new terms.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            10. Privacy and Data Protection
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              The policyholder’s personal information will be used solely for
              the purposes of managing the insurance policy, including
              processing claims and providing customer service.
            </li>
            <li>
              The insurance company is committed to protecting the
              policyholder’s privacy and will not share personal information
              with third parties without consent, except where required by law.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">11. Governing Law</h2>
          <p>
            These terms and conditions are governed by the laws of{" "}
            <strong>[Your Country/State]</strong>, and any legal actions will be
            conducted within the jurisdiction of{" "}
            <strong>[Your Country/State]</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            12. Contact Information
          </h2>
          <p>
            For any inquiries, claims, or concerns, please contact our customer
            service department at <strong>[Contact Information]</strong>.
          </p>
        </section>
      </ScrollArea>
    </div>
  );
};
