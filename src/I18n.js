import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "title1": "Saudi Specialized Center for International Arbitration",
      "title": "Saudi Specialized Center for International Arbitration (SSCIA)",
      "welcome": "We provide specialized arbitration services with high efficiency in accordance with international standards. The Center’s rulings on international trade matters are issued in alignment with the UNCITRAL Model Law on International Commercial Arbitration, in compliance with international commercial legal provisions, the International Bar Association’s rules, and the Center’s own regulations.",
      "services":"Our services",
      "WhyAreWe":"Why Choose Us",
      "contact":"Contact us",
      "vision":"Our vision",
      // Add more translations here...
      
      "article1":"Management of domestic and international arbitration cases, along with alternative dispute resolution (ADR) mechanisms between parties.",
      "article2":"Provision of institutional arbitration services in compliance with the Center’s rules.",
      "article3":"Guiding users on the application of these rules, as well as the drafting, use, and amendment of model clauses proposed by the Center.",
      "article4":"Publication of guidelines, research, and statistical data to serve the legal and commercial communities.",
      "article5":"Organization of training programs and workshops in collaboration with third-party institutions, organizations, and entities to prepare specialized international arbitrators.",
      // Add more translations here...
      "article6":"The Center is distinguished as the most cost-effective provider of mediation and arbitration administration services worldwide.",
      "article7":"Recognized as the fastest in dispute resolution, the Center aims to conclude cases within an average timeframe of 45 days from the date of arbitration request submission, facilitated by its proprietary procedural rules.",
      "article8":"The Center meticulously selects specialized arbitrators with extensive expertise in fields relevant to the dispute, ensuring both efficacy and professionalism.",
      "article9":"The Center upholds the highest standards of professional confidentiality in international dispute resolution, guaranteeing the protection of all case-related details.",
      // Add more translations here...
      
      "formInput1":"Full Name",
      "formInput2":"Phone Number",
      "formInput3":"Email Address",
      "formInput4":"Write your letter to request a consultation regarding arbitration or to start managing an arbitration dispute or request a copy of the center's rules",
      "formbtn":"Submit Message", 
      // Add more translations here...
      
      "article10":"We aspire to become the leading international center in arbitration and mediation by delivering high-quality services that adhere to global standards, ensuring speed, confidentiality, and professionalism in every resolution.",
      // Add more translations here...
      "rights1":"All rights reserved © ",
      "rights2":"Saudi Specialized Center for arbitration",
      "formInpu":"",
      // Add more translations here... for table
      // here
      "tableTitle":"List of some arbitration centres conducting arbitration proceedings under the UNCITRAL arbitration rules  :",
      "No":"No.",
      "Country":"Country ",
      "CenterName":"Center Name ",
      "country1":"Australia ",
      "country2":"Spain ",
      "country3":"UAE",
      "country4":"Italy",
      "country5":"KSA  ",
      "country6":"Bahrain",
      "country7":"Brazil",
      "country8":"Portugal",
      "country9":"Peru",
      "country10":"Switzerland",
      "country11":"France",
      "country12":"Canada",
      "country13":"United States",
      "country14":"United Kingdom",
      // Add more translations here... for table
      "table1":"Australian Centre for International Commercial Arbitration (ACICA)",
      "table2":"Arbitration Court of the Official Chamber of Commerce and Industry of Madrid",
      "table3":"Dubai International Arbitration Centre (DIAC)",
      "table4":"Milan Chamber of Arbitration (Camera Arbitrale di Milano)",
      "table5":" Saudi Specialized Center for International Arbitration (SSCIA)",
      "table6":"Bahrain Chamber for Dispute Resolution (AAA-BCDR)",
      "table7":"Arbitration and Mediation Center of the Brazil-Canada Chamber of Commerce (CCBC)",
      "table8":"Commercial Arbitration Center of the Portuguese Chamber of Commerce and Industry",
      "table9":"Arbitration Center of the Lima Chamber of Commerce (CCL)",
      "table10":"Swiss Chambers’ Arbitration Institution (SCAI)",
      "table11":"International Chamber of Commerce (ICC) International Court of Arbitration",
      "table12":"British Columbia International Commercial Arbitration Centre (BCICAC)",
      "table13":"International Institute for Conflict Prevention & Resolution (CPR)",
      "table14":"London Court of International Arbitration (LCIA)",

    }
  },
  ar: {
    translation: {
      "title1": "المركز المتخصص السعودي للتحكيم",
      "title": "المركز المتخصص السعودي للتحكيم",
      "welcome": "نقدم خدمات التحكيم المتخصصة بكفاءة عالية وفقاً للمعايير الدولية، تصدر أحكام المركز بشأن التجارة الدولية بما يتماشى مع قانون الأونيسترال النموذجي للتحكيم التجاري، ووفقًا للأحكام القانونية التجارية الدولية وقواعد نقابة المحامين الدولية و قواعد المركز الخاصة",
      "services":"خدماتنا",
      "WhyAreWe":"لماذا نحن",
      "contact":"اتصل بنا",
      "vision":"رؤيتنا",
      // Add more translations here...
      
      "article1":"إدارة دعاوى التحكيم المحلية والدولية بالإضافة إلى الوسائل البديلة لحسم المنازعات بين الأطراف.",
      "article2":"تقديم خدمات التحكيم المؤسسي وفقا لقواعد المركز.",
      "article3":"إرشاد المستخدمين حول تطبيق هذه القواعد وحول صياغة واستخدام وتعديل الشروط النموذجية التي يقترحها المركز.",
      "article4":"نشر الإرشادات والأبحاث والإحصائيات التي تخدم المجتمعين القانوني والتجاري.",
      "article5":"تنظيم برامج تدريبية وورش عمل بالتعاون مع الغير من المؤسسات والمنظمات والهيئات لإعداد المحكمين الدوليين المتخصصين. ",
      // Add more translations here...
      "article6":"يتميز المركز بكونه الأقل في رسوم الوساطة و إدارة التحكيم على مستوى العالم.",
      "article7":"يعتبر المركز الأسرع في الفصل في النزاعات حيث يسعى المركز إلى إنهاء النزاعات في غضون مُتوسط زمني لا يتجاوز 45 يومًا من تاريخ تقديم طلب إدارة التحكيم بناء على قواعده الخاصة التي تساعده على ذلك.",
      "article8":"يحرص المركز على اختيار محكمين مُتخصصين ذوي خبرة عالية في المجالات ذات الصلة بموضوع النزاع، لضمان الفعالية والاحترافية.",
      "article9":"يتمتع المركز بأعلى معايير السِّرية المهنية في مجال فض المنازعات تحكيميًا على المستوى الدولي، بما يضمن حماية كافة التفاصيل المرتبطة بالقضايا.",
      // Add more translations here...
      
      "formInput1":"الاسم بالكامل",
      "formInput2":"رقم الجوال",
      "formInput3":"البريد الالكتروني",
      "formInput4":" اكتب رسالتك لطلب استشاره بخصوص التحكيم او للبدء في إدارة نزاع تحكيمي او طلب نسخة عن قواعد المركز",
      "formbtn":"إرسال الرسالة",
      // Add more tra+nslations here...
      
      "article10":"نسعى لأن نكون المركز الرائد في مجال التحكيم والوساطة على المستوى الدولي، من خلال تقديم خدمات عالية الجودة تتوافق مع المعايير الدولية بكل سرعة و سرية و إحترافية.",
      // Add more tra+nslations here...
      "rights1":"جميع الحقوق محفوظة ©",
      "rights2":"المتخصص السعودي للتحكيم",
      "formInpu":"",
      // Add more translations here... for table
      // here
      "tableTitle":"قائمة ببعض مراكز التحكيم التي تدير إجراءات التحكيم بمقتضى قواعد الأونسيترال للتحكيم  : ",
      "No":"م ",
      "Country":"البلد ",
      "CenterName":"إسم المركز ",

      "country1":"استراليا ",
      "country2":"إسبانيا ",
      "country3":"الإمارات",
      "country4":"إيطاليا",
      "country5":"المملكة العربية السعودية",
      "country6":"البحرين",
      "country7":"البرازيل",
      "country8":"البرتغال",
      "country9":"بيرو",
      "country10":"سويسرا",
      "country11":"فرنسا",
      "country12":"كندا",
      "country13":"الولايات المتحدة الأمريكية",
      "country14":"المملكة المتحدة",
      // Add more translations here... for table
      "table1":"المركز الأسترالي للتحكيم التجاري الدولي‎ ACICA",
      "table2":"هئة التحكيم التابعة للغرفة الرسمية للتجارة والصناعة في مدريد",
      "table3":"مركز دبي للتحكيم الدولي‎ DIAC",
      "table4":"غرفة التحكيم في ميلانو التابعة لغرفة ميلانو التجارية",
      "table5":"المركز المتخصص السعودي للتحكيم",
      "table6":"غرفة البحرين لتسوية المنازعات‎ AAA-BCDR",
      "table7":"مركز التحكيم والوساطة التابع لغرفة التجارة المشتركة بين البرازيل وكندا CCBC",
      "table8":"مركز التحكيم التجاري التابع لغرفة التجارة والصناعة البرتغالية",
      "table9":" مركز التحكيم التابع لغرفة التجارة في ليما CCL",
      "table10":"مؤسسة التحكيم التابعة للغرف السويسرية (SCAI)",
      "table11":"غرفة التجارة الدولية، التابعة للهيئة الدولية للتحكيم (ICC)",
      "table12":"مركز التحكيم التجاري الدولي في كولومبيا البريطانية (BCICAC)",
      "table13":"المعهد الدولي لمنع النزاعات وحلها (CPR)",
      "table14":"مركز لندن للتحكيم التجاري LCIA",
    }
  }
};

// استرجاع اللغة المحفوظة أو تعيين "en" كافتراضية
const savedLang = localStorage.getItem("lang") || "ar";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang, // ✅ ضبط اللغة هنا مباشرة
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false
    }
  });
  // تحديث اتجاه الصفحة عند تحميل اللغة
document.documentElement.lang = savedLang;
document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";

export default i18n;
