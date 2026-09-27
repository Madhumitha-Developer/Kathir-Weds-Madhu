/* =========================================================
   Kathir & Madhu — site settings
   Edit this file only; index.html reads everything from here.
   ========================================================= */
window.WEDDING_CONFIG = {
  // Public URL after you deploy (used for share links)
  siteUrl: "https://kathir-weds-madhu.vercel.app/",

  // ---- Events (IST, 24h). Times follow the usual order: reception evening, muhurtham next morning.
  events: [
    {
      id: "reception",
      start: "2026-11-15T18:30:00+05:30",
      end:   "2026-11-15T22:00:00+05:30",
      timeLabel: { en: "6:30 PM onwards", ta: "மாலை 6:30 மணி முதல்" }
    },
    {
      id: "wedding",
      start: "2026-11-16T09:30:00+05:30",
      end:   "2026-11-16T10:30:00+05:30",
      timeLabel: { en: "9:30 AM – 10:30 AM", ta: "காலை 9:30 – 10:30 மணி" }
    }
  ],
  // Countdown counts to this event id
  countdownTo: "wedding",

  venue: {
    name: "GS Resort",
    address: "MRXM+VF3, SH 49, Nagapattinam, Therkupoigainallur, Tamil Nadu 611111",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=GS+Resorts+MRXM%2BVF3+Therkupoigainallur+Nagapattinam"
  },

  // ---- Family contacts. Leave phone "" to hide the Call button for that person.
  contacts: {
    groom: {
      family: { en: "Groom's Family", ta: "மணமகன் குடும்பம்" },
      people: [
        { role: { en: "The Groom", ta: "மணமகன்" }, name: "Vicky A", phone: "" },
        { role: { en: "Father of the Groom", ta: "மணமகனின் தந்தை" }, name: "Arumugapandi S", phone: "" },
        { role: { en: "Mother of the Groom", ta: "மணமகனின் தாய்" }, name: "Muthulakshmi A", phone: "" },
        { role: { en: "Brother of the Groom", ta: "மணமகனின் சகோதரர்" }, name: "JothiLingam A", phone: "" }
      ]
    },
    bride: {
      family: { en: "Bride's Family", ta: "மணமகள் குடும்பம்" },
      people: [
        { role: { en: "The Bride", ta: "மணமகள்" }, name: "Madhumitha S", phone: "" },
        { role: { en: "Father of the Bride", ta: "மணமகளின் தந்தை" }, name: "Selvaraj M", phone: "" },
        { role: { en: "Mother of the Bride", ta: "மணமகளின் தாய்" }, name: "Anandhi M", phone: "" },
        { role: { en: "Brother of the Bride", ta: "மணமகளின் சகோதரர்" }, name: "Aakash Raj S", phone: "" }
      ]
    }
  },

  // Background music (plays after the guest taps the seal)
  music: "assets/song.mp3",

  // ---- Photo uploads by guests
  uploads: {
    perDevice: 3,
    // Uploads open only between these moments (IST)
    opensAt:  "2026-11-15T00:00:00+05:30",
    closesAt: "2026-11-17T00:00:00+05:30",
    alwaysOpen: false          // set true while testing
  },

  // ---- Supabase (free tier) for live Wishes + Photo gallery.
  // Leave blank to run in preview mode (wishes/photos stay on the visitor's own device).
  supabase: {
    url: "https://tasekeblhzuqtitmxiyw.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhc2VrZWJsaHp1cXRpdG14aXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0ODg4NTksImV4cCI6MjEwNjA2NDg1OX0.40I3GO-ZRbdB0FclIqCPicMLkuE-2jQfcnv1SjDXT2g",
    bucket: "memories"
  }
};
