# ⚡ YouTube Z Speed Toggle

A lightweight, distraction-free Chrome extension (Manifest V3) that lets you instantly cycle playback speed on YouTube with a single keystroke: `Z`.

---

## ✨ Features

- ⌨️ **Single Key Shortcut**: Tap <kbd>Z</kbd> anytime to cycle through playback speeds.
- 🚀 **Speed Presets**: Cycles seamlessly through `1.0x` ➔ `1.25x` ➔ `1.5x` ➔ `2.0x`.
- 💬 **Minimal HUD**: Displays a sleek on-screen speed indicator badge at the top-right corner that automatically fades out after 1 second.
- ⚡ **Ultra Lightweight**: Pure Vanilla JavaScript with zero background resource drain and zero dependencies.
- 🔒 **Privacy-Focused**: No data collection, no telemetry, no extra permissions required.

---

## 📥 Installation

Since this extension is loaded as an unpacked developer extension:

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/Dev-dev008/Youtube-z-speed-toggle.git
   ```
2. Open Google Chrome (or any Chromium browser like Brave, Edge, Opera).
3. Navigate to `chrome://extensions` in the address bar.
4. Toggle on **Developer mode** in the top-right corner.
5. Click **Load unpacked** in the top-left corner.
6. Select the folder containing these project files (`manifest.json`, `content.js`, etc.).

---

## 🎮 How to Use

1. Open any video on [YouTube](https://www.youtube.com).
2. Press <kbd>Z</kbd> on your keyboard.
3. The video speed changes immediately and a clean popup indicator shows the current playback rate (`1x`, `1.25x`, `1.5x`, `2x`).

---

## 📂 Project Structure

```text
Youtube-z-speed-toggle/
├── manifest.json   # Chrome extension configuration (Manifest V3)
├── content.js      # Key listener & playback speed controller
├── icon.png        # Extension icon
└── README.md       # Documentation
```

---

## 🛠️ Customization

Want to add your own speed presets (e.g. `2.5x` or `3x`)?
Open `content.js` and edit the `speeds` array:

```javascript
const speeds = [1, 1.25, 1.5, 2, 2.5, 3];
```

---
