function addEntry() {
    const entryText = document.getElementById('blog-entry').value;
    const entriesDiv = document.getElementById('blog-entries');
    const tagsList = document.getElementById('tags');
    const archiveList = document.getElementById('archive');
    
    if (entryText.trim() === '') {
        alert('No puedes añadir una entrada vacía');
        return;
    }

    // Crear nueva entrada de blog
    const newEntry = document.createElement('div');
    newEntry.classList.add('blog-entry');
    const date = new Date().toLocaleDateString('es-ES');
    newEntry.innerHTML = `<h4>${date}</h4><p>${entryText}</p>`;
    entriesDiv.appendChild(newEntry);
    
    // Añadir entrada al archivo
    const newArchiveItem = document.createElement('li');
    newArchiveItem.textContent = `${date}: ${entryText.substring(0, 20)}...`;
    archiveList.appendChild(newArchiveItem);
    
    // Añadir etiqueta
    const newTag = document.createElement('li');
    const tagText = entryText.split(' ')[0]; // Usa la primera palabra como etiqueta
    newTag.innerHTML = `❤️ ${tagText} ❤️`;
    tagsList.appendChild(newTag);

    // Limpiar el textarea
    document.getElementById('blog-entry').value = '';
}
