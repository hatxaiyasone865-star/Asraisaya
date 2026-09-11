# 🎨 Icon & Assets Design Guide

## 📱 App Icon (512×512 PNG)

### Requirements:
```
- Size: 512×512 pixels
- Format: PNG
- No transparency (use solid background)
- No rounded corners
- DPI: 72
- Color mode: RGB
```

### Design Template (Text-based):

```
┌─────────────────────────────────────┐
│                                     │
│        🎮 Game Controller Icon      │
│                                     │
│  Color Scheme (Asraisaya Theme):   │
│  - Primary: #00d4ff (Cyan Blue)     │
│  - Secondary: #1a1a2e (Dark Blue)   │
│  - Accent: #ffd700 (Gold)           │
│                                     │
│  Elements:                          │
│  - Game controller or quiz icon     │
│  - Bright cyan background           │
│  - White text "A" or "Asraisaya"   │
│  - Minimalist design                │
│                                     │
└─────────────────────────────────────┘
```

### How to Create:

**Option 1: Using Canva (Free)**
1. Go to https://www.canva.com
2. Create → App Icon (512×512)
3. Use template or design from scratch
4. Colors: #00d4ff, #1a1a2e, #ffd700
5. Download as PNG

**Option 2: Using Figma (Free)**
1. Go to https://www.figma.com
2. Create new file
3. Frame: 512×512
4. Design using shapes
5. Export as PNG

**Option 3: Professional Service**
- Fiverr.com (budget: $5-50)
- 99designs.com (budget: $100-500)
- Upwork.com (budget: $50-200)

---

## 🖼️ Feature Graphic (1024×500 PNG)

### Requirements:
```
- Size: 1024×500 pixels
- Format: PNG or JPG
- Shows app's key features
- Eye-catching design
- Include text overlay
```

### Design Template:

```
┌────────────────────────────────────────────┐
│                                            │
│  [Background Image - Game Related]        │
│                                            │
│  "ASRAISAYA - Quiz Challenge"  (Large)   │
│  "Play • Compete • Win"        (Medium)   │
│  "Download Now"                (CTA)      │
│                                            │
│  [Bottom: App Logo]                       │
│                                            │
└────────────────────────────────────────────┘
```

### Create Using:
1. **Canva**: Search "Google Play Feature Graphic"
2. **Figma**: Create 1024×500 frame
3. **Photoshop**: 1024×500 canvas
4. **Pixlr**: Free online editor

---

## 📸 Screenshots (1080×1920 PNG) × 5 Images

### Screenshot 1: Home Screen
```
┌──────────────────────┐
│  ASRAISAYA           │
│                      │
│  [User Profile Card] │
│  [Daily Reward]      │
│  [Solo Quiz Button]  │
│  [Multiplayer Button]│
│  [Leaderboard]       │
│  [Profile]           │
│                      │
└──────────────────────┘

Caption: "Welcome to Asraisaya!"
Or: "Start Playing Now!"
```

### Screenshot 2: Quiz Gameplay
```
┌──────────────────────┐
│  Question 1/10       │
│  [Progress Bar]      │
│  [Question Text]     │
│  [Timer: 30s]        │
│  [Score Display]     │
│  [Answer Options]    │
│  [Option A] [Option B]
│  [Option C] [Option D]
│                      │
└──────────────────────┘

Caption: "Answer Questions & Earn Points!"
Or: "Beat the Timer!"
```

### Screenshot 3: Leaderboard
```
┌──────────────────────┐
│  🏆 Leaderboard      │
│                      │
│  [Filter Tabs]       │
│  Global|Friends|Week │
│                      │
│  #1 🏆 Player Name   │
│      5,200 pts       │
│  #2 🥈 Player Name   │
│      4,800 pts       │
│  #3 🥉 Player Name   │
│      4,500 pts       │
│                      │
└──────────────────────┘

Caption: "Compete with Players Worldwide!"
Or: "Climb the Leaderboard!"
```

### Screenshot 4: Multiplayer
```
┌──────────────────────┐
│  Multiplayer Rooms   │
│                      │
│  [Create Room Btn]   │
│  [Join Code Btn]     │
│                      │
│  [Room Card 1]       │
│  General Quiz Battle │
│  2/4 Players         │
│  [Join Button]       │
│                      │
│  [Room Card 2]       │
│  Science Challenge   │
│  3/4 Players         │
│  [Join Button]       │
│                      │
└──────────────────────┘

Caption: "Play with Friends in Real-Time!"
Or: "Challenge Your Friends!"
```

### Screenshot 5: Rewards & Profile
```
┌──────────────────────┐
│  Profile             │
│  [User Avatar]       │
│  Player Level 5      │
│                      │
│  Statistics:         │
│  🎮 100 Games        │
│  🏆 25 Wins          │
│  ⭐ 5 Achievements   │
│                      │
│  Daily Rewards:      │
│  🎁 +100 Points      │
│  📈 Bonus x2         │
│  [Claim Reward]      │
│                      │
└──────────────────────┘

Caption: "Earn Rewards Every Day!"
Or: "Track Your Progress!"
```

---

## 🎬 How to Capture Screenshots

### From Real Device:
```bash
# Android Device
1. Run app on Android device
2. Navigate to each screen
3. Press Power + Volume Down (3 seconds)
4. Screenshot saved to Photos
5. Crop to 1080×1920 if needed
```

### From Android Emulator:
```bash
# Using Expo CLI
expo build:configure
exp client:install:android
# Then take screenshots
```

### Create Mockups (Online):
1. **AppMockUp.com** - Free
2. **Mockuphone.com** - Free
3. **Previewed.app** - Free
4. **Screenshot.rocks** - Free

---

## 🛠️ Resize Screenshots to 1080×1920

### Using Online Tool (Free):
1. Go to https://pixlr.com/x/
2. Upload screenshot
3. Image → Scale Image
4. Width: 1080, Height: 1920
5. Download

### Using Command Line:
```bash
# Install ImageMagick
brew install imagemagick

# Resize image
convert screenshot.png -resize 1080x1920 screenshot-resized.png
```

### Using Online Resizer:
1. https://www.iloveimg.com/resize-image
2. Upload image
3. Width: 1080, Height: 1920
4. Resize & Download

---

## 📋 Asset Checklist

```
☐ App Icon (512×512 PNG)
  - File name: icon-512.png
  - Colors: #00d4ff, #1a1a2e, #ffd700
  - No transparency
  - No rounded corners

☐ Feature Graphic (1024×500 PNG/JPG)
  - File name: feature-graphic.png
  - Shows key features
  - Eye-catching design
  - Readable text

☐ Screenshots (5 × 1080×1920 PNG)
  - Screenshot 1: Home Screen
    File: screenshot-1-home.png
  - Screenshot 2: Quiz Gameplay
    File: screenshot-2-quiz.png
  - Screenshot 3: Leaderboard
    File: screenshot-3-leaderboard.png
  - Screenshot 4: Multiplayer
    File: screenshot-4-multiplayer.png
  - Screenshot 5: Rewards/Profile
    File: screenshot-5-rewards.png

☐ All images in PNG or JPG format
☐ All images have correct dimensions
☐ All images are high quality (no pixelation)
☐ Text is readable
☐ Images represent actual app features
```

---

## 💾 Save Assets in Repository

```bash
# Create assets folder
mkdir -p assets/play-store

# Save files:
# assets/play-store/icon-512.png
# assets/play-store/feature-graphic.png
# assets/play-store/screenshot-1-home.png
# assets/play-store/screenshot-2-quiz.png
# assets/play-store/screenshot-3-leaderboard.png
# assets/play-store/screenshot-4-multiplayer.png
# assets/play-store/screenshot-5-rewards.png
```

---

## 🎨 Color Scheme (Asraisaya Theme)

```
Primary Color: #00d4ff (Cyan Blue)
Secondary Color: #1a1a2e (Dark Blue)
Accent Color: #ffd700 (Gold)
Background: #16213e (Deep Blue)
Text: #ffffff (White)
```

---

## 📥 Upload to Play Store

### In Play Store Console:
1. Store Listing → Graphic Assets
2. Upload App Icon (512×512)
3. Upload Feature Graphic (1024×500)
4. Upload Screenshots (1080×1920) × 5
5. Add captions to screenshots (optional)
6. Save & Continue

---

## ✅ Final Checklist Before Upload

- [ ] App Icon is 512×512 PNG
- [ ] Feature Graphic is 1024×500 PNG/JPG
- [ ] 5 Screenshots are 1080×1920 PNG
- [ ] All images are high quality
- [ ] All images represent actual app
- [ ] Text is readable
- [ ] No copyright issues
- [ ] File sizes are reasonable (<5MB each)

---

**🎨 Ready to design? Use the templates above!**

**Need help? Use free tools like Canva or Figma!**
