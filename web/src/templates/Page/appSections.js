import mapToProps from "../../utils/mapToProps"
const appSections = {
  customTitle: {
    sectionFileName: "CustomTitle",
    mapFunc: mapToProps.mapCustomTitleToProps,
  },
  calloutBox: {
    sectionFileName: "CalloutBox",
    mapFunc: mapToProps.mapCalloutBoxToProps,
  },
  fileLink: {
    sectionFileName: "FileLink",
    mapFunc: mapToProps.mapFileLinkToProps,
  },
  listBanner: {
    sectionFileName: "BannerList",
    mapFunc: mapToProps.mapBannerListToProps,
  },
  blockImage: {
    sectionFileName: "BlockImage",
    mapFunc: mapToProps.mapBlockImageToProps,
  },
  contractorAccordion: {
    sectionFileName: "ContractorAccordion",
    mapFunc: mapToProps.mapContractorAccordionToProps,
  },
  banner: { sectionFileName: "Banner", mapFunc: mapToProps.mapBannerToProps },
  block: { sectionFileName: "Block", mapFunc: mapToProps.mapBlockToProps },
  blockButton: {
    sectionFileName: "BlockButton",
    mapFunc: mapToProps.mapBlockButtonToProps,
  },
  circleCTAList: {
    sectionFileName: "CircleCTASection",
    mapFunc: mapToProps.mapCircleCTASectionToProps,
  },
  imageLeftSection: {
    sectionFileName: "TwoColGrid",
    mapFunc: mapToProps.mapTwoColGridToProps,
  },
  pageHero: { sectionFileName: "Hero", mapFunc: mapToProps.mapHeroToProps },
  reviewSection: {
    sectionFileName: "ReviewSection",
    mapFunc: mapToProps.mapReviewSectionToProps,
  },
  simpleCTA: {
    sectionFileName: "SimpleCTA",
    mapFunc: mapToProps.mapSimpleCTAToProps,
  },
  staffList: {
    sectionFileName: "StaffList",
    mapFunc: mapToProps.mapStaffListToProps,
  },
  twoColumn: {
    sectionFileName: "TwoColumn",
    mapFunc: mapToProps.mapTwoColumnToProps,
  },
  vimeo: {
    sectionFileName: "VimeoSection",
    mapFunc: mapToProps.mapVimeoSectionToProps,
  },
  youtube: {
    sectionFileName: "YoutubeSection",
    mapFunc: mapToProps.mapYoutubeSectionToProps,
  },
  homePageText: {
    sectionFileName: "HomePageTextSection",
    mapFunc: mapToProps.mapHomePageTextSectionToProps,
  },
}

export default appSections
