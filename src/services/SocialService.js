// Social Services for Facebook sharing

export const SocialService = {
  shareToFacebook: async (message, appLink) => {
    try {
      // In production, use react-native-share or Facebook SDK
      // For now, this is a placeholder
      const encodedMessage = encodeURIComponent(message);
      const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        appLink
      )}&quote=${encodedMessage}`;
      
      console.log('Share URL:', facebookShareURL);
      // Open the share dialog
      return true;
    } catch (error) {
      console.log('Error sharing to Facebook:', error);
      throw error;
    }
  },

  shareToTwitter: async (message, appLink) => {
    try {
      const encodedMessage = encodeURIComponent(message);
      const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodeURIComponent(
        appLink
      )}`;
      console.log('Share URL:', twitterShareURL);
      return true;
    } catch (error) {
      console.log('Error sharing to Twitter:', error);
      throw error;
    }
  },

  shareToWhatsApp: async (message) => {
    try {
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `whatsapp://send?text=${encodedMessage}`;
      console.log('WhatsApp URL:', whatsappURL);
      return true;
    } catch (error) {
      console.log('Error sharing to WhatsApp:', error);
      throw error;
    }
  },
};

export default SocialService;
