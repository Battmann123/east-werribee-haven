import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Use</h1>

          <div className="space-y-6 text-foreground/90">
            <p>
              This website is operated by HOUSE AND LAND PACKAGES PTY LTD, its related bodies corporate and trusts (together called "we", "us", or "our") under the domain name eastwerribee.com.au ("Website"). These Terms of Use and the Privacy Statement together apply to, and govern your access, use and interaction with the Website.
            </p>

            <p>
              By proceeding with your access, use or interaction with the Website you agree to accept these Terms of Use and we agree to grant you a non-exclusive, non-transferable licence to use this Website in accordance with these Terms of Use.
            </p>

            <p>
              Pursuant to this licence and subject to our absolute right to vary access to all or any part(s) of the Website, you acquire a non-exclusive right to:
            </p>

            <ul>
              <li>view the material in the Website;</li>
              <li>access material contained in the Website; and</li>
              <li>use the Website strictly in accordance with the provisions of this licence.</li>
            </ul>

            <p>
              We may revise these Terms of Use from time to time without notice and such revision will take effect when it is posted on this Website. Your continued use of this Website will be regarded as your acceptance of these Terms of Use as amended.
            </p>

            <p>
              In addition to the terms contained in these Terms of Use, there are also specific terms relating to certain sections of the Website which also form part of the terms of use and govern your access, use and interaction with those sections of this Website ("Additional Terms"). Since you are also bound by these Additional Terms, you should review them wherever they are accessible by you on the Website. In the event of any inconsistency between the provisions of these Terms of Use and the Additional Terms, the Additional Terms prevail to the extent of the inconsistency.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Links to other websites</h2>

            <p>
              The Website may contain links to other websites operated by third parties ("Third Party Websites"). We do not endorse, or approve of the operators of Third Party Websites, or the content, information, graphics and material on those Third Party Websites ("Third Party Material") and you acknowledge and agree that your use of these Third Party Websites is at your own risk.
            </p>

            <p>
              Subject to any applicable law which cannot be excluded, we make no warranties or representations:
            </p>

            <ul>
              <li>regarding the quality, accuracy, merchantability or fitness for purpose of Third Party Material or products or services available through Third Party Websites; or</li>
              <li>that Third Party Material does not infringe the intellectual property rights of any person. We are not authorising the reproduction of Third Party Material by linking material on this Website to Third Party Material.</li>
            </ul>

            <p>
              When you follow a link on this Website, material on a Third Party Website may be displayed in your browser framed by material on this Website. This material is also Third Party Material for the purpose of these Terms of Use.
            </p>

            <p>
              All offers to sell and statements relating to goods and services available on Third Party Websites are the responsibility of and given by the Third Party Website operator. In so far as such offers and statements are made on the Website, such offers and statements are made by us on behalf of the Third Party Website operator. We expressly disclaim acting in any other respect on behalf of Third Party Website operators.
            </p>

            <p>
              We may receive payments from operators of Third Party Websites in relation to goods or services supplied by the Third Party Website operator as a result of you linking to the Third Party Website from this Website.
            </p>

            <p>
              Your access to Third Party Websites may be governed by the Third Party Websites' own terms of use.
            </p>

            <p>
              You may not create a link to this Website from another website or document without our prior written consent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Website content</h2>

            <p>
              We are either the owner or the licensed user of the copyright in the materials and information on this Website including without limitation any logo, design, floorplans, text, graphic and their arrangement ("Content"). Unless we indicate otherwise, you must not copy, distribute, republish, download, display, post or transmit the Content in any form or by any means including but not limited to electronic, mechanical or otherwise without our prior written consent or the written consent of the copyright owner. You may access and download Content from the Website for your own personal use only. Requests for our written consent should be sent to our contact email.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Indemnity</h2>

            <p>
              You agree to indemnify and hold us harmless from and against all loss, costs (including legal costs), expenses, demands or liability that we incur arising out of, or in connection with, your use of this Website or any breach by you of these Terms of Use.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Exclusion of liability</h2>

            <p>
              While we will take all reasonable steps to keep the Website operational and error-free, to the extent permitted by law, we disclaim all responsibility for any loss or damage however caused (including through negligence) which you may directly or indirectly suffer in connection with your use of this Website, and any linked websites.
            </p>

            <p>
              We do not warrant that the functions contained in any material on this Website or access to this Website will be uninterrupted or error free, that defects will be corrected or that this Website or the server which stores and transmits material to you are free of viruses or any other harmful components.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Disclaimer</h2>

            <p>
              The Website and its Content is provided on an "as is" basis. We disclaim all warranties (express or implied) to the extent permitted by law, in relation to the Website and its Content including but not limited to any implied warranties of merchantability or fitness for purpose.
            </p>

            <p>
              To the extent permitted by law, all warranties, terms, conditions (whether express or implied) and undertakings in respect of the Website and its Content are excluded.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Limitation of liability</h2>

            <p>
              To the extent permitted by law, we will not be liable for any direct, indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the Website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">General</h2>

            <p>
              These Terms of Use are governed by the laws of Victoria, Australia. You irrevocably and unconditionally submit to the exclusive jurisdiction of the courts operating in Victoria and any courts entitled to hear appeals from those courts and waive any right to object to proceedings being brought in those courts.
            </p>

            <p>
              If any provision of these Terms of Use is held to be invalid or unenforceable, such provision shall be struck out and the remaining provisions shall remain in force.
            </p>

            <p>
              Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches.
            </p>

            <p>
              For the purposes of these Terms of Use, a reference to the words "include", "includes" and "including" means "include, without limitation", "includes, without limitation" and "including, without limitation" respectively.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TermsOfUse;
