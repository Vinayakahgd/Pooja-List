// Quantity options based on type
const quantityOptions = {
    'Gram': [50, 100, 150, 200, 250, 300, 400, 500, 750, 1000],
    'Kg': [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10],
    'Liter': [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5],
    'Nos': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30, 35, 40, 50],
    'Maru': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Types': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Rs': [10, 25, 50, 100, 200, 500],
    'Other': [1]
};

let savedLists = [];
let currentList = null;
let defaultItemsLibrary = [
    { "name": "ಅರಿಶಿನ-ಕುಂಕುಮ", "quantityType": "Gram" },
    { "name": "ಊದುಬತ್ತಿ", "quantityType": "Nos" },
    { "name": "ಕರ್ಪೂರ", "quantityType": "Gram" },
    { "name": "ವಿಳ್ಳೆದೆಲೆ", "quantityType": "Gram" },
    { "name": "ಅಡಿಕೆ", "quantityType": "Gram" },
    { "name": "ಬಾಳೆ ಎಲೆ", "quantityType": "Nos" },
    { "name": "ಬಾಳೆ ಹಣ್ಣು", "quantityType": "Nos" },
    { "name": "ನಿಂಬೆ ಹಣ್ಣು", "quantityType": "Nos" },
    { "name": "ತೆಂಗಿನಕಾಯಿ", "quantityType": "Nos" },
    { "name": "ಬಾಳೆಕಂದು", "quantityType": "Nos" },
    { "name": "ಜನಿವಾರ", "quantityType": "Nos" },
    { "name": "ಗೆಜ್ಜೆವಸ್ತ್ರ", "quantityType": "Nos" },
    { "name": "ನವಗ್ರಹ ಧಾನ್ಯ", "quantityType": "Gram" },
    { "name": "ದೊನ್ನೆ", "quantityType": "Nos" },
    { "name": "ಪಂಚ", "quantityType": "Nos" },
    { "name": "ಟವಲ್", "quantityType": "Nos" },
    { "name": "ಬ್ಲೌಸ್ ಪೀಸ್", "quantityType": "Nos" },
    { "name": "ಗಂಜಳ, ಸಗಣಿ, ಗರಿಕೆ", "quantityType": "Other" },
    { "name": "ಹಾಲು", "quantityType": "Liter" },
    { "name": "ಮೊಸರು", "quantityType": "Liter" },
    { "name": "ತುಪ್ಪ", "quantityType": "Gram" },
    { "name": "ಜೇನುತುಪ್ಪ", "quantityType": "Gram" },
    { "name": "ಸಕ್ಕರೆ", "quantityType": "Kg" },
    { "name": "ಫೋಟೋ", "quantityType": "Other" },
    { "name": "ಹಾರಗಳು", "quantityType": "Nos" },
    { "name": "ಕಟ್ಟಿದ ಹೂ", "quantityType": "Maru" },
    { "name": "ತುಳಸಿ", "quantityType": "Maru" },
    { "name": "ಬಿಡಿ ಹೂ", "quantityType": "Kg" },
    { "name": "ಹಣ್ಣು", "quantityType": "Types" },
    { "name": "ಮಾವಿನ ಸೊಪ್ಪು", "quantityType": "Kg" },
    { "name": "ಎಳನೀರು", "quantityType": "Nos" },
    { "name": "ಚಿಲ್ಲರೆ ಕಾಸು", "quantityType": "Rs" },
    { "name": "ತಾಮ್ರದ ಚೆಂಬು", "quantityType": "Other" },
    { "name": "ಕರ್ಜೂರ", "quantityType": "Gram" },
    { "name": "ದ್ರಾಕ್ಷಿ, ಗೋಡಂಬಿ", "quantityType": "Gram" },
    { "name": "ಕಲ್ಲು ಸಕ್ಕರೆ", "quantityType": "Gram" },
    { "name": "ದೀಪದ ಎಣ್ಣೆ", "quantityType": "Liter" },
    { "name": "ದೀಪದ ಬತ್ತಿ", "quantityType": "Nos" },
    { "name": "ಕಳಸದ ಸಮಾನು", "quantityType": "Other" },
    { "name": "ಸಜ್ಜಿಗೆ ಪ್ರಸಾದಕ್ಕೆ ರವೆ", "quantityType": "Kg" },
    { "name": "ಸಜ್ಜಿಗೆ ಪ್ರಸಾದಕ್ಕೆ ಸಕ್ಕರೆ", "quantityType": "Kg" },
    { "name": "ಸಜ್ಜಿಗೆ ಪ್ರಸಾದಕ್ಕೆ ತುಪ್ಪ", "quantityType": "Kg" },
    { "name": "ಸಜ್ಜಿಗೆ ಪ್ರಸಾದಕ್ಕೆ ಬಾಳೆಹಣ್ಣು", "quantityType": "Nos" },
    { "name": "ಸಜ್ಜಿಗೆ ಪ್ರಸಾದಕ್ಕೆ ಗೋಡಂಬಿ", "quantityType": "Gram" },
    { "name": "ಸಜ್ಜಿಗೆ ಪ್ರಸಾದಕ್ಕೆ ದ್ರಾಕ್ಷಿ", "quantityType": "Gram" },
    { "name": "ಸಜ್ಜಿಗೆ ಪ್ರಸಾದಕ್ಕೆ ಹಾಲು", "quantityType": "Liter" }
];

// Initialize the app
async function init() {
    // Try to load items from JSON file first (works with web server)
    try {
        const response = await fetch('items.json');
        if (response.ok) {
            const loadedItems = await response.json();
            if (loadedItems && loadedItems.length > 0) {
                defaultItemsLibrary = loadedItems;
            }
        }
    } catch (error) {
        // Use embedded items if JSON fails to load
        console.log('Using embedded default items');
    }
    
    console.log('Loaded', defaultItemsLibrary.length, 'default items');

    // Load saved lists from localStorage (browser storage - no database needed!)
    const stored = localStorage.getItem('poojaLists');
    if (stored) {
        try {
            savedLists = JSON.parse(stored);
            console.log('Loaded', savedLists.length, 'saved lists from browser storage');
        } catch (error) {
            console.error('Error loading saved lists:', error);
            savedLists = [];
        }
    }

    showHomeScreen();
    attachEventListeners();
}

// Show home screen
function showHomeScreen() {
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('editorScreen').style.display = 'none';
    renderSavedLists();
}

// Show editor screen
function showEditorScreen() {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('editorScreen').style.display = 'block';
    renderEditor();
}

// Render saved lists on home screen
function renderSavedLists() {
    const container = document.getElementById('savedListsContainer');
    
    if (savedLists.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>📝 No saved lists yet.</p>
                <p>Click "Create New List" above to get started!</p>
                <p style="font-size: 0.9em; color: #999; margin-top: 10px;">
                    Your lists will be saved in your browser and appear here.
                </p>
            </div>
        `;
        return;
    }

    container.innerHTML = savedLists.map(list => `
        <div class="list-card" onclick="openList('${list.id}')">
            <h3>${list.title || 'Untitled List'}</h3>
            <div class="list-info">${list.items.filter(i => i.checked).length} / ${list.items.length} items selected</div>
            <div class="list-date">${new Date(list.lastModified).toLocaleDateString()}</div>
        </div>
    `).join('');
}

// Create new list
function createNewList() {
    // If no default items loaded, create empty list
    const items = defaultItemsLibrary.length > 0 
        ? defaultItemsLibrary.map(item => ({
            id: generateId(),
            name: item.name,
            quantityType: item.quantityType,
            quantity: quantityOptions[item.quantityType][0],
            checked: false,
            remark: ''
        }))
        : [];
    
    currentList = {
        id: generateId(),
        title: 'New List',
        header: {
            line1: 'ಶ್ರೀ ಮಹಾಗಣಪತಿ ಪ್ರಸನ್ನ ॥ ॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀನಾರಾಯಣ ಪ್ರಸನ್ನ',
            line2: 'ಶ್ರೀ ವೀರಶಕ್ತಿ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ',
            line3: 'ಪೀಣ್ಯ 1ನೇ ಹಂತ, ಬೆಂಗಳೂರು-58.',
            phone: '',
            line4: 'ಶ್ರೀ ಸತ್ಯನಾರಾಯಣಸ್ವಾಮಿ ಪೂಜೆಗೆ ಬೇಕಾಗುವ ಸಾಮಗ್ರಿಗಳು',
            image: ''
        },
        items: items,
        lastModified: new Date().toISOString()
    };
    
    console.log('Created new list with', currentList.items.length, 'items');
    showEditorScreen();
}

// Open existing list
function openList(listId) {
    const list = savedLists.find(l => l.id === listId);
    if (list) {
        currentList = JSON.parse(JSON.stringify(list)); // Deep clone
        showEditorScreen();
    }
}

// Render editor screen
function renderEditor() {
    if (!currentList) return;

    // Set title
    const titleInput = document.getElementById('listTitleInput');
    titleInput.value = currentList.title;
    titleInput.disabled = true;

    // Render header
    renderHeader();

    // Render items table
    renderItemsTable();
}

// Render header
function renderHeader() {
    if (!currentList.header) {
        currentList.header = {
            line1: 'ಶ್ರೀ ಮಹಾಗಣಪತಿ ಪ್ರಸನ್ನ ॥ ॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀನಾರಾಯಣ ಪ್ರಸನ್ನ',
            line2: 'ಶ್ರೀ ವೀರಶಕ್ತಿ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ',
            line3: 'ಪೀಣ್ಯ 1ನೇ ಹಂತ, ಬೆಂಗಳೂರು-58.',
            phone: '',
            line4: 'ಶ್ರೀ ಸತ್ಯನಾರಾಯಣಸ್ವಾಮಿ ಪೂಜೆಗೆ ಬೇಕಾಗುವ ಸಾಮಗ್ರಿಗಳು',
            image: ''
        };
    }

    const headerText = document.getElementById('headerText');
    headerText.innerHTML = `
        <p>${currentList.header.line1 || ''}</p>
        <h3>${currentList.header.line2 || ''}</h3>
        <p>${currentList.header.line3 || ''}</p>
        ${currentList.header.phone ? `<p style="font-weight: bold; color: #667eea; font-size: 16px; background: #e0e7ff; padding: 8px; border-radius: 6px; display: inline-block;">📞 ${currentList.header.phone}</p>` : ''}
        <h4>${currentList.header.line4 || ''}</h4>
    `;

    const headerImage = document.getElementById('headerImage');
    const uploadBtn = document.getElementById('uploadImageBtn');
    
    if (currentList.header.image) {
        headerImage.src = currentList.header.image;
        headerImage.style.display = 'block';
        uploadBtn.textContent = '🔄 Change Logo';
    } else {
        headerImage.style.display = 'none';
        uploadBtn.textContent = '📷 Add Logo';
    }
}

// Render items table
function renderItemsTable() {
    const tbody = document.getElementById('itemsTableBody');
    
    if (!currentList || currentList.items.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-state" style="text-align: center; padding: 40px; color: #999;">No items. Click "Add New Item" to start.</td></tr>';
        return;
    }

    console.log('Rendering', currentList.items.length, 'items');
    
    tbody.innerHTML = currentList.items.map(item => `
        <tr class="${item.checked ? 'selected' : ''}" data-id="${item.id}">
            <td class="col-check">
                <input type="checkbox" ${item.checked ? 'checked' : ''} 
                       onchange="toggleItemCheck('${item.id}')" />
            </td>
            <td class="col-item">
                <input type="text" class="item-input" value="${item.name}" 
                       onchange="updateItemName('${item.id}', this.value)" />
            </td>
            <td class="col-qty">
                <select class="qty-select" onchange="updateItemQuantity('${item.id}', this.value)">
                    ${(quantityOptions[item.quantityType] || quantityOptions['Nos']).map(qty => `
                        <option value="${qty}" ${item.quantity === qty ? 'selected' : ''}>${qty} ${item.quantityType}</option>
                    `).join('')}
                </select>
            </td>
            <td class="col-remark">
                <textarea class="remark-input" 
                          onchange="updateItemRemark('${item.id}', this.value)"
                          placeholder="Add remark...">${item.remark || ''}</textarea>
            </td>
            <td class="col-action">
                <button class="btn btn-danger" onclick="deleteItem('${item.id}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Toggle item check
function toggleItemCheck(itemId) {
    const item = currentList.items.find(i => i.id === itemId);
    if (item) {
        item.checked = !item.checked;
        renderItemsTable();
    }
}

// Update item name
function updateItemName(itemId, newName) {
    const item = currentList.items.find(i => i.id === itemId);
    if (item) {
        item.name = newName;
    }
}

// Update item quantity
function updateItemQuantity(itemId, newQuantity) {
    const item = currentList.items.find(i => i.id === itemId);
    if (item) {
        item.quantity = parseFloat(newQuantity);
    }
}

// Update item remark
function updateItemRemark(itemId, newRemark) {
    const item = currentList.items.find(i => i.id === itemId);
    if (item) {
        item.remark = newRemark;
    }
}

// Delete item
function deleteItem(itemId) {
    if (confirm('Delete this item?')) {
        currentList.items = currentList.items.filter(i => i.id !== itemId);
        renderItemsTable();
    }
}

// Add new item
function addNewItem() {
    const modal = document.getElementById('addItemModal');
    modal.style.display = 'flex';
    document.getElementById('modalItemName').value = '';
    document.getElementById('modalItemQtyType').value = 'Nos';
}

// Confirm add item from modal
function confirmAddItem() {
    const name = document.getElementById('modalItemName').value.trim();
    const qtyType = document.getElementById('modalItemQtyType').value;

    if (!name) {
        alert('Please enter item name');
        return;
    }

    currentList.items.push({
        id: generateId(),
        name: name,
        quantityType: qtyType,
        quantity: quantityOptions[qtyType][0],
        checked: false,
        remark: ''
    });

    closeModal('addItemModal');
    renderItemsTable();
}

// Save list
function saveList() {
    if (!currentList) return;

    // Update title
    currentList.title = document.getElementById('listTitleInput').value || 'Untitled List';
    currentList.lastModified = new Date().toISOString();

    // Check if list exists
    const existingIndex = savedLists.findIndex(l => l.id === currentList.id);
    
    if (existingIndex >= 0) {
        savedLists[existingIndex] = currentList;
    } else {
        savedLists.push(currentList);
    }

    // Save to localStorage
    localStorage.setItem('poojaLists', JSON.stringify(savedLists));

    alert('✅ List saved successfully!');
}

// Export to PDF and download to storage
async function exportToPDF() {
    if (!currentList) return;

    const selectedItems = currentList.items.filter(item => item.checked);
    
    if (selectedItems.length === 0) {
        alert('Please select at least one item to export!');
        return;
    }

    // Show loading message
    const originalText = 'Generating PDF...';
    
    try {
        // Create a hidden div with the content
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'position: absolute; left: -9999px; width: 800px; background: white; padding: 40px;';
        
        // Build header HTML if header exists
        let headerHTML = '';
        if (currentList.header && (currentList.header.line1 || currentList.header.line2 || currentList.header.line3 || currentList.header.line4 || currentList.header.image)) {
            headerHTML = `
                <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 25px; display: flex; gap: 20px; align-items: center; border: 3px solid #667eea; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);">
                    ${currentList.header.image ? `
                        <div style="flex-shrink: 0; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                            <img src="${currentList.header.image}" style="max-width: 100px; max-height: 100px; width: 100%; height: 100%; object-fit: contain; border-radius: 8px; background: white; padding: 5px;" />
                        </div>
                    ` : ''}
                    <div style="flex: 1; text-align: center;">
                        ${currentList.header.line1 ? `<p style="margin: 5px 0; color: #667eea; font-size: 15px; font-weight: 600;">${currentList.header.line1}</p>` : ''}
                        ${currentList.header.line2 ? `<h3 style="margin: 10px 0; color: #764ba2; font-size: 20px; font-weight: bold;">${currentList.header.line2}</h3>` : ''}
                        ${currentList.header.line3 ? `<h4 style="margin: 5px 0; color: #555; font-size: 14px;">${currentList.header.line3}</h4>` : ''}
                        ${currentList.header.phone ? `<div style="margin: 10px 0; padding: 10px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 16px; font-weight: bold; border-radius: 8px; display: inline-block; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);">📞 ${currentList.header.phone}</div>` : ''}
                        ${currentList.header.line4 ? `<h4 style="margin: 8px 0; color: #667eea; font-size: 15px; font-weight: bold;">${currentList.header.line4}</h4>` : ''}
                    </div>
                </div>
            `;
        }
        
        contentDiv.innerHTML = `
            <div style="font-family: Arial, sans-serif;">
                ${headerHTML}
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px; border: 2px solid #667eea; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);">
                    <thead>
                        <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                            <th style="padding: 14px; text-align: left; border-bottom: 2px solid #667eea; width: 50px; color: white; font-weight: bold;">No.</th>
                            <th style="padding: 14px; text-align: left; border-bottom: 2px solid #667eea; color: white; font-weight: bold;">Item Name</th>
                            <th style="padding: 14px; text-align: left; border-bottom: 2px solid #667eea; width: 150px; color: white; font-weight: bold;">Quantity</th>
                        </tr>
                    </thead>
                    <tbody style="background: white;">
                        ${selectedItems.map((item, index) => `
                            <tr style="border-bottom: 1px solid #e0e7ff;">
                                <td style="padding: 12px; text-align: center; color: #667eea; font-weight: bold;">${index + 1}</td>
                                <td style="padding: 12px;">
                                    <div style="font-weight: bold; color: #333;">${item.name}</div>
                                    ${item.remark ? `<div style="font-size: 12px; color: #666; font-style: italic; margin-top: 5px;">Note: ${item.remark}</div>` : ''}
                                </td>
                                <td style="padding: 12px; font-weight: bold; color: #764ba2;">${item.quantity} ${item.quantityType}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        document.body.appendChild(contentDiv);
        
        // Generate PDF using html2canvas and jsPDF
        const canvas = await html2canvas(contentDiv, {
            scale: 2,
            useCORS: true,
            logging: false
        });
        
        document.body.removeChild(contentDiv);
        
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Save the PDF
        const filename = `${currentList.title.replace(/[^a-z0-9]/gi, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        pdf.save(filename);
        
        alert('✅ PDF downloaded to your Downloads folder!');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
    }
}

// Share to WhatsApp - sends text list only
async function shareToWhatsApp() {
    if (!currentList) return;

    const selectedItems = currentList.items.filter(item => item.checked);
    
    if (selectedItems.length === 0) {
        alert('Please select at least one item to share!');
        return;
    }

    // Show loading message
    const originalText = 'Generating PDF...';    try {
        // Create a hidden div with the content
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'position: absolute; left: -9999px; width: 800px; background: white; padding: 40px;';
        
        // Build header HTML if header exists
        let headerHTML = '';
        if (currentList.header && (currentList.header.line1 || currentList.header.line2 || currentList.header.line3 || currentList.header.line4 || currentList.header.image)) {
            headerHTML = `
                <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 25px; display: flex; gap: 20px; align-items: center; border: 3px solid #667eea; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);">
                    ${currentList.header.image ? `
                        <div style="flex-shrink: 0; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                            <img src="${currentList.header.image}" style="max-width: 100px; max-height: 100px; width: 100%; height: 100%; object-fit: contain; border-radius: 8px; background: white; padding: 5px;" />
                        </div>
                    ` : ''}
                    <div style="flex: 1; text-align: center;">
                        ${currentList.header.line1 ? `<p style="margin: 5px 0; color: #667eea; font-size: 15px; font-weight: 600;">${currentList.header.line1}</p>` : ''}
                        ${currentList.header.line2 ? `<h3 style="margin: 10px 0; color: #764ba2; font-size: 20px; font-weight: bold;">${currentList.header.line2}</h3>` : ''}
                        ${currentList.header.line3 ? `<h4 style="margin: 5px 0; color: #555; font-size: 14px;">${currentList.header.line3}</h4>` : ''}
                        ${currentList.header.phone ? `<div style="margin: 10px 0; padding: 10px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 16px; font-weight: bold; border-radius: 8px; display: inline-block; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);">📞 ${currentList.header.phone}</div>` : ''}
                        ${currentList.header.line4 ? `<h4 style="margin: 8px 0; color: #667eea; font-size: 15px; font-weight: bold;">${currentList.header.line4}</h4>` : ''}
                    </div>
                </div>
            `;
        }
        
        contentDiv.innerHTML = `
            <div style="font-family: Arial, sans-serif;">
                ${headerHTML}
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px; border: 2px solid #667eea; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);">
                    <thead>
                        <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                            <th style="padding: 14px; text-align: left; border-bottom: 2px solid #667eea; width: 50px; color: white; font-weight: bold;">No.</th>
                            <th style="padding: 14px; text-align: left; border-bottom: 2px solid #667eea; color: white; font-weight: bold;">Item Name</th>
                            <th style="padding: 14px; text-align: left; border-bottom: 2px solid #667eea; width: 150px; color: white; font-weight: bold;">Quantity</th>
                        </tr>
                    </thead>
                    <tbody style="background: white;">
                        ${selectedItems.map((item, index) => `
                            <tr style="border-bottom: 1px solid #e0e7ff;">
                                <td style="padding: 12px; text-align: center; color: #667eea; font-weight: bold;">${index + 1}</td>
                                <td style="padding: 12px;">
                                    <div style="font-weight: bold; color: #333;">${item.name}</div>
                                    ${item.remark ? `<div style="font-size: 12px; color: #666; font-style: italic; margin-top: 5px;">Note: ${item.remark}</div>` : ''}
                                </td>
                                <td style="padding: 12px; font-weight: bold; color: #764ba2;">${item.quantity} ${item.quantityType}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        document.body.appendChild(contentDiv);
        
        // Generate PDF using html2canvas and jsPDF
        const canvas = await html2canvas(contentDiv, {
            scale: 2,
            useCORS: true,
            logging: false
        });
        
        document.body.removeChild(contentDiv);
        
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Convert PDF to blob for sharing
        const pdfBlob = pdf.output('blob');
        const filename = `${currentList.title.replace(/[^a-z0-9]/gi, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        
        // Try to use Web Share API (works on mobile)
        if (navigator.share) {
            try {
                const file = new File([pdfBlob], filename, { type: 'application/pdf' });
                const shareData = {
                    files: [file]
                };
                
                // Check if we can share files
                if (navigator.canShare && navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                    return;
                }
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.log('Web Share API failed, falling back to download method');
                } else {
                    return; // User cancelled the share
                }
            }
        }
        
        // Fallback: Download PDF and provide instructions
        pdf.save(filename);
        
        alert('📥 PDF has been downloaded!\n\n📲 To share on WhatsApp:\n1. Open WhatsApp\n2. Select a chat\n3. Click the 📎 attachment button\n4. Choose "Document"\n5. Select the downloaded PDF file\n6. Send!');
        
    } catch (error) {
        console.error('Error sharing to WhatsApp:', error);
        alert('Error generating PDF. Please try again.');
    }
}

// Enable title editing
function enableTitleEdit() {
    const input = document.getElementById('listTitleInput');
    input.disabled = false;
    input.focus();
    input.select();
}

// Open edit header modal
function openEditHeaderModal() {
    if (!currentList) return;
    
    // Populate modal with current header values
    document.getElementById('headerLine1').value = currentList.header.line1 || '';
    document.getElementById('headerLine2').value = currentList.header.line2 || '';
    document.getElementById('headerLine3').value = currentList.header.line3 || '';
    document.getElementById('headerPhone').value = currentList.header.phone || '';
    document.getElementById('headerLine4').value = currentList.header.line4 || '';
    
    // Show modal
    document.getElementById('editHeaderModal').style.display = 'flex';
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Check if it's an image
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
    }
    
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('Image size should be less than 2MB');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        // Save the base64 image to current list
        if (!currentList.header) {
            currentList.header = {
                line1: 'ಶ್ರೀ ಮಹಾಗಣಪತಿ ಪ್ರಸನ್ನ ॥ ॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀನಾರಾಯಣ ಪ್ರಸನ್ನ',
                line2: 'ಶ್ರೀ ವೀರಶಕ್ತಿ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ',
                line3: 'ಪೀಣ್ಯ 1ನೇ ಹಂತ, ಬೆಂಗಳೂರು-58.',
                phone: '',
                line4: 'ಶ್ರೀ ಸತ್ಯನಾರಾಯಣಸ್ವಾಮಿ ಪೂಜೆಗೆ ಬೇಕಾಗುವ ಸಾಮಗ್ರಿಗಳು',
                image: ''
            };
        }
        currentList.header.image = e.target.result;
        
        // Re-render the header to show the new image
        renderHeader();
        
        // Clear the input so the same file can be selected again if needed
        event.target.value = '';
    };
    reader.readAsDataURL(file);
}

// Save header changes
function saveHeaderChanges() {
    if (!currentList) return;
    
    // Update header with values from modal
    currentList.header.line1 = document.getElementById('headerLine1').value;
    currentList.header.line2 = document.getElementById('headerLine2').value;
    currentList.header.line3 = document.getElementById('headerLine3').value;
    currentList.header.phone = document.getElementById('headerPhone').value;
    currentList.header.line4 = document.getElementById('headerLine4').value;
    
    // Close modal
    closeModal('editHeaderModal');
    
    // Re-render header to show updated text
    renderHeader();
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Generate unique ID
function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

// Attach event listeners
function attachEventListeners() {
    // Home screen
    document.getElementById('createNewListBtn').addEventListener('click', createNewList);

    // Editor screen
    document.getElementById('backBtn').addEventListener('click', () => {
        if (confirm('Any unsaved changes will be lost. Continue?')) {
            showHomeScreen();
        }
    });

    document.getElementById('editTitleBtn').addEventListener('click', enableTitleEdit);
    
    document.getElementById('addNewItemBtn').addEventListener('click', addNewItem);
    
    document.getElementById('saveListBtn').addEventListener('click', saveList);
    
    document.getElementById('exportPdfBtn').addEventListener('click', exportToPDF);
    
    document.getElementById('shareListBtn').addEventListener('click', shareToWhatsApp);

    // Add item modal
    document.getElementById('modalAddBtn').addEventListener('click', confirmAddItem);
    
    document.getElementById('modalCancelBtn').addEventListener('click', () => {
        closeModal('addItemModal');
    });

    document.getElementById('modalItemName').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            confirmAddItem();
        }
    });

    // Header editing
    document.getElementById('editHeaderBtn').addEventListener('click', openEditHeaderModal);
    
    document.getElementById('uploadImageBtn').addEventListener('click', () => {
        document.getElementById('imageInput').click();
    });

    document.getElementById('imageInput').addEventListener('change', handleImageUpload);
    
    document.getElementById('saveHeaderBtn').addEventListener('click', saveHeaderChanges);
    
    document.getElementById('cancelHeaderBtn').addEventListener('click', () => {
        closeModal('editHeaderModal');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
