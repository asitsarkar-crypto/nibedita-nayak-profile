from pathlib import Path

path = Path(__file__).resolve().parents[1] / "src" / "i18n" / "content.ts"
text = path.read_text(encoding="utf-8")

galleries = {
    "en": """    gallery: {
      eyebrow: 'Moments',
      title: 'In the field',
      intro: 'Leadership, community, and cultural engagements — selected photographs from her public work.',
      items: [
        {
          src: '/images/shivaji-jayanti-puri.png',
          alt: 'Cultural rally for Chhatrapati Shivaji Maharaj Jayanti in Puri',
          caption: 'Chhatrapati Shivaji Maharaj Jayanti cultural rally, Puri — around 5000 participants',
        },
        {
          src: '/images/odisha-women-fest.png',
          alt: 'Odisha Women Fest organised by Sthapana Charitable Trust',
          caption: 'Odisha Women Fest, Bhubaneswar — under her leadership',
        },
        {
          src: '/images/bande-odisha-field.png',
          alt: 'Bande Odisha community engagement in the field',
          caption: 'Chairperson, BANDE ODISHA — with Dept. of Culture, Govt. of Odisha',
        },
        {
          src: '/images/mitti-ka-guman.png',
          alt: 'Mitti Ka Guman honouring personalities of eminence on stage',
          caption: 'Mitti Ka Guman — honouring personalities of eminence',
        },
        {
          src: '/images/iim-sambalpur-scst.png',
          alt: 'Guest speaker at IIM Sambalpur SC-ST Entrepreneurship cohort',
          caption: 'Guest Speaker — SC/ST Entrepreneurship Cohort, IIM Sambalpur',
        },
        {
          src: '/images/iit-sambalpur-faculty.png',
          alt: 'With IIT Sambalpur Director Dr Mahadeo Jaiswal and faculty',
          caption: 'With IIT Sambalpur Director Dr Mahadeo Jaiswal ji and faculty',
        },
        {
          src: '/images/women-producer-kolhapur.png',
          alt: 'With Women Producer Group in Kolhapur Maharashtra',
          caption: 'With Women Producer Group, Kolhapur, Maharashtra',
        },
        {
          src: '/images/literature-books-event.png',
          alt: 'Literature and book presentation with Odia authors',
          caption: 'Culture & literature — book presentation',
        },
        {
          src: '/images/veterans-meeting.png',
          alt: 'Formal meeting with institutional guests',
          caption: 'Institutional dialogue and leadership engagement',
        },
        {
          src: '/images/ceremonial-gathering.png',
          alt: 'Formal ceremonial gathering in an auditorium',
          caption: 'Ceremonial gathering with community leaders',
        },
        {
          src: '/images/folk-culture-night.png',
          alt: 'With folk performers at a night cultural event',
          caption: 'Folk culture and community celebration',
        },
        {
          src: '/images/community-women-night.png',
          alt: 'Community outreach with women at a night gathering',
          caption: 'Grassroots outreach with women leaders',
        },
        {
          src: '/images/spiritual-engagement.png',
          alt: 'Spiritual and cultural engagement at a temple space',
          caption: 'Spiritual and cultural engagement',
        },
      ],
    },""",
    "bn": """    gallery: {
      eyebrow: 'মুহূর্ত',
      title: 'মাঠে ও মঞ্চে',
      intro: 'নেতৃত্ব, সম্প্রদায় ও সাংস্কৃতিক সম্পৃক্ততার নির্বাচিত আলোকচিত্র।',
      items: [
        {
          src: '/images/shivaji-jayanti-puri.png',
          alt: 'পুরীতে ছত্রপতি শিবাজী মহারাজ জয়ন্তী সাংস্কৃতিক র‍্যালি',
          caption: 'ছত্রপতি শিবাজী মহারাজ জয়ন্তী সাংস্কৃতিক র‍্যালি, পুরী — প্রায় ৫০০০ অংশগ্রহণকারী',
        },
        {
          src: '/images/odisha-women-fest.png',
          alt: 'স্থাপনা চ্যারিটেবল ট্রাস্টের ওড়িশা উইমেন ফেস্ট',
          caption: 'ওড়িশা উইমেন ফেস্ট, ভুবনেশ্বর — তাঁর নেতৃত্বে',
        },
        {
          src: '/images/bande-odisha-field.png',
          alt: 'বন্দে ওড়িশা মাঠ পর্যায়ের সম্পৃক্ততা',
          caption: 'চেয়ারপারসন, বন্দে ওড়িশা — সংস্কৃতি বিভাগ, ওড়িশা সরকারের সহায়তায়',
        },
        {
          src: '/images/mitti-ka-guman.png',
          alt: 'মিত্তি কা গুমান অনুষ্ঠানে সম্মাননা',
          caption: 'মিত্তি কা গুমান — বিশিষ্ট ব্যক্তিত্বদের সম্মাননা',
        },
        {
          src: '/images/iim-sambalpur-scst.png',
          alt: 'আইআইএম সম্পলপুরে এসসি-এসটি উদ্যোক্তা কোহর্টে অতিথি বক্তা',
          caption: 'অতিথি বক্তা — এসসি/এসটি উদ্যোক্তা কোহর্ট, আইআইএম সম্পলপুর',
        },
        {
          src: '/images/iit-sambalpur-faculty.png',
          alt: 'আইআইটি সম্পলপুর পরিচালক ডঃ মহাদেও জয়সওয়াল ও অনুষদের সঙ্গে',
          caption: 'আইআইটি সম্পলপুর পরিচালক ডঃ মহাদেও জয়সওয়াল জি ও অনুষদের সঙ্গে',
        },
        {
          src: '/images/women-producer-kolhapur.png',
          alt: 'কলহাপুর মহারাষ্ট্রে নারী উৎপাদক গোষ্ঠীর সঙ্গে',
          caption: 'নারী উৎপাদক গোষ্ঠীর সঙ্গে, কলহাপুর, মহারাষ্ট্র',
        },
        {
          src: '/images/literature-books-event.png',
          alt: 'ওড়িয়া সাহিত্য ও বই উপস্থাপনা',
          caption: 'সংস্কৃতি ও সাহিত্য — বই উপস্থাপনা',
        },
        {
          src: '/images/veterans-meeting.png',
          alt: 'প্রাতিষ্ঠানিক অতিথিদের সঙ্গে আনুষ্ঠানিক বৈঠক',
          caption: 'প্রাতিষ্ঠানিক সংলাপ ও নেতৃত্ব সম্পৃক্ততা',
        },
        {
          src: '/images/ceremonial-gathering.png',
          alt: 'অডিটোরিয়ামে আনুষ্ঠানিক সমাবেশ',
          caption: 'সম্প্রদায় নেতাদের সঙ্গে আনুষ্ঠানিক সমাবেশ',
        },
        {
          src: '/images/folk-culture-night.png',
          alt: 'লোকশিল্পীদের সঙ্গে সাংস্কৃতিক অনুষ্ঠান',
          caption: 'লোকসংস্কৃতি ও সম্প্রদায় উৎসব',
        },
        {
          src: '/images/community-women-night.png',
          alt: 'নারীদের সঙ্গে তৃণমূল সম্পৃক্ততা',
          caption: 'নারী নেতৃত্বের সঙ্গে তৃণমূল সম্পৃক্ততা',
        },
        {
          src: '/images/spiritual-engagement.png',
          alt: 'আধ্যাত্মিক ও সাংস্কৃতিক সম্পৃক্ততা',
          caption: 'আধ্যাত্মিক ও সাংস্কৃতিক সম্পৃক্ততা',
        },
      ],
    },""",
    "hi": """    gallery: {
      eyebrow: 'क्षण',
      title: 'मैदान में',
      intro: 'नेतृत्व, समुदाय और सांस्कृतिक जुड़ाव की चयनित तस्वीरें।',
      items: [
        {
          src: '/images/shivaji-jayanti-puri.png',
          alt: 'पुरी में छत्रपति शिवाजी महाराज जयंती सांस्कृतिक रैली',
          caption: 'छत्रपति शिवाजी महाराज जयंती सांस्कृतिक रैली, पुरी — लगभग ५००० प्रतिभागी',
        },
        {
          src: '/images/odisha-women-fest.png',
          alt: 'स्थापना चैरिटेबल ट्रस्ट का ओडिशा विमेन फेस्ट',
          caption: 'ओडिशा विमेन फेस्ट, भुवनेश्वर — उनके नेतृत्व में',
        },
        {
          src: '/images/bande-odisha-field.png',
          alt: 'बंदे ओडिशा क्षेत्रीय जुड़ाव',
          caption: 'अध्यक्ष, बंदे ओडिशा — संस्कृति विभाग, ओडिशा सरकार के सहयोग से',
        },
        {
          src: '/images/mitti-ka-guman.png',
          alt: 'मिट्टी का गुमान समारोह में सम्मान',
          caption: 'मिट्टी का गुमान — विभूतियों का सम्मान',
        },
        {
          src: '/images/iim-sambalpur-scst.png',
          alt: 'आईआईएम संबलपुर में एससी-एसटी उद्यमिता कोहोर्ट में अतिथि वक्ता',
          caption: 'अतिथि वक्ता — एससी/एसटी उद्यमिता कोहोर्ट, आईआईएम संबलपुर',
        },
        {
          src: '/images/iit-sambalpur-faculty.png',
          alt: 'आईआईटी संबलपुर निदेशक डॉ. महादेव जयसवाल और संकाय के साथ',
          caption: 'आईआईटी संबलपुर निदेशक डॉ. महादेव जयसवाल जी और संकाय के साथ',
        },
        {
          src: '/images/women-producer-kolhapur.png',
          alt: 'कोल्हापुर महाराष्ट्र में महिला उत्पादक समूह के साथ',
          caption: 'महिला उत्पादक समूह के साथ, कोल्हापुर, महाराष्ट्र',
        },
        {
          src: '/images/literature-books-event.png',
          alt: 'ओडिया साहित्य और पुस्तक प्रस्तुति',
          caption: 'संस्कृति एवं साहित्य — पुस्तक प्रस्तुति',
        },
        {
          src: '/images/veterans-meeting.png',
          alt: 'संस्थागत अतिथियों के साथ औपचारिक बैठक',
          caption: 'संस्थागत संवाद और नेतृत्व जुड़ाव',
        },
        {
          src: '/images/ceremonial-gathering.png',
          alt: 'ऑडिटोरियम में औपचारिक सभा',
          caption: 'सामुदायिक नेताओं के साथ औपचारिक सभा',
        },
        {
          src: '/images/folk-culture-night.png',
          alt: 'लोक कलाकारों के साथ सांस्कृतिक कार्यक्रम',
          caption: 'लोक संस्कृति और सामुदायिक उत्सव',
        },
        {
          src: '/images/community-women-night.png',
          alt: 'महिलाओं के साथ जमीनी जुड़ाव',
          caption: 'महिला नेतृत्व के साथ जमीनी जुड़ाव',
        },
        {
          src: '/images/spiritual-engagement.png',
          alt: 'आध्यात्मिक और सांस्कृतिक जुड़ाव',
          caption: 'आध्यात्मिक और सांस्कृतिक जुड़ाव',
        },
      ],
    },""",
    "or": """    gallery: {
      eyebrow: 'ମୁହୂର୍ତ୍ତ',
      title: 'କ୍ଷେତ୍ରରେ',
      intro: 'ନେତୃତ୍ୱ, ସମ୍ପ୍ରଦାୟ ଓ ସାଂସ୍କୃତିକ ସଂପୃକ୍ତିର ମନୋନୀତ ଫଟୋ।',
      items: [
        {
          src: '/images/shivaji-jayanti-puri.png',
          alt: 'ପୁରୀରେ ଛତ୍ରପତି ଶିବାଜୀ ମହାରାଜ ଜୟନ୍ତୀ ସାଂସ୍କୃତିକ ରାଲି',
          caption: 'ଛତ୍ରପତି ଶିବାଜୀ ମହାରାଜ ଜୟନ୍ତୀ ସାଂସ୍କୃତିକ ରାଲି, ପୁରୀ — ପ୍ରାୟ ୫୦୦୦ ଅଂଶଗ୍ରହଣକାରୀ',
        },
        {
          src: '/images/odisha-women-fest.png',
          alt: 'ସ୍ଥାପନା ଚ୍ୟାରିଟେବଲ୍ ଟ୍ରଷ୍ଟର ଓଡ଼ିଶା ୱୁମେନ୍ ଫେଷ୍ଟ',
          caption: 'ଓଡ଼ିଶା ୱୁମେନ୍ ଫେଷ୍ଟ, ଭୁବନେଶ୍ୱର — ତାଙ୍କ ନେତୃତ୍ୱରେ',
        },
        {
          src: '/images/bande-odisha-field.png',
          alt: 'ବନ୍ଦେ ଓଡ଼ିଶା କ୍ଷେତ୍ରୀୟ ସଂପୃକ୍ତି',
          caption: 'ଅଧ୍ୟକ୍ଷା, ବନ୍ଦେ ଓଡ଼ିଶା — ସଂସ୍କୃତି ବିଭାଗ, ଓଡ଼ିଶା ସରକାରଙ୍କ ସହଯୋଗରେ',
        },
        {
          src: '/images/mitti-ka-guman.png',
          alt: 'ମିଟ୍ଟି କା ଗୁମାନ ସମାରୋହରେ ସମ୍ମାନ',
          caption: 'ମିଟ୍ଟି କା ଗୁମାନ — ବିଶିଷ୍ଟ ବ୍ୟକ୍ତିତ୍ୱଙ୍କ ସମ୍ମାନ',
        },
        {
          src: '/images/iim-sambalpur-scst.png',
          alt: 'ଆଇଆଇଏମ୍ ସମ୍ବଲପୁରରେ ଏସସି-ଏସଟି ଉଦ୍ୟୋଗୀ କୋହର୍ଟରେ ଅତିଥି ବକ୍ତା',
          caption: 'ଅତିଥି ବକ୍ତା — ଏସସି/ଏସଟି ଉଦ୍ୟୋଗୀ କୋହର୍ଟ, ଆଇଆଇଏମ୍ ସମ୍ବଲପୁର',
        },
        {
          src: '/images/iit-sambalpur-faculty.png',
          alt: 'ଆଇଆଇଟି ସମ୍ବଲପୁର ନିର୍ଦ୍ଦେଶକ ଡଃ ମହାଦେଓ ଜୟସୱାଲ ଓ ଅଧ୍ୟାପକଙ୍କ ସହ',
          caption: 'ଆଇଆଇଟି ସମ୍ବଲପୁର ନିର୍ଦ୍ଦେଶକ ଡଃ ମହାଦେଓ ଜୟସୱାଲ ଜି ଓ ଅଧ୍ୟାପକଙ୍କ ସହ',
        },
        {
          src: '/images/women-producer-kolhapur.png',
          alt: 'କୋଲହାପୁର ମହାରାଷ୍ଟ୍ରରେ ମହିଳା ଉତ୍ପାଦକ ଗୋଷ୍ଠୀ ସହ',
          caption: 'ମହିଳା ଉତ୍ପାଦକ ଗୋଷ୍ଠୀ ସହ, କୋଲହାପୁର, ମହାରାଷ୍ଟ୍ର',
        },
        {
          src: '/images/literature-books-event.png',
          alt: 'ଓଡ଼ିଆ ସାହିତ୍ୟ ଓ ବହି ଉପସ୍ଥାପନା',
          caption: 'ସଂସ୍କୃତି ଓ ସାହିତ୍ୟ — ବହି ଉପସ୍ଥାପନା',
        },
        {
          src: '/images/veterans-meeting.png',
          alt: 'ପ୍ରାତିଷ୍ଠାନିକ ଅତିଥିଙ୍କ ସହ ଔପଚାରିକ ବୈଠକ',
          caption: 'ପ୍ରାତିଷ୍ଠାନିକ ସଂଳାପ ଓ ନେତୃତ୍ୱ ସଂପୃକ୍ତି',
        },
        {
          src: '/images/ceremonial-gathering.png',
          alt: 'ଅଡିଟୋରିଅମରେ ଔପଚାରିକ ସଭା',
          caption: 'ସାମୁଦାୟିକ ନେତାଙ୍କ ସହ ଔପଚାରିକ ସଭା',
        },
        {
          src: '/images/folk-culture-night.png',
          alt: 'ଲୋକକଳାକାରଙ୍କ ସହ ସାଂସ୍କୃତିକ ଅନୁଷ୍ଠାନ',
          caption: 'ଲୋକସଂସ୍କୃତି ଓ ସାମୁଦାୟିକ ଉତ୍ସବ',
        },
        {
          src: '/images/community-women-night.png',
          alt: 'ମହିଳାଙ୍କ ସହ ତୃଣମୂଳ ସଂପୃକ୍ତି',
          caption: 'ମହିଳା ନେତୃତ୍ୱ ସହ ତୃଣମୂଳ ସଂପୃକ୍ତି',
        },
        {
          src: '/images/spiritual-engagement.png',
          alt: 'ଆଧ୍ୟାତ୍ମିକ ଓ ସାଂସ୍କୃତିକ ସଂପୃକ୍ତି',
          caption: 'ଆଧ୍ୟାତ୍ମିକ ଓ ସାଂସ୍କୃତିକ ସଂପୃକ୍ତି',
        },
      ],
    },""",
}

parts = text.split("    gallery: {")
if len(parts) != 5:
    raise SystemExit(f"expected 5 parts got {len(parts)}")

order = ["en", "bn", "hi", "or"]
out = parts[0]
for i, loc in enumerate(order):
    rest = parts[i + 1]
    end_marker = "\n    education:"
    idx = rest.find(end_marker)
    if idx < 0:
        raise SystemExit(f"no education after gallery {loc}")
    out += galleries[loc] + rest[idx:]

path.write_text(out, encoding="utf-8")
print("updated", path)
