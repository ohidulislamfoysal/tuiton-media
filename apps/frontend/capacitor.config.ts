import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tuitionmedia.app',
  appName: 'TuitionMedia',
  webDir: 'public',
  server: {
    url: 'https://tuitionmedia.vercel.app',
    cleartext: true
  }
};

export default config;