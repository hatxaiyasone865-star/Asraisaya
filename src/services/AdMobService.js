import React, { useEffect } from 'react';
import { BannerAd, BannerAdSize, InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';

// Initialize Google Mobile Ads
export const initializeAdMob = () => {
  // Replace with your AdMob App ID
  const adMobAppId = 'ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy';
  
  try {
    // Initialize AdMob
    console.log('Google Mobile Ads initialized');
  } catch (error) {
    console.log('Error initializing AdMob:', error);
  }
};

// Banner Ad Component
export const BannerAdComponent = () => {
  return (
    <BannerAd
      unitId="ca-app-pub-3940256099942544/6300978111" // Test Banner Ad Unit ID
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAds: false,
      }}
    />
  );
};

// Interstitial Ad (Full-screen ad shown between games)
export const showInterstitialAd = async () => {
  const interstitial = InterstitialAd.createForAdRequest(
    'ca-app-pub-3940256099942544/1033173712', // Test Interstitial Ad Unit ID
    {
      requestNonPersonalizedAds: false,
    }
  );

  interstitial.addAdEventListener(AdEventType.LOADED, () => {
    interstitial.show();
  });

  interstitial.load();
};

// Rewarded Ad (User earns points for watching)
export const showRewardedAd = async (onReward) => {
  const rewardedAd = RewardedAd.createForAdRequest(
    'ca-app-pub-3940256099942544/5224354917', // Test Rewarded Ad Unit ID
    {
      requestNonPersonalizedAds: false,
    }
  );

  rewardedAd.addAdEventListener(AdEventType.EARNED_REWARD, (reward) => {
    console.log('User earned reward of:', reward);
    onReward();
  });

  rewardedAd.load();
  rewardedAd.show();
};

export default {
  initializeAdMob,
  BannerAdComponent,
  showInterstitialAd,
  showRewardedAd,
};
