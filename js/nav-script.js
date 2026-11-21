// Marque le lien du menu correspondant à la page courante

document.addEventListener("DOMContentLoaded", () => {
  // Retourne le nom de page sans extension : "/pages/projets.html" -> "projets"
  const getPageName = (path) => {
    const name = path
      .split("?")[0]
      .split("#")[0]
      .replace(/\/+$/, "")   // retire le slash final
      .split("/")
      .pop();
    return (name || "index").replace(/\.html?$/, "") || "index";
  };

  const currentPage = getPageName(location.pathname);

  document.querySelectorAll(".nav a").forEach((link) => {
    const linkPage = getPageName(link.getAttribute("href"));

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});
