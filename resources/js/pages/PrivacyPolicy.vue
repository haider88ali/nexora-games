<script setup>
import { site } from '../data/site';
</script>

<template>
    <article class="max-w-3xl mx-auto px-5 pt-32 pb-12">
        <h1 class="text-4xl md:text-6xl font-bold">Privacy Policy</h1>
        <p class="text-white/55 mt-3">For all games published by {{ site.name }} on the Apple App Store and Google Play Store · Last updated {{ site.updated }}</p>

        <div class="prose-policy mt-8">
            <p>{{ site.name }} ("we", "us", "our") respects your privacy. This policy explains what information our mobile games collect on iOS and Android devices, how it is used, and the choices you have. By downloading or playing our games, you agree to this policy.</p>

            <h2>1. Information we collect</h2>
            <p>We do not require you to create an account. We may collect:</p>
            <ul>
                <li><b>Device information:</b> device model, operating system and version, language, screen size, and a randomly generated app instance ID.</li>
                <li><b>Advertising identifier:</b> the Identifier for Advertisers (IDFA) on iOS or the Advertising ID (AAID/GAID) on Android, used for ad delivery and measurement.</li>
                <li><b>Gameplay and usage data:</b> levels played, session length, in-game events, crash logs and performance data.</li>
                <li><b>Approximate location:</b> derived from your IP address (country or region level). We do not collect precise GPS location.</li>
                <li><b>Purchase information:</b> the Apple App Store and Google Play process in-app purchases. We receive confirmation of a purchase but never your payment details.</li>
            </ul>

            <h2>2. How we use information</h2>
            <ul>
                <li>To operate, maintain and improve our games and fix bugs.</li>
                <li>To show advertisements and measure their performance.</li>
                <li>To understand how players use our games and balance gameplay.</li>
                <li>To provide support and respond to your requests.</li>
                <li>To detect fraud, abuse and security issues.</li>
            </ul>

            <h2>3. Third-party services</h2>
            <p>Our games use third-party SDKs that may collect data under their own privacy policies. These can include advertising networks and mediation providers (such as Google AdMob, Unity Ads, AppLovin or similar), analytics and crash reporting (such as Firebase), and attribution services.</p>
            <ul>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google (AdMob, Firebase, Play Services)</a></li>
                <li><a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener">Unity</a></li>
                <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Apple</a></li>
            </ul>

            <h2>4. Advertising &amp; tracking choices</h2>
            <p><b>iOS:</b> on iOS 14.5 and later we ask for your permission before tracking you across other companies' apps and websites. If you choose "Ask App Not to Track", we will not access your IDFA and you will see ads that are not personalized. You can change this at any time in <b>Settings → Privacy &amp; Security → Tracking</b>.</p>
            <p><b>Android:</b> you can opt out of ads personalization or reset your advertising ID in <b>Settings → Google → Ads</b> (the path may vary by device). Opting out does not remove ads; they will just be less relevant.</p>

            <h2>5. Children's privacy</h2>
            <p>Our games are intended for a general audience and are not directed at children under 13 (or the minimum age in your region). They are not part of Google Play's "Designed for Families" program or Apple's Kids Category. We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.</p>

            <h2>6. Data sharing</h2>
            <p>We do not sell your personal information. We share data only with service providers acting on our behalf (ads, analytics, hosting), when required by law, or to protect our rights and users' safety.</p>

            <h2>7. Data retention &amp; deletion</h2>
            <p>We keep data only as long as needed for the purposes above. To request deletion of data associated with your device, email us at <a :href="`mailto:${site.email}`">{{ site.email }}</a> with your device model and, if possible, your advertising ID.</p>

            <h2>8. Your rights</h2>
            <p>Depending on where you live (for example under GDPR or CCPA/CPRA), you may have the right to access, correct, delete or port your data, to object to processing, and to opt out of sale or sharing. Contact us to exercise these rights.</p>

            <h2>9. Security</h2>
            <p>We use reasonable technical and organizational measures to protect your data. No method of transmission or storage is 100% secure, so we cannot guarantee absolute security.</p>

            <h2>10. Changes to this policy</h2>
            <p>We may update this policy from time to time. The "Last updated" date above shows the latest revision, and material changes will be reflected in our store listings or in-game.</p>

            <h2>11. Contact us</h2>
            <p>Questions? Email <a :href="`mailto:${site.email}`">{{ site.email }}</a>.</p>
        </div>
    </article>
</template>
