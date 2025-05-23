import {
    BrewtopiaAbout,
    BrewtopiaChatbot,
    BrewtopiaFavorite,
    BrewtopiaHome,
    BrewtopiaProfile,
    BrewtopiaScanner,
    BrewtopiaSplash,
    Firebase,
    KedairekaCalculator,
    KedairekaFaq,
    KedairekaFormCreate,
    KedairekaGraph,
    KedairekaHome,
    KedairekaLanding,
    KedairekaLogin,
    KedairekaMap,
    KedairekaTable,
    Kotlin,
    Mapbox,
    NextJS,
    TourGuideChosenPlaces,
    TourGuideDetail,
    TourGuideHome,
    TourGuideMinimap,
    TourGuideNavigation,
    TourGuidePlaceCategory,
    TourGuidePlaceDetail,
    TourGuidePlaces,
    TourGuidePreviewMap,
    TourGuideSearch,
    Tailwind,
    TrackitHistory,
    TrackitLogin,
    TrackitManagement,
    TrackitMap,
    Ts,
    VueJS,
    Dicoding1,
    Dicoding2,
    Dicoding3,
    Dicoding4,
    Dicoding5,
    Dicoding6,
    Dicoding7,
    Dicoding8,
    Dicoding9,
    DicodingLast,
    Bangkit,
    BangkitScores,
    HtmlCssCertificate,
    CertiportScores,
    BerijalanCertificate,
    BerijalanScores,
    DCACertificate,
    MyDpaHome,
    MyDpaEvent,
    MyDpaFilter,
    Angular,
    Ionic
} from '@/assets/images';

export const listProject = [
    {
        title: "Kedaireka (ISAI)",
        subtitle: "MSIB FTI UKDW - Beehive Drones",
        description: "ISAI (Intelligent System Aerial Imaging) is a web app that helps the community to monitor carbon emissions in plantations and rice fields.",
        images: [
            KedairekaLanding,
            KedairekaHome,
            KedairekaMap,
            KedairekaGraph,
            KedairekaCalculator,
            KedairekaFaq,
            KedairekaLogin,
            KedairekaTable,
            KedairekaFormCreate,
        ],
        tech: [
            { src: VueJS, label: "Vue.js" },
            { src: Mapbox, label: "Mapbox" },
            { src: Firebase, label: "Firebase" },
        ],
        url: "http://kedaireka3.fti.ukdw.ac.id/",
        github: "",
        privateRepo: true,
        type: "web",
        platform: ["Web"],
    },
    {
        title: "Brewtopia",
        subtitle: "MSIB - Bangkit Academy",
        description: "Brewtopia is a mobile app that helps users to know anything about coffee. This is the final project of Bangkit Academy. In this app we provide camera feature to help user know whether the coffee beans they have are good or not. We also provide chatbot feature to help user to get information about coffee.",
        images: [
            BrewtopiaSplash,
            BrewtopiaHome,
            BrewtopiaFavorite,
            BrewtopiaChatbot,
            BrewtopiaScanner,
            BrewtopiaProfile,
            BrewtopiaAbout
        ],
        tech: [
            { src: Kotlin, label: "Kotlin" },
        ],
        url: "",
        github: "",
        privateRepo: true,
        type: "mobile",
        platform: ["Android"],
    },
    {
        title: "Trackit",
        subtitle: "IT Bootcamp - Berijalan",
        description: "Trackit is a web application that helps the community to track credited vehicles.",
        images: [
            TrackitLogin,
            TrackitMap,
            TrackitManagement,
            TrackitHistory,
        ],
        tech: [
            { src: NextJS, label: "Next.js" },
            { src: Mapbox, label: "Mapbox" },
            { src: Tailwind, label: "Tailwind CSS" },
            { src: Ts, label: "TypeScript" },
        ],
        url: "https://trackit.berijalan.co.id/",
        github: "",
        privateRepo: true,
        type: "web",
        platform: ["Web"],
    },
    {
        title: "Sipasar Tour Guide",
        subtitle: "Thesis - UKDW Lecturer Project (Srikandi)",
        description: "Sipasar Tour Guide is an android based application that helps tourists to know the places that are worth visiting in Yogyakarta especially around the traditional markets. In developing this app as my thesis, I'm only focusing on the functional of the app, not the UI/UX.",
        images: [
            TourGuideHome,
            TourGuideSearch,
            TourGuideDetail,
            TourGuideMinimap,
            TourGuidePlaceCategory,
            TourGuidePlaces,
            TourGuidePlaceDetail,
            TourGuideChosenPlaces,
            TourGuidePreviewMap,
            TourGuideNavigation,
        ],
        tech: [
            { src: Kotlin, label: "Kotlin" },
            { src: Mapbox, label: "Mapbox" }
        ],
        url: "",
        github: "",
        privateRepo: true,
        type: "mobile",
        platform: ["Android"],
    },
    {
        title: "Dana Pensiun Astra (myDpa)",
        subtitle: "Developing application features",
        description: "The Dana Pensiun Astra application, known as myDPA, is the official app developed by Dana Pensiun Astra to help participants easily access information and services related to their pension program.",
        images: [
            MyDpaHome,
            MyDpaEvent,
            MyDpaFilter,
        ],
        tech: [
            { src: Angular, label: "Angular" },
            { src: Ionic, label: "Ionic" }
        ],
        url: "https://new.dapenastra.com/home",
        github: "",
        privateRepo: true,
        type: "mobile",
        platform: ["Android", "IOS", "Web"],
    }
].reverse();

export const listCertificates = [
    {
        community: "Dicoding (Mobile Development)",
        certificates: [
            {
                title: "Memulai Pemrograman Dengan Kotlin",
                image: Dicoding1,
            },
            {
                title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
                image: Dicoding2
            },
            {
                title: "Pengenalan ke Logika Pemrograman",
                image: Dicoding3
            },
            {
                title: "Belajar Membuat Aplikasi Android untuk Pemula",
                image: Dicoding4
            },
            {
                title: "Belajar Dasar Git dengan GitHub",
                image: Dicoding5
            },
            {
                title: "Belajar Fundamental Aplikasi Android",
                image: Dicoding6
            },
            {
                title: "Belajar Prinsip Pemrograman Solid",
                image: Dicoding7
            },
            {
                title: "Belajar Membuat Aplikasi Android Intermediate",
                image: Dicoding8
            },
            {
                title: "Belajar Dasar UX Design",
                image: Dicoding9
            },
            {
                title: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
                image: DicodingLast
            }
        ]
    },
    {
        community: "Bangkit Academy",
        certificates: [
            {
                title: "Bangkit Academy Certificate of Completion",
                image: Bangkit
            },
            {
                title: "Scores",
                image: BangkitScores
            }
        ]
    },
    {
        community: "Certiport (HTML & CSS)",
        certificates: [
            {
                title: "HTML & CSS Certificate",
                image: HtmlCssCertificate
            },
            {
                title: "Scores",
                image: CertiportScores
            }
        ]
    },
    {
        community: "Berijalan (IT Bootcamp)",
        certificates: [
            {
                title: "Bootcamp Certificate",
                image: BerijalanCertificate
            },
            {
                title: "Scores",
                image: BerijalanScores
            }
        ]
    },
    {
        community: "Dev.id x Bangkit Academy",
        certificates: [
            {
                title: "DCA Certificate",
                image: DCACertificate
            }
        ]
    }
].reverse()