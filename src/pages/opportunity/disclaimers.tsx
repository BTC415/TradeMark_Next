import OpportunityLayout from "@/layout/OpportunityLayout";
const Documents = () => {
    return (
        <main className={`w-full h-full `}>
            <div className="flex flex-col gap-2 w-full p-16 px-48 bg-[#f7f7f7] font-mont">
                <h1 className="font-OpenSans m-0 bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Disclaimers</h1>
                <h3 className="font-bold">Sponsor’s Projects and Targets</h3>
                <h5>*Assumptions and projections included in the information on this Page, including pro forma projections (collectively “Projections”) were provided by the Sponsor or an affiliate thereof and are not reflective of the position or opinions of, nor are they endorsed by, RM Technologies, LLC or its affiliates, or any other person or entity other than the Sponsor or its affiliates.  RM Technologies, LLC and its affiliates do not provide any assurance of returns or the accuracy or reasonableness of the Projections provided by the Sponsor or its affiliates.   There can be no assurance that the Sponsor’s methodology used for calculating any Projections, including Target IRR, Target Annualized Cash-on-Cash Return, and Target Equity Multiple (“Targets”), are appropriate or adequate.  The Sponsor’s Projections and Targets are hypothetical, are not based on actual investment results, and are presented solely for the purpose of providing insight into the Sponsor’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Sponsor’s performance. The Sponsor’s Projections and Targets are not a predictor, projection or guarantee of future performance.  There can be no assurance that the Sponsor’s Projections or Targets will be met or that the Sponsor will be successful in meeting these Projections and Targets.  Projections and Target returns should not be used as a primary basis for an investor’s decision to invest.</h5>
                <h3>No Approval, Opinion or Representation, or Warranty by RM Technologies, LLC or it Affiliates</h3>
                <h5>The information on this Page, including the Sponsor’s offering documentation, which may include without limitation the Private Placement Memorandum, Operating or Limited Partnership Agreement, Subscription Agreement, the Project Summary and all exhibits and other documents attached thereto or referenced therein (collectively, the “Investment Documents”) was provided by the Sponsor or an affiliate thereof.  RM Technologies, LLC makes no representations or warranties as to the accuracy of such information and accepts no liability therefor.  No part of the information on this Page is intended to be binding on RM Technologies, LLC or its affiliates, or to supersede any of the Sponsor’s Investment Documents.  The opinions expressed on this page are solely the opinions of the Sponsor and its affiliates and none of the opinions expressed on this Page are the opinions of, nor are they endorsed by, RM Technologies, LLC or its affiliates.</h5>
                <h3>Sponsor’s Information Qualified by Investment Documents</h3>
                <h5>The Information on this Page, including of the principal terms of the Sponsor’s offering, is qualified in its entirety by reference to the more complete information about the offering contained in the Sponsor’s Investment Documents.  The information on this Page is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment.  The information on this page should not be used as a primary basis for an investor’s decision to invest.  In the event of an inconsistency between the information on this Page and the Investment Documents, investors should rely on the information contained in the Investment Documents.  The information on this Page and the information in the Investment Documents are subject to last minute changes up to the closing date at the sole discretion of the Sponsor and its affiliates.</h5>
                <h3>Risk of Investment</h3>
                <h5>This real estate investment is speculative and involves substantial risk.  There can be no assurances that all or any of the assumptions will be true or that actual performance will bear any relation to the hypothetical illustrations herein, and no guarantee or representation is made that investment objectives of the Sponsor will be achieved.  In the event that actual performance is below the Sponsor’s Targets, your investment could be materially and adversely affected, and there can be no assurance that investors will not suffer significant losses.  A loss of part or all of the principal value of your investment may occur.  You should not invest unless you can readily bear the consequences of such loss.  Please see the Sponsor’s Investment Documents for additional information, including the Sponsor’s discussion concerning risk factors.</h5>
                <h3>Risk of Forward-Looking Statements</h3>
                <h5>Forward-looking statements are found here and in the applicable Investment Documents and may include words like “expects,” “intends,” “anticipates,” “estimates” and other similar words. These statements are intended to convey the Project Sponsor’s projections or expectations as of the date made. These statements are inherently subject to a variety of risks and uncertainties. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.  All forward-looking statements attributable to the Sponsor or its affiliates apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in the Investment Documents.  Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward-looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events.  Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.</h5>
            </div>
        </main>
    )
}
Documents.getLayout = OpportunityLayout;
export default Documents;