import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const LandingPage = () => {
  // URL of the image you want to display
  const imageUrl = "https://example.com/path-to-your-image.png";

  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroText}>AI Assistant App</Text>
        <Text style={styles.heroSubText}>
          Create unique images and get personalized mentorship
        </Text>
        {/* Display the image from the URL */}
        <Image source={{ uri: imageUrl }} style={styles.heroImage} />
      </View>
      <View style={styles.featuresSection}>{/* Add your features here */}</View>
      <View style={styles.testimonialsSection}>
        {/* Add testimonials here */}
      </View>
      <View style={styles.ctaSection}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => console.log("CTA Pressed")}
        >
          <Text style={styles.ctaButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  heroSection: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heroSubText: {
    fontSize: 18,
    marginBottom: 20,
  },
  heroImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  featuresSection: {
    padding: 20,
  },
  testimonialsSection: {
    padding: 20,
  },
  ctaSection: {
    padding: 20,
    alignItems: "center",
  },
  ctaButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ctaButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default LandingPage;
