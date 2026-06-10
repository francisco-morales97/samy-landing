const dialog = document.getElementById('dialog-viewer');
const viewer = document.getElementById('pdf-viewer');

const files = {
    INFORME_PED: 'assets/jardin/Informe_pedagogico_2026.pdf',
    HOJA_RES: 'assets/jardin/Hoja_de_respuesta2026.pdf',
    EXTRACTO_PEI: 'assets/jardin/extracto del pei.pdf',
    PISE: 'assets/jardin/PISE Jardín Infantil y S. C. UV 2025.pdf',
    FOLLETO: 'assets/familias/Folleto díptico Día del libro 22042026.pdf',
    PREGUNTAS: 'assets/familias/Preguntas diagnóstico inicial JI Conejito Blanco.docx',
}

const openModal = (key) => {
    const route = files[key];

    if (!route) {
        console.error(`No existe el archivo: ${key}`);
        return;
    }

    viewer.src = route;
    dialog.showModal();
}

const closeModal = () => {
    viewer.src = '';
    dialog.close();
}

const downloadFile = (key) => {
   const url = files[key];

    if (!url) {
        console.error(`No existe el archivo: ${key}`);
        return;
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = ""; // o puedes poner nombre personalizado
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
