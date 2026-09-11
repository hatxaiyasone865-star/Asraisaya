# Build Configuration for Google Play Store

## Step 1: Install EAS CLI

```bash
npm install -g eas-cli
```

## Step 2: Login to Expo

```bash
eas login
```

## Step 3: Configure EAS Build

```bash
eas build:configure
```

## Step 4: Update app.json with Build Settings

The `app.json` file has been updated with:
- Google Play Store package name: `com.asraisaya.quiz`
- Version code and build number
- Android permissions for internet access

## Step 5: Generate Signing Key (First Time)

```bash
eas build --platform android --auto-submit
```

EAS will automatically generate a signing key for you.

## Step 6: Build APK/AAB

```bash
# Build for Google Play (AAB format - recommended)
eas build --platform android --auto-submit

# Or build APK for testing
eas build --platform android --type apk
```

## Step 7: Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project called "Asraisaya"
3. Add Android app:
   - Package name: `com.asraisaya.quiz`
   - Download `google-services.json`
   - Place it in the project root

## Step 8: Update Firebase Configuration

Update `src/services/FirebaseService.js` with your Firebase credentials:

```javascript
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
```

## Step 9: Set Up Google AdMob

1. Go to [Google AdMob](https://admob.google.com/)
2. Create a new app: "Asraisaya"
3. Create ad units:
   - Banner Ad Unit ID
   - Interstitial Ad Unit ID
   - Rewarded Ad Unit ID
4. Update `src/services/AdMobService.js` with your Ad Unit IDs

## Step 10: Create Google Play Developer Account

1. Go to [Google Play Console](https://play.google.com/console)
2. Pay $25 one-time registration fee
3. Create a new app
4. Fill in app information (use data from `PLAY_STORE_LISTING.md`)

## Step 11: Prepare Screenshots

Create 5 screenshots (1080 × 1920 pixels) showing:
1. Home Screen
2. Quiz Gameplay
3. Leaderboard
4. Multiplayer Mode
5. Rewards/Profile

## Step 12: Prepare App Icon

- Size: 512 × 512 pixels (PNG format)
- Save as: `assets/icon-512.png`
- No rounded corners or transparency

## Step 13: Feature Graphic

- Size: 1024 × 500 pixels (JPG/PNG format)
- Shows app's key features
- Place in `assets/feature-graphic.png`

## Step 14: Submit to Google Play

1. Go to Google Play Console
2. Create a release → Production
3. Upload AAB file from EAS
4. Add screenshots
5. Add description (from `PLAY_STORE_LISTING.md`)
6. Add Privacy Policy URL
7. Add Terms of Service URL
8. Submit for review

**Note**: First submission takes 1-3 hours for review. Subsequent updates take 30-60 minutes.

## Step 15: Monitor App Performance

- Track downloads and ratings
- Monitor crash reports
- Check user feedback
- Update regularly with new features

---

## Important Notes

⚠️ **Before Submission:**
- Test thoroughly on Android devices
- Ensure no crashes or major bugs
- Test all features (quizzes, leaderboard, ads)
- Check battery consumption
- Verify internet connectivity handling
- Test on different screen sizes
- Check memory usage

✅ **After Submission:**
- Monitor reviews and ratings
- Respond to user feedback
- Fix bugs quickly
- Update regularly with new content
- Track analytics

## Troubleshooting

**Build Failed?**
- Check EAS logs: `eas build --latest`
- Ensure all dependencies are installed
- Verify Firebase and AdMob configurations

**App Rejected?**
- Review Play Store policies
- Check policy violation reasons
- Update Privacy Policy and Terms
- Remove any policy-violating content
- Resubmit after fixing issues

**App Won't Upload?**
- Verify signing key is correct
- Check AAB file is valid
- Ensure version code is higher than previous
- Review console for errors

---

**Estimated Timeline:**
- Build APK/AAB: 10-15 minutes
- Set up Firebase: 5 minutes
- Set up AdMob: 5 minutes
- Create Google Play account: 10 minutes
- Prepare assets (icons, screenshots): 30-60 minutes
- First submission review: 1-3 hours
- Total: ~2-3 hours

---

**Good luck launching Asraisaya! 🚀**
