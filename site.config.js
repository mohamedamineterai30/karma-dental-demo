// Client : Karma Dental Clinic (@karmadentalclinic_). Source : profil Instagram public, 12 nov 2026.
// "A CONFIRMER" = ma3louma ma l9inahach f profil, lazem tji men 3andhom.
globalThis.CLINIC = {
  demo: true,
  accessKey: "kdc-0635773d",
  style: "mono",
  lang: "fr",
  marquee: true, // bande tetmecha b smiyat les soins
  name: "Karma Dental Clinic",
  short: "K",
  specialty: { fr: "Clinique dentaire", ar: "عيادة أسنان" },
  city: { fr: "Hydra, Alger", ar: "حيدرة، الجزائر" },
  tagline: {
    fr: "Un sourire se construit. Étape par étape.",
    ar: "الابتسامة تُبنى. خطوة بخطوة.",
  },
  intro: {
    fr: "Implants, facettes, couronnes, blanchiment professionnel et orthodontie, par une équipe médicale qualifiée. Réservez en ligne, à Hydra.",
    ar: "زراعة، فينير، تيجان، تبييض احترافي وتقويم، مع فريق طبي مؤهل. احجز عبر الموقع، في حيدرة.",
  },
  needs: [
    { label: { fr: "Remplacer une dent", ar: "تعويض سن" }, service: "implant" },
    { label: { fr: "Refaire mon sourire", ar: "تجديد ابتسامتي" }, service: "facettes" },
    { label: { fr: "Aligner mes dents", ar: "تقويم أسناني" }, service: "odf" },
  ],
  text: {
    fr: { navCabinet: "La clinique" },
    ar: { navCabinet: "العيادة" },
  },
  doctor: {
    name: "Une équipe, pas un seul fauteuil",
    title: { fr: "Équipe médicale qualifiée en soins dentaires", ar: "فريق طبي مؤهل في علاج الأسنان" },
    bio: {
      fr: "Chez Karma, un cas complexe se traite à plusieurs : greffe de gencive, implants, couronnes, chaque étape est confiée au praticien qui la maîtrise. Des patients viennent de l'étranger pour se faire soigner à Hydra.",
      ar: "في كارما، الحالة المعقدة يعالجها أكثر من طبيب: ترقيع اللثة، الزراعة، التيجان، كل مرحلة عند المختص فيها. مرضى يأتون من الخارج للعلاج في حيدرة.",
    },
    photo: "", // A AJOUTER : photo de l'équipe, avec leur accord
  },
  phone: "0774080545",
  whatsapp: "213774080545", // A CONFIRMER : même numéro sur WhatsApp ?
  instagram: "karmadentalclinic_",
  address: { fr: "Hydra, Alger (adresse exacte à confirmer)", ar: "حيدرة، الجزائر (العنوان الدقيق للتأكيد)" },
  mapsUrl: "https://maps.app.goo.gl/jAE6yYrzPVWtsVkQ9", // lien Maps men bio ta3hom
  theme: { primary: "#0a0a0a", dark: "#0a0a0a", accent: "#ffffff" },

  // A CONFIRMER : horaires réels. 0 = dimanche ... 6 = samedi. [] = fermé.
  hours: {
    0: [["09:00", "12:30"], ["14:00", "18:00"]],
    1: [["09:00", "12:30"], ["14:00", "18:00"]],
    2: [["09:00", "12:30"], ["14:00", "18:00"]],
    3: [["09:00", "12:30"], ["14:00", "18:00"]],
    4: [["09:00", "12:30"], ["14:00", "18:00"]],
    5: [],
    6: [["09:00", "13:00"]],
  },
  slotMinutes: 30,
  daysAhead: 21,

  services: [
    { id: "implant", img: "assets/implant.jpg", name: { fr: "Implants dentaires", ar: "زراعة الأسنان" }, desc: { fr: "Remplacer une dent, durablement.", ar: "تعويض دائم للسن." } },
    { id: "facettes", img: "assets/facettes.jpg", name: { fr: "Facettes", ar: "فينير" }, desc: { fr: "Forme et teinte, refaites finement.", ar: "الشكل واللون، بدقة." } },
    { id: "couronnes", img: "assets/zircon.jpg", name: { fr: "Couronnes", ar: "تيجان" }, desc: { fr: "Protéger et reconstruire la dent.", ar: "حماية السن وإعادة بنائه." } },
    { id: "blanchiment", img: "assets/blanchiment.jpg", name: { fr: "Blanchiment pro", ar: "تبييض احترافي" }, desc: { fr: "Éclaircir, sous contrôle médical.", ar: "تفتيح اللون تحت إشراف طبي." } },
    { id: "odf", img: "assets/aligneur.jpg", name: { fr: "Orthodontie (ODF)", ar: "تقويم الأسنان" }, desc: { fr: "Aligner les dents, enfants et adultes.", ar: "تقويم للأطفال والكبار." } },
    { id: "consult", img: "assets/sourire.jpg", name: { fr: "Consultation", ar: "استشارة" }, desc: { fr: "Un examen et un plan clair.", ar: "فحص وخطة واضحة." } },
  ],

  points: [
    { fr: "Réservation en 30 secondes", ar: "حجز في 30 ثانية" },
    { fr: "Confirmation par WhatsApp", ar: "تأكيد عبر واتساب" },
    { fr: "Patients d'Algérie et de l'étranger", ar: "مرضى من الجزائر ومن الخارج" },
  ],
  proof: [],
  // Klamhom houma, men post ta3 "transformation" : "le traitement a été réalisé en plusieurs étapes"
  method: {
    title: { fr: "Un plan, des étapes", ar: "خطة ومراحل" },
    quote: {
      fr: "« Pour atteindre ce résultat, le traitement a été réalisé en plusieurs étapes. »",
      ar: "« للوصول إلى هذه النتيجة، تم العلاج على عدة مراحل. »",
    },
    steps: [
      { t: { fr: "Bilan", ar: "تقييم" }, d: { fr: "Examen complet, avant toute décision.", ar: "فحص شامل قبل أي قرار." } },
      { t: { fr: "Fondations", ar: "الأساس" }, d: { fr: "Gencives et os d'abord : greffe si nécessaire.", ar: "اللثة والعظم أولا: ترقيع عند الحاجة." } },
      { t: { fr: "Reconstruction", ar: "إعادة البناء" }, d: { fr: "Implants, couronnes ou facettes.", ar: "زراعة، تيجان أو فينير." } },
      { t: { fr: "Suivi", ar: "متابعة" }, d: { fr: "Des contrôles pour que ça dure.", ar: "مراقبة ليدوم العلاج." } },
    ],
  },
  gallery: [], // A AJOUTER : leurs avant/après, avec leur accord
  faq: [
    {
      q: { fr: "Je viens de l'étranger, comment faire ?", ar: "أنا من الخارج، كيف أفعل؟" },
      a: { fr: "Réservez une consultation et écrivez-nous sur WhatsApp : nous regroupons vos séances sur votre séjour.", ar: "احجز استشارة وراسلنا على واتساب: نجمع جلساتك خلال إقامتك." },
    },
    {
      q: { fr: "Faut-il payer pour réserver ?", ar: "هل يجب الدفع للحجز؟" },
      a: { fr: "Non. La réservation est gratuite, le règlement se fait à la clinique.", ar: "لا. الحجز مجاني، والدفع في العيادة." },
    },
    {
      q: { fr: "Comment annuler ou changer l'heure ?", ar: "كيف ألغي أو أغيّر الموعد؟" },
      a: { fr: "Écrivez-nous sur WhatsApp ou appelez, au moins 24 heures avant.", ar: "راسلنا على واتساب أو اتصل، 24 ساعة على الأقل قبل الموعد." },
    },
  ],
};
