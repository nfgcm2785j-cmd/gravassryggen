/*
 * Shared content used across the Gravassryggen website.
 * Update values here instead of editing multiple HTML files.
 */


const siteContent = {
    version: {
        no: "11 July 2026",
        en: "07 July 2026"
    }
};

function insertVersionInfo(language) {
    const element = document.getElementById("version-info");

    if (!element) {
        console.error('Fant ikke elementet med id="version-info"');
        return;
    }

    if (language === "no") {
        element.innerHTML = `
            Updated:
            🇳🇴 ${siteContent.version.no} ·
            <a href="en/index.html" class="lang-link">
                🇬🇧 View English version (${siteContent.version.en}) →
            </a>
        `;
    }

    if (language === "en") {
        element.innerHTML = `
            Updated:
            🇬🇧 ${siteContent.version.en} ·
            <a href="../index.html" class="lang-link">
                🇳🇴 View Norwegian version (${siteContent.version.no}) →
            </a>
        `;
    }
}