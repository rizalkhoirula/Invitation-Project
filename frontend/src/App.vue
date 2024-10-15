<template>
  <div>
    <h1>QR Code and Barcode Scanner</h1>
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
    ></StreamBarcodeReader>
    <p v-if="decodedText">Decoded Text: {{ decodedText }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { StreamBarcodeReader } from 'vue-barcode-reader';

const decodedText = ref('');

const onDecode = (text) => {
  decodedText.value = text; // Store the decoded text
  console.log(`Decode text from QR code is ${text}`);
  
  // Redirect to the decoded URL
  if (isValidUrl(text)) {
    window.location.href = text; // Redirect to the decoded URL
  } else {
    alert('Decoded text is not a valid URL: ' + text); // Alert if not a valid URL
  }
};

const onLoaded = () => {
  console.log(`Ready to start scanning barcodes`);
};

// Function to check if the decoded text is a valid URL
const isValidUrl = (string) => {
  try {
    new URL(string); // Check if it can be converted to a URL
    return true;
  } catch (_) {
    return false; // Return false if it's not a valid URL
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  margin-top: 20px;
  font-weight: bold;
}
</style>
