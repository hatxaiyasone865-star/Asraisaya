# 🎮 Asraisaya - Play Store Submission Checklist

## ✅ Pre-Submission Checklist

ก่อน Submit ไป Play Store ให้ตรวจสอบสิ่งต่อไปนี้:

### 📱 App Build
- [ ] APK/AAB file ได้รับสำเร็จ
- [ ] ทดสอบแอปบน Android Device จริง
- [ ] ไม่มี Crash หรือ Error
- [ ] Permissions ถูกต้อง (INTERNET, ACCESS_NETWORK_STATE)
- [ ] Firebase Config ถูกต้อง
- [ ] AdMob Config ถูกต้อง

### 🎨 Visual Assets
- [ ] App Icon (512×512 PNG) - ได้รับ
- [ ] Feature Graphic (1024×500 PNG) - ได้รับ
- [ ] Screenshots (1080×1920 PNG) × 5 ภาพ - ได้รับ
- [ ] Preview Video (Optional) - ได้รับ

### 📝 Legal Documents
- [ ] Privacy Policy URL (ครบถ้วน)
- [ ] Terms of Service URL (ครบถ้วน)
- [ ] Contact Email (ถูกต้อง)

### 📋 Store Listing
- [ ] App Title: "Asraisaya - Quiz Challenge"
- [ ] Short Description (80 characters max)
- [ ] Full Description (4000 characters max)
- [ ] Category: Games
- [ ] Content Rating: Everyone
- [ ] Contact Email
- [ ] Website/Support Link

### 🔒 Content Rating
- [ ] ตอบแบบฟอร์ม Content Rating แล้ว
- [ ] Rating: Everyone (ถ้าไม่มี Adult Content)

### 💰 Pricing & Distribution
- [ ] App Type: Free
- [ ] Countries: Select all or specific
- [ ] Release: Ready for Release

### 🎯 Release Management
- [ ] Version Code: 1 (สำหรับ Release แรก)
- [ ] Version Name: 1.0.0
- [ ] Target SDK: API 31+
- [ ] Min SDK: API 21 (Android 5.0)

---

## 🚀 Step-by-Step Submission Process

### Step 1: Build APK/AAB (10-15 minutes)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure
eas build:configure

# Build for Play Store (AAB format)
eas build --platform android --type aab
```

**Output:** `Asraisaya-1.0.0.aab` file

---

### Step 2: Go to Google Play Console

```
https://play.google.com/console
```

1. ล็อกอิน Google Account
2. เลือก "All Apps"
3. คลิก "Create app"

---

### Step 3: Create App

```
App name: Asraisaya
Default language: English
Category: Games
Content rating: Everyone
```

คลิก "Create app"

---

### Step 4: Fill in Store Listing

#### **App Icon**
- Size: 512×512 pixels (PNG)
- No transparency
- Place in app store section

#### **Feature Graphic**
- Size: 1024×500 pixels (PNG/JPG)
- Shows key features
- Optional but recommended

#### **Screenshots** (5 required)
- Size: 1080×1920 pixels (PNG)
- Show: Home, Quiz, Leaderboard, Multiplayer, Rewards
- Add captions/text

#### **App Title**
```
Asraisaya - Quiz Challenge
```

#### **Short Description** (80 chars max)
```
Play multiplayer quizzes, climb the leaderboard & win rewards! 🎮
```

#### **Full Description** (4000 chars max)
```
🎮 ASRAISAYA - The Ultimate Multiplayer Quiz Challenge!

Test your knowledge with Asraisaya, the exciting quiz game that challenges your brain!

✨ KEY FEATURES:

🎯 Solo Quiz Mode
- Challenge yourself with random questions
- 4 difficulty levels
- Instant feedback
- Detailed statistics

👥 Multiplayer Mode
- Play with up to 4 friends
- Create or join rooms
- Real-time competition
- Chat with players

🏆 Leaderboard System
- Global rankings
- Friend rankings  
- Weekly challenges
- Monthly tournaments

💰 Daily Rewards
- Claim free points daily
- Bonus multipliers
- Special events
- Achievement badges

📚 Multiple Categories
- General Knowledge
- Sports
- History
- Science

⚡ Speed Rounds
- 30-second questions
- Extra bonus points
- Compete with top players

🎁 Achievements
- Unlock 50+ achievements
- Earn badges
- Share on social media

🔐 Privacy & Security
- Secure login
- Encrypted data
- No ads in premium
- Completely free

DOWNLOAD NOW and join millions of quiz players!

Asraisaya - Where Knowledge Meets Competition!
```

---

### Step 5: Content Rating

1. ไปที่ "Content rating"
2. คลิก "Start questionnaire"
3. ตอบคำถาม:
   - Violence: No
   - Sexual content: No
   - Profanity: No
   - Alcohol/Tobacco: No
   - etc.
4. ได้ Rating: Everyone

---

### Step 6: Upload APK/AAB

1. ไปที่ "Release" → "Production"
2. คลิก "Create new release"
3. Upload AAB file (ได้จาก EAS Build)
4. Add Release notes:
   ```
   Initial Release
   - New Quiz Game
   - Multiplayer Mode
   - Leaderboard System
   - Daily Rewards
   ```
5. คลิก "Review release"

---

### Step 7: Add Privacy Policy & Terms

1. ไปที่ "Policies"
2. Add "Privacy Policy" URL:
   ```
   https://github.com/hatxaiyasone865-star/Asraisaya/blob/develop/PRIVACY_POLICY.md
   ```
3. Add "Terms of Service" URL:
   ```
   https://github.com/hatxaiyasone865-star/Asraisaya/blob/develop/TERMS_OF_SERVICE.md
   ```

---

### Step 8: Set Target Audience

1. ไปที่ "Audience"
2. Set age:
   - Minimum age: Not set (Everyone)
   - Content rating: Everyone
3. Countries: Select All or specific

---

### Step 9: Set Pricing & Distribution

1. ไปที่ "Pricing & distribution"
2. Set price: **FREE** (ฟรี)
3. Countries: Select all countries
4. Device categories: Phones and Tablets
5. Uncheck "Require ESRB rating" (ถ้ามี)

---

### Step 10: Submit for Review

1. ตรวจสอบทุกอย่าง ✅
2. ไปที่ "Release" → "Production"
3. คลิก "Review and rollout"
4. คลิก "Rollout to Production" (Submit)
5. ตกลง Terms & Conditions
6. คลิก "Submit"

---

## ⏱️ Review Timeline

- **First submission**: 1-3 hours (usually)
- **Subsequent updates**: 30-60 minutes
- **Average**: ~2 hours

---

## ✅ What to Check After Submission

1. ไปที่ Play Store Console
2. ดู "Release management" status
3. รอ Status เปลี่ยนจาก "Reviewing" → "Live on Google Play"
4. ดูลิงก์แอป: `play.google.com/store/apps/details?id=com.asraisaya.quiz`

---

## ❌ Common Rejection Reasons & Solutions

### ❌ Reason: "Incomplete Privacy Policy"
**Solution:**
- Make sure Privacy Policy is complete
- Include contact email
- Mention data collection
- Explain how data is used

### ❌ Reason: "Ads are too intrusive"
**Solution:**
- Don't show ads on first app launch
- Limit ad frequency (1 ad every 3-5 minutes)
- Add "Close" button on interstitial ads
- Allow users to disable ads for $2.99

### ❌ Reason: "Crashes or Force Closes"
**Solution:**
- Test on multiple Android devices
- Check Android version compatibility
- Fix crashes before resubmitting
- Use Firebase Crashlytics to monitor

### ❌ Reason: "Misleading Description"
**Solution:**
- Match description with actual gameplay
- Don't promise features you don't have
- Use screenshots that reflect real gameplay
- Don't claim "Multiplayer" if online multiplayer isn't ready

### ❌ Reason: "Policy Violation"
**Solution:**
- Remove any policy-violating content
- Read Google Play Policies carefully
- Don't collect data from minors
- Don't use deceptive practices

---

## 🎯 Pro Tips for Approval

✅ **Do This:**
- Test thoroughly on real Android devices
- Be honest about features in description
- Respond to user reviews quickly
- Update app regularly
- Follow Google Play Policies strictly
- Use proper Privacy Policy
- Implement proper content rating
- Don't use excessive ads

❌ **Don't Do This:**
- Don't include misleading screenshots
- Don't promise features you don't have
- Don't crash or freeze
- Don't collect data from kids
- Don't use deceptive ads
- Don't copy other apps
- Don't violate intellectual property

---

## 📊 After Launch

### Monitor Performance
1. Check daily downloads
2. Monitor crash reports
3. Read user reviews & feedback
4. Track ratings (aim for 4+ stars)
5. Fix bugs quickly

### Update Strategy
1. Update every 1-2 weeks initially
2. Fix critical bugs within 24 hours
3. Add new content monthly
4. Listen to user feedback
5. Improve based on reviews

### Marketing
1. Share on social media
2. Get reviews from tech blogs
3. Use App Store Optimization (ASO)
4. Run paid ads if budget allows
5. Engage with community

---

## 🆘 Need Help?

If rejected:
1. Read rejection reason carefully
2. Fix the issue
3. Submit again
4. Average 3-5 submissions for first-time apps
5. Don't get discouraged!

---

**🚀 Ready to Submit? Follow the checklist above step-by-step!**

**📧 Need support? Contact: support@asraisaya.com**
