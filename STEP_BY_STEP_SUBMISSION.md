# 🚀 Complete Play Store Submission - Step by Step

## 📋 TABLE OF CONTENTS

1. [Prerequisites](#prerequisites)
2. [Build APK/AAB](#build-apkaab)
3. [Create Play Store App](#create-play-store-app)
4. [Fill Store Listing](#fill-store-listing)
5. [Upload Assets](#upload-assets)
6. [Content Rating](#content-rating)
7. [Submit for Review](#submit-for-review)
8. [Monitor Status](#monitor-status)
9. [Troubleshooting](#troubleshooting)

---

## ✅ PREREQUISITES

### What You Need:
```
✓ Google Play Developer Account ($25 paid)
✓ Node.js & npm installed
✓ Expo CLI installed
✓ Google account
✓ AAB file (built from EAS)
✓ App Icon (512×512 PNG)
✓ 5 Screenshots (1080×1920 PNG each)
✓ Feature Graphic (1024×500 PNG/JPG)
✓ Privacy Policy URL
✓ Terms of Service URL
```

---

## 🏗️ BUILD APK/AAB

### Step 1: Install EAS CLI

```bash
# Install globally
npm install -g eas-cli

# Verify installation
eas --version
```

### Step 2: Login to Expo

```bash
eas login
```

Enter your Expo credentials (or create new account at https://expo.dev)

### Step 3: Configure Build

```bash
# In your Asraisaya project directory
cd ~/path/to/Asraisaya

# Configure EAS build
eas build:configure
```

Select:
- Platform: Android
- Build type: AAB (for Play Store)

### Step 4: Build AAB File

```bash
# Build for Play Store (AAB format - recommended)
eas build --platform android --type aab

# Or build APK for testing
eas build --platform android --type apk
```

**⏳ Wait 10-15 minutes** for the build to complete

### Step 5: Download AAB

After build completes:
1. Visit https://expo.dev/builds
2. Find your build in the list
3. Download AAB file
4. Save it somewhere safe (e.g., `~/Downloads/Asraisaya.aab`)

---

## 🎮 CREATE PLAY STORE APP

### Step 1: Go to Play Store Console

```
https://play.google.com/console
```

### Step 2: Login

Use your Google account (hatxaiyasone865@gmail.com)

### Step 3: Create New App

1. Click **"All Apps"** (left sidebar)
2. Click **"Create app"** button
3. Fill in details:

```
App name: Asraisaya
Default language: English
App or Game: Game
Category: Game > Casual
Content rating: Everyone (if no mature content)
```

4. Click **"Create app"**

---

## 📝 FILL STORE LISTING

### Step 1: Go to Store Listing

1. Left sidebar → **"Store listing"**
2. Fill in all required fields

### Step 2: Add App Icon

1. Scroll to **"Icon"**
2. Click **"Upload"**
3. Select your `icon-512.png` file
4. **Note:** Size must be exactly 512×512 PNG

### Step 3: Add Feature Graphic (Optional but Recommended)

1. Click **"Feature graphic"**
2. Upload your `feature-graphic.png`
3. **Note:** Size must be 1024×500 PNG/JPG

### Step 4: Add Title & Description

#### Title (50 characters max):
```
Asraisaya - Quiz Challenge
```

#### Short Description (80 characters max):
```
Play multiplayer quizzes, climb the leaderboard & win rewards! 🎮
```

#### Full Description (4000 characters max):

Copy from `PLAY_STORE_LISTING.md` file in repository

### Step 5: Add Contact Information

1. Scroll to **"Contact details"**
2. Email: `hatxaiyasone865@gmail.com`
3. Website: (optional) GitHub URL or your website
4. Phone: (optional)

### Step 6: Privacy Policy & Terms

1. Go to **"Policies"** (left sidebar)
2. Privacy Policy URL:
   ```
   https://github.com/hatxaiyasone865-star/Asraisaya/blob/develop/PRIVACY_POLICY.md
   ```
3. Terms of Service URL:
   ```
   https://github.com/hatxaiyasone865-star/Asraisaya/blob/develop/TERMS_OF_SERVICE.md
   ```

---

## 📸 UPLOAD ASSETS

### Step 1: Upload Screenshots

1. Back to **"Store listing"**
2. Scroll to **"Screenshots"**
3. Click **"Add screenshot"** (5 times)
4. Upload these in order:
   - `screenshot-1-home.png` - Home Screen
   - `screenshot-2-quiz.png` - Quiz Gameplay
   - `screenshot-3-leaderboard.png` - Leaderboard
   - `screenshot-4-multiplayer.png` - Multiplayer
   - `screenshot-5-rewards.png` - Rewards/Profile

**Note:** Each screenshot must be exactly 1080×1920 PNG

### Step 2: Add Captions (Optional)

For each screenshot, click **"Add description"** and add:

1. "Welcome to Asraisaya! Start playing now."
2. "Answer questions and earn points. Beat the timer!"
3. "Compete with players worldwide and climb the leaderboard."
4. "Create rooms and challenge your friends in real-time!"
5. "Claim daily rewards and earn achievements."

### Step 3: Save Changes

Click **"Save draft"** at the top

---

## ⭐ CONTENT RATING

### Step 1: Go to Content Rating

1. Left sidebar → **"Content rating"**
2. Click **"Start questionnaire"** (or "Manage")

### Step 2: Answer Questions

Answer "No" to these (typical answers):
- [ ] Violence: **No**
- [ ] Sexual content: **No**
- [ ] Profanity: **No**
- [ ] Alcohol/Tobacco: **No**
- [ ] Gambling: **No**
- [ ] Scary content: **No**

### Step 3: Get Rating

After completing questionnaire:
- You'll get **"Everyone"** rating
- Click **"Save"** or **"Apply"**

---

## 📱 UPLOAD APK/AAB FILE

### Step 1: Go to App Releases

1. Left sidebar → **"Release" → "Production"**
2. Click **"Create new release"** button

### Step 2: Upload AAB File

1. Click **"Upload"** in AAB section
2. Select your `Asraisaya.aab` file (from EAS build)
3. Wait for upload to complete
4. System will analyze APK automatically

### Step 3: Fill Release Notes

1. In **"Release notes"** field, add:
   ```
   Version 1.0.0 - Initial Release
   
   🎮 Features:
   - Solo Quiz Mode with 4 difficulty levels
   - Multiplayer Mode (up to 4 players)
   - Global Leaderboard System
   - Daily Rewards
   - 40+ Quiz Questions
   - Multiple Categories
   - Social Sharing
   - Achievement Badges
   
   🐛 Fixes:
   - Initial release
   ```

### Step 4: Review Release

1. Click **"Review release"**
2. Check all information is correct
3. Check for warnings (resolve if any)
4. Click **"Rollout to Production"**

---

## 📊 PRICING & DISTRIBUTION

### Step 1: Set Pricing

1. Left sidebar → **"Pricing & distribution"**
2. Price type: **"Free"**
3. Target countries: **"All countries"** (or select specific)

### Step 2: Device Categories

1. Select:
   - [x] Phones
   - [x] Tablets
   - [ ] Wear OS (optional)
   - [ ] Android TV (optional)

### Step 3: Save

Click **"Save"** or **"Save changes"**

---

## ✅ FINAL REVIEW BEFORE SUBMITTING

### Checklist:

- [ ] App name is correct
- [ ] Description is complete and accurate
- [ ] All required screenshots uploaded (5 × 1080×1920)
- [ ] App icon uploaded (512×512)
- [ ] Feature graphic uploaded (1024×500)
- [ ] Privacy Policy URL is valid and accessible
- [ ] Terms of Service URL is valid and accessible
- [ ] Contact email is correct
- [ ] Content rating completed (Everyone)
- [ ] APK/AAB file uploaded and analyzed
- [ ] Release notes filled
- [ ] Price set to Free
- [ ] Target countries selected
- [ ] No warnings or errors

---

## 🚀 SUBMIT FOR REVIEW

### Step 1: Final Review

1. Left sidebar → **"Release" → "Production"**
2. Verify all information in "Release summary"
3. Check for any red warnings

### Step 2: Submit

1. Click **"Review release"** (if not already done)
2. Review one more time
3. Click **"Rollout to Production"**
4. A dialog appears asking to confirm
5. Click **"Rollout"** to submit

### Step 3: Accept Agreements

1. You may see Google Play policies agreement
2. Read and accept all agreements
3. Click **"Confirm"** or **"Accept"**

### Step 4: Submitted!

You'll see:
- Status: "Reviewing" (in yellow/orange)
- Timeline: Usually 1-3 hours for first submission

---

## 📊 MONITOR SUBMISSION STATUS

### Check Status:

1. Go to **"Release management"** → **"Production"**
2. Look at "Release" status:
   - 🟡 **Reviewing**: App is being reviewed (1-3 hours)
   - 🟢 **Live on Google Play**: App is published! ✅
   - 🔴 **Rejected**: Need to fix and resubmit

### After Approval:

1. Status changes to **"Live on Google Play"**
2. Your app link will be:
   ```
   https://play.google.com/store/apps/details?id=com.asraisaya.quiz
   ```
3. It may take a few hours to appear in search results
4. Share the link!

---

## ⚠️ TROUBLESHOOTING

### ❌ Build Failed

**Problem:** EAS build failed

**Solutions:**
1. Check EAS logs: `eas build --latest`
2. Make sure `app.json` is correct
3. Check Firebase & AdMob configs
4. Try building again: `eas build --platform android --type aab`

### ❌ Upload Failed

**Problem:** Can't upload AAB to Play Store

**Solutions:**
1. Verify AAB file exists and is valid
2. Check file is not corrupted: `ls -lh Asraisaya.aab`
3. Try uploading again
4. Clear browser cache and try again

### ❌ App Rejected

**Problem:** App was rejected after submission

**Solutions:**
1. Read rejection reason carefully
2. Check Google Play Policies
3. Fix the issue
4. Increment version code in `app.json`:
   ```json
   "versionCode": 2
   ```
5. Build new APK/AAB
6. Submit again

**Common Rejection Reasons:**
- Incomplete Privacy Policy
- Ads too intrusive
- App crashes on start
- Misleading description
- Policy violation

### ❌ App Won't Install

**Problem:** App crashes when opening

**Solutions:**
1. Test on real Android device
2. Check Firebase config is correct
3. Check AdMob config is correct
4. Check AndroidManifest.xml permissions
5. View crashes: `eas device:list` and check logs

---

## 🎉 SUCCESS CHECKLIST

Once your app is live:

- [ ] App appears on Play Store
- [ ] Link works: `play.google.com/store/apps/details?id=com.asraisaya.quiz`
- [ ] Screenshots appear correctly
- [ ] Description looks good
- [ ] Can download and install app
- [ ] App launches without crashing
- [ ] All features work
- [ ] Ads display correctly
- [ ] Can play quizzes
- [ ] Leaderboard works
- [ ] Can share scores

---

## 📈 AFTER LAUNCH

### Week 1:
- Monitor crash reports
- Fix critical bugs immediately
- Respond to reviews
- Track downloads

### Week 2-4:
- Add new quiz questions
- Fix reported issues
- Add new features
- Engage with community

### Month 2+:
- Regular updates every 2 weeks
- New content monthly
- Listen to user feedback
- Improve based on reviews
- Market on social media

---

## 🆘 NEED HELP?

**Google Play Support**: https://support.google.com/googleplay

**Common Questions**:
- Q: How long does review take?
  A: Usually 1-3 hours, sometimes up to 24 hours

- Q: Can I update after launching?
  A: Yes! Build new APK, increment version code, submit again

- Q: How do I fix rejected apps?
  A: Read rejection reason, fix issue, increment version, resubmit

- Q: How much does it cost?
  A: $25 one-time for developer account, then free to publish

---

**🎉 Congratulations on launching your app! 🚀**

**Share your success: #AsraiyayaQuizGame #PlayStore #MobileGaming**
