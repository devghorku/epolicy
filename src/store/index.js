import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
const dataState = createPersistedState({
    paths: ['termForm', 'healthForm', 'criticalForm', 'accidentForm', 'endowmentForm', 'homeInsuranceForm','h_filter']
})
export default new Vuex.Store({
    state: {
        termForm: {
            cover: 5000000,
            dob: "28/06/1991",
            income: "50",
            gender: 'M',
            isSmoker: 'N',
            term: 10
        },
        healthForm: {
            cover: 500000,
            gender: "M",
            income: "50",
            pincode: 110003,
            adultsDobs: ['28/06/1991'],
            childrenDobs: []
        },
        criticalForm: {
            cover: 500000,
            income: "50",
            pincode: 110003,
            childrenDobs: [],
            dob: "28/06/1991",
            gender: 'male',
            smoke: 'yes'
        },
        accidentForm: {
            cover: 500000,
            income: "50",
            pincode: 110003,
            childrenDobs: [],
            birth_date: ['28/06/1991'],
            gender: 'male',
            smoke: 'yes'
        },
        endowmentForm: {},
        homeInsuranceForm: {},
        currentTab: 'term',
        policies: [
            {
                "productId": 1,
                "productName": "Zindagi+",
                "providerId": 1,
                "providerName": "Edelweiss Tokio Life Insurance Company Limited",
                "providerLogo": "edelweiss-1logo.jpeg",
                "policyBrochure": "zindagi-1policy-brochure.pdf",
                "tcBrochure": "zindagi-1tc-brochure.pdf",
                "premiumRule": null,
                "featureGroups": [
                    {
                        "name": "Product Criterion",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Product Criterion",
                                "name": "Entry Age",
                                "value": "18-65 years",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Last birthday age",
                                "tooltip": "The eligibility criterion for term insurance plan varies according to the insurers."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Maximum Maturity Age",
                                "value": "80 years",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Maximum age when policy matures.",
                                "tooltip": "Maximum age when policy matures."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Policy Term (in years)",
                                "value": "Minimum: 10 years; Maximum: (80-age at entry) years",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "Term for which plan is available.",
                                "tooltip": "Term for which plan is available."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Premium Frequency",
                                "value": "Annual, Semi-Annual, Quarterly, Monthly",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The number of times during the policy year that you need to pay premiums.",
                                "tooltip": "The number of times during the policy year that you need to pay premiums."
                            }
                        ]
                    },
                    {
                        "name": "In-built Benefits",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "In-built Benefits",
                                "name": "Death Benefit",
                                "value": "In case of death of life insured Sum Assured chosen by you is payable as lumpsum.",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "A death benefit is the payout to the beneficiary of an in-force life insurance policy after the insured dies.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Maturity Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "The amount received by the policyholder once a policy matures.",
                                "tooltip": "A maturity benefit is a lump-sum amount the insurance company pays you after the maturity of insurance policy."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Surrender Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "It is the amount the policyholder will get from the life insurance company if he decides to exit the policy before maturity.",
                                "tooltip": "A surrender is a full cancellation of a life insurance policy. You are allowed to surrender your policy at any time."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Terminal Illness Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The Death Benefit (DB) will be paid to your nominee/legal heir, on the occurrence of any terminal illness.",
                                "tooltip": "Terminal Illness Benefit pays out the Life Insurance lump sum early if the policyholder is expected to die within 12 months."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Death Benefit Payout Options",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "The flexibility to take the Death Benefit in a way that meets your financial requirement.",
                                "tooltip": "The Death Benefit payout option has to be selected by you at Policy inception."
                            }
                        ]
                    },
                    {
                        "name": "Display Features",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Display Features",
                                "name": "Death Benefit",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Death benefit means the benefit which is payable on death of the Life Insured.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Better Half Benefit",
                                "value": "Extra 50% cover for spouse",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "On death of the spouse of life insured Better Half Benefit Sum Assured which is 50% of the Death Benefit or 1 Cr whichever is lower. This benefit is available on additional premium.",
                                "tooltip": "It can be availed on extra premium payment, only if the Base Sum Assured is greater than or equal to Rs. 50,00,000."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Top-Up Benefit",
                                "value": "Increase in cover year on year",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "Option to increase your sum assured through top up by paying additional premium.",
                                "tooltip": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Waiver of Premium Benefit",
                                "value": "On diagnosis of Critical Illness",
                                "groupOrder": 0,
                                "featureOrder": 8,
                                "description": "On extra premium payment, all the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions.",
                                "tooltip": "All the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 9,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder."
                            }
                        ]
                    },
                    {
                        "name": "Compare Features",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Compare Features",
                                "name": "Entry Age",
                                "value": "18-65 years",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Last birthday age",
                                "tooltip": "The eligibility criterion for term insurance plan varies according to the insurers."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Maximum Maturity Age",
                                "value": "80 years",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Maximum age when policy matures.",
                                "tooltip": "Maximum age when policy matures."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Policy Term (in years)",
                                "value": "Minimum: 10 years; Maximum: (80-age at entry) years",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "Term for which plan is available.",
                                "tooltip": "Term for which plan is available."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Premium Frequency",
                                "value": "Annual, Semi-Annual, Quarterly, Monthly",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The number of times during the policy year that you need to pay premiums.",
                                "tooltip": "The number of times during the policy year that you need to pay premiums."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Death Benefit",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 5,
                                "description": "A death benefit is the payout to the beneficiary of an in-force life insurance policy after the insured dies.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Maturity Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "The amount received by the policyholder once a policy matures.",
                                "tooltip": "A maturity benefit is a lump-sum amount the insurance company pays you after the maturity of insurance policy."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Surrender Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "It is the amount the policyholder will get from the life insurance company if he decides to exit the policy before maturity.",
                                "tooltip": "A surrender is a full cancellation of a life insurance policy. You are allowed to surrender your policy at any time."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Terminal Illness Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 8,
                                "description": "The Death Benefit (DB) will be paid to your nominee/legal heir, on the occurrence of any terminal illness.",
                                "tooltip": "Terminal Illness Benefit pays out the Life Insurance lump sum early if the policyholder is expected to die within 12 months."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Premium Waiver Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 9,
                                "description": "This benefit that is attached typically to a life insurance policy protects policyholders from being left uncovered.",
                                "tooltip": "This benefit that is attached typically to a life insurance policy protects policyholders from being left uncovered."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Death Benefit Payout Options",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 10,
                                "description": "The flexibility to take the Death Benefit in a way that meets your financial requirement.",
                                "tooltip": "The Death Benefit payout option has to be selected by you at Policy inception."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Benefit on Accidental Death",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 11,
                                "description": "In addition to the benefits under Life Option, you get an additional Extra Life Sum Assured upon death due to Accident.",
                                "tooltip": "An additional Extra Life Sum Assured upon death due to Accident."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Waiver of premiums on Critical Illness",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 12,
                                "description": "In addition to the benefits under Life Option, you will receive an additional benefit of waiver of your future premiums upon diagnosis of Critical Illness.",
                                "tooltip": "All future premiums will be waived off upon diagnosis of Critical Illness."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Benefit on Critical Illness",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 13,
                                "description": "This benefit provides for a lumpsum amount on diagnosis of one of the critical illnesses listed in policy document.",
                                "tooltip": "This benefit provides for a lumpsum amount on diagnosis of one of the critical illnesses listed in policy document."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Alteration of premium payment frequency",
                                "value": "Covered",
                                "groupOrder": 0,
                                "featureOrder": 14,
                                "description": "An option to alter the premium payment frequency during the premium payment term.",
                                "tooltip": "An option to alter the premium payment frequency during the premium payment term."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Loans",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 15,
                                "description": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral.",
                                "tooltip": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Grace Period",
                                "value": "15 days for monthly premium payment mode and 30 days for other modes of premium payment.",
                                "groupOrder": 0,
                                "featureOrder": 16,
                                "description": "Grace Period means a period of 30 days immediately following the Policy Period End Date during which a payment can be made to renew this Policy without loss of continuity benefits.",
                                "tooltip": "Grace period is a defined amount of time after the premium is due in which a policyholder can make a premium payment without coverage lapsing."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Revival Period",
                                "value": "5 years",
                                "groupOrder": 0,
                                "featureOrder": 17,
                                "description": "It is for reactivating the lapsed policy, as insurance policy lapses when the insured defaults on the payments of renewal premium beyond a grace period.",
                                "tooltip": "Insurance companies provide an option of reactivating the lapsed policy, within a specific period of time post the grace period."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Free Look Period",
                                "value": "30 days",
                                "groupOrder": 0,
                                "featureOrder": 18,
                                "description": "The Policyholder may, within 15 days from the receipt of the Policy document, return the Policy stating reasons for his objection, if the Policyholder disagrees with any Policy terms and conditions.",
                                "tooltip": "The free look period is a required period of time, in which a new life insurance policy owner can terminate the policy without penalties."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Availability for NRI",
                                "value": "Not Available",
                                "groupOrder": 0,
                                "featureOrder": 19,
                                "description": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not.",
                                "tooltip": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 20,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder."
                            }
                        ]
                    },
                    {
                        "name": "Other Provisions",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Other Provisions",
                                "name": "Loans",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral.",
                                "tooltip": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Grace Period",
                                "value": "15 days applies for monthly premium payment mode and 30 days for other modes of premium payment.",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Grace Period means a period of 30 days immediately following the Policy Period End Date during which a payment can be made to renew this Policy without loss of continuity benefits.",
                                "tooltip": "Grace period is a defined amount of time after the premium is due in which a policyholder can make a premium payment without coverage lapsing."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Revival Period",
                                "value": "5 years from the due date of the first unpaid premium",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "It is for reactivating the lapsed policy, as insurance policy lapses when the insured defaults on the payments of renewal premium beyond a grace period.",
                                "tooltip": "Insurance companies provide an option of reactivating the lapsed policy, within a specific period of time post the grace period."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Free Look Period",
                                "value": "30 days from the date of receipt of the policy document.",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The Policyholder may, within 15 days from the receipt of the Policy document, return the Policy stating reasons for his objection, if the Policyholder disagrees with any Policy terms and conditions.",
                                "tooltip": "The free look period is a required period of time, in which a new life insurance policy owner can terminate the policy without penalties."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Availability for NRI",
                                "value": "Not Available",
                                "groupOrder": 0,
                                "featureOrder": 5,
                                "description": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not.",
                                "tooltip": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder ."
                            }
                        ]
                    },
                    {
                        "name": "Add-on Benefits",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Better Half Benefit",
                                "value": "On death of the spouse before the maturity date, sum assured which is 50% of the Base Sum Assured will be paid.",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Life cover will commence on the life of the spouse and will continue for the remaining policy term.",
                                "tooltip": "It can be availed on extra premium payment, only if the Base Sum Assured is greater than or equal to Rs. 50,00,000."
                            },
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Waiver of Premium Benefit",
                                "value": "All the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions.",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "A waiver of premium is a provision in an insurance policy that ensures the continuation of the policy’s effectivity in the event that the policyholder can no longer pay the premiums.",
                                "tooltip": "It can be availed on extra premium payment."
                            },
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Top-up Benefit",
                                "value": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured. Top-up Rate is 5% or 10%, as selected by you at the policy inception.",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured. Top-up Rate is 5% or 10%, as selected by you at the policy inception.",
                                "tooltip": "An additional premium will be charged for every addition of Top-up sum assured."
                            }
                        ]
                    }
                ],
                "yearlyPremium": 4386,
                "coverUsed": 5000000,
                "csr": 0.958,
                "uin": "147N056V04",
                "addGST": false

            },
            {
                "productId": 2,
                "productName": "Zindagi+",
                "providerId": 1,
                "providerName": "Edelweiss Tokio Life Insurance Company Limited",
                "providerLogo": "edelweiss-1logo.jpeg",
                "policyBrochure": "zindagi-1policy-brochure.pdf",
                "tcBrochure": "zindagi-1tc-brochure.pdf",
                "premiumRule": null,
                "featureGroups": [
                    {
                        "name": "Product Criterion",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Product Criterion",
                                "name": "Entry Age",
                                "value": "18-65 years",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Last birthday age",
                                "tooltip": "The eligibility criterion for term insurance plan varies according to the insurers."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Maximum Maturity Age",
                                "value": "80 years",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Maximum age when policy matures.",
                                "tooltip": "Maximum age when policy matures."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Policy Term (in years)",
                                "value": "Minimum: 10 years; Maximum: (80-age at entry) years",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "Term for which plan is available.",
                                "tooltip": "Term for which plan is available."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Premium Frequency",
                                "value": "Annual, Semi-Annual, Quarterly, Monthly",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The number of times during the policy year that you need to pay premiums.",
                                "tooltip": "The number of times during the policy year that you need to pay premiums."
                            }
                        ]
                    },
                    {
                        "name": "In-built Benefits",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "In-built Benefits",
                                "name": "Death Benefit",
                                "value": "In case of death of life insured Sum Assured chosen by you is payable as lumpsum.",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "A death benefit is the payout to the beneficiary of an in-force life insurance policy after the insured dies.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Maturity Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "The amount received by the policyholder once a policy matures.",
                                "tooltip": "A maturity benefit is a lump-sum amount the insurance company pays you after the maturity of insurance policy."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Surrender Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "It is the amount the policyholder will get from the life insurance company if he decides to exit the policy before maturity.",
                                "tooltip": "A surrender is a full cancellation of a life insurance policy. You are allowed to surrender your policy at any time."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Terminal Illness Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The Death Benefit (DB) will be paid to your nominee/legal heir, on the occurrence of any terminal illness.",
                                "tooltip": "Terminal Illness Benefit pays out the Life Insurance lump sum early if the policyholder is expected to die within 12 months."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Death Benefit Payout Options",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "The flexibility to take the Death Benefit in a way that meets your financial requirement.",
                                "tooltip": "The Death Benefit payout option has to be selected by you at Policy inception."
                            }
                        ]
                    },
                    {
                        "name": "Display Features",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Display Features",
                                "name": "Death Benefit",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Death benefit means the benefit which is payable on death of the Life Insured.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Better Half Benefit",
                                "value": "Extra 50% cover for spouse",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "On death of the spouse of life insured Better Half Benefit Sum Assured which is 50% of the Death Benefit or 1 Cr whichever is lower. This benefit is available on additional premium.",
                                "tooltip": "It can be availed on extra premium payment, only if the Base Sum Assured is greater than or equal to Rs. 50,00,000."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Top-Up Benefit",
                                "value": "Increase in cover year on year",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "Option to increase your sum assured through top up by paying additional premium.",
                                "tooltip": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Waiver of Premium Benefit",
                                "value": "On diagnosis of Critical Illness",
                                "groupOrder": 0,
                                "featureOrder": 8,
                                "description": "On extra premium payment, all the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions.",
                                "tooltip": "All the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 9,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder."
                            }
                        ]
                    },
                    {
                        "name": "Compare Features",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Compare Features",
                                "name": "Entry Age",
                                "value": "18-65 years",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Last birthday age",
                                "tooltip": "The eligibility criterion for term insurance plan varies according to the insurers."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Maximum Maturity Age",
                                "value": "80 years",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Maximum age when policy matures.",
                                "tooltip": "Maximum age when policy matures."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Policy Term (in years)",
                                "value": "Minimum: 10 years; Maximum: (80-age at entry) years",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "Term for which plan is available.",
                                "tooltip": "Term for which plan is available."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Premium Frequency",
                                "value": "Annual, Semi-Annual, Quarterly, Monthly",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The number of times during the policy year that you need to pay premiums.",
                                "tooltip": "The number of times during the policy year that you need to pay premiums."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Death Benefit",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 5,
                                "description": "A death benefit is the payout to the beneficiary of an in-force life insurance policy after the insured dies.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Maturity Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "The amount received by the policyholder once a policy matures.",
                                "tooltip": "A maturity benefit is a lump-sum amount the insurance company pays you after the maturity of insurance policy."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Surrender Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "It is the amount the policyholder will get from the life insurance company if he decides to exit the policy before maturity.",
                                "tooltip": "A surrender is a full cancellation of a life insurance policy. You are allowed to surrender your policy at any time."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Terminal Illness Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 8,
                                "description": "The Death Benefit (DB) will be paid to your nominee/legal heir, on the occurrence of any terminal illness.",
                                "tooltip": "Terminal Illness Benefit pays out the Life Insurance lump sum early if the policyholder is expected to die within 12 months."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Premium Waiver Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 9,
                                "description": "This benefit that is attached typically to a life insurance policy protects policyholders from being left uncovered.",
                                "tooltip": "This benefit that is attached typically to a life insurance policy protects policyholders from being left uncovered."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Death Benefit Payout Options",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 10,
                                "description": "The flexibility to take the Death Benefit in a way that meets your financial requirement.",
                                "tooltip": "The Death Benefit payout option has to be selected by you at Policy inception."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Benefit on Accidental Death",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 11,
                                "description": "In addition to the benefits under Life Option, you get an additional Extra Life Sum Assured upon death due to Accident.",
                                "tooltip": "An additional Extra Life Sum Assured upon death due to Accident."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Waiver of premiums on Critical Illness",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 12,
                                "description": "In addition to the benefits under Life Option, you will receive an additional benefit of waiver of your future premiums upon diagnosis of Critical Illness.",
                                "tooltip": "All future premiums will be waived off upon diagnosis of Critical Illness."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Benefit on Critical Illness",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 13,
                                "description": "This benefit provides for a lumpsum amount on diagnosis of one of the critical illnesses listed in policy document.",
                                "tooltip": "This benefit provides for a lumpsum amount on diagnosis of one of the critical illnesses listed in policy document."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Alteration of premium payment frequency",
                                "value": "Covered",
                                "groupOrder": 0,
                                "featureOrder": 14,
                                "description": "An option to alter the premium payment frequency during the premium payment term.",
                                "tooltip": "An option to alter the premium payment frequency during the premium payment term."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Loans",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 15,
                                "description": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral.",
                                "tooltip": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Grace Period",
                                "value": "15 days for monthly premium payment mode and 30 days for other modes of premium payment.",
                                "groupOrder": 0,
                                "featureOrder": 16,
                                "description": "Grace Period means a period of 30 days immediately following the Policy Period End Date during which a payment can be made to renew this Policy without loss of continuity benefits.",
                                "tooltip": "Grace period is a defined amount of time after the premium is due in which a policyholder can make a premium payment without coverage lapsing."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Revival Period",
                                "value": "5 years",
                                "groupOrder": 0,
                                "featureOrder": 17,
                                "description": "It is for reactivating the lapsed policy, as insurance policy lapses when the insured defaults on the payments of renewal premium beyond a grace period.",
                                "tooltip": "Insurance companies provide an option of reactivating the lapsed policy, within a specific period of time post the grace period."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Free Look Period",
                                "value": "30 days",
                                "groupOrder": 0,
                                "featureOrder": 18,
                                "description": "The Policyholder may, within 15 days from the receipt of the Policy document, return the Policy stating reasons for his objection, if the Policyholder disagrees with any Policy terms and conditions.",
                                "tooltip": "The free look period is a required period of time, in which a new life insurance policy owner can terminate the policy without penalties."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Availability for NRI",
                                "value": "Not Available",
                                "groupOrder": 0,
                                "featureOrder": 19,
                                "description": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not.",
                                "tooltip": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 20,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder."
                            }
                        ]
                    },
                    {
                        "name": "Other Provisions",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Other Provisions",
                                "name": "Loans",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral.",
                                "tooltip": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Grace Period",
                                "value": "15 days applies for monthly premium payment mode and 30 days for other modes of premium payment.",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Grace Period means a period of 30 days immediately following the Policy Period End Date during which a payment can be made to renew this Policy without loss of continuity benefits.",
                                "tooltip": "Grace period is a defined amount of time after the premium is due in which a policyholder can make a premium payment without coverage lapsing."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Revival Period",
                                "value": "5 years from the due date of the first unpaid premium",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "It is for reactivating the lapsed policy, as insurance policy lapses when the insured defaults on the payments of renewal premium beyond a grace period.",
                                "tooltip": "Insurance companies provide an option of reactivating the lapsed policy, within a specific period of time post the grace period."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Free Look Period",
                                "value": "30 days from the date of receipt of the policy document.",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The Policyholder may, within 15 days from the receipt of the Policy document, return the Policy stating reasons for his objection, if the Policyholder disagrees with any Policy terms and conditions.",
                                "tooltip": "The free look period is a required period of time, in which a new life insurance policy owner can terminate the policy without penalties."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Availability for NRI",
                                "value": "Not Available",
                                "groupOrder": 0,
                                "featureOrder": 5,
                                "description": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not.",
                                "tooltip": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder ."
                            }
                        ]
                    },
                    {
                        "name": "Add-on Benefits",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Better Half Benefit",
                                "value": "On death of the spouse before the maturity date, sum assured which is 50% of the Base Sum Assured will be paid.",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Life cover will commence on the life of the spouse and will continue for the remaining policy term.",
                                "tooltip": "It can be availed on extra premium payment, only if the Base Sum Assured is greater than or equal to Rs. 50,00,000."
                            },
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Waiver of Premium Benefit",
                                "value": "All the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions.",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "A waiver of premium is a provision in an insurance policy that ensures the continuation of the policy’s effectivity in the event that the policyholder can no longer pay the premiums.",
                                "tooltip": "It can be availed on extra premium payment."
                            },
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Top-up Benefit",
                                "value": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured. Top-up Rate is 5% or 10%, as selected by you at the policy inception.",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured. Top-up Rate is 5% or 10%, as selected by you at the policy inception.",
                                "tooltip": "An additional premium will be charged for every addition of Top-up sum assured."
                            }
                        ]
                    }
                ],
                "yearlyPremium": 4386,
                "coverUsed": 5000000,
                "csr": 0.958,
                "uin": "147N056V04",
                "addGST": false

            },
            {
                "productId": 3,
                "productName": "Zindagi+",
                "providerId": 1,
                "providerName": "Edelweiss Tokio Life Insurance Company Limited",
                "providerLogo": "edelweiss-1logo.jpeg",
                "policyBrochure": "zindagi-1policy-brochure.pdf",
                "tcBrochure": "zindagi-1tc-brochure.pdf",
                "premiumRule": null,
                "featureGroups": [
                    {
                        "name": "Product Criterion",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Product Criterion",
                                "name": "Entry Age",
                                "value": "18-65 years",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Last birthday age",
                                "tooltip": "The eligibility criterion for term insurance plan varies according to the insurers."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Maximum Maturity Age",
                                "value": "80 years",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Maximum age when policy matures.",
                                "tooltip": "Maximum age when policy matures."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Policy Term (in years)",
                                "value": "Minimum: 10 years; Maximum: (80-age at entry) years",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "Term for which plan is available.",
                                "tooltip": "Term for which plan is available."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Premium Frequency",
                                "value": "Annual, Semi-Annual, Quarterly, Monthly",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The number of times during the policy year that you need to pay premiums.",
                                "tooltip": "The number of times during the policy year that you need to pay premiums."
                            }
                        ]
                    },
                    {
                        "name": "In-built Benefits",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "In-built Benefits",
                                "name": "Death Benefit",
                                "value": "In case of death of life insured Sum Assured chosen by you is payable as lumpsum.",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "A death benefit is the payout to the beneficiary of an in-force life insurance policy after the insured dies.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Maturity Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "The amount received by the policyholder once a policy matures.",
                                "tooltip": "A maturity benefit is a lump-sum amount the insurance company pays you after the maturity of insurance policy."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Surrender Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "It is the amount the policyholder will get from the life insurance company if he decides to exit the policy before maturity.",
                                "tooltip": "A surrender is a full cancellation of a life insurance policy. You are allowed to surrender your policy at any time."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Terminal Illness Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The Death Benefit (DB) will be paid to your nominee/legal heir, on the occurrence of any terminal illness.",
                                "tooltip": "Terminal Illness Benefit pays out the Life Insurance lump sum early if the policyholder is expected to die within 12 months."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Death Benefit Payout Options",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "The flexibility to take the Death Benefit in a way that meets your financial requirement.",
                                "tooltip": "The Death Benefit payout option has to be selected by you at Policy inception."
                            }
                        ]
                    },
                    {
                        "name": "Display Features",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Display Features",
                                "name": "Death Benefit",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Death benefit means the benefit which is payable on death of the Life Insured.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Better Half Benefit",
                                "value": "Extra 50% cover for spouse",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "On death of the spouse of life insured Better Half Benefit Sum Assured which is 50% of the Death Benefit or 1 Cr whichever is lower. This benefit is available on additional premium.",
                                "tooltip": "It can be availed on extra premium payment, only if the Base Sum Assured is greater than or equal to Rs. 50,00,000."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Top-Up Benefit",
                                "value": "Increase in cover year on year",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "Option to increase your sum assured through top up by paying additional premium.",
                                "tooltip": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Waiver of Premium Benefit",
                                "value": "On diagnosis of Critical Illness",
                                "groupOrder": 0,
                                "featureOrder": 8,
                                "description": "On extra premium payment, all the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions.",
                                "tooltip": "All the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 9,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder."
                            }
                        ]
                    },
                    {
                        "name": "Compare Features",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Compare Features",
                                "name": "Entry Age",
                                "value": "18-65 years",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Last birthday age",
                                "tooltip": "The eligibility criterion for term insurance plan varies according to the insurers."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Maximum Maturity Age",
                                "value": "80 years",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Maximum age when policy matures.",
                                "tooltip": "Maximum age when policy matures."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Policy Term (in years)",
                                "value": "Minimum: 10 years; Maximum: (80-age at entry) years",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "Term for which plan is available.",
                                "tooltip": "Term for which plan is available."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Premium Frequency",
                                "value": "Annual, Semi-Annual, Quarterly, Monthly",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The number of times during the policy year that you need to pay premiums.",
                                "tooltip": "The number of times during the policy year that you need to pay premiums."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Death Benefit",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 5,
                                "description": "A death benefit is the payout to the beneficiary of an in-force life insurance policy after the insured dies.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Maturity Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "The amount received by the policyholder once a policy matures.",
                                "tooltip": "A maturity benefit is a lump-sum amount the insurance company pays you after the maturity of insurance policy."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Surrender Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "It is the amount the policyholder will get from the life insurance company if he decides to exit the policy before maturity.",
                                "tooltip": "A surrender is a full cancellation of a life insurance policy. You are allowed to surrender your policy at any time."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Terminal Illness Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 8,
                                "description": "The Death Benefit (DB) will be paid to your nominee/legal heir, on the occurrence of any terminal illness.",
                                "tooltip": "Terminal Illness Benefit pays out the Life Insurance lump sum early if the policyholder is expected to die within 12 months."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Premium Waiver Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 9,
                                "description": "This benefit that is attached typically to a life insurance policy protects policyholders from being left uncovered.",
                                "tooltip": "This benefit that is attached typically to a life insurance policy protects policyholders from being left uncovered."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Death Benefit Payout Options",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 10,
                                "description": "The flexibility to take the Death Benefit in a way that meets your financial requirement.",
                                "tooltip": "The Death Benefit payout option has to be selected by you at Policy inception."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Benefit on Accidental Death",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 11,
                                "description": "In addition to the benefits under Life Option, you get an additional Extra Life Sum Assured upon death due to Accident.",
                                "tooltip": "An additional Extra Life Sum Assured upon death due to Accident."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Waiver of premiums on Critical Illness",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 12,
                                "description": "In addition to the benefits under Life Option, you will receive an additional benefit of waiver of your future premiums upon diagnosis of Critical Illness.",
                                "tooltip": "All future premiums will be waived off upon diagnosis of Critical Illness."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Benefit on Critical Illness",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 13,
                                "description": "This benefit provides for a lumpsum amount on diagnosis of one of the critical illnesses listed in policy document.",
                                "tooltip": "This benefit provides for a lumpsum amount on diagnosis of one of the critical illnesses listed in policy document."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Alteration of premium payment frequency",
                                "value": "Covered",
                                "groupOrder": 0,
                                "featureOrder": 14,
                                "description": "An option to alter the premium payment frequency during the premium payment term.",
                                "tooltip": "An option to alter the premium payment frequency during the premium payment term."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Loans",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 15,
                                "description": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral.",
                                "tooltip": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Grace Period",
                                "value": "15 days for monthly premium payment mode and 30 days for other modes of premium payment.",
                                "groupOrder": 0,
                                "featureOrder": 16,
                                "description": "Grace Period means a period of 30 days immediately following the Policy Period End Date during which a payment can be made to renew this Policy without loss of continuity benefits.",
                                "tooltip": "Grace period is a defined amount of time after the premium is due in which a policyholder can make a premium payment without coverage lapsing."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Revival Period",
                                "value": "5 years",
                                "groupOrder": 0,
                                "featureOrder": 17,
                                "description": "It is for reactivating the lapsed policy, as insurance policy lapses when the insured defaults on the payments of renewal premium beyond a grace period.",
                                "tooltip": "Insurance companies provide an option of reactivating the lapsed policy, within a specific period of time post the grace period."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Free Look Period",
                                "value": "30 days",
                                "groupOrder": 0,
                                "featureOrder": 18,
                                "description": "The Policyholder may, within 15 days from the receipt of the Policy document, return the Policy stating reasons for his objection, if the Policyholder disagrees with any Policy terms and conditions.",
                                "tooltip": "The free look period is a required period of time, in which a new life insurance policy owner can terminate the policy without penalties."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Availability for NRI",
                                "value": "Not Available",
                                "groupOrder": 0,
                                "featureOrder": 19,
                                "description": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not.",
                                "tooltip": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 20,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder."
                            }
                        ]
                    },
                    {
                        "name": "Other Provisions",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Other Provisions",
                                "name": "Loans",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral.",
                                "tooltip": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Grace Period",
                                "value": "15 days applies for monthly premium payment mode and 30 days for other modes of premium payment.",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Grace Period means a period of 30 days immediately following the Policy Period End Date during which a payment can be made to renew this Policy without loss of continuity benefits.",
                                "tooltip": "Grace period is a defined amount of time after the premium is due in which a policyholder can make a premium payment without coverage lapsing."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Revival Period",
                                "value": "5 years from the due date of the first unpaid premium",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "It is for reactivating the lapsed policy, as insurance policy lapses when the insured defaults on the payments of renewal premium beyond a grace period.",
                                "tooltip": "Insurance companies provide an option of reactivating the lapsed policy, within a specific period of time post the grace period."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Free Look Period",
                                "value": "30 days from the date of receipt of the policy document.",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The Policyholder may, within 15 days from the receipt of the Policy document, return the Policy stating reasons for his objection, if the Policyholder disagrees with any Policy terms and conditions.",
                                "tooltip": "The free look period is a required period of time, in which a new life insurance policy owner can terminate the policy without penalties."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Availability for NRI",
                                "value": "Not Available",
                                "groupOrder": 0,
                                "featureOrder": 5,
                                "description": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not.",
                                "tooltip": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder ."
                            }
                        ]
                    },
                    {
                        "name": "Add-on Benefits",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Better Half Benefit",
                                "value": "On death of the spouse before the maturity date, sum assured which is 50% of the Base Sum Assured will be paid.",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Life cover will commence on the life of the spouse and will continue for the remaining policy term.",
                                "tooltip": "It can be availed on extra premium payment, only if the Base Sum Assured is greater than or equal to Rs. 50,00,000."
                            },
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Waiver of Premium Benefit",
                                "value": "All the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions.",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "A waiver of premium is a provision in an insurance policy that ensures the continuation of the policy’s effectivity in the event that the policyholder can no longer pay the premiums.",
                                "tooltip": "It can be availed on extra premium payment."
                            },
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Top-up Benefit",
                                "value": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured. Top-up Rate is 5% or 10%, as selected by you at the policy inception.",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured. Top-up Rate is 5% or 10%, as selected by you at the policy inception.",
                                "tooltip": "An additional premium will be charged for every addition of Top-up sum assured."
                            }
                        ]
                    }
                ],
                "yearlyPremium": 4386,
                "coverUsed": 5000000,
                "csr": 0.958,
                "uin": "147N056V04",
                "addGST": false

            },
            {
                "productId": 4,
                "productName": "Zindagi+",
                "providerId": 1,
                "providerName": "Edelweiss Tokio Life Insurance Company Limited",
                "providerLogo": "edelweiss-1logo.jpeg",
                "policyBrochure": "zindagi-1policy-brochure.pdf",
                "tcBrochure": "zindagi-1tc-brochure.pdf",
                "premiumRule": null,
                "featureGroups": [
                    {
                        "name": "Product Criterion",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Product Criterion",
                                "name": "Entry Age",
                                "value": "18-65 years",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Last birthday age",
                                "tooltip": "The eligibility criterion for term insurance plan varies according to the insurers."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Maximum Maturity Age",
                                "value": "80 years",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Maximum age when policy matures.",
                                "tooltip": "Maximum age when policy matures."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Policy Term (in years)",
                                "value": "Minimum: 10 years; Maximum: (80-age at entry) years",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "Term for which plan is available.",
                                "tooltip": "Term for which plan is available."
                            },
                            {
                                "groupName": "Product Criterion",
                                "name": "Premium Frequency",
                                "value": "Annual, Semi-Annual, Quarterly, Monthly",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The number of times during the policy year that you need to pay premiums.",
                                "tooltip": "The number of times during the policy year that you need to pay premiums."
                            }
                        ]
                    },
                    {
                        "name": "In-built Benefits",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "In-built Benefits",
                                "name": "Death Benefit",
                                "value": "In case of death of life insured Sum Assured chosen by you is payable as lumpsum.",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "A death benefit is the payout to the beneficiary of an in-force life insurance policy after the insured dies.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Maturity Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "The amount received by the policyholder once a policy matures.",
                                "tooltip": "A maturity benefit is a lump-sum amount the insurance company pays you after the maturity of insurance policy."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Surrender Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "It is the amount the policyholder will get from the life insurance company if he decides to exit the policy before maturity.",
                                "tooltip": "A surrender is a full cancellation of a life insurance policy. You are allowed to surrender your policy at any time."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Terminal Illness Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The Death Benefit (DB) will be paid to your nominee/legal heir, on the occurrence of any terminal illness.",
                                "tooltip": "Terminal Illness Benefit pays out the Life Insurance lump sum early if the policyholder is expected to die within 12 months."
                            },
                            {
                                "groupName": "In-built Benefits",
                                "name": "Death Benefit Payout Options",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "The flexibility to take the Death Benefit in a way that meets your financial requirement.",
                                "tooltip": "The Death Benefit payout option has to be selected by you at Policy inception."
                            }
                        ]
                    },
                    {
                        "name": "Display Features",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Display Features",
                                "name": "Death Benefit",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Death benefit means the benefit which is payable on death of the Life Insured.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Better Half Benefit",
                                "value": "Extra 50% cover for spouse",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "On death of the spouse of life insured Better Half Benefit Sum Assured which is 50% of the Death Benefit or 1 Cr whichever is lower. This benefit is available on additional premium.",
                                "tooltip": "It can be availed on extra premium payment, only if the Base Sum Assured is greater than or equal to Rs. 50,00,000."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Top-Up Benefit",
                                "value": "Increase in cover year on year",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "Option to increase your sum assured through top up by paying additional premium.",
                                "tooltip": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Waiver of Premium Benefit",
                                "value": "On diagnosis of Critical Illness",
                                "groupOrder": 0,
                                "featureOrder": 8,
                                "description": "On extra premium payment, all the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions.",
                                "tooltip": "All the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions."
                            },
                            {
                                "groupName": "Display Features",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 9,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder."
                            }
                        ]
                    },
                    {
                        "name": "Compare Features",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Compare Features",
                                "name": "Entry Age",
                                "value": "18-65 years",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "Last birthday age",
                                "tooltip": "The eligibility criterion for term insurance plan varies according to the insurers."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Maximum Maturity Age",
                                "value": "80 years",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Maximum age when policy matures.",
                                "tooltip": "Maximum age when policy matures."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Policy Term (in years)",
                                "value": "Minimum: 10 years; Maximum: (80-age at entry) years",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "Term for which plan is available.",
                                "tooltip": "Term for which plan is available."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Premium Frequency",
                                "value": "Annual, Semi-Annual, Quarterly, Monthly",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The number of times during the policy year that you need to pay premiums.",
                                "tooltip": "The number of times during the policy year that you need to pay premiums."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Death Benefit",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 5,
                                "description": "A death benefit is the payout to the beneficiary of an in-force life insurance policy after the insured dies.",
                                "tooltip": "The amount paid to a beneficiary upon the death of an insured person."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Maturity Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "The amount received by the policyholder once a policy matures.",
                                "tooltip": "A maturity benefit is a lump-sum amount the insurance company pays you after the maturity of insurance policy."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Surrender Benefit",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "It is the amount the policyholder will get from the life insurance company if he decides to exit the policy before maturity.",
                                "tooltip": "A surrender is a full cancellation of a life insurance policy. You are allowed to surrender your policy at any time."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Terminal Illness Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 8,
                                "description": "The Death Benefit (DB) will be paid to your nominee/legal heir, on the occurrence of any terminal illness.",
                                "tooltip": "Terminal Illness Benefit pays out the Life Insurance lump sum early if the policyholder is expected to die within 12 months."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Premium Waiver Benefit",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 9,
                                "description": "This benefit that is attached typically to a life insurance policy protects policyholders from being left uncovered.",
                                "tooltip": "This benefit that is attached typically to a life insurance policy protects policyholders from being left uncovered."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Death Benefit Payout Options",
                                "value": "Lumpsum",
                                "groupOrder": 0,
                                "featureOrder": 10,
                                "description": "The flexibility to take the Death Benefit in a way that meets your financial requirement.",
                                "tooltip": "The Death Benefit payout option has to be selected by you at Policy inception."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Benefit on Accidental Death",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 11,
                                "description": "In addition to the benefits under Life Option, you get an additional Extra Life Sum Assured upon death due to Accident.",
                                "tooltip": "An additional Extra Life Sum Assured upon death due to Accident."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Waiver of premiums on Critical Illness",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 12,
                                "description": "In addition to the benefits under Life Option, you will receive an additional benefit of waiver of your future premiums upon diagnosis of Critical Illness.",
                                "tooltip": "All future premiums will be waived off upon diagnosis of Critical Illness."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Benefit on Critical Illness",
                                "value": "Not Covered",
                                "groupOrder": 0,
                                "featureOrder": 13,
                                "description": "This benefit provides for a lumpsum amount on diagnosis of one of the critical illnesses listed in policy document.",
                                "tooltip": "This benefit provides for a lumpsum amount on diagnosis of one of the critical illnesses listed in policy document."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Alteration of premium payment frequency",
                                "value": "Covered",
                                "groupOrder": 0,
                                "featureOrder": 14,
                                "description": "An option to alter the premium payment frequency during the premium payment term.",
                                "tooltip": "An option to alter the premium payment frequency during the premium payment term."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Loans",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 15,
                                "description": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral.",
                                "tooltip": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Grace Period",
                                "value": "15 days for monthly premium payment mode and 30 days for other modes of premium payment.",
                                "groupOrder": 0,
                                "featureOrder": 16,
                                "description": "Grace Period means a period of 30 days immediately following the Policy Period End Date during which a payment can be made to renew this Policy without loss of continuity benefits.",
                                "tooltip": "Grace period is a defined amount of time after the premium is due in which a policyholder can make a premium payment without coverage lapsing."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Revival Period",
                                "value": "5 years",
                                "groupOrder": 0,
                                "featureOrder": 17,
                                "description": "It is for reactivating the lapsed policy, as insurance policy lapses when the insured defaults on the payments of renewal premium beyond a grace period.",
                                "tooltip": "Insurance companies provide an option of reactivating the lapsed policy, within a specific period of time post the grace period."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Free Look Period",
                                "value": "30 days",
                                "groupOrder": 0,
                                "featureOrder": 18,
                                "description": "The Policyholder may, within 15 days from the receipt of the Policy document, return the Policy stating reasons for his objection, if the Policyholder disagrees with any Policy terms and conditions.",
                                "tooltip": "The free look period is a required period of time, in which a new life insurance policy owner can terminate the policy without penalties."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Availability for NRI",
                                "value": "Not Available",
                                "groupOrder": 0,
                                "featureOrder": 19,
                                "description": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not.",
                                "tooltip": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not."
                            },
                            {
                                "groupName": "Compare Features",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 20,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder."
                            }
                        ]
                    },
                    {
                        "name": "Other Provisions",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Other Provisions",
                                "name": "Loans",
                                "value": "NIL",
                                "groupOrder": 0,
                                "featureOrder": 1,
                                "description": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral.",
                                "tooltip": "A policy loan is issued by an insurance company and uses the cash value of a person’s life insurance policy as collateral."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Grace Period",
                                "value": "15 days applies for monthly premium payment mode and 30 days for other modes of premium payment.",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Grace Period means a period of 30 days immediately following the Policy Period End Date during which a payment can be made to renew this Policy without loss of continuity benefits.",
                                "tooltip": "Grace period is a defined amount of time after the premium is due in which a policyholder can make a premium payment without coverage lapsing."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Revival Period",
                                "value": "5 years from the due date of the first unpaid premium",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "It is for reactivating the lapsed policy, as insurance policy lapses when the insured defaults on the payments of renewal premium beyond a grace period.",
                                "tooltip": "Insurance companies provide an option of reactivating the lapsed policy, within a specific period of time post the grace period."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Free Look Period",
                                "value": "30 days from the date of receipt of the policy document.",
                                "groupOrder": 0,
                                "featureOrder": 4,
                                "description": "The Policyholder may, within 15 days from the receipt of the Policy document, return the Policy stating reasons for his objection, if the Policyholder disagrees with any Policy terms and conditions.",
                                "tooltip": "The free look period is a required period of time, in which a new life insurance policy owner can terminate the policy without penalties."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Availability for NRI",
                                "value": "Not Available",
                                "groupOrder": 0,
                                "featureOrder": 5,
                                "description": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not.",
                                "tooltip": "If Non-Resident Indians (NRIs) are eligible to avail of a term insurance plan in India or not."
                            },
                            {
                                "groupName": "Other Provisions",
                                "name": "Issuance Time",
                                "value": "14 days",
                                "groupOrder": 0,
                                "featureOrder": 6,
                                "description": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder.",
                                "tooltip": "Policy issuance is the process of creating an insurance policy and providing it to the policyholder ."
                            }
                        ]
                    },
                    {
                        "name": "Add-on Benefits",
                        "order": 0,
                        "productFeatures": [
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Better Half Benefit",
                                "value": "On death of the spouse before the maturity date, sum assured which is 50% of the Base Sum Assured will be paid.",
                                "groupOrder": 0,
                                "featureOrder": 2,
                                "description": "Life cover will commence on the life of the spouse and will continue for the remaining policy term.",
                                "tooltip": "It can be availed on extra premium payment, only if the Base Sum Assured is greater than or equal to Rs. 50,00,000."
                            },
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Waiver of Premium Benefit",
                                "value": "All the future premium will be waived off on survival of 30 days post the first diagnosis of the Insured Critical Illness conditions.",
                                "groupOrder": 0,
                                "featureOrder": 3,
                                "description": "A waiver of premium is a provision in an insurance policy that ensures the continuation of the policy’s effectivity in the event that the policyholder can no longer pay the premiums.",
                                "tooltip": "It can be availed on extra premium payment."
                            },
                            {
                                "groupName": "Add-on Benefits",
                                "name": "Top-up Benefit",
                                "value": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured. Top-up Rate is 5% or 10%, as selected by you at the policy inception.",
                                "groupOrder": 0,
                                "featureOrder": 7,
                                "description": "Top-up Sum Assured is equal to Top-up Rate multiplied by Base Sum Assured. Top-up Rate is 5% or 10%, as selected by you at the policy inception.",
                                "tooltip": "An additional premium will be charged for every addition of Top-up sum assured."
                            }
                        ]
                    }
                ],
                "yearlyPremium": 4386,
                "coverUsed": 5000000,
                "csr": 0.958,
                "uin": "147N056V04",
                "addGST": false

            },
        ],
        comparedPolicies: [],
        h_filter: {
            room_rent: [],
            hospitalization: [],
            ped_waiting: [],
        },
        c_filter: {
            room_rent: [],
            hospitalization: [],
            ped_waiting: [],
        },
        p_filter: {
            room_rent: [],
            hospitalization: [],
            ped_waiting: [],
        },
    },
    getters: {
        policyList: state => state.policies,
        comparePolicyList: state => state.comparedPolicies,
        getTermForm: state => state.termForm,
        getHealthForm: state => state.healthForm,
        getAccidentForm: state => state.accidentForm,
        getCriticalForm: state => state.criticalForm,
        getEndowmentForm: state => state.endowmentForm,
        getHomeForm: state => state.homeInsuranceForm,
    },
    mutations: {
        set_policy(state, payload) {
            state.comparedPolicies = payload
        },
        set_term_form(state, payload) {
            state.termForm = Object.assign(payload)
        },
        set_health_form(state, payload) {
            state.healthForm = Object.assign(payload)
        },
        set_accident_form(state, payload) {
            state.accidentForm = Object.assign(payload)
        },
        set_critical_form(state, payload) {
            state.criticalForm = Object.assign(payload)
        },
        set_endowment_form(state, payload) {
            state.endowmentForm = Object.assign(payload)
        },
        set_home_form(state, payload) {
            state.homeInsuranceForm = Object.assign(payload)
        },
        empty_policy(state) {
            state.comparedPolicies = []
        },
        set_currentTab(state, tab) {
            state.currentTab = tab
        },
        set_h_filter(state, payload) {
            state.h_filter = payload
        },
        set_a_filter(state, payload) {
            state.a_filter = payload
        },
        set_p_filter(state, payload) {
            state.p_filter = payload
        }
    },
    actions: {},
    modules: {},
    plugins: [dataState]
})
