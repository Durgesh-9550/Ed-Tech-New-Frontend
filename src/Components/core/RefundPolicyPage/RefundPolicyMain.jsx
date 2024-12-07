import React from 'react'

export const RefundPolicyMain = () => {
    return (
        <div class="bg-gray-50 text-gray-800 py-12 px-6 sm:px-12 lg:px-24">
            <div class="max-w-4xl mx-auto">
                {/* <!-- Heading --> */}
                <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
                    Refund and Learner's Satisfaction Policy
                </h1>
                <p class="text-md text-gray-700 leading-relaxed">
                    Thank you for trusting EMS for your better future.
                </p>

                {/* <!-- Intro --> */}
                <div class="mt-8 text-gray-700 space-y-4">
                    <p>
                        At Elevate My Skill, we aim to ensure our learners have a satisfying experience with our courses and services.
                        To address any concerns or changes in plans, we have established a clear refund and return policy, detailed below:
                    </p>
                </div>

                {/* <!-- Cooling-Off Period Refund Policy --> */}
                <div class="mt-12">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                        Cooling-Off Period Refund Policy
                    </h2>
                    <p class="text-md text-gray-700 leading-relaxed">
                        We understand that circumstances may change, or a course may not meet your expectations. To provide flexibility:
                    </p>
                    <ul class="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li>
                            <strong>Full Refund Eligibility:</strong> Learners are eligible for a full refund if they request it within 14 days of enrollment (cooling-off period).
                        </li>
                        <li>
                            Refund requests must be submitted via our official communication channels (email or website portal) within the stipulated time.
                        </li>
                        <li>
                            Refunds will be processed within 7–10 business days after approval.
                        </li>
                    </ul>
                    <h3 class="text-lg text-gray-900 mt-6 font-bold">Refund Limitations:</h3>
                    <ul class="list-disc list-inside mt-2 space-y-2 text-gray-700">
                        <li>After the 14-day cooling-off period, no refunds will be processed for any reason, including but not limited to:</li>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li>Course dissatisfaction.</li>
                            <li>Changes in personal circumstances.</li>
                        </ul>
                    </ul>
                </div>

                {/* <!-- Batch Change Policy --> */}
                <div class="mt-12">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                        Batch Change Policy
                    </h2>
                    <p class="text-md text-gray-700 leading-relaxed">
                        Learners can request a batch change at any time during the course if their current batch schedule does not suit them:
                    </p>
                    <ul class="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li>Batch changes are subject to seat availability and course schedules.</li>
                        <li>Requests must be submitted at least 48 hours in advance of the next session.</li>
                    </ul>
                </div>

                {/* <!-- Instructor Change Policy --> */}
                <div class="mt-12">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                        Instructor Change Policy
                    </h2>
                    <p class="text-md text-gray-700 leading-relaxed">
                        To enhance your learning experience, we provide the option to request a change of instructor:
                    </p>
                    <ul class="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li>
                            Instructor change requests can be made if a learner feels they would benefit from a different teaching style.
                        </li>
                        <li>Requests will be addressed based on instructor availability and course continuity considerations.</li>
                    </ul>
                </div>

                {/* <!-- Non-Refundable Cases --> */}
                <div class="mt-12">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                        Non-Refundable Cases
                    </h2>
                    <ul class="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li>Courses that have progressed beyond the 7-day cooling-off period.</li>
                        <li>Missed classes or failure to attend the course after enrollment.</li>
                        <li>Requests due to technical issues arising from the learner’s end (e.g., internet connectivity problems).</li>
                    </ul>
                </div>

                {/* <!-- Support and Assistance --> */}
                <div class="mt-12">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                        Support and Assistance
                    </h2>
                    <p class="text-md text-gray-700 leading-relaxed">
                        If you encounter any issues or need support during your course journey, our enrolment coaches are here to help you at every step. Feel free to contact us for guidance or resolutions.
                    </p>
                </div>

                {/* <!-- Contact --> */}
                <div class="mt-8">
                    <h3 class="text-lg font-bold text-gray-900 mb-2">
                        Contact Us
                    </h3>
                    <p class="text-md text-gray-700">
                        If you have any questions about our Returns and Refunds Policy, please contact us at: <a href="mailto:admin@elevatemyskill.online" class="text-blue-600 hover:underline">admin@elevatemyskill.online</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
