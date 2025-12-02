# 🙏 Pooja List Creator

A web-based application for creating and managing pooja (puja) item lists with customizable headers, logos, and PDF export functionality.

## ✨ Features

- **📋 List Management**: Create, save, and manage multiple pooja lists
- **🎨 Customizable Header**: Add temple/organization details with logo
  - 4 customizable text lines (blessing, name, address, purpose)
  - Phone number with highlighting
  - Logo/image upload support
- **📊 Item Management**: 
  - 47 pre-loaded Kannada pooja items
  - Add custom items with quantity types (Gram, Kg, Liter, Nos, Maru, Types, Rs, Other)
  - Type-specific quantity dropdowns
  - Checkbox selection for items
  - Remarks field for each item
- **💾 Local Storage**: All data saved in browser (no database needed)
- **📱 Mobile Friendly**: Responsive design works on phones and tablets
- **📄 PDF Export**: Generate colorful PDFs with headers and logos
- **📲 WhatsApp Sharing**: Export to PDF and share via WhatsApp

## 🚀 Demo

Visit the live demo: [Pooja List Creator](https://yourusername.github.io/listCreator/)

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- [html2canvas](https://html2canvas.hertzen.com/) - HTML to canvas rendering
- [jsPDF](https://github.com/parallax/jsPDF) - PDF generation
- LocalStorage API for data persistence

## 📦 Installation

### Option 1: GitHub Pages (Recommended)

1. Fork this repository
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. Your site will be published at `https://yourusername.github.io/listCreator/`

### Option 2: Local Hosting

1. Clone the repository:
```bash
git clone https://github.com/yourusername/listCreator.git
cd listCreator
```

2. Start a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server
```

3. Open http://localhost:8000 in your browser

## 📖 Usage

1. **Create a New List**: Click "Create New List" on the home screen
2. **Edit Header**: Click "✏️ Edit Header" to customize temple details and upload logo
3. **Select Items**: Check the boxes for items you need
4. **Set Quantities**: Choose quantity from the dropdown for each item
5. **Add Remarks**: Add any special notes in the remarks column
6. **Add Custom Items**: Click "+ Add New Item" to add items not in the default list
7. **Save**: Click "💾 Save" to save your list
8. **Export**: Click "📤 Share" to generate PDF and share via WhatsApp

## 📁 File Structure

```
listCreator/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Application logic
├── items.json          # Default pooja items (47 items)
└── README.md           # Documentation
```

## 🎨 Customization

### Default Items
Edit `items.json` to customize the default pooja items:
```json
[
  { "name": "ಅರಿಶಿನ-ಕುಂಕುಮ", "quantityType": "Gram" },
  { "name": "ಊದುಬತ್ತಿ", "quantityType": "Nos" }
]
```

### Header Defaults
Edit `script.js` to change default header text:
```javascript
header: {
  line1: 'Your blessing text',
  line2: 'Your temple name',
  line3: 'Your address',
  phone: 'Your phone',
  line4: 'Your purpose text'
}
```

### Quantity Options
Modify `quantityOptions` object in `script.js` to change available quantities.

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

- Lists are saved automatically in your browser's local storage
- Clear browser data will delete all saved lists
- For best PDF results, ensure images are under 2MB
- Use the phone's native share for WhatsApp on mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created for managing pooja/puja item lists for temples and religious ceremonies.

## 🙏 Acknowledgments

- Default items based on common South Indian pooja requirements
- Kannada language support for regional users
- Inspired by the need for digital list management in temples

---

Made with ❤️ for devotees and temple management
