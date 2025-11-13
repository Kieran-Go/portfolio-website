// Scrolls smoothly to specified document section
export default function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}